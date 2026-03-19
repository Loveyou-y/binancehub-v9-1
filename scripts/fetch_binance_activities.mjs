#!/usr/bin/env node
import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const OUT_FILE = new URL('../data.json', import.meta.url);
const API = 'https://www.binance.com/bapi/composite/v1/public/cms/article/list/query';
const PAGE_SIZE = 20;
const MAX_PAGES = 8;

const X_ACCOUNTS = [
  { name: 'binancezh', url: 'https://x.com/binancezh' },
  { name: 'binance', url: 'https://x.com/binance' },
  { name: 'BinanceWallet', url: 'https://x.com/BinanceWallet' }
];

const CURATED_ITEMS = [
  { title: 'Block Street (BSB) 交易大赛：赢取价值 10 万美元奖励', url: 'https://www.binance.com/en/support/announcement/detail/f94b496c858448c6ac9847b306babbfd', cat: 'trade' },
  { title: 'HODLer 空投：Fabric Protocol (ROBO)', url: 'https://www.binance.com/en/support/announcement/detail/20ac487755434d559568552e9812cbf0', cat: 'launch' },
  { title: '保本赚币 · Simple Earn', url: 'https://www.binance.com/en/earn/simple-earn', cat: 'earn' },
  { title: '进阶赚币 · Advanced Earn', url: 'https://www.binance.com/en/earn/advanced-earn', cat: 'earn' },
  { title: '链上赚币 · On-chain Yields', url: 'https://www.binance.com/zh-CN/earn/onchain-yields', cat: 'newbie' },
  { title: '邀请赚币 · Refer2Earn USDC', url: 'https://www.binance.com/zh-CN/referral/earn-together/refer2earn-usdc', cat: 'welfare' },
  { title: '学习赚币 · Learn & Earn', url: 'https://www.binance.com/zh-CN/academy/learn-and-earn?utm_source=BinanceAcademy&utm_medium=NavBar', cat: 'square' },
  { title: '龙虾大赛 · BinanceZH X 活动', url: 'https://x.com/binancezh/status/2029089532436726036?s=20', cat: 'social' },
  { title: '币安钱包链上永续合约里程碑挑战赛', url: 'https://web3.binance.com/zh-CN/perpetuals/milestone-tc/szn3?chain=bsc', cat: 'newbie' }
];

const CURATED_FALLBACK = {
  'f94b496c858448c6ac9847b306babbfd': {
    subtitle: '参与 Block Street (BSB) 交易，赢取价值 10 万美元奖励',
    steps: ['打开活动详情并报名', '确认交易赛规则与计分口径', '在活动期内完成交易任务', '查看排名与奖励发放']
  },
  '20ac487755434d559568552e9812cbf0': {
    subtitle: 'HODLer 空投推出 ROBO，通过回溯式 BNB 订阅参与',
    steps: ['确认 BNB 计入快照范围', '查看回溯快照规则', '等待系统分配空投', '上线后查看到账与交易']
  },
  'simple-earn': {
    subtitle: '保本赚币产品集合：活期/定期可选',
    steps: ['进入产品页选择币种', '确认年化和期限', '申购并持有', '查看每日收益']
  },
  'advanced-earn': {
    subtitle: '进阶赚币：结构化产品，收益更高风险也更高',
    steps: ['阅读产品说明', '选择目标价格和周期', '确认风险后申购', '到期查看结算结果']
  },
  'onchain-yields': {
    subtitle: '链上赚币专区：通过 Web3 钱包参与链上收益',
    steps: ['打开链上赚币页面', '选择链和产品', '确认风险与收益', '完成参与并追踪结果']
  }
};

const uniqBy = (arr, keyFn) => {
  const s = new Set();
  return arr.filter((x) => {
    const k = keyFn(x);
    if (s.has(k)) return false;
    s.add(k);
    return true;
  });
};

function inferCategory(text = '') {
  const t = text.toLowerCase();
  if (/launchpool|megadrop|airdrop|hodler/.test(t)) return 'launch';
  if (/earn|simple earn|staking|apy|apr|dual|onchain/.test(t)) return 'earn';
  if (/trade|futures|spot|competition|tournament|perpetual|margin/.test(t)) return 'trade';
  if (/square|wotd|learn|academy|quiz/.test(t)) return 'square';
  if (/wallet|web3/.test(t)) return 'newbie';
  if (/twitter|x\.com|social|discord|telegram/.test(t)) return 'social';
  return 'welfare';
}

const iconFor = (cat) => ({ launch: '🪂', earn: '💰', trade: '📈', square: '📚', social: '📣', newbie: '👛', welfare: '🎁' }[cat] || '⭐');
const icoBg = (cat) => ({ launch: 'var(--gs)', earn: 'var(--grs)', trade: 'var(--bs)', square: 'var(--ps)', social: 'var(--cs)', newbie: 'var(--os)', welfare: 'var(--os)' }[cat] || 'var(--gs)');
const slugId = (url) => Buffer.from(url).toString('base64').replace(/[^a-z0-9]/gi, '').slice(0, 20);

function fetchPage(pageNo) {
  const url = `${API}?type=1&pageNo=${pageNo}&pageSize=${PAGE_SIZE}`;
  const raw = execFileSync('curl', ['-sL', '--compressed', url], { encoding: 'utf8' });
  const data = JSON.parse(raw || '{}');
  if (data?.code !== '000000') throw new Error(`API code ${data?.code || 'unknown'}`);
  return (data?.data?.catalogs || []).flatMap((c) => c.articles || []);
}

function fetchReadable(url) {
  try {
    const mirror = `https://r.jina.ai/http://${url.replace(/^https?:\/\//, '')}`;
    return execFileSync('curl', ['-sL', '--compressed', mirror], { encoding: 'utf8', maxBuffer: 12 * 1024 * 1024 });
  } catch {
    return '';
  }
}

function extractStructuredFromReadable(readable = '', fallbackTitle = '') {
  const clean = readable.replace(/\r/g, '');
  const lower = clean.toLowerCase();
  if (!clean || /security check|max challenge attempts exceeded|cloudflare|verify that you are human/.test(lower)) {
    return null;
  }

  const lines = clean.split('\n').map((l) => l.trim()).filter(Boolean);
  const useful = lines
    .filter((l) => l.length >= 18 && l.length <= 180)
    .filter((l) => !/^https?:\/\//i.test(l))
    .filter((l) => !/^title\s*:/i.test(l));

  if (!useful.length) return null;

  const subtitle = useful[0] || fallbackTitle;
  const stepHints = useful.filter((l) => /participate|complete|task|stake|subscribe|reward|snapshot|报名|参与|完成|任务|质押|申购|奖励|快照|领取|步骤/i.test(l));
  const steps = uniqBy(stepHints, (x) => x).slice(0, 4);
  const pickedSteps = (steps.length ? steps : useful.slice(1, 5)).map((s) => s.length > 80 ? `${s.slice(0, 79)}…` : s);

  const rewardMatch = clean.match(/\$\s?[\d,]+(?:\.\d+)?\s?(?:USDT|USD)?|\b[\d,]+\s?(?:USDT|Points|pts|BTC|BNB)\b/i);
  const reward = rewardMatch ? rewardMatch[0].replace(/\s+/g, ' ') : null;

  return { subtitle, steps: pickedSteps, reward };
}

function toCardBase({ title, url, cat, subtitle, steps, reward, source = '自动抓取' }) {
  return {
    id: `${source === '重点活动' ? 'cur' : 'auto'}_${slugId(url)}`,
    code: '',
    cat,
    emoji: iconFor(cat),
    title: title.length > 60 ? `${title.slice(0, 59)}…` : title,
    subtitle: subtitle || '自动读取官方链接内容',
    tags: [source, '官方链接解析', cat],
    ico: icoBg(cat),
    deadlineSoon: false,
    deadline: source === '重点活动' ? '重点关注' : '公告更新',
    nums: [
      { l: '来源', v: source === '重点活动' ? '重点活动池' : 'Binance BAPI', c: 'var(--gold)' },
      reward ? { l: '奖励线索', v: reward } : { l: '类型', v: cat }
    ],
    risk: /futures|margin|杠杆|永续|合约|dual/i.test(`${title} ${subtitle}`) ? '⚠️ 含风险产品，请先确认规则与风险承受能力' : null,
    subscribed: source === '重点活动',
    drawer: {
      tags: [source, 'Binance'],
      details: [
        { i: '📰', l: '活动标题', v: title },
        { i: '🔗', l: '官方链接', link: url, lv: '前往原文' }
      ],
      steps: (steps && steps.length) ? steps : ['打开原文页面', '确认参与资格', '确认活动周期', '完成参与动作'],
      rules: ['具体资格/时间/奖励请以官方页面为准'],
      est: '5-10 分钟'
    }
  };
}

function toCardFromArticle(article) {
  const title = article.title || 'Binance Activity';
  const url = `https://www.binance.com/en/support/announcement/detail/${article.code}`;
  const cat = inferCategory(title);
  return toCardBase({ title, url, cat, subtitle: `自动抓取 · ${new Date(article.releaseDate || Date.now()).toISOString().slice(0, 10)}`, source: '自动抓取' });
}

function toCardFromX(item) {
  return toCardBase({
    title: item.title,
    url: item.url,
    cat: 'social',
    subtitle: item.subtitle || `来自 @${item.account} 的社媒活动线索`,
    steps: ['打开原推文', '按要求完成互动', '等待官方开奖/发放'],
    source: 'X活动'
  });
}

function fetchXPosts() {
  const out = [];
  for (const acc of X_ACCOUNTS) {
    try {
      const mirror = `https://r.jina.ai/http://${acc.url.replace(/^https?:\/\//, '')}`;
      const raw = execFileSync('curl', ['-sL', '--compressed', mirror], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
      const urls = [...new Set((raw.match(/https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+/g) || []).slice(0, 12))];
      for (const u of urls) out.push({ account: acc.name, url: u, title: `${acc.name} 最新活动推文：${u.split('/').pop()}` });
    } catch {}
  }
  return out;
}

function pickCuratedFallback(url) {
  const key = Object.keys(CURATED_FALLBACK).find((k) => url.includes(k));
  return key ? CURATED_FALLBACK[key] : null;
}

function toCardFromCurated(item) {
  const cat = item.cat || inferCategory(`${item.title} ${item.url}`);
  const readable = fetchReadable(item.url);
  const ext = extractStructuredFromReadable(readable, item.title);
  const fb = pickCuratedFallback(item.url);

  return toCardBase({
    title: item.title,
    url: item.url,
    cat,
    subtitle: (ext && ext.subtitle) || (fb && fb.subtitle) || item.subtitle || '重点活动',
    steps: (ext && ext.steps && ext.steps.length) ? ext.steps : (fb && fb.steps),
    reward: (ext && ext.reward) || null,
    source: '重点活动'
  });
}

async function main() {
  const articles = [];
  for (let p = 1; p <= MAX_PAGES; p++) {
    try { articles.push(...fetchPage(p)); } catch (e) { console.warn(`[warn] page ${p} failed:`, e.message); }
  }

  const autoCards = uniqBy(articles, (x) => x.code || x.id)
    .filter((x) => x.code)
    .map(toCardFromArticle)
    .slice(0, 320);

  const curatedCards = CURATED_ITEMS.map(toCardFromCurated);
  const xCards = fetchXPosts().map(toCardFromX);

  const merged = [...curatedCards, ...xCards, ...autoCards];
  const deduped = uniqBy(merged, (x) => (x.drawer?.details?.find((d) => d.link)?.link || x.id));

  await fs.writeFile(OUT_FILE, JSON.stringify(deduped, null, 2), 'utf8');
  console.log(`[ok] wrote ${deduped.length} cards to data.json (curated=${curatedCards.length}, x=${xCards.length}, auto=${autoCards.length})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
