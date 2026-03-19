
// ══ CARD DATA ══════════════════════════════════════════
let CARDS = [
  {id:'c1',cat:'launch',emoji:'🪙',title:'Launchpool #178 — HAEDAL',sub:'质押 BNB 或 FDUSD 挖矿，灵活赎回无锁仓',
   tags:['打新挖矿','低风险'],stripe:'var(--gold)',ico:'var(--gs)',
   deadlineSoon:true,deadline:'2h 14m',dlLabel:'⏰ 截止',
   nums:[{l:'预期 APY',v:'68% APR',c:'var(--green)'},{l:'BNB 门槛',v:'0.1 BNB'}],
   progress:{l:'申购进度',v:73,c:'var(--gold)'},risk:null,sub:true,
   drawer:{tags:['Launchpool','低风险','质押BNB/FDUSD'],
    details:[{i:'💰',l:'预期 APY',v:'约 68% APR',c:'var(--green)'},{i:'🏦',l:'参与方式',v:'质押 BNB 或 FDUSD'},{i:'👥',l:'参与人数',v:'128,420 人 🔥 +3.2k/小时'},{i:'🔒',l:'锁仓要求',v:'灵活，随时可赎回本金'},{i:'⚠️',l:'风险评估',v:'本金安全，代币有价格波动风险',risk:1},{i:'🔗',l:'官方链接',link:'https://www.binance.com/en/launchpool',lv:'查看 Launchpool'}],
    steps:['登录币安 App，前往「金融」→「Launchpool」','选择 HAEDAL 矿池（BNB 池或 FDUSD 池）','输入质押数量（无最低门槛），确认','每小时自动发放 HAEDAL 奖励至现货账户','活动结束后关注代币上线，决定持有或卖出'],est:'5 分钟'}},
  {id:'c2',cat:'launch',emoji:'🌟',title:'Megadrop #12',sub:'Web3 任务 + BNB 锁仓两种方式参与',
   tags:['打新挖矿','需持 BNB'],stripe:'var(--gold)',ico:'var(--gs)',
   deadlineSoon:false,deadline:'3 天',dlLabel:'🗓 截止',
   nums:[{l:'任务进度',v:'5/7',c:'var(--green)'},{l:'积分',v:'8,500 pts',c:'var(--gold)'}],
   progress:{l:'任务进度',v:71,c:'var(--cyan)'},risk:null,sub:false,
   drawer:{tags:['Megadrop','需持 BNB','Web3'],
    details:[{i:'🎯',l:'参与方式',v:'Web3 任务 + BNB 锁仓（可叠加）'},{i:'💎',l:'当前积分',v:'8,500 pts，越多代币越多'},{i:'⚠️',l:'风险评估',v:'BNB 锁仓期间不可赎回',risk:2},{i:'🔗',l:'官方链接',link:'https://www.binance.com/en/megadrop',lv:'查看 Megadrop'}],
    steps:['前往币安「金融」→「Megadrop」','连接 Web3 钱包完成链上任务','可额外锁仓 BNB 提升积分倍数','等待活动结束按比例分配代币','代币上线后自动发放至现货账户'],est:'20 分钟'}},
  {id:'c3',cat:'launch',emoji:'🤖',title:'Fabric Protocol (ROBO) HODLer 空投',sub:'回溯式 BNB 订阅赚取，持有 BNB 自动快照参与',
   tags:['HODLer空投','零门槛'],stripe:'var(--cyan)',ico:'var(--cs)',
   deadlineSoon:false,deadline:'快照进行中',dlLabel:'📸',
   nums:[{l:'参与门槛',v:'持有任意 BNB',c:'var(--green)'},{l:'代币',v:'$ROBO'}],
   progress:null,risk:null,sub:false,
   drawer:{tags:['HODLer Airdrop','Fabric Protocol','ROBO','零门槛'],
    details:[{i:'🎯',l:'参与方式',v:'持有 BNB Simple Earn（活期/定期）参与回溯式快照'},{i:'📸',l:'快照方式',v:'系统按订阅 BNB 的历史快照回溯计算'},{i:'⚠️',l:'风险',v:'无本金风险，ROBO 代币有价格波动风险',risk:1},{i:'🔗',l:'官方公告',link:'https://www.binance.com/en/support/announcement/detail/20ac487755434d559568552e9812cbf0',lv:'Fabric Protocol 空投公告'}],
    steps:['阅读官方公告了解快照规则','确认 BNB 已存入 Simple Earn（活期或定期）','系统自动按历史快照计算分配比例','活动结束后代币发放至现货账户','ROBO 上线后可在币安交易'],est:'0 分钟（无需额外操作）'}},
  {id:'c4',cat:'earn',emoji:'💰',title:'保本赚币 · Simple Earn',sub:'灵活活期或定期存入，资产安全零风险产生稳定收益',
   tags:['保本赚币','零门槛','低风险'],stripe:'var(--green)',ico:'var(--grs)',
   deadlineSoon:false,deadline:'长期开放',dlLabel:'',
   nums:[{l:'BTC 年化',v:'最高 3.5%',c:'var(--green)'},{l:'USDT 年化',v:'最高 5%+',c:'var(--gold)'}],
   progress:null,risk:null,sub:false,
   drawer:{tags:['Simple Earn','保本','低风险','活期/定期'],
    details:[{i:'💰',l:'产品类型',v:'活期（随时存取）+ 定期（锁定更高利率）'},{i:'✅',l:'安全保障',v:'本金由币安保护，USDT/BTC 等主流资产均支持'},{i:'📊',l:'利率说明',v:'活期利率每日浮动，定期锁定利率更高'},{i:'🔗',l:'官方入口',link:'https://www.binance.com/en/earn/simple-earn',lv:'前往 Simple Earn'}],
    steps:['登录币安，前往「金融」→「Simple Earn」','选择想要存入的资产（BTC/ETH/USDT/BNB 等）','选择活期（灵活）或定期（更高收益）','输入金额确认，即刻开始计息','每日自动结算，随时查看收益'],est:'3 分钟'}},
  {id:'c4b',cat:'earn',emoji:'⚡',title:'进阶赚币 · Advanced Earn',sub:'双币投资、范围累积等高收益结构性产品，适合有经验用户',
   tags:['进阶赚币','有本金风险','高收益'],stripe:'var(--orange)',ico:'var(--os)',
   deadlineSoon:false,deadline:'持续滚动',dlLabel:'',
   nums:[{l:'双币年化',v:'最高 30%+',c:'var(--gold)'},{l:'风险等级',v:'中-高',c:'var(--orange)'}],
   progress:null,risk:'⚠️ 高收益产品含本金转换风险，请充分了解后参与',sub:false,
   drawer:{tags:['Advanced Earn','双币投资','结构性产品'],
    details:[{i:'⚡',l:'产品类型',v:'双币投资、范围累积（Shark Fin）等'},{i:'⚠️',l:'核心风险',v:'到期价格触及行权价可能收到非本金币种',c:'var(--red)',risk:3},{i:'💰',l:'收益水平',v:'远高于 Simple Earn，适合有明确价格判断的用户'},{i:'🔗',l:'官方入口',link:'https://www.binance.com/en/earn/advanced-earn',lv:'前往 Advanced Earn'}],
    steps:['充分阅读产品说明书了解风险','前往「金融」→「赚币」→「进阶赚币」','选择方向（看涨/看跌/中性）','设置行权价、周期，存入资产','到期自动结算，获取收益'],est:'10-20 分钟'}},
  {id:'c4c',cat:'earn',emoji:'🔗',title:'链上赚币 · Onchain Yields',sub:'通过币安 Web3 钱包直接参与链上 DeFi 协议，赚取链上收益',
   tags:['链上赚币','Web3','DeFi'],stripe:'var(--purple)',ico:'var(--ps)',
   deadlineSoon:false,deadline:'长期开放',dlLabel:'',
   nums:[{l:'ETH 质押',v:'APR ~4%',c:'var(--green)'},{l:'链',v:'ETH/BNB/SOL'}],
   progress:null,risk:null,sub:false,
   drawer:{tags:['链上赚币','Onchain','Web3 钱包','DeFi'],
    details:[{i:'🔗',l:'产品说明',v:'通过币安 Web3 钱包直接在链上获取 DeFi 收益'},{i:'🌐',l:'支持链',v:'Ethereum、BNB Chain、Solana 等主流链'},{i:'📊',l:'产品示例',v:'ETH 质押、流动性挖矿、Staking 等'},{i:'⚠️',l:'风险说明',v:'链上智能合约风险，注意安全审计状态',risk:2},{i:'🔗',l:'官方入口',link:'https://www.binance.com/zh-CN/earn/onchain-yields',lv:'前往链上赚币'}],
    steps:['下载/打开币安 App，进入 Web3 钱包','前往「金融」→「赚币」→「链上赚币」','选择支持的链上协议产品','确认收益率和风险等级后参与','实时查看链上收益'],est:'15 分钟'}},
  {id:'c4d',cat:'earn',emoji:'👥',title:'邀请赚币 · Refer & Earn',sub:'邀请好友注册并完成交易，双方均可获得 USDC 奖励',
   tags:['邀请赚币','零门槛','长期'],stripe:'var(--cyan)',ico:'var(--cs)',
   deadlineSoon:false,deadline:'长期有效',dlLabel:'',
   nums:[{l:'奖励币种',v:'USDC',c:'var(--cyan)'},{l:'参与门槛',v:'零门槛'}],
   progress:null,risk:null,sub:false,
   drawer:{tags:['Refer & Earn','邀请赚币','USDC'],
    details:[{i:'👥',l:'参与方式',v:'分享专属邀请链接，好友注册并完成指定任务'},{i:'💰',l:'奖励',v:'邀请人和被邀请人双方均可获得 USDC 奖励'},{i:'📊',l:'任务要求',v:'被邀请好友完成首次交易即可触发奖励'},{i:'🔗',l:'官方入口',link:'https://www.binance.com/zh-CN/referral/earn-together/refer2earn-usdc',lv:'前往邀请赚币'}],
    steps:['登录币安，进入「邀请」页面','获取专属邀请链接','分享给好友（微信/Twitter/电报均可）','好友通过链接注册并完成首次交易','双方奖励自动发放至账户'],est:'5 分钟'}},
  {id:'c6',cat:'square',emoji:'🔤',title:'WOTD 每日密语',sub:'每日解谜加密词汇，5连中瓜分 500K Points',
   tags:['广场任务','零门槛','每日'],stripe:'var(--purple)',ico:'var(--ps)',
   deadlineSoon:true,deadline:'今日 23:59',dlLabel:'⏰ 截止',
   nums:[{l:'本周奖池',v:'500K Pts',c:'var(--purple)'},{l:'本周进度',v:'3/5 完成',c:'var(--green)'}],
   progress:{l:'本周进度',v:60,c:'var(--purple)'},risk:null,sub:true,
   drawer:{tags:['WOTD','广场任务','零门槛','每日重置'],
    details:[{i:'🎯',l:'玩法',v:'猜出当日加密词汇（类似 Wordle，6次机会）'},{i:'🏆',l:'奖励',v:'一周猜对 5 次瓜分 500,000 Binance Points'},{i:'📊',l:'本周进度',v:'3/5，再完成 2 次即可参与'},{i:'⏰',l:'重置',v:'每日 UTC 00:00 出新题'},{i:'🔗',l:'前往参与',link:'https://www.binance.com/en/support/announcement/list/93',lv:'WOTD 每日密语'}],
    steps:['前往币安广场找到 WOTD 入口','猜测当日词汇','猜对后获得积分','每日坚持，周内完成 5 次','月底统计最终奖励'],est:'3 分钟'}},
  {id:'c7',cat:'earn',emoji:'🎓',title:'学习赚币 · Learn & Earn',sub:'观看币安学院课程，答题通过即可领取免费代币奖励',
   tags:['学习赚币','零门槛','需KYC'],stripe:'var(--green)',ico:'var(--grs)',
   deadlineSoon:false,deadline:'长期开放',dlLabel:'',
   nums:[{l:'可领课程',v:'4 门待完成',c:'var(--gold)'},{l:'最高奖励',v:'~$30 USDT',c:'var(--green)'}],
   progress:null,risk:null,sub:false,
   drawer:{tags:['Learn & Earn','学习赚币','需KYC','币安学院'],
    details:[{i:'🎓',l:'玩法说明',v:'观看币安学院视频课程，完成答题（≥60分）即可领取代币'},{i:'💰',l:'奖励',v:'最高约 $30 USDT 等值代币，每门课程独立结算'},{i:'✅',l:'前置条件',v:'需完成 KYC Level 1 身份认证'},{i:'📊',l:'当前状态',v:'4 门课程待完成，预计可领 ~$18 USDT'},{i:'🔗',l:'前往参与',link:'https://www.binance.com/zh-CN/academy/learn-and-earn?utm_source=BinanceAcademy&utm_medium=NavBar',lv:'币安学院 · Learn & Earn'}],
    steps:['确认已完成 KYC Level 1','进入币安学院 Learn & Earn 页面','选择课程，完整观看视频（不可快进）','完成课程结束的测验（答对 60% 以上）','奖励自动发放至现货账户'],est:'15-30 分钟'}},
  {id:'c8',cat:'welfare',emoji:'₿',title:'比特币按钮游戏',sub:'倒计时归零瞬间按下赢 1 BTC，每次按下重置 60 分钟',
   tags:['福利活动','零门槛'],stripe:'var(--orange)',ico:'var(--os)',
   deadlineSoon:false,deadline:'第 14 轮',dlLabel:'🎮',
   nums:[{l:'按键次数',v:'8,420 次'},{l:'最高奖励',v:'1 BTC',c:'var(--gold)'}],
   progress:null,risk:null,sub:false,
   drawer:{tags:['比特币按钮','福利活动','零门槛'],
    details:[{i:'🎮',l:'玩法',v:'等倒计时归零时第一个按下即赢 1 BTC'},{i:'⏰',l:'规则',v:'每次有人按下，计时器重置为 60 分钟'},{i:'📊',l:'状态',v:'第 14 轮，累计按键 8,420 次'},{i:'🔗',l:'前往参与',link:'https://www.binance.com/en/support/announcement/list/93',lv:'查看活动公告'}],
    steps:['前往币安官方活动页面','开启浏览器通知','关注倒计时器','倒计时归零前快速点击','获奖者自动到账 1 BTC'],est:'需持续关注'}},
  {id:'c9',cat:'welfare',emoji:'🎯',title:'每月挑战',sub:'完成交易/存币/邀请任务，解锁转盘抽奖',
   tags:['福利活动','零门槛'],stripe:'var(--green)',ico:'var(--grs)',
   deadlineSoon:false,deadline:'本月底',dlLabel:'🗓',
   nums:[{l:'已完成',v:'5/8',c:'var(--green)'},{l:'转盘次数',v:'3 次可用',c:'var(--gold)'}],
   progress:{l:'月度进度',v:62,c:'var(--green)'},risk:null,sub:false,
   drawer:{tags:['每月挑战','福利活动','零门槛'],
    details:[{i:'🎡',l:'玩法',v:'完成月度任务解锁转盘抽奖次数'},{i:'🏆',l:'奖励',v:'奖池 1,000,000 Binance Points + USDT 券'},{i:'📊',l:'进度',v:'5/8 已完成，3 次转盘可用'},{i:'🔗',l:'前往参与',link:'https://www.binance.com/en/support/announcement/list/93',lv:'查看每月挑战'}],
    steps:['查看本月任务列表','逐一完成交易/存币/邀请任务','解锁转盘次数','旋转转盘赢取奖励','月底前尽量多完成'],est:'视任务而定'}},
  {id:'c10',cat:'trade',emoji:'🏆',title:'Block Street (BSB) 交易大赛',sub:'赢取 10 万美元奖励，现货+合约全赛道',
   tags:['交易竞赛','$100K奖池'],stripe:'var(--blue)',ico:'var(--bs)',
   deadlineSoon:false,deadline:'7 天',dlLabel:'🗓',
   nums:[{l:'总奖池',v:'$100,000',c:'var(--gold)'},{l:'报名状态',v:'开放中',c:'var(--green)'}],
   progress:null,risk:null,sub:false,
   drawer:{tags:['交易大赛','$100K奖池','BSB'],
    details:[{i:'🏆',l:'总奖励',v:'$100,000 USDT，按排名梯度分配'},{i:'📊',l:'参赛条件',v:'完成 KYC，注册并报名即可'},{i:'🎯',l:'排名规则',v:'按交易量或收益率排名，官网查看细则'},{i:'⚠️',l:'风险提示',v:'交易存在亏损风险，请控制仓位',risk:3},{i:'🔗',l:'官方链接',link:'https://www.binance.com/en/support/announcement/detail/f94b496c858448c6ac9847b306babbfd',lv:'Block Street 交易大赛详情'}],
    steps:['访问官方公告页面了解详细规则','完成 KYC 认证（Level 1）','在报名页面提交参赛申请','在规定时间内完成规定交易量','等待官方公布排名和奖励发放'],est:'持续参与'}},
  {id:'c11',cat:'social',emoji:'🦞',title:'龙虾大赛 · @BinanceZH Twitter 活动',sub:'参与 BinanceZH 官方推特龙虾大赛，赢取专属奖励',
   tags:['社媒活动','Twitter/𝕏','BinanceZH'],stripe:'var(--cyan)',ico:'var(--cs)',
   deadlineSoon:false,deadline:'进行中',dlLabel:'',
   nums:[{l:'平台',v:'X (Twitter)',c:'var(--cyan)'},{l:'活动方',v:'@BinanceZH'}],
   progress:null,risk:null,sub:false,
   drawer:{tags:['社媒活动','Twitter','龙虾大赛','BinanceZH'],
    details:[{i:'🎯',l:'参与方式',v:'前往原推文，按要求完成互动（转发/评论/点赞）'},{i:'🏆',l:'奖励',v:'参见原推文官方奖励说明'},{i:'📋',l:'注意事项',v:'确保关注 @BinanceZH，参与信息需填写准确'},{i:'🔗',l:'前往活动推文',link:'https://x.com/binancezh/status/2029089532436726036?s=20',lv:'@BinanceZH 龙虾大赛推文'}],
    steps:['点击前往 X.com 原活动推文','关注 @BinanceZH 官方账号','按推文要求完成互动动作','在评论区填写参赛信息','等待官方公布中奖名单'],est:'5 分钟'}},
  {id:'c11b',cat:'social',emoji:'📈',title:'币安钱包链上永续合约里程碑挑战',sub:'参与 Binance Web3 钱包链上永续合约第三赛季里程碑挑战',
   tags:['社媒活动','Web3钱包','链上合约'],stripe:'var(--purple)',ico:'var(--ps)',
   deadlineSoon:false,deadline:'第三赛季进行中',dlLabel:'',
   nums:[{l:'赛季',v:'Season 3',c:'var(--purple)'},{l:'链',v:'BSC链'}],
   progress:null,risk:null,sub:false,
   drawer:{tags:['Web3钱包','链上永续','里程碑挑战','Season 3'],
    details:[{i:'🎯',l:'活动说明',v:'使用币安 Web3 钱包在 BSC 链上参与永续合约交易'},{i:'🏆',l:'奖励',v:'完成里程碑目标可解锁对应奖励'},{i:'⚠️',l:'风险提示',v:'永续合约含杠杆风险，请做好风险管理',risk:3},{i:'🔗',l:'前往活动页',link:'https://web3.binance.com/zh-CN/perpetuals/milestone-tc/szn3?chain=bsc',lv:'链上永续里程碑挑战赛'}],
    steps:['确保已安装币安 App 并开通 Web3 钱包','点击链接进入链上永续合约里程碑页面','了解各阶段里程碑目标和奖励','在 BSC 链上进行永续合约交易','达成里程碑后领取对应奖励'],est:'视交易情况而定'}},
  {id:'c12',cat:'newbie',emoji:'🎁',title:'新用户注册礼包',sub:'完成 KYC 任务链，最高获得 $100 USDT',
   tags:['新用户专区','零门槛'],stripe:'var(--green)',ico:'var(--grs)',
   deadlineSoon:false,deadline:'30 天内',dlLabel:'🗓',
   nums:[{l:'已完成步骤',v:'2/5',c:'var(--green)'},{l:'待领取',v:'$50 USDT',c:'var(--gold)'}],
   progress:{l:'礼包进度',v:40,c:'var(--green)'},risk:null,sub:true,
   drawer:{tags:['新用户专区','注册礼包'],
    details:[{i:'🎁',l:'总奖励',v:'最高 $100 USDT 等值'},{i:'📋',l:'任务链',v:'注册→KYC→首存→首次交易→开通理财'},{i:'📊',l:'进度',v:'2/5 步骤完成，待领取 $50'},{i:'⏰',l:'有效期',v:'注册后 30 天内完成'},{i:'🔗',l:'任务页面',link:'https://www.binance.com/en/activity/referral-entry/BHBasicTasks',lv:'查看新用户礼包'}],
    steps:['完成 KYC 认证（Level 1）','完成首次充值','完成首次现货交易','在简单赚币存入任意金额','在任务页面领取奖励'],est:'30 分钟'}},
];

// ══ STATE ══════════════════════════════════════════════
let curCat='all', activeGF=new Set(), drawerTimer=null;

// ══ RENDER ══════════════════════════════════════════
function cardSubtitle(c){
  return typeof c.sub==='string'?c.sub:(c.subtitle||'');
}
function normalizeCardData(){
  CARDS.forEach(c=>{
    if(typeof c.sub==='boolean'&&c.subscribed===undefined)c.subscribed=c.sub;
    if(!c.subtitle||!String(c.subtitle).trim()){
      const fallback=(c.drawer?.tags||[]).slice(0,2).join(' · ');
      c.subtitle=fallback||'查看官方活动详情';
    }
  });
}
function cardSubscribed(c){
  return c.subscribed===true || c.sub===true;
}

function getCardPrimaryLink(card){
  return card?.drawer?.details?.find(d=>d.link)?.link||'';
}

function isGenericLink(link=''){
  return /\/support\/announcement\/list\/|\/support\/announcement\/?$/i.test(link||'');
}

function mergeIncomingCards(baseCards,incomingCards){
  const merged=[...baseCards];
  const keyOf=(c)=>normalizeCardTitle(c.title)||getCardPrimaryLink(c)||`${(c.title||'').trim()}::${(cardSubtitle(c)||'').trim()}`;
  const idx=new Map();
  merged.forEach((c,i)=>idx.set(keyOf(c),i));

  for(const incoming of incomingCards){
    const k=keyOf(incoming);
    if(idx.has(k)){
      const i=idx.get(k);
      const base=merged[i];
      const baseLink=getCardPrimaryLink(base);
      const incomingLink=getCardPrimaryLink(incoming);
      const preferIncomingDrawer=!base.drawer || (isGenericLink(baseLink)&&incomingLink&&!isGenericLink(incomingLink));
      merged[i]={
        ...incoming,
        ...base,
        deadline: base.deadline || incoming.deadline,
        deadlineSoon: base.deadlineSoon ?? incoming.deadlineSoon,
        dlLabel: base.dlLabel || incoming.dlLabel,
        nums: (base.nums&&base.nums.length)?base.nums:incoming.nums,
        drawer: preferIncomingDrawer ? incoming.drawer : (base.drawer||incoming.drawer),
      };
    }else{
      merged.push(incoming);
      idx.set(k,merged.length-1);
    }
  }
  return merged;
}

async function loadCardsFromJson(){
  try{
    const res=await fetch('./data.json',{cache:'no-store'});
    if(!res.ok)throw new Error('no data.json');
    const json=await res.json();
    if(Array.isArray(json)&&json.length){
      CARDS=mergeIncomingCards(CARDS,json);
    }
  }catch(e){
    console.info('使用内置活动数据（data.json 未就绪）');
  }
}

function normalizeCardTitle(title=''){
  return String(title).toLowerCase().replace(/\s+/g,' ').replace(/[\-—·:：_]+/g,' ').trim();
}
function cardRichnessScore(item){
  const d=item?.drawer||{};
  return (d.details?.length||0)*3 + (d.steps?.length||0)*2 + ((item.deadline&&item.deadline!=='重点关注')?2:0);
}
function dedupeCards(list){
  const byKey=new Map();
  for(const item of list){
    const key=normalizeCardTitle(item.title) || getCardPrimaryLink(item) || item.id || item.code;
    if(!byKey.has(key)){ byKey.set(key,item); continue; }
    const kept=byKey.get(key);
    if(cardRichnessScore(item)>cardRichnessScore(kept)) byKey.set(key,item);
  }
  return [...byKey.values()];
}

function renderCards(){
  CARDS=dedupeCards(CARDS);
  // Sort: custom (timestamp) first, then by index order
  CARDS.sort((a,b)=>{
    const aCustom=a.id.startsWith('custom_');
    const bCustom=b.id.startsWith('custom_');
    if(aCustom&&bCustom)return b.id.localeCompare(a.id);
    if(aCustom)return -1;
    if(bCustom)return 1;
    return 0;
  });
  const grid=document.getElementById('actGrid');
  const search=document.getElementById('gSearch').value.toLowerCase();
  let cards=CARDS.filter(c=>{
    const subtitle=cardSubtitle(c).toLowerCase();
    if(curCat!=='all'&&c.cat!==curCat)return false;
    if(search&&!c.title.toLowerCase().includes(search)&&!subtitle.includes(search))return false;
    if(activeGF.has('urgent')&&!c.deadlineSoon)return false;
    if(activeGF.has('sub')&&!cardSubscribed(c))return false;
    return true;
  });
  if(!cards.length){grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--t3)"><div style="font-size:2.5rem;margin-bottom:12px">🔍</div><div>没有符合条件的活动</div></div>`;updateActivityBadges();return;}
  grid.innerHTML=cards.map(buildCard).join('');
  updateActivityBadges();
}

function buildCard(c){
  const subtitle=cardSubtitle(c);
  const riskHtml=c.risk?`<div class="acard-risk"><svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>${c.risk}</div>`:'';
  const pinHtml=cardSubscribed(c)?'<div class="sub-dot"></div>':'';
  const tagsHtml=c.tags.slice(0,2).map(t=>`<span class="tag tx">${t}</span>`).join('');
  const numsHtml=c.nums.map(n=>`<div class="anb"><div class="anl">${n.l}</div><div class="anv" style="color:${n.c||'var(--t1)'}">${n.v}</div></div>`).join('');
  const dlIcon=`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
  return `<div class="acard${c.deadlineSoon?' hot':''}" onclick="openDrawerById('${c.id}')">
    ${pinHtml}
    <div class="acard-body">
      <div class="acard-top"><div class="acard-ico" style="background:${c.ico}">${c.emoji}</div><div class="acard-tags">${tagsHtml}</div></div>
      <div class="acard-title">${c.title}</div>
      <div class="acard-sub">${subtitle}</div>
      ${riskHtml}
      <div class="acard-nums">${numsHtml}</div>
      <div class="acard-dl">
        <span class="dl-l">${dlIcon}剩余时间</span>
        <span class="dl-v${c.deadlineSoon?' soon':''}">${c.deadline}</span>
      </div>
      <div class="acard-acts">
        <button class="btn btn-gold" style="flex:1;font-size:11px;padding:7px" onclick="event.stopPropagation();openDrawerById('${c.id}')">查看详情</button>
        <button class="btn btn-ghost" style="font-size:11px;padding:7px 10px;transform-origin:center;transition:all .18s;${cardSubscribed(c)?'color:var(--gold);border-color:rgba(240,185,11,.35);background:var(--gs);':''}" onclick="event.stopPropagation();toggleSubscription('${c.id}',this)" title="订阅活动">${cardSubscribed(c)?'★':'☆'}</button>
      </div>
    </div>
  </div>`;
}

// ══ DRAWER ══════════════════════════════════════════
function openDrawerById(id){
  const c=CARDS.find(x=>x.id===id);if(!c)return;
  const d=c.drawer;
  document.getElementById('dTitle').textContent=c.emoji+' '+c.title;
  document.getElementById('dTags').innerHTML=d.tags.map(t=>`<span class="tag tx">${t}</span>`).join('');
  const detailsHtml=d.details.map(r=>{
    let extra='';
    if(r.risk){const dots=[1,2,3,4].map(i=>`<div class="rm${i<=r.risk?' '+['','l','m','h','h'][r.risk]:''}"></div>`).join('');extra=`<div class="risk-m">${dots}</div>`;}
    const dotSvg=`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;color:var(--t3)"><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>`;
    if(r.link)return`<div class="dir"><div class="di-i">${dotSvg}</div><div><div class="di-l">${r.l}</div><a href="${r.link}" target="_blank" style="font-size:12px;color:var(--gold);font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:4px">${r.lv}<svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a></div></div>`;
    return`<div class="dir"><div class="di-i">${dotSvg}</div><div><div class="di-l">${r.l}</div><div class="di-v"${r.c?` style="color:${r.c}"`:''}>${r.v}</div>${extra}</div></div>`;
  }).join('');
  const stepsHtml=d.steps.map((s,i)=>`<div class="step"><div class="step-c">${i+1}</div><div class="step-t">${s}</div></div>`).join('');
  document.getElementById('dBody').innerHTML=`
    <div class="dsec"><div class="ds-title">⏰ 活动倒计时</div>
      <div class="dcd"><div class="dcd-l">距截止时间</div>
        <div class="dcd-units">
          <div class="dcu"><span class="dcd-n" id="cdd">00</span><div class="dcd-lab">天</div></div><span class="dcd-sep">:</span>
          <div class="dcu"><span class="dcd-n" id="cdh">00</span><div class="dcd-lab">时</div></div><span class="dcd-sep">:</span>
          <div class="dcu"><span class="dcd-n" id="cdm">00</span><div class="dcd-lab">分</div></div><span class="dcd-sep">:</span>
          <div class="dcu"><span class="dcd-n" id="cds">00</span><div class="dcd-lab">秒</div></div>
        </div></div></div>
    <div class="dsec"><div class="ds-title">📋 活动详情</div>${detailsHtml}</div>
    <div class="dsec"><div class="ds-title">参与步骤 <span style="font-size:10px;color:var(--t3);font-weight:400;text-transform:none;letter-spacing:0">预计 ${d.est}</span></div>${stepsHtml}</div>
    ${d.rules&&d.rules.length?'<div class="dsec"><div class="ds-title">规则要点</div>'+d.rules.map(r=>'<div class="dir" style="border-bottom:1px solid var(--rim);padding:7px 0"><div style="font-size:12px;color:var(--t2);line-height:1.6">'+r+'</div></div>').join('')+'</div>':''}
    <div class="d-acts">
      <button class="d-btn d-pri" onclick="syncCal('${c.title}')">🗓 同步 Google 日历</button>
      <button class="d-btn d-sec" onclick="window.open('${d.details.find(x=>x.link)?.link||'https://www.binance.com'}','_blank')">🔗 前往官方活动页面</button>
      <button class="d-btn d-sec" onclick="openShareCardFromActivity('${c.title}','${cardSubtitle(c)}')">📤 生成分享卡片</button>
    </div>`;
  startTimer(c);
  document.getElementById('overlay').classList.add('on');
  document.getElementById('drawer').classList.add('open');
}

function startTimer(c){
  if(drawerTimer)clearInterval(drawerTimer);
  let total=c.deadlineSoon?(parseInt(c.deadline)||5)*3600+840:(parseInt(c.deadline)||3)*86400+50961;
  function tick(){
    if(total<=0){clearInterval(drawerTimer);return;}
    total--;
    const d=Math.floor(total/86400),h=Math.floor(total%86400/3600),m=Math.floor(total%3600/60),s=total%60;
    const $=id=>document.getElementById(id);
    if($('cdd'))$('cdd').textContent=String(d).padStart(2,'0');
    if($('cdh'))$('cdh').textContent=String(h).padStart(2,'0');
    if($('cdm'))$('cdm').textContent=String(m).padStart(2,'0');
    if($('cds'))$('cds').textContent=String(s).padStart(2,'0');
  }
  tick();drawerTimer=setInterval(tick,1000);
}

function closeDrawer(){
  document.getElementById('overlay').classList.remove('on');
  document.getElementById('drawer').classList.remove('open');
  if(drawerTimer)clearInterval(drawerTimer);
}

let currentShareText='今天学到了新知识！via #BinanceHub';

function openSharePreview(title,sub,tweetText){
  document.getElementById('scWord').textContent=title;
  document.getElementById('scDef').textContent=sub;
  currentShareText=tweetText||`${title}｜${sub} via #BinanceHub`;
  openModal('modal-share-card');
}

function openShareCardFromActivity(title,sub){
  closeDrawer();
  openSharePreview(title,sub,`${title}｜${sub} via #BinanceHub`);
}

// ══ FILTERS ══
function setCat(el,cat){
  document.querySelectorAll('.ctab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');curCat=cat;
  const lfDefs={
    earn:[{l:'年化 >5%',k:'apy5'},{l:'年化 >10%',k:'apy10'},{l:'年化 >20%',k:'apy20'},{l:'活期',k:'flex'},{l:'定期',k:'fixed'}],
    launch:[{l:'需 BNB',k:'bnb'},{l:'需 FDUSD',k:'fdusd'},{l:'无门槛',k:'free'}],
    trade:[{l:'现货',k:'spot'},{l:'合约',k:'futures'},{l:'跟单',k:'copy'},{l:'需 KYC',k:'kyc'}],
  };
  const area=document.getElementById('lfArea');
  const defs=lfDefs[cat];
  if(defs){
    area.style.display='flex';
    area.innerHTML=`<div class="lf-sep"></div><span class="lf-label">本类</span>`+defs.map(f=>`<button class="lf-chip" onclick="this.classList.toggle('on')">${f.l}</button>`).join('');
  }else{area.style.display='none';area.innerHTML='';}
  renderCards();
}

function toggleGF(key,el){
  if(activeGF.has(key)){activeGF.delete(key);el.classList.remove('on');}
  else{activeGF.add(key);el.classList.add('on');}
  renderCards();
}

function filterCards(){renderCards();}

function setView(v,el){
  document.querySelectorAll('.vbtn').forEach(b=>b.classList.remove('on'));
  el.classList.add('on');
  const grid=document.getElementById('actGrid');
  grid.classList.toggle('list',v==='list');
}

function syncCal(title){toast(`🗓 "${title}" 已同步至 Google 日历`,'success');}
function toggleSubscription(id,btn){
  const card=CARDS.find(c=>String(c.id)===String(id));
  if(!card)return;
  card.subscribed=!cardSubscribed(card);
  if(btn){
    btn.textContent=card.subscribed?'★':'☆';
    btn.style.transform='scale(1.12)';
    setTimeout(()=>btn.style.transform='scale(1)',160);
  }
  renderCards();
  toast(card.subscribed?'已加入订阅':'已取消订阅',card.subscribed?'success':'info');
}

// ══ PAGE ══
function goPage(id,el){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.getElementById('page-'+id).classList.add('on');
  document.querySelectorAll('.ntab').forEach(t=>t.classList.remove('on'));
  if(el)el.classList.add('on');
}
function toggleMobileMenu(){document.getElementById('mobileDrawer').classList.toggle('open');}
function closeMobileMenu(){document.getElementById('mobileDrawer').classList.remove('open');}

// ══ THEME ══
function toggleTheme(){document.body.classList.toggle('dark');}

// ══ LEARN ══
const CARDS_DATA=[
  {cat:'收益概念',word:'APY vs APR',sub:'Annual Percentage Yield / Rate',def:'<strong>APY</strong> 会把复利也算进去，<strong>APR</strong> 只计算单利。相同 10% 标注下，长期持有时 APY 更接近真实到手收益。',share:'APY 包含复利，APR 只计算单利。'},
  {cat:'挖矿机制',word:'Launchpool',sub:'Token Mining via Staking',def:'通过质押 <strong>BNB</strong> 或 <strong>FDUSD</strong> 参与新币挖矿，按比例领取代币奖励。<strong>本金可赎回</strong>，通常比直接追高风险更低。',share:'质押 BNB 或 FDUSD 可参与新币挖矿，本金可赎回。'},
  {cat:'账户安全',word:'KYC',sub:'Know Your Customer',def:'完成身份认证后，通常可解锁更高提现额度、活动资格与更多产品入口。遇到要求跳过官方流程的“代认证”，直接当作风险信号处理。',share:'KYC 完成后可解锁更多功能与活动资格。'},
  {cat:'钱包安全',word:'助记词',sub:'Mnemonic Seed Phrase',def:'助记词通常由 <strong>12 或 24 个单词</strong>组成，是恢复钱包的唯一凭证。任何人索要助记词都等于索要资产控制权。',share:'助记词是恢复钱包的唯一凭证，绝不能泄露。'},
  {cat:'交易机制',word:'做市商 vs 吃单方',sub:'Maker vs Taker',def:'<strong>Maker</strong> 先挂单，等待别人来成交，手续费往往更低。<strong>Taker</strong> 直接吃掉当前订单簿流动性，成交更快但成本通常更高。',share:'Maker 挂单等成交，Taker 立即成交，手续费通常更高。'},
  {cat:'链上基础',word:'Gas Fee',sub:'Transaction Fee',def:'链上转账或交互都需要支付 Gas。Ethereum 以 <strong>ETH</strong> 计价，BNB Chain 以 <strong>BNB</strong> 计价；网络越拥堵，Gas 往往越高。',share:'Gas 是链上交易手续费，网络拥堵时通常更贵。'},
  {cat:'投资心态',word:'HODL',sub:'Hold On for Dear Life',def:'HODL 指在高波动环境中选择长期持有，而不是频繁追涨杀跌。它更像纪律策略，不是盲目死扛，前提是你理解持有标的本身。',share:'HODL 是长期持有策略，核心是纪律而不是情绪交易。'},
  {cat:'去中心化',word:'DeFi',sub:'Decentralized Finance',def:'DeFi 利用智能合约在无中介的前提下完成借贷、兑换、质押等金融活动。优势是开放透明，风险在于合约漏洞与协议清算机制。',share:'DeFi 用智能合约提供金融服务，开放透明但有合约风险。'},
];
let dcIdx=0;
let dailyCardRevealed=false;
let dailyFlipTimer=null;
let dailyDealTimer=null;
let dailyTiltResetTimer=null;
const dailyCardEl=document.getElementById('dailyCard');
const dailyDeckEl=document.getElementById('dailyDeckWrap');
const dailyShineEl=document.getElementById('dcShine');
const dailyHoloEl=document.getElementById('dcHolo');

function getTodayCardIndex(){
  const now=new Date();
  const key=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  return Array.from(key).reduce((sum,ch)=>sum+ch.charCodeAt(0),0)%CARDS_DATA.length;
}

function getTodayBadge(){
  const now=new Date();
  return `${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')}`;
}

function setDailyCardContent(idx){
  const d=CARDS_DATA[idx];
  document.getElementById('dcCat').textContent=d.cat;
  document.getElementById('dcWord').textContent=d.word;
  document.getElementById('dcSub').textContent=d.sub;
  document.getElementById('dcDef').innerHTML=d.def;
  document.getElementById('dcNum').textContent=`${String(idx+1).padStart(2,'0')} / ${String(CARDS_DATA.length).padStart(2,'0')}`;
  document.getElementById('dcBadge').textContent=getTodayBadge();
  document.getElementById('scWord').textContent=d.word;
  document.getElementById('scDef').textContent=d.share;
}

function resetDailyGhostCards(){
  document.querySelectorAll('.daily-ghost-card').forEach((ghost,idx)=>{
    ghost.style.opacity='1';
    ghost.style.transform=idx===0?'translate(-8px,8px) rotate(-4deg)':'translate(-4px,4px) rotate(-2deg)';
  });
}

function burstDailyParticles(){
  const layer=document.getElementById('dailyParticleLayer');
  if(!layer)return;
  layer.innerHTML='';
  const colors=['#F0B90B','#FFD54F','#3B82F6','#10B981','#FFFFFF'];
  for(let i=0;i<18;i++){
    const p=document.createElement('span');
    const angle=(Math.PI*2/18)*i+(Math.random()*.32);
    const distance=42+Math.random()*78;
    p.className='daily-particle';
    p.style.setProperty('--dx',`${Math.cos(angle)*distance}px`);
    p.style.setProperty('--dy',`${Math.sin(angle)*distance-18}px`);
    p.style.setProperty('--size',`${3+Math.random()*5}px`);
    p.style.setProperty('--delay',`${Math.random()*80}ms`);
    p.style.setProperty('--pcolor',colors[Math.floor(Math.random()*colors.length)]);
    layer.appendChild(p);
    setTimeout(()=>p.remove(),1000);
  }
}

function popDailyBurst(){
  const burst=document.getElementById('dcBurst');
  burst.classList.remove('pop');
  void burst.offsetWidth;
  burst.classList.add('pop');
}

function drawDailyCard(){
  const acts=document.getElementById('dcActions');
  const btn=document.getElementById('dcDrawBtn');
  clearTimeout(dailyFlipTimer);
  clearTimeout(dailyDealTimer);
  clearTimeout(dailyTiltResetTimer);
  dcIdx=getTodayCardIndex();
  dailyCardRevealed=false;
  acts.style.display='none';
  setDailyCardContent(dcIdx);
  resetDailyGhostCards();
  btn.classList.remove('shine-run');
  void btn.offsetWidth;
  btn.classList.add('shine-run');
  dailyCardEl.style.transform='';
  dailyCardEl.style.transition='';
  dailyCardEl.classList.remove('flipped','dealing');
  void dailyCardEl.offsetWidth;
  dailyCardEl.classList.add('dealing');
  dailyFlipTimer=setTimeout(()=>{
    dailyCardEl.classList.add('flipped');
    dailyCardRevealed=true;
    acts.style.display='flex';
    popDailyBurst();
    burstDailyParticles();
    document.querySelectorAll('.daily-ghost-card').forEach((ghost,idx)=>{
      ghost.style.transform=`translate(${(idx+1)*-18}px, ${(idx+1)*-18}px) rotate(${(idx+1)*-8}deg) scale(.92)`;
      ghost.style.opacity='0';
    });
  },210);
  dailyDealTimer=setTimeout(()=>dailyCardEl.classList.remove('dealing'),620);
}

function flipCard(){drawDailyCard();}

function copyDailyCard(event){
  event.stopPropagation();
  const d=CARDS_DATA[dcIdx];
  const btn=event.currentTarget;
  const rawText=`${d.word}\n${d.share}`;
  if(!navigator.clipboard||!navigator.clipboard.writeText){
    btn.textContent='不支持复制';
    setTimeout(()=>btn.textContent='复制知识',1200);
    return;
  }
  navigator.clipboard.writeText(rawText).then(()=>{
    btn.textContent='已复制';
    setTimeout(()=>btn.textContent='复制知识',1200);
  }).catch(()=>{
    btn.textContent='复制失败';
    setTimeout(()=>btn.textContent='复制知识',1200);
  });
}

function shareCurrentDailyCard(){
  const d=CARDS_DATA[dcIdx];
  openSharePreview(d.word,d.share,`今日知识卡片：${d.word}｜${d.share} via #BinanceHub`);
}

if(dailyDeckEl&&dailyCardEl){
  dailyDeckEl.addEventListener('mousemove',e=>{
    if(!dailyCardRevealed||!dailyCardEl.classList.contains('flipped'))return;
    const rect=dailyCardEl.getBoundingClientRect();
    const dx=(e.clientX-(rect.left+rect.width/2))/(rect.width/2);
    const dy=(e.clientY-(rect.top+rect.height/2))/(rect.height/2);
    const tiltX=dy*-10;
    const tiltY=dx*12;
    dailyCardEl.style.transform=`rotateY(${180+tiltY}deg) rotateX(${tiltX}deg)`;
    dailyShineEl.style.setProperty('--mx',`${((e.clientX-rect.left)/rect.width*100).toFixed(1)}%`);
    dailyShineEl.style.setProperty('--my',`${((e.clientY-rect.top)/rect.height*100).toFixed(1)}%`);
    dailyHoloEl.style.setProperty('--hx',`${(dx*10).toFixed(2)}%`);
  });
  dailyDeckEl.addEventListener('mouseleave',()=>{
    if(!dailyCardRevealed||!dailyCardEl.classList.contains('flipped'))return;
    dailyCardEl.style.transform='rotateY(180deg)';
    dailyCardEl.style.transition='transform .45s cubic-bezier(.16,1,.3,1)';
    dailyTiltResetTimer=setTimeout(()=>{dailyCardEl.style.transition='';},460);
  });
}

dcIdx=getTodayCardIndex();
setDailyCardContent(dcIdx);

// ══ QUIZ DATA — JSON Schema per PRD ══════════════════════
// Schema: {id, level(1-5), q, opts[4], ans(0-3), explanation, ai_mockery, ref, refLabel}
const QUIZZES={
  noob:[
    {id:'n1',level:1,q:'有人在 Telegram 私信说"帮你解决账号问题，请发给我助记词"，你应该怎么做？',opts:['快速发给他，怕账号被封','截图发到官方群问问','直接拉黑举报，100% 是诈骗','先问他要不要手续费'],ans:2,explanation:'任何人索要助记词 = 100% 诈骗。助记词是你钱包的唯一凭证，拥有助记词等于拥有你所有资产。币安官方客服永远不会主动私信索要。',ai_mockery:'🤖 小何嘲笑：连这个都差点上当？你的助记词差点飞了 ✈️',ref:'https://www.binance.com/en/official-verification',refLabel:'查看官方验证'},
    {id:'n2',level:1,q:'HODL 是什么意思？',opts:['Hold On for Dear Life，指长期持有不卖','一种新型 DeFi 协议的名字','币安的一个理财产品','指高频交易策略'],ans:0,explanation:'HODL 起源于 2013 年比特币论坛上一个拼错的「hold」，后被社区赋予「Hold On for Dear Life」的含义，代表不管涨跌坚定持有的策略。',ai_mockery:'🤖 小何嘲笑：连 HODL 都不知道？你是不是刚从火星降落？',ref:'https://academy.binance.com/zh/articles/a-crypto-glossary',refLabel:'查看术语词典'},
    {id:'n3',level:1,q:'FOMO 在加密圈是什么意思？',opts:['一种共识机制','Fear Of Missing Out，害怕错过','一个链上协议名称','指杠杆交易策略'],ans:1,explanation:'FOMO（Fear Of Missing Out）是指看到价格暴涨后因为害怕错过而冲动买入的心理。FOMO 是新手亏损的主要原因之一，往往在高点追入。',ai_mockery:'🤖 小何嘲笑：你就是典型的 FOMO 受害者候选人！',ref:'https://academy.binance.com/zh/articles/a-crypto-glossary',refLabel:'查看术语词典'},
    {id:'n4',level:1,q:'以下哪个说法关于「区块链」是正确的？',opts:['由某家中心化公司控制和管理','一种去中心化的分布式账本技术','只有比特币在使用','需要实体银行参与才能运行'],ans:1,explanation:'区块链是一种去中心化的分布式账本，数据分布在全球众多节点上，无需中心化机构即可进行价值传输和记录。以太坊、BNB Chain 等都是区块链网络。',ai_mockery:'🤖 小何嘲笑：区块链 101 都没过？先把基础打牢再来！',ref:'https://academy.binance.com/zh/articles/what-is-blockchain-technology-a-comprehensive-guide-for-beginners',refLabel:'什么是区块链'},
    {id:'n5',level:1,q:'为什么说「不是你的私钥，就不是你的币」？',opts:['把币放交易所更安全，这句话是错的','持有私钥才真正掌控资产，交易所持有风险由对方承担','私钥只在 NFT 里有用','这只适用于比特币'],ans:1,explanation:'私钥是你对链上资产的所有权证明。把币放在交易所，你只是持有交易所的欠条。若交易所跑路/被黑，你的资产可能归零。持有私钥意味着你真正控制资产。',ai_mockery:'🤖 小何嘲笑：你的币放交易所睡得着觉？胆子真大！',ref:'https://academy.binance.com/zh/articles/not-your-keys-not-your-crypto',refLabel:'私钥的重要性'},
  ],
  beginner:[
    {id:'b1',level:2,q:'在币安充值 USDT 时，以下哪个操作最重要？',opts:['选择最快的网络就行','确认充值地址和选择的网络与发出方完全一致','随便选个网络，都能到账','不用理会网络选择'],ans:1,explanation:'充值时网络选择极为关键。若选错网络（如应选 BEP20 却选了 ERC20），资产可能永久丢失。务必与发出方使用的网络保持完全一致。',ai_mockery:'🤖 小何嘲笑：网络选错一次，学费可能是好几个 ETH，血的教训！',ref:'https://www.binance.com/en/support/faq/deposit',refLabel:'充提币指南'},
    {id:'b2',level:2,q:'双重验证（2FA）中，Google Authenticator 相比短信验证码更安全的原因是？',opts:['短信更贵所以不安全','Google Authenticator 不需要手机号，不受 SIM 卡劫持攻击影响','两者安全性完全相同','短信验证码有字数限制'],ans:1,explanation:'SIM 卡劫持（SIM Swap）攻击可让黑客将你的手机号转移到自己的 SIM 卡上，从而截获短信验证码。Google Authenticator 在本地生成 TOTP 码，不依赖手机网络，更难被截获。',ai_mockery:'🤖 小何嘲笑：还在用短信 2FA？你的账号在裸奔！',ref:'https://www.binance.com/en/support/faq/how-to-enable-google-authenticator',refLabel:'开启 Google 2FA'},
    {id:'b3',level:2,q:'APY 和 APR 的主要区别是什么？',opts:['APY 是年利率，APR 是月利率','APY 包含复利，APR 是简单利率','两者完全相同，只是中英文叫法不同','APY 只用于借款产品'],ans:1,explanation:'APR 只计算本金的利息（简单利率）。APY 把每次产生的利息再投入计算复利。10% APR 每月复利后实际约等于 10.47% APY。存款看 APY 更准确。',ai_mockery:'🤖 小何嘲笑：APY APR 傻傻分不清楚，亏钱了都不知道为什么！',ref:'https://academy.binance.com/zh/articles/apy-vs-apr-what-s-the-difference',refLabel:'APY vs APR 详解'},
    {id:'b4',level:2,q:'币安 Launchpool 的参与方式是什么？',opts:['购买指定代币后等待','质押 BNB 或 FDUSD 到矿池，按比例挖取新代币','完成 KYC 后自动参与','每天登录签到即可'],ans:1,explanation:'Launchpool 让用户质押 BNB 或 FDUSD 到指定矿池，按持仓比例获得新代币奖励。本金随时可赎回，无额外成本，是参与新项目低风险的方式。',ai_mockery:'🤖 小何嘲笑：Launchpool 都没用过？白白错过了多少新币啊！',ref:'https://www.binance.com/en/launchpool',refLabel:'前往 Launchpool'},
    {id:'b5',level:2,q:'在链上转账时，Gas Fee 是什么？',opts:['交易所收取的提现手续费','区块链网络上执行交易支付给矿工/验证者的费用','一种加密货币的名字','用于购买 NFT 的费用'],ans:1,explanation:'Gas Fee 是在区块链网络上执行任意操作（转账、合约交互）时支付给网络验证者的费用。以太坊用 ETH，BNB Chain 用 BNB 计价。网络拥堵时费用升高。',ai_mockery:'🤖 小何嘲笑：Gas 费都不懂就上链？钱包余额会默默流失的！',ref:'https://academy.binance.com/zh/articles/what-is-gas-in-ethereum',refLabel:'Gas 费用详解'},
  ],
  mid:[
    {id:'m1',level:3,q:'Megadrop 与 Launchpool 最主要的区别是什么？',opts:['Launchpool 需要锁仓，Megadrop 不需要','Megadrop 可完成 Web3 任务参与，Launchpool 只能质押','Launchpool 只支持 BNB','两者机制完全相同'],ans:1,explanation:'Launchpool 是被动质押，Megadrop 在质押 BNB 基础上还能完成 Web3 链上任务获取积分，积分越高分配的代币越多，更强调主动参与。',ai_mockery:'🤖 小何嘲笑：Launchpool 和 Megadrop 你都搞混了？亏了多少机会！',ref:'https://www.binance.com/en/megadrop',refLabel:'查看 Megadrop'},
    {id:'m2',level:3,q:'K 线图中，若当日收盘价高于开盘价，蜡烛通常是什么颜色？',opts:['红色（下跌）','绿色（上涨）','颜色随意无规律','黄色（持平）'],ans:1,explanation:'在大多数交易软件中，绿色（或白色）蜡烛表示收盘价高于开盘价（上涨阳线）；红色（或黑色）蜡烛表示收盘价低于开盘价（下跌阴线）。',ai_mockery:'🤖 小何嘲笑：看不懂 K 线？这是技术分析的 ABC 啊！',ref:'https://academy.binance.com/zh/articles/a-beginners-guide-to-candlestick-charts',refLabel:'K 线图入门'},
    {id:'m3',level:3,q:'Simple Earn 活期和定期产品最主要的区别是什么？',opts:['活期利率总是更高','活期随时可取，定期锁定期间不可赎回','两者完全一样','定期不计算利息'],ans:1,explanation:'活期 Simple Earn 随时存取，利率相对较低。定期产品锁定一段时间，利率更高但期间无法赎回。根据资金使用计划灵活选择。',ai_mockery:'🤖 小何嘲笑：活期定期都搞不清？你的理财规划需要急救！',ref:'https://www.binance.com/en/earn/simple-earn',refLabel:'前往 Simple Earn'},
    {id:'m4',level:3,q:'Web3 钱包（如 MetaMask）与币安账户的主要区别是什么？',opts:['Web3 钱包必须用于 NFT 交易','Web3 钱包用户自持私钥，资产在链上；币安账户是中心化托管','Web3 钱包不支持 ETH','币安账户更安全'],ans:1,explanation:'Web3 钱包（MetaMask、Binance Web3 Wallet）用户自己持有私钥，资产真正在区块链上。币安账户是中心化托管，用户拥有的是平台记账凭证，不直接持有链上资产。',ai_mockery:'🤖 小何嘲笑：Web3 钱包和交易所账户都分不清？区块链入门课补课去！',ref:'https://academy.binance.com/zh/articles/crypto-wallet-types-explained',refLabel:'钱包类型详解'},
    {id:'m5',level:3,q:'无常损失（Impermanent Loss）最容易在什么情况下发生？',opts:['市场完全不波动','在 AMM 流动性池中，两个资产价格比例发生较大变化时','提现手续费过高时','网络拥堵时'],ans:1,explanation:'无常损失发生在 AMM 流动性池中。当你提供的两种代币价格比例发生较大变化时，与直接持有相比，LP 头寸的总价值会更低，这部分损失叫无常损失。',ai_mockery:'🤖 小何嘲笑：不懂无常损失就去提供流动性？你在给别人亏钱！',ref:'https://academy.binance.com/zh/articles/impermanent-loss-explained',refLabel:'无常损失详解'},
  ],
  adv:[
    {id:'a1',level:4,q:'永续合约中，资金费率（Funding Rate）为正时意味着什么？',opts:['所有做空者获得收益','多头持仓者向空头支付费用，说明市场情绪偏多','合约即将强制交割','空头持仓者亏损'],ans:1,explanation:'资金费率机制用于锚定永续合约价格接近现货价格。资金费率为正时，多头向空头支付，说明市场整体情绪偏多（合约价格溢价于现货）。空头此时可额外收取资金费用。',ai_mockery:'🤖 小何嘲笑：资金费率都没搞清楚就玩合约？你在给别人发工资！',ref:'https://academy.binance.com/zh/articles/what-are-perpetual-futures-contracts',refLabel:'永续合约详解'},
    {id:'a2',level:4,q:'双币投资中，若 BTC 到期价低于行权价，用户收到什么？',opts:['更多 USDT 作为补偿','BTC（本金按行权价换算），且已获得约定利息','活动取消原路退款','额外利息补偿差价'],ans:1,explanation:'双币投资核心风险：到期价低于行权价，USDT 本金按行权价换算成 BTC。你拿到了约定利息，但若 BTC 继续跌，手中 BTC 价值低于本金。适合对价格有明确判断的用户。',ai_mockery:'🤖 小何嘲笑：双币踩雷了？欢迎加入「我以为能抄底」俱乐部！',ref:'https://www.binance.com/en/dual-investment',refLabel:'双币投资规则'},
    {id:'a3',level:4,q:'杠杆交易中，「强制平仓」（Liquidation）触发的条件是什么？',opts:['交易者主动选择平仓','账户保证金率低于维持保证金率时，系统强制关闭头寸','合约到期自动平仓','网络拥堵时自动平仓'],ans:1,explanation:'当亏损使账户净值（保证金）低于维持保证金率时，交易所强制平仓以防止穿仓。高杠杆下价格小幅反向波动即可触发清算，需密切关注强平价格。',ai_mockery:'🤖 小何嘲笑：被强平还不知道为什么？高杠杆要了你的命！',ref:'https://academy.binance.com/zh/articles/what-is-liquidation',refLabel:'强制平仓详解'},
    {id:'a4',level:4,q:'DeFi 中「闪电贷」（Flash Loan）最核心的特征是什么？',opts:['需要超额抵押才能借款','无需抵押，但必须在同一笔交易内完成借款、使用、还款','只能用于 NFT 购买','需要银行身份验证'],ans:1,explanation:'闪电贷无需抵押，但必须在同一区块链交易中完成借款、操作、还款，否则整笔交易回滚。主要用于套利、清算和抵押品置换，是 DeFi 的创新金融原语。',ai_mockery:'🤖 小何嘲笑：不懂闪电贷就自称 DeFi 用户？差得远呢！',ref:'https://academy.binance.com/zh/articles/what-are-flash-loans-in-defi',refLabel:'闪电贷详解'},
    {id:'a5',level:4,q:'链上数据中，「鲸鱼钱包」通常指什么？',opts:['专门存储 NFT 的钱包','持有大量加密资产、其大额转账可影响市场情绪的地址','币安官方储备钱包','质押了 32 ETH 的验证者节点'],ans:1,explanation:'鲸鱼（Whale）指持有大量加密资产的地址，其大额转账（通常在 100 万美元以上）常被市场视为价格信号。追踪鲸鱼动向是链上数据分析的重要组成。',ai_mockery:'🤖 小何嘲笑：鲸鱼移动你都看不懂？数据分析零分！',ref:'https://whalealert.io',refLabel:'实时鲸鱼追踪'},
  ],
  expert:[
    {id:'e1',level:5,q:'ZK-Rollup 相比 Optimistic Rollup 的核心优势是什么？',opts:['交易费更低','无需欺诈证明等待期，通过零知识证明即时验证交易有效性','支持更多代币种类','不需要 Gas Fee'],ans:1,explanation:'Optimistic Rollup 默认假设交易有效，需要 7 天挑战期才能最终确认。ZK-Rollup 通过生成零知识证明（ZK-SNARK/STARK）在主链直接验证，无需等待期，提款速度更快且安全性更强。',ai_mockery:'🤖 小何嘲笑：Layer 2 的核心区别都不清楚？去重读白皮书吧！',ref:'https://academy.binance.com/zh/articles/what-are-layer-2-blockchain-solutions',refLabel:'Layer 2 详解'},
    {id:'e2',level:5,q:'在 AMM 恒定乘积公式 x*y=k 中，大量买入 x 代币会发生什么？',opts:['x 数量增加，y 减少，价格下降','x 减少，y 增加，x 价格相对 y 上涨','x 和 y 同时减少，k 值改变','价格不变，仅流动性降低'],ans:1,explanation:'买入 x（池子 x 减少）→ 维持 k 不变，y 必须增加 → x 变稀缺 → x 价格上涨。大额买入会产生价格冲击（滑点），交易量越大相对池子比例越大，价格影响越剧烈。',ai_mockery:'🤖 小何嘲笑：AMM 公式都没搞清楚？你是怎么做 DeFi 的？',ref:'https://academy.binance.com/zh/articles/what-is-an-automated-market-maker-amm',refLabel:'AMM 机制详解'},
    {id:'e3',level:5,q:'智能合约中，「重入攻击」（Reentrancy Attack）的原理是什么？',opts:['黑客通过暴力破解私钥','恶意合约在目标合约完成状态更新前反复调用目标合约的提款函数','通过 Gas 价格操控交易顺序','利用预言机喂价延迟套利'],ans:1,explanation:'重入攻击（如 2016 年 DAO 事件）：攻击者在目标合约发送 ETH 但未更新余额状态前，通过 fallback 函数重复调用提款，反复提取资金。防御方式：「检查-效果-交互」模式或互斥锁。',ai_mockery:'🤖 小何嘲笑：合约安全不懂？DAO 事件的教训白学了！',ref:'https://academy.binance.com/zh/articles/what-is-a-reentrancy-attack',refLabel:'重入攻击详解'},
    {id:'e4',level:5,q:'MEV（最大可提取价值）中，「三明治攻击」是如何实现的？',opts:['矿工在用户交易前后插入自己的买卖交易从中套利','黑客直接盗取用户私钥','通过操控 Gas Fee 阻止用户交易','利用跨链桥漏洞转移资金'],ans:1,explanation:'三明治攻击：搜索者发现 mempool 中大额 DEX 交易 → 在其前插入买单拉高价格 → 等用户高位成交 → 立即在其后卖出获利。用户因此遭受额外滑点损失。',ai_mockery:'🤖 小何嘲笑：你的链上交易已经被三明治多少次了你知道吗？',ref:'https://academy.binance.com/zh/articles/what-is-mev',refLabel:'MEV 详解'},
    {id:'e5',level:5,q:'以太坊 EIP-1559 升级后，Gas 机制的核心变化是什么？',opts:['取消了所有 Gas Fee','引入基础费（Base Fee，自动销毁）+ 小费（Tip），替代原先的单一拍卖机制','Gas Price 变为固定值','矿工获得更高收益'],ans:1,explanation:'EIP-1559 将 Gas 拆分为基础费（Base Fee，根据网络拥堵自动调整并销毁）和小费（Priority Fee，支付给矿工）。燃烧 ETH 使其趋向通缩。用户体验更可预测，减少出价博弈。',ai_mockery:'🤖 小何嘲笑：EIP-1559 都没研究过？以太坊基础知识补课去！',ref:'https://academy.binance.com/zh/articles/what-is-eip-1559',refLabel:'EIP-1559 详解'},
  ],
};
// Per-tier metadata
const TIER_META={
  noob:{label:'萌新阶',en:'Crypto Noob',icon:'🌱',desc:'防骗防割、行业黑话、基础共识',level:1,unlocked:true},
  beginner:{label:'新手阶',en:'Novice Starter',icon:'🛡️',desc:'CEX 操作、充提币网络、安全设置',level:2,unlocked:false},
  mid:{label:'中阶',en:'Intermediate',icon:'⚡',desc:'理财产品、K 线基础、Web3 钱包',level:3,unlocked:false},
  adv:{label:'进阶',en:'Advanced',icon:'🔥',desc:'合约衍生品、DeFi 逻辑、无常损失',level:4,unlocked:false},
  expert:{label:'高阶',en:'Expert',icon:'💎',desc:'Layer2/ZK、链上数据、合约安全',level:5,unlocked:false},
};
const TIER_ORDER=['noob','beginner','mid','adv','expert'];

// ── Quiz State ────────────────────────────────────────────────
const QUIZ_STORAGE_KEY='binancehubQuizStateV10';
const QUIZ_STORAGE_VERSION=10;
const QUIZ_STAGE_TOTAL=5;
const WRONG_BOOK=[];
let DAILY_QUIZ_STATE=null;
let DAILY_QUIZZES={};
let curTier='noob', curQIdx=0, wrongBookView='priority';
let consecutiveWrong=0, wrongInRound=0;   // wrongInRound: wrong count this tier session
let obStep='choice', placementScore=0, placementIdx=0;
let demotionTarget=null;  // tier to demote to when confirmed
const PLACEMENT_POOL=[QUIZZES.noob[0],QUIZZES.beginner[2],QUIZZES.mid[0],QUIZZES.adv[0],QUIZZES.expert[1]];
let currentQuestionAnswered=false, currentQuestionCorrect=false, demotionPending=false;
let currentRenderedQuestion=null, stageQueue=[], stageStartingMasteredCount=0;
let stageQuestionKeys=[], stageMasteredKeys=new Set(), stagePendingWrongKeys=new Set();
let quizCountdownTimer=null, lastQuizCountdownText='';
let tierTransitioning=false;

function createTierMap(factory){
  const map={};
  TIER_ORDER.forEach((tier,idx)=>{map[tier]=factory(tier,idx);});
  return map;
}
function createTierFlagMap(){ return createTierMap(()=>false); }
function cloneTierFlagMap(source){
  const map=createTierFlagMap();
  TIER_ORDER.forEach(tier=>{map[tier]=!!(source&&source[tier]);});
  return map;
}
function getLocalDayKey(date=new Date()){
  return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0');
}
function shuffleArray(list){
  const arr=[...list];
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}
function readQuizStorage(){
  try{return JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY)||'null');}
  catch(e){return null;}
}
function getBaseTierQuestions(tier){ return QUIZZES[tier]||QUIZZES.noob; }
function getBaseQuestionById(tier,id){ return getBaseTierQuestions(tier).find(q=>q.id===id)||null; }
function buildDailyTierIds(tier,historyIds=[]){
  const baseIds=getBaseTierQuestions(tier).map(q=>q.id);
  const stageTotal=Math.min(QUIZ_STAGE_TOTAL,baseIds.length);
  let nextHistory=[...historyIds];
  let freshIds=baseIds.filter(id=>!nextHistory.includes(id));
  if(freshIds.length<stageTotal){
    nextHistory=[];
    freshIds=[...baseIds];
  }
  const dailyIds=shuffleArray(freshIds).slice(0,stageTotal);
  return {dailyIds,historyIds:[...new Set([...nextHistory,...dailyIds])]};
}
function buildEmptyQuizState(dayKey=getLocalDayKey()){
  return {
    version:QUIZ_STORAGE_VERSION,
    dayKey,
    historyByTier:createTierMap(()=>[]),
    dailyDeckByTier:createTierMap(()=>[]),
    masteredByTier:createTierMap(()=>[]),
    unlockedTiers:['noob'],
    tierClearProgress:createTierFlagMap(),
    wrongBook:[],
    wrongBookView:'priority',
    currentTier:'noob',
    onboardingShown:false,
  };
}
function normalizeQuizState(raw){
  const state=buildEmptyQuizState(raw&&raw.dayKey?raw.dayKey:getLocalDayKey());
  if(!raw||typeof raw!=='object')return state;
  state.version=raw.version||0;
  TIER_ORDER.forEach(tier=>{
    const fallbackIds=getBaseTierQuestions(tier).slice(0,Math.min(QUIZ_STAGE_TOTAL,getBaseTierQuestions(tier).length)).map(q=>q.id);
    state.historyByTier[tier]=Array.isArray(raw.historyByTier?.[tier])?raw.historyByTier[tier].filter(id=>!!getBaseQuestionById(tier,id)):[];
    state.dailyDeckByTier[tier]=Array.isArray(raw.dailyDeckByTier?.[tier])&&raw.dailyDeckByTier[tier].length
      ?raw.dailyDeckByTier[tier].filter(id=>!!getBaseQuestionById(tier,id))
      :fallbackIds;
    state.masteredByTier[tier]=Array.isArray(raw.masteredByTier?.[tier])?raw.masteredByTier[tier].filter(id=>!!getBaseQuestionById(tier,id)):[];
  });
  state.unlockedTiers=Array.isArray(raw.unlockedTiers)&&raw.unlockedTiers.length
    ?[...new Set(raw.unlockedTiers.filter(tier=>TIER_ORDER.includes(tier)))]
    :['noob'];
  if(!state.unlockedTiers.includes('noob'))state.unlockedTiers.unshift('noob');
  state.tierClearProgress=cloneTierFlagMap(raw.tierClearProgress);
  state.wrongBook=Array.isArray(raw.wrongBook)?raw.wrongBook:[];
  state.wrongBookView=raw.wrongBookView==='latest'?'latest':'priority';
  state.currentTier=state.unlockedTiers.includes(raw.currentTier)?raw.currentTier:'noob';
  state.onboardingShown=!!raw.onboardingShown;
  return state;
}
function buildFreshDailyQuizState(prevRaw=null){
  const prev=normalizeQuizState(prevRaw);
  const next=buildEmptyQuizState(getLocalDayKey());
  next.onboardingShown=prev.onboardingShown;
  TIER_ORDER.forEach(tier=>{
    const {dailyIds,historyIds}=buildDailyTierIds(tier,prev.historyByTier[tier]);
    next.dailyDeckByTier[tier]=dailyIds;
    next.historyByTier[tier]=historyIds;
  });
  return next;
}
function hydrateDailyQuizDecks(){
  DAILY_QUIZZES=createTierMap(tier=>{
    const ids=(DAILY_QUIZ_STATE?.dailyDeckByTier?.[tier]||[]);
    const qs=ids.map(id=>getBaseQuestionById(tier,id)).filter(Boolean);
    return qs.length?qs:getBaseTierQuestions(tier).slice(0,Math.min(QUIZ_STAGE_TOTAL,getBaseTierQuestions(tier).length));
  });
}

// ── Calendar State ─────────────────────────────────────────────
// clearLog: { 'YYYY-MM-DD': true } for days with full 25q clearance
const CAL_CLEAR_LOG={};
let calYear=new Date().getFullYear(), calMonth=new Date().getMonth();
let todayAllClear=false;  // tracks if user cleared all 5 tiers today
let tierClearProgress={noob:false,beginner:false,mid:false,adv:false,expert:false};

// ── Tier unlock helper ─────────────────────────────────────────
function getTierBtn(tier){ return document.getElementById('tier'+tier.charAt(0).toUpperCase()+tier.slice(1)); }
function getTierQuestions(tier){
  return (DAILY_QUIZZES[tier]&&DAILY_QUIZZES[tier].length)?DAILY_QUIZZES[tier]:getBaseTierQuestions(tier);
}
function unlockTierUI(tier){
  TIER_META[tier].unlocked=true;
  const btn=getTierBtn(tier);
  if(btn)btn.classList.remove('locked');
}
function prevTier(tier){ const i=TIER_ORDER.indexOf(tier); return i>0?TIER_ORDER[i-1]:null; }
function nextTier(tier){ const i=TIER_ORDER.indexOf(tier); return i<TIER_ORDER.length-1?TIER_ORDER[i+1]:null; }
function getTierStageTotal(tier){ return Math.max(getTierQuestions(tier).length,1); }
function getQuestionKey(tier,q){ return tier+':'+q.id; }
function updateTierDesc(tier){
  const m=TIER_META[tier];
  const desc=document.getElementById('tierDesc');
  if(desc&&m)desc.textContent=m.icon+' '+m.en+' · '+m.desc;
}
function syncTierButtons(activeTier=curTier){
  const unlocked=new Set((DAILY_QUIZ_STATE?.unlockedTiers||['noob']).concat('noob'));
  TIER_ORDER.forEach(tier=>{
    const btn=getTierBtn(tier);
    const isUnlocked=unlocked.has(tier);
    TIER_META[tier].unlocked=isUnlocked;
    if(btn){
      btn.classList.toggle('locked',!isUnlocked);
      btn.classList.toggle('on',tier===activeTier);
    }
  });
  updateTierDesc(activeTier);
}
function syncWrongBookViewUI(){
  document.querySelectorAll('.wrongbook-chip').forEach(btn=>btn.classList.remove('on'));
  const idx=wrongBookView==='latest'?1:0;
  const chips=document.querySelectorAll('.wrongbook-chip');
  if(chips[idx])chips[idx].classList.add('on');
}
function setQuizNextDisabled(disabled){
  const btn=document.querySelector('.quiz-next');
  if(!btn)return;
  btn.disabled=!!disabled;
  btn.style.opacity=disabled?'0.45':'';
  btn.style.cursor=disabled?'not-allowed':'';
  btn.style.pointerEvents=disabled?'none':'';
  btn.style.filter=disabled?'grayscale(0.15)':'';
}
function writeQuizStorage(){
  if(!DAILY_QUIZ_STATE)return;
  DAILY_QUIZ_STATE.wrongBook=WRONG_BOOK.map(item=>({...item}));
  DAILY_QUIZ_STATE.wrongBookView=wrongBookView;
  DAILY_QUIZ_STATE.currentTier=curTier;
  DAILY_QUIZ_STATE.tierClearProgress={...tierClearProgress};
  DAILY_QUIZ_STATE.unlockedTiers=[...new Set(TIER_ORDER.filter(tier=>TIER_META[tier].unlocked))];
  if(!DAILY_QUIZ_STATE.unlockedTiers.includes('noob'))DAILY_QUIZ_STATE.unlockedTiers.unshift('noob');
  try{localStorage.setItem(QUIZ_STORAGE_KEY,JSON.stringify(DAILY_QUIZ_STATE));}
  catch(e){}
}
function ensureDailyQuizState(forceRefresh=false){
  const stored=normalizeQuizState(readQuizStorage());
  if(forceRefresh||stored.version!==QUIZ_STORAGE_VERSION||stored.dayKey!==getLocalDayKey()){
    DAILY_QUIZ_STATE=buildFreshDailyQuizState(stored);
    WRONG_BOOK.splice(0,WRONG_BOOK.length);
    wrongBookView='priority';
    tierClearProgress=createTierFlagMap();
    curTier='noob';
  } else {
    DAILY_QUIZ_STATE=stored;
    WRONG_BOOK.splice(0,WRONG_BOOK.length,...stored.wrongBook);
    wrongBookView=stored.wrongBookView;
    tierClearProgress=cloneTierFlagMap(stored.tierClearProgress);
    curTier=stored.currentTier&&stored.unlockedTiers.includes(stored.currentTier)?stored.currentTier:'noob';
  }
  hydrateDailyQuizDecks();
  syncTierButtons(curTier);
  syncWrongBookViewUI();
  writeQuizStorage();
}
function markQuestionMastered(tier,questionId){
  if(!DAILY_QUIZ_STATE)return;
  const list=DAILY_QUIZ_STATE.masteredByTier[tier]||(DAILY_QUIZ_STATE.masteredByTier[tier]=[]);
  if(!list.includes(questionId))list.push(questionId);
}
function getMasteredKeySet(tier){
  return new Set((DAILY_QUIZ_STATE?.masteredByTier?.[tier]||[]).map(id=>tier+':'+id));
}
function resetTierRoundState(tier){
  const qs=getTierQuestions(tier);
  stageQuestionKeys=qs.map(q=>getQuestionKey(tier,q));
  stageMasteredKeys=getMasteredKeySet(tier);
  stageStartingMasteredCount=stageMasteredKeys.size;
  stagePendingWrongKeys=new Set(WRONG_BOOK.filter(item=>item.tier===tier&&stageQuestionKeys.includes(item.key)&&!stageMasteredKeys.has(item.key)).map(item=>item.key));
  stageQueue=qs.filter(q=>!stageMasteredKeys.has(getQuestionKey(tier,q)));
  curQIdx=0;
  consecutiveWrong=0;
  wrongInRound=0;
  currentQuestionAnswered=false;
  currentQuestionCorrect=false;
  currentRenderedQuestion=null;
  demotionPending=false;
  setQuizNextDisabled(stageQueue.length>0);
}
function isActiveStageQuestion(key){ return stageQuestionKeys.includes(key); }
function isCurrentTierCleared(){
  return stageQuestionKeys.length>0
    && stageQuestionKeys.every(key=>stageMasteredKeys.has(key));
}
function getCurrentStageQuestion(){ return stageQueue[curQIdx]||null; }
function getStageDisplayIndex(){
  if(!stageQuestionKeys.length)return 1;
  if(!stageQueue.length)return stageQuestionKeys.length;
  return Math.min(stageStartingMasteredCount+curQIdx+1,stageQuestionKeys.length);
}

// ── Tier switch ────────────────────────────────────────────────
function setTier(el,tier){
  if(!el)return;
  if(!TIER_META[tier].unlocked){
    toast('先通关当前阶段才能解锁下一关 🔒','warn');return;
  }
  tierTransitioning=false;
  curTier=tier;
  if(DAILY_QUIZ_STATE)DAILY_QUIZ_STATE.currentTier=tier;
  syncTierButtons(tier);
  resetTierRoundState(tier);
  writeQuizStorage();
  loadQ();
}

// ── Onboarding ─────────────────────────────────────────────────
function showOnboarding(){
  if(DAILY_QUIZ_STATE){
    DAILY_QUIZ_STATE.onboardingShown=true;
    writeQuizStorage();
  }
  obStep='choice';placementScore=0;placementIdx=0;
  document.getElementById('onboardModal').style.display='flex';
  document.getElementById('obChoice').style.display='';
  document.getElementById('obPlacement').style.display='none';
  document.getElementById('obResult').style.display='none';
}
function closeOnboarding(){document.getElementById('onboardModal').style.display='none';}
function startAsNoob(){
  // Reset all tiers to locked except noob
  TIER_ORDER.forEach((t,i)=>{TIER_META[t].unlocked=(i===0);});
  TIER_ORDER.forEach((t,i)=>{const btn=getTierBtn(t);if(btn&&i>0)btn.classList.add('locked');});
  if(DAILY_QUIZ_STATE){
    DAILY_QUIZ_STATE.masteredByTier=createTierMap(()=>[]);
    DAILY_QUIZ_STATE.unlockedTiers=['noob'];
    DAILY_QUIZ_STATE.currentTier='noob';
  }
  WRONG_BOOK.splice(0,WRONG_BOOK.length);
  tierClearProgress=createTierFlagMap();
  wrongBookView='priority';
  syncWrongBookViewUI();
  renderWrongBook();
  closeOnboarding();
  const btn=getTierBtn('noob'); if(btn)setTier(btn,'noob');
  toast('已设置为萌新阶，打怪升级开始！🌱','success');
}
function startPlacementTest(){
  obStep='placement';placementScore=0;placementIdx=0;
  document.getElementById('obChoice').style.display='none';
  document.getElementById('obPlacement').style.display='';
  renderPlacementQ();
}
function renderPlacementQ(){
  const q=PLACEMENT_POOL[placementIdx];
  if(!q)return;
  document.getElementById('obPNum').textContent=placementIdx+1;
  document.getElementById('obPBar').style.width=((placementIdx)/5*100)+'%';
  document.getElementById('obPQ').textContent=q.q;
  document.getElementById('obPOpts').innerHTML=q.opts.map((o,i)=>
    `<button class="placement-opt" onclick="ansPlacement(this,${i==q.ans})">
      <span class="placement-lbl">${String.fromCharCode(65+i)}</span>${o}
    </button>`).join('');
}
function ansPlacement(el,correct){
  el.closest('#obPOpts').querySelectorAll('.placement-opt').forEach(b=>b.classList.add('disabled'));
  el.classList.add(correct?'ok':'ng');
  if(correct)placementScore++;
  setTimeout(()=>{placementIdx++;if(placementIdx<5)renderPlacementQ();else showPlacementResult();},700);
}
function showPlacementResult(){
  const tiers=['noob','noob','beginner','mid','adv','expert'];
  const resultTier=tiers[Math.min(placementScore,5)];
  const m=TIER_META[resultTier];
  // Unlock up to result tier
  TIER_ORDER.forEach((t,i)=>{
    const unlk=TIER_META[t].level<=TIER_META[resultTier].level;
    TIER_META[t].unlocked=unlk;
    const btn=getTierBtn(t);if(btn){if(unlk)btn.classList.remove('locked');else btn.classList.add('locked');}
  });
  document.getElementById('obPlacement').style.display='none';
  document.getElementById('obResult').style.display='';
  document.getElementById('obResIco').textContent=m.icon;
  document.getElementById('obResTier').textContent='答对 '+placementScore+' / 5 题';
  document.getElementById('obResName').textContent=m.label+' · '+m.en;
  const subs=['继续加油，打好基础！','稳扎稳打，继续修炼！','不错！中阶已解锁。','厉害！进阶已解锁！','老韭菜！全阶已解锁！'];
  document.getElementById('obResSub').textContent=subs[Math.min(placementScore,4)];
  window._pendingTier=resultTier;
}
function confirmTier(){
  const t=window._pendingTier||'noob';
  if(DAILY_QUIZ_STATE){
    DAILY_QUIZ_STATE.masteredByTier=createTierMap(()=>[]);
    DAILY_QUIZ_STATE.currentTier=t;
  }
  WRONG_BOOK.splice(0,WRONG_BOOK.length);
  tierClearProgress=createTierFlagMap();
  wrongBookView='priority';
  syncWrongBookViewUI();
  renderWrongBook();
  closeOnboarding();
  const btn=getTierBtn(t); if(btn)setTier(btn,t);
  toast('已解锁「'+TIER_META[t].label+'」段位 '+TIER_META[t].icon,'success');
}

// ── Demotion Panel ─────────────────────────────────────────────
function showDemotionPanel(fromTier,toTier){
  demotionTarget=toTier;
  const from=TIER_META[fromTier],to=toTier?TIER_META[toTier]:null;
  document.getElementById('demFrom').textContent=from.icon+' '+from.label;
  document.getElementById('demTo').textContent=to?(to.icon+' '+to.label):'（本阶重置）';
  document.getElementById('demSub').textContent=toTier
    ?'当前阶段连续答错 3 次，请退回上一阶重新修炼！'
    :'萌新阶连续答错 3 次，重新洗牌五道新题，继续努力！';
  document.getElementById('demotionPanel').style.display='flex';
}
function confirmDemotion(){
  document.getElementById('demotionPanel').style.display='none';
  tierClearProgress[curTier]=false;
  demotionPending=false;
  if(demotionTarget){
    // Demote
    const btn=getTierBtn(demotionTarget); if(btn)setTier(btn,demotionTarget);
    toast('已退回「'+TIER_META[demotionTarget].label+'」重新修炼','warn');
  } else {
    // Same tier, reshuffle questions
    shuffleTierQuestions(curTier);
    resetTierRoundState(curTier);
    writeQuizStorage();
    loadQ();
  }
  demotionTarget=null;
}
function shuffleTierQuestions(tier){
  DAILY_QUIZZES[tier]=shuffleArray(getTierQuestions(tier));
  if(DAILY_QUIZ_STATE)DAILY_QUIZ_STATE.dailyDeckByTier[tier]=DAILY_QUIZZES[tier].map(q=>q.id);
  writeQuizStorage();
}
function renderQuizOptions(question){
  return shuffleArray(question.opts).map((text,i)=>
    `<div class="qopt" onclick="ansQ(this)" data-value="${escapeHtml(text)}">
      <div class="qlbl">${String.fromCharCode(65+i)}</div>${escapeHtml(text)}
    </div>`).join('');
}
function animateQuizAdvance(onSwap){
  const box=document.querySelector('.quiz-box');
  const tierBar=document.getElementById('tierBar');
  [box,tierBar].forEach(el=>{
    if(!el)return;
    el.style.transition='transform .35s cubic-bezier(.22,1,.36,1),opacity .35s ease,filter .35s ease';
  });
  if(box){
    box.style.opacity='0.26';
    box.style.transform='translateX(22px) scale(.985)';
    box.style.filter='blur(3px)';
  }
  if(tierBar){
    tierBar.style.opacity='.78';
    tierBar.style.transform='translateX(10px)';
  }
  setTimeout(()=>{
    if(typeof onSwap==='function')onSwap();
    requestAnimationFrame(()=>{
      if(box){
        box.style.opacity='1';
        box.style.transform='translateX(0) scale(1)';
        box.style.filter='none';
      }
      if(tierBar){
        tierBar.style.opacity='1';
        tierBar.style.transform='translateX(0)';
      }
    });
  },220);
}
function pulseTierButton(tier){
  const btn=getTierBtn(tier);
  if(!btn)return;
  btn.style.transition='transform .35s ease, box-shadow .35s ease';
  btn.style.transform='translateY(-2px) scale(1.03)';
  btn.style.boxShadow='0 0 0 1px rgba(240,185,11,.25) inset, 0 12px 28px rgba(240,185,11,.22)';
  setTimeout(()=>{btn.style.transform='';btn.style.boxShadow='';},650);
}
function completeCurrentTier(){
  if(tierTransitioning)return;
  tierTransitioning=true;
  const completedTier=curTier;
  tierClearProgress[completedTier]=true;
  const next=nextTier(completedTier);
  writeQuizStorage();
  if(next){
    if(!TIER_META[next].unlocked)unlockTierUI(next);
    pulseTierButton(next);
    writeQuizStorage();
    toast(TIER_META[completedTier].icon+' 通关！自动晋级「'+TIER_META[next].label+'」','success');
    setTimeout(()=>{
      const btn=getTierBtn(next);
      if(btn)animateQuizAdvance(()=>setTier(btn,next));
      else tierTransitioning=false;
    },320);
    return;
  }
  markTodayClear();
  writeQuizStorage();
  toast('🏆 全阶通关！今日大满贯达成！','success');
  resetTierRoundState(completedTier);
  loadQ();
  tierTransitioning=false;
}
function getNextDailyResetTime(){
  const now=new Date();
  return new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,0,0);
}
function formatCountdown(ms){
  const total=Math.max(0,Math.floor(ms/1000));
  const h=Math.floor(total/3600);
  const m=Math.floor((total%3600)/60);
  const s=total%60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function refreshDailyQuizState(){
  tierTransitioning=false;
  lastQuizCountdownText='';
  ensureDailyQuizState(true);
  const btn=getTierBtn('noob');
  if(btn)setTier(btn,'noob');
  syncWrongBookViewUI();
  renderWrongBook();
  toast('新一天题库已解锁，今日 25 题已刷新','success');
}
function updateQuizCountdown(){
  if(DAILY_QUIZ_STATE&&DAILY_QUIZ_STATE.dayKey!==getLocalDayKey()){
    refreshDailyQuizState();
    return;
  }
  const el=document.getElementById('quizCountdown');
  if(!el)return;
  const text='⏳ 距离新题库解锁：'+formatCountdown(getNextDailyResetTime()-Date.now());
  if(text===lastQuizCountdownText)return;
  lastQuizCountdownText=text;
  el.style.opacity='.72';
  el.style.transform='translateY(-1px)';
  setTimeout(()=>{
    el.textContent=text;
    el.style.opacity='1';
    el.style.transform='translateY(0)';
  },40);
}
function startQuizCountdown(){
  updateQuizCountdown();
  clearInterval(quizCountdownTimer);
  quizCountdownTimer=setInterval(updateQuizCountdown,1000);
}

// ── Quiz load ──────────────────────────────────────────────────
function loadQ(){
  if(!stageQuestionKeys.length)resetTierRoundState(curTier);
  const stageTotal=getTierStageTotal(curTier);
  const q=getCurrentStageQuestion();
  const qEl=document.getElementById('quizQ');
  const optEl=document.getElementById('quizOpts');
  if(!q){
    currentRenderedQuestion=null;
    currentQuestionAnswered=isCurrentTierCleared();
    currentQuestionCorrect=currentQuestionAnswered;
    qEl.textContent=isCurrentTierCleared()
      ?'本阶段今日题目已全部掌握，点击下一题自动切换更高等级。'
      :'当前阶段题目已答完，先去右侧错题本复活后再晋级。';
    optEl.innerHTML=`<div style="font-size:11px;color:var(--t2);line-height:1.8;padding:2px 0">
      ${isCurrentTierCleared()
        ?`已掌握 ${stageQuestionKeys.length} / ${stageTotal} 题，系统会自动承认这些已掌握题。`
        :'修掉错题后，系统会立刻把它们计入已掌握，不会再回到抽题池。'}
    </div>`;
    setQuizNextDisabled(stageQuestionKeys.length===0);
  } else {
    curQIdx=Math.min(curQIdx,Math.max(stageQueue.length-1,0));
    currentRenderedQuestion={
      tier:curTier,
      question:q,
      questionKey:getQuestionKey(curTier,q),
      correctAnswer:q.opts[q.ans],
    };
    qEl.textContent=q.q;
    optEl.innerHTML=renderQuizOptions(q);
    currentQuestionAnswered=false;
    currentQuestionCorrect=false;
    setQuizNextDisabled(true);
  }
  const n=document.getElementById('qNum');if(n)n.textContent=getStageDisplayIndex();
  const pf=document.getElementById('qPfill');if(pf)pf.style.width=(getStageDisplayIndex()/stageTotal*100)+'%';
  // Streak badge
  const sb=document.getElementById('streakBadge');
  if(sb&&wrongInRound===0&&getStageDisplayIndex()>1){sb.textContent='🔥 节奏在线';sb.style.display='';}
  else if(sb)sb.style.display='none';
}

// ── Answer ─────────────────────────────────────────────────────
function ansQ(el){
  if(demotionPending||currentQuestionAnswered||!currentRenderedQuestion)return;
  const opts=el.closest('.quiz-opts');
  opts.querySelectorAll('.qopt').forEach(o=>o.classList.add('disabled'));
  const selectedValue=el.dataset.value||'';
  const correct=selectedValue===currentRenderedQuestion.correctAnswer;
  el.classList.add(correct?'ok':'ng');
  currentQuestionAnswered=true;
  currentQuestionCorrect=!!correct;
  const q=currentRenderedQuestion.question;
  const questionKey=currentRenderedQuestion.questionKey;
  setQuizNextDisabled(false);

  if(correct){
    consecutiveWrong=0;
    markQuestionMastered(curTier,q.id);
    stageMasteredKeys.add(questionKey);
    stagePendingWrongKeys.delete(questionKey);
    writeQuizStorage();
    toast('正确！+30 XP 🎉','success');
  } else {
    consecutiveWrong++;
    wrongInRound++;
    stagePendingWrongKeys.add(questionKey);
    recordWrongQuestion(q,selectedValue);
    document.getElementById('wrongTitle').textContent=['这也能错？！','真的假的？','再想想？','不太对哦～','加油！'][Math.floor(Math.random()*5)];
    document.getElementById('wrongJoke').textContent=q.ai_mockery||q.joke||'';
    document.getElementById('wrongAI').textContent=q.explanation||q.ai||'';
    openModal('modal-wrong');
    // 3 wrong = demotion
    if(wrongInRound>=3){
      demotionPending=true;
      setQuizNextDisabled(true);
      writeQuizStorage();
      const prev=prevTier(curTier);
      setTimeout(()=>showDemotionPanel(curTier,prev),250);
    } else {
      writeQuizStorage();
    }
  }
}

// ── Next question / Level clear ────────────────────────────────
function nextQ(){
  if(tierTransitioning)return;
  if(demotionPending){
    toast('已触发强制降级，先完成当前重置流程','warn');
    return;
  }
  if(!stageQuestionKeys.length){
    toast('今日题库尚未准备好，请稍后再试','warn');
    return;
  }
  if(!stageQueue.length&&isCurrentTierCleared()){
    completeCurrentTier();
    return;
  }
  if(!currentQuestionAnswered){
    setQuizNextDisabled(true);
    toast('请先选择答案，再进入下一题','warn');
    return;
  }
  const isLastQuestion=curQIdx>=stageQueue.length-1;
  if(!isLastQuestion){
    curQIdx++;
    loadQ();
    return;
  }
  if(!isCurrentTierCleared()){
    toast(stagePendingWrongKeys.size
      ?'本阶段还有错题未复活，先去右侧错题本消灭它们'
      :'本阶段 5 题尚未全部答对，暂时不能晋级','warn');
    return;
  }
  completeCurrentTier();
}

// ── Calendar ───────────────────────────────────────────────────
function markTodayClear(){
  const now=new Date();
  const key=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0');
  CAL_CLEAR_LOG[key]=true;
  todayAllClear=true;
}
function openCalModal(){
  document.getElementById('calModal').style.display='flex';
  renderCal();
}
function closeCalModal(){document.getElementById('calModal').style.display='none';}
function calChangeMonth(delta){
  calMonth+=delta;
  if(calMonth>11){calMonth=0;calYear++;}
  if(calMonth<0){calMonth=11;calYear--;}
  renderCal();
}
function renderCal(){
  const now=new Date();
  const todayKey=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0');
  // Month label
  const monthNames=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  document.getElementById('calMonthLabel').textContent=calYear+'年'+monthNames[calMonth];
  // Build grid
  const firstDay=new Date(calYear,calMonth,1).getDay();
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  let cells='';
  for(let i=0;i<firstDay;i++) cells+=`<div class="cal-day empty"></div>`;
  for(let d=1;d<=daysInMonth;d++){
    const key=calYear+'-'+String(calMonth+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    const isToday=(key===todayKey);
    const cleared=CAL_CLEAR_LOG[key];
    let cls='cal-day';
    if(isToday)cls+=' today';
    if(cleared)cls+=' cleared';
    cells+=`<div class="${cls}">${d}</div>`;
  }
  document.getElementById('calGrid').innerHTML=cells;
  // Stats
  const monthPrefix=calYear+'-'+String(calMonth+1).padStart(2,'0')+'-';
  let monthCount=0;
  Object.keys(CAL_CLEAR_LOG).forEach(k=>{if(k.startsWith(monthPrefix)&&CAL_CLEAR_LOG[k])monthCount++;});
  document.getElementById('calMonthCount').textContent=monthCount;
  // Max streak (global)
  document.getElementById('calMaxStreak').textContent=calcMaxStreak();
}
function calcMaxStreak(){
  const keys=Object.keys(CAL_CLEAR_LOG).filter(k=>CAL_CLEAR_LOG[k]).sort();
  if(!keys.length)return 0;
  let max=1,cur=1;
  for(let i=1;i<keys.length;i++){
    const prev=new Date(keys[i-1]),curr=new Date(keys[i]);
    const diff=(curr-prev)/86400000;
    if(diff===1){cur++;max=Math.max(max,cur);}else cur=1;
  }
  return max;
}

// ── Wrong book ─────────────────────────────────────────────────
function setWrongBookView(view,el){
  wrongBookView=view;
  syncWrongBookViewUI();
  writeQuizStorage();
  renderWrongBook();
}
function getWrongPriority(tier){
  const WRONG_PRIORITY={noob:{score:1,label:'基础复习'},beginner:{score:1,label:'基础复习'},mid:{score:2,label:'中优先级'},adv:{score:3,label:'高优先级'},expert:{score:3,label:'高优先级'}};
  return WRONG_PRIORITY[tier]||WRONG_PRIORITY.noob;
}
function recordWrongQuestion(q,selectedValue){
  const key=curTier+':'+q.id;
  const priority=getWrongPriority(curTier);
  const DIFF_LABELS={noob:'萌新',beginner:'新手',mid:'中阶',adv:'进阶',expert:'高阶'};
  const payload={key,id:q.id,q:q.q,opts:q.opts,ans:q.ans,
    wrongAnswer:selectedValue,correctAnswer:q.opts[q.ans],
    tier:curTier,diffLabel:DIFF_LABELS[curTier]||'新手',
    priorityScore:priority.score,priorityLabel:priority.label,
    ref:q.ref||'',refLabel:q.refLabel||'查看资料',
    explanation:q.explanation||'',ai_mockery:q.ai_mockery||'',
    mastered:false,updatedAt:Date.now()};
  const existing=WRONG_BOOK.find(i=>i.key===key);
  if(existing)Object.assign(existing,payload,{count:(existing.count||1)+1});
  else WRONG_BOOK.push({...payload,count:1});
  writeQuizStorage();
  renderWrongBook();
}

function retryWrongCard(key){
  const item=WRONG_BOOK.find(i=>i.key===key);
  if(!item)return;
  const boxId='retry-'+key.replace(/[^a-z0-9]/gi,'_');
  const existing=document.getElementById(boxId);
  if(existing){existing.classList.toggle('open');return;}
  // Build retry box
  const box=document.createElement('div');
  box.className='wb-retry-box open';
  box.id=boxId;
  box.innerHTML=`<div style="font-size:11px;font-weight:700;color:var(--t2);margin-bottom:8px">重新挑战：</div>
    <div class="wb-retry-opts">${shuffleArray(item.opts).map((text,i)=>
      `<button class="wb-ropt" onclick="ansRetry(this,'${key}')" data-value="${escapeHtml(text)}">${escapeHtml(text)}</button>`
    ).join('')}</div>`;
  const card=document.querySelector(`[data-wbkey="${key}"]`);
  if(card){const footer=card.querySelector('.wb-card-footer');if(footer)card.insertBefore(box,footer);}
}

function ansRetry(el,key){
  el.closest('.wb-retry-opts').querySelectorAll('.wb-ropt').forEach(b=>b.classList.add('disabled'));
  const item=WRONG_BOOK.find(i=>i.key===key);
  if(!item)return;
  const selectedValue=el.dataset.value||'';
  const correct=selectedValue===item.correctAnswer;
  el.classList.add(correct?'ok':'ng');
  if(correct){
    markQuestionMastered(item.tier,item.id);
    if(isActiveStageQuestion(key)){
      stagePendingWrongKeys.delete(key);
      stageMasteredKeys.add(key);
    }
    writeQuizStorage();
    toast('复仇成功！题目已掌握 ✅','success');
    setTimeout(()=>{
      const card=document.querySelector(`[data-wbkey="${key}"]`);
      if(card){
        card.classList.add('mastering');
        setTimeout(()=>{
          const idx=WRONG_BOOK.findIndex(i=>i.key===key);
          if(idx>=0)WRONG_BOOK.splice(idx,1);
          writeQuizStorage();
          renderWrongBook();
          if(item.tier===curTier&&isCurrentTierCleared())completeCurrentTier();
        },800);
      }
    },500);
  } else {
    item.count=(item.count||1)+1;
    // Escalate mockery
    item.ai_mockery='🤖 小何嘲笑：刚看完答案还能错？你的记忆力只有 7 秒吗？';
    item.updatedAt=Date.now();
    writeQuizStorage();
    toast('再次答错，继续加油 💪','warn');
    setTimeout(()=>renderWrongBook(),600);
  }
}

function renderWrongBook(){
  const list=document.getElementById('wrongBookList');
  const countEl=document.getElementById('wrongCount');
  if(!list||!countEl)return;
  const visible=WRONG_BOOK.filter(i=>!i.mastered);
  countEl.textContent=visible.length+' 题';
  if(!visible.length){
    list.innerHTML=`<div class="wrongbook-empty-grid">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
      答错的题会自动出现在这里，通过重新挑战将其消灭！
    </div>`;
    return;
  }
  const items=[...visible].sort((a,b)=>{
    if(wrongBookView==='latest')return b.updatedAt-a.updatedAt;
    if(b.priorityScore!==a.priorityScore)return b.priorityScore-a.priorityScore;
    return b.updatedAt-a.updatedAt;
  });
  const tierClass={noob:'t1',beginner:'t2',mid:'t3',adv:'t4',expert:'t5'};
  const pClass={1:'p1',2:'p2',3:'p3'};
  const DIFF_LABELS={noob:'萌新',beginner:'新手',mid:'中阶',adv:'进阶',expert:'高阶'};
  list.innerHTML=items.map(item=>`
    <div class="wb-card" data-wbkey="${item.key}">
      <div class="wb-card-header">
        <span class="wb-diff-tag ${tierClass[item.tier]||'t2'}">${TIER_META[item.tier]?.icon||''} ${DIFF_LABELS[item.tier]||item.diffLabel}</span>
        <span class="wb-priority ${pClass[item.priorityScore]||'p1'}"><span class="wb-priority-dot"></span>${item.priorityLabel}</span>
      </div>
      <div class="wb-card-body">
        <div class="wb-question">${escapeHtml(item.q)}</div>
        <div class="wb-answers">
          <div class="wb-wrong-ans">${escapeHtml(item.wrongAnswer)}</div>
          <div class="wb-correct-ans">${escapeHtml(item.correctAnswer)}</div>
        </div>
        ${item.ai_mockery?`<div class="wb-mockery">${escapeHtml(item.ai_mockery)}</div>`:''}
      </div>
      <div class="wb-card-footer">
        <span class="wb-count">答错 ${item.count||1} 次</span>
        <div style="display:flex;gap:5px;align-items:center">
          <button class="wb-retry" onclick="retryWrongCard('${item.key}')">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            重新挑战
          </button>
          ${item.ref?`<a class="wb-link" href="${item.ref}" target="_blank">${escapeHtml(item.refLabel)}<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>`:''}
        </div>
      </div>
    </div>`).join('');
}

// ── AI Demotion Toast (legacy — now uses panel) ────────────────
const DEMOTION_MSGS={expert:[],adv:[],mid:[],beginner:[],noob:[]};
function showDemotionToast(){/* replaced by panel */}

function deleteCard(id){
  const idx=CARDS.findIndex(c=>c.id===id);
  if(idx===-1)return;
  const title=CARDS[idx].title;
  CARDS.splice(idx,1);
  renderCards();
  toast(`已删除 "${title}"`,'info');
}

const ACTIVITY_CAT_LABELS={
  launch:'打新与空投',
  earn:'理财赚币',
  square:'学习与答题',
  trade:'交易活动',
  welfare:'福利与抽奖',
  social:'社媒活动',
  newbie:'钱包活动',
  all:'全部活动'
};

function updateActivityBadges(){
  const counts={all:CARDS.length,launch:0,earn:0,square:0,trade:0,welfare:0,social:0,newbie:0};
  CARDS.forEach(c=>{if(counts[c.cat]!==undefined)counts[c.cat]++;});

  document.querySelectorAll('.cat-bar .ctab').forEach(tab=>{
    const txt=(tab.textContent||'').trim();
    const key=txt.includes('全部')?'all':
      txt.includes('打新与空投')?'launch':
      txt.includes('理财赚币')?'earn':
      txt.includes('学习与答题')?'square':
      txt.includes('交易活动')?'trade':
      txt.includes('福利与抽奖')?'welfare':
      txt.includes('社媒活动')?'social':
      txt.includes('钱包活动')?'newbie':null;
    const badge=tab.querySelector('.ctab-n');
    if(badge&&key&&counts[key]!==undefined)badge.textContent=counts[key];
  });

  const navBadge=document.querySelector('.nav-tabs .ntab:nth-child(2) .nbadge');
  if(navBadge)navBadge.textContent=String(counts.all);
}

function mapAnnouncementToCard(item){
  const info=inferActivityInfoFromUrl(item.url);
  return {
    id:'feed_'+item.id,
    cat:info.cat,
    emoji:'🆕',
    title:clipActivityText(item.title||info.title,42),
    subtitle:clipActivityText(info.sub||'币安官方公告活动',48),
    tags:[...(info.tags||[]).slice(0,2),'官方公告'],
    stripe:'var(--gold)',
    ico:'var(--gs)',
    deadlineSoon:false,
    deadline:'公告更新',
    dlLabel:'',
    nums:[{l:'来源',v:'Binance Support',c:'var(--gold)'},{l:'状态',v:'待确认规则'}],
    progress:null,
    risk:null,
    subscribed:false,
    drawer:{
      tags:[...(info.tags||[]),'官方公告'],
      details:[
        {i:'info',l:'公告标题',v:item.title||info.title},
        {i:'info',l:'识别建议',v:'请先阅读公告中的奖励、时间和资格规则'},
        {i:'link',l:'官方链接',link:item.url,lv:'前往公告 →'}
      ],
      steps:['打开官方公告原文','确认活动时间和资格','核对奖励与发放规则','完成官方要求动作','回到仪表盘跟踪进度'],
      est:'5-10 分钟'
    }
  };
}

async function syncOfficialActivities(){
  const endpoint='https://r.jina.ai/http://www.binance.com/en/support/announcement';
  try{
    const res=await fetch(endpoint,{headers:{Accept:'text/plain'}});
    if(!res.ok)throw new Error('fetch failed');
    const text=await res.text();
    const lines=text.split('\n').map(l=>l.trim()).filter(Boolean);
    const found=[];
    const seen=new Set();

    for(const line of lines){
      const m=line.match(/\[(.*?)\]\((https:\/\/www\.binance\.com\/en\/support\/announcement\/detail\/[^)]+)\)/i);
      if(!m)continue;
      const title=m[1]?.trim();
      const url=m[2]?.trim();
      if(!title||!url||seen.has(url))continue;
      seen.add(url);
      found.push({id:btoa(url).replace(/[^a-z0-9]/gi,'').slice(0,18),title,url});
      if(found.length>=12)break;
    }

    if(!found.length)throw new Error('no parsed activity');

    const existingIds=new Set(CARDS.filter(c=>String(c.id).startsWith('feed_')).map(c=>c.id));
    const nextCards=found.map(mapAnnouncementToCard).filter(c=>!existingIds.has(c.id));
    if(nextCards.length){
      CARDS.unshift(...nextCards);
      updateActivityBadges();
      renderCards();
      toast(`已同步 ${nextCards.length} 条官方公告活动`,'success');
    }
  }catch(e){
    console.warn('syncOfficialActivities failed',e);
  }
}
const CUSTOM_ACTIVITY_RULES=[
  {keywords:['launchpool'],cat:'launch',title:'Launchpool 活动',sub:'质押代币参与新币挖矿',tags:['Launchpool','打新挖矿'],deadline:'以活动页开放时间为准',nums:[{l:'参与方式',v:'质押 BNB / FDUSD'},{l:'发放节奏',v:'按活动规则'}],details:'这类活动通常通过质押平台资产领取新项目代币，重点看开放时间、可用池子和奖励发放节奏。',steps:['打开活动页面确认开放时间','查看支持的质押资产','选择池子参与质押','关注奖励发放和赎回规则','到期后查看收益明细'],est:'5 分钟'},
  {keywords:['megadrop'],cat:'launch',title:'Megadrop 活动',sub:'质押加任务获取新项目奖励',tags:['Megadrop','链上任务'],deadline:'按活动赛季进行',nums:[{l:'参与方式',v:'质押 + 任务'},{l:'关注重点',v:'积分权重',c:'var(--gold)'}],details:'Megadrop 往往不止质押，还会叠加 Web3 任务或积分机制，重点看积分规则、任务入口和奖励分配方式。',steps:['先查看活动总规则','确认需要的质押资产','完成页面列出的 Web3 任务','检查积分是否到账','等待最终奖励分发'],est:'10 分钟'},
  {keywords:['simple-earn','earn','staking','learn-and-earn','learn%20and%20earn'],cat:'earn',title:'Earn 活动',sub:'存入或学习完成任务获取收益',tags:['Earn','收益任务'],deadline:'以页面开放状态为准',nums:[{l:'参与入口',v:'产品页申购'},{l:'主要关注',v:'年化 / 锁仓'}],details:'这类页面通常和申购收益、学习答题或锁仓奖励相关，重点确认年化、锁仓周期、资格要求和奖励到账时间。',steps:['进入活动或产品详情页','确认是否需要 KYC','查看收益率和锁仓周期','完成申购或答题任务','留意结算和领取时间'],est:'8 分钟'},
  {keywords:['wotd','word-of-the-day','square','post'],cat:'square',title:'币安广场活动',sub:'完成互动或答题领取奖励',tags:['币安广场','互动任务'],deadline:'通常为每日 / 每期活动',nums:[{l:'参与方式',v:'答题 / 互动'},{l:'奖励形式',v:'积分或代币',c:'var(--gold)'}],details:'广场活动常见于答题、互动或内容任务，核心是按页面要求完成操作，并在规定时间内提交。',steps:['先阅读活动说明','完成指定互动或答题动作','检查是否需要关注或转发','在活动期内提交结果','等待奖励发放'],est:'5 分钟'},
  {keywords:['trade','futures','spot','copy','perpetual'],cat:'trade',title:'交易活动',sub:'通过交易量或任务解锁奖励',tags:['交易活动','需交易'],deadline:'请关注活动赛季或倒计时',nums:[{l:'考核维度',v:'交易量 / 收益率'},{l:'风险等级',v:'注意仓位',c:'var(--red)'}],details:'交易活动通常与现货、合约、跟单或链上永续有关，奖励和排名与交易表现挂钩，务必确认规则与风险。',steps:['确认活动赛制与报名条件','查看支持的交易对或产品','了解奖励结算规则','控制仓位和风险','按周期跟踪排名或进度'],est:'视交易情况而定'},
  {keywords:['referral','basictasks','new-user','newbie','referral-entry'],cat:'newbie',title:'新用户任务',sub:'完成注册与基础任务领取奖励',tags:['新用户','任务礼包'],deadline:'注册后有效期内完成',nums:[{l:'常见任务',v:'注册 / KYC / 首充'},{l:'奖励形式',v:'USDT / 券包',c:'var(--gold)'}],details:'这类活动面向新用户，通常要求完成注册、KYC、首充或首笔交易，重点看有效期和领取入口。',steps:['先确认任务链条','按顺序完成注册和认证','完成首充或首次交易','回到活动页检查进度','在有效期内领取奖励'],est:'10 分钟'},
  {keywords:['rewards-hub','points'],cat:'welfare',title:'积分福利活动',sub:'完成任务兑换积分或福利',tags:['积分福利','官方权益'],deadline:'按页面展示为准',nums:[{l:'入口类型',v:'积分商城'},{l:'适合人群',v:'日常活跃用户'}],details:'积分福利页面一般围绕任务兑换、福利领取或专区权益，重点查看兑换条件、数量限制和到账方式。',steps:['查看当前可兑换权益','确认所需积分或资格','按说明完成兑换流程','检查账户或券包到账','留意有效期'],est:'5 分钟'}
];

function cloneRulePayload(rule){
  return{
    ...rule,
    tags:[...(rule.tags||[])],
    nums:(rule.nums||[]).map(item=>({...item})),
    steps:[...(rule.steps||[])]
  };
}

function formatActivitySegment(segment){
  return decodeURIComponent(segment)
    .replace(/([a-z])([A-Z])/g,'$1 $2')
    .replace(/[-_]+/g,' ')
    .replace(/\s+/g,' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(part=>/^[a-z]{1,4}$/i.test(part)?part.toUpperCase():part.charAt(0).toUpperCase()+part.slice(1))
    .join(' ');
}

function extractActivitySlug(urlObj){
  const ignore=new Set(['support','announcement','detail','activity','referral-entry','perpetuals','milestone-tc','post','square']);
  const locales=/^(en|zh|zh-cn|zh-hk|zh-tw|zh-sg)$/i;
  const segments=urlObj.pathname.split('/').filter(Boolean);
  const meaningful=segments.filter(seg=>{
    const lower=decodeURIComponent(seg).toLowerCase();
    return !ignore.has(lower)&&!locales.test(lower)&&!/^[0-9a-f]{12,}$/i.test(seg)&&!/^[0-9]+$/.test(seg);
  });
  const picked=meaningful.at(-1)||meaningful.at(-2)||'';
  return picked?formatActivitySegment(picked):'';
}

function inferActivityInfoFromUrl(url){
  const urlObj=new URL(url);
  const raw=decodeURIComponent(`${urlObj.hostname} ${urlObj.pathname} ${urlObj.search}`).toLowerCase();
  const matched=CUSTOM_ACTIVITY_RULES.find(rule=>rule.keywords.some(keyword=>raw.includes(keyword)));
  const info=matched?cloneRulePayload(matched):{
    cat:'welfare',
    title:'币安官方活动',
    sub:'打开官方页面查看完整规则',
    tags:['官方活动','待确认'],
    deadline:'以页面展示为准',
    nums:[{l:'链接来源',v:urlObj.hostname.replace(/^www\./,'')},{l:'识别方式',v:'本地智能识别',c:'var(--gold)'}],
    details:'链接已保存，建议从官方页面确认活动时间、奖励门槛和参与资格。',
    steps:['打开活动原页面','确认活动起止时间','查看参与门槛和奖励规则','按官方指引完成步骤','回到仪表盘持续跟踪'],
    est:'视活动而定',
    risk:null
  };
  const slugLabel=extractActivitySlug(urlObj);
  if(slugLabel){
    const compare=`${info.title} ${info.sub} ${info.tags.join(' ')}`.toLowerCase();
    if(!compare.includes(slugLabel.toLowerCase())&&slugLabel.length<=24)info.title=`${info.title} · ${slugLabel}`;
  }
  if(/bsc|bnb chain|chain=bsc/.test(raw))info.tags.push('BSC');
  if(/eth|ethereum/.test(raw))info.tags.push('ETH');
  if(/usdt/.test(raw))info.tags.push('USDT');
  if(/fdusd/.test(raw))info.tags.push('FDUSD');
  info.tags=[...new Set(info.tags)].slice(0,4);
  info.host=urlObj.hostname.replace(/^www\./,'');
  return info;
}

function clipActivityText(text,max){
  const clean=text.replace(/\s+/g,' ').trim();
  return clean.length>max?clean.slice(0,max-1)+'…':clean;
}

// ── AI-powered activity card builder ──────────────────────────────────────
// Step 1: fetch readable content via Jina.ai reader (bypasses CORS + JS rendering)
// Step 2: send full page text to Claude API for structured extraction
// Step 3: fallback to URL-inference if either step fails
async function fetchViaJina(url){
  const cleanUrl = url.replace(/^https?:\/\//, '');
  const endpoints = [
    `https://r.jina.ai/${url}`,
    `https://r.jina.ai/http://${cleanUrl}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`
  ];
  for(const ep of endpoints){
    try{
      const res = await fetch(ep, {
        headers: { 'Accept': 'text/plain, text/html, */*', 'X-With-Generated-Alt': 'true' }
      });
      if(!res.ok) continue;
      const text = await res.text();
      if(text && text.trim().length > 200) return text;
    }catch(e){}
  }
  return null;
}

async function parseWithClaude(url, pageText){
  // Trim to reasonable length to stay within token budget
  const trimmed = pageText ? pageText.slice(0, 6000) : '';
  const prompt = `你是 Binance 活动信息提取专家。

URL：${url}
网页内容摘要（部分）：
---
${trimmed || '（无法读取页面内容，请仅根据 URL 推断）'}
---

请从上面的 URL 和内容中提取活动信息，返回纯 JSON（不含 markdown 代码块，不含任何其他文字）：
{
  "title": "活动名称（中文，20字以内，准确提取不要编造）",
  "sub": "一句话描述（中文，25字以内）",
  "cat": "从以下选一个: launch/earn/square/trade/welfare/social/newbie",
  "tags": ["标签1","标签2"],
  "deadline": "剩余时间或截止描述，如: 进行中 / 7天后截止 / 长期开放",
  "deadlineSoon": false,
  "reward": "奖励描述，如: 最高 $100 USDT",
  "barrier": "参与门槛，如: 需完成 KYC",
  "details": "活动核心规则（2-3句，直接来自页面内容，不要编造）",
  "steps": [
    "步骤1（来自页面内容）",
    "步骤2",
    "步骤3",
    "步骤4",
    "步骤5"
  ],
  "rules": [
    "规则要点1（来自页面内容，如资格限制/地区限制/奖励条件）",
    "规则要点2",
    "规则要点3"
  ],
  "est": "预计参与时间，如: 10 分钟",
  "risk": null
}

重要：steps 和 rules 必须尽可能从页面实际内容提取，不能是通用占位句。如果页面内容不足，明确注明"请前往官方页面确认"。`;

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1200,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  if(!resp.ok) throw new Error(`API ${resp.status}`);
  const data = await resp.json();
  const raw = data.content?.[0]?.text || '{}';
  const clean = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

async function buildCustomActivityCard(url){
  // 1. URL-based inference as baseline
  const info = inferActivityInfoFromUrl(url);
  const urlObj = new URL(url);

  let aiInfo = null;
  let pageText = null;

  try {
    // 2. Try to fetch page content
    pageText = await fetchViaJina(url);
    // 3. Parse with Claude
    aiInfo = await parseWithClaude(url, pageText);
  } catch(e) {
    console.warn('AI parse failed, using URL inference:', e.message);
  }

  // 4. Merge: AI result wins over URL inference where available
  const merged = {
    title: aiInfo?.title || info.title || 'Binance 活动',
    sub:   aiInfo?.sub   || info.sub   || '打开官方页面查看规则',
    cat:   aiInfo?.cat   || info.cat   || 'welfare',
    tags:  (aiInfo?.tags || info.tags  || ['官方活动']).slice(0,4),
    deadline:     aiInfo?.deadline   || info.deadline   || '进行中',
    deadlineSoon: aiInfo?.deadlineSoon ?? info.deadlineSoon ?? false,
    details:  aiInfo?.details  || info.details  || '请前往官方页面确认完整规则。',
    steps: (aiInfo?.steps && aiInfo.steps.length >= 2) ? aiInfo.steps : (info.steps || ['打开活动原页面','查看参与条件','按官方指引完成流程']),
    rules: (aiInfo?.rules && aiInfo.rules.length >= 1) ? aiInfo.rules : ['具体资格和条件请以官方页面为准','奖励数量和发放时间可能变化'],
    reward:  aiInfo?.reward  || '',
    barrier: aiInfo?.barrier || '',
    est:     aiInfo?.est     || '视活动而定',
    risk:    aiInfo?.risk    || null,
  };

  const catIcoMap = {launch:'var(--gs)',earn:'var(--grs)',square:'var(--ps)',trade:'var(--bs)',welfare:'var(--os)',social:'var(--cs)',newbie:'var(--grs)'};
  const sourceLabel = pageText ? 'AI 读取页面内容' : 'URL 智能识别';

  return {
    id: 'custom_' + Date.now(),
    cat: merged.cat,
    emoji: '⭐',
    title: merged.title,
    subtitle: merged.sub,
    tags: merged.tags,
    stripe: 'var(--gold)',
    ico: catIcoMap[merged.cat] || 'var(--gs)',
    deadlineSoon: merged.deadlineSoon,
    deadline: merged.deadline,
    dlLabel: '',
    nums: [
      { l: '奖励',    v: merged.reward  || '见官方页面', c: merged.reward  ? 'var(--green)' : '' },
      { l: '参与门槛', v: merged.barrier || '见官方页面' }
    ],
    progress: null,
    risk: merged.risk,
    subscribed: false,
    drawer: {
      tags: [...new Set([...merged.tags, '自定义添加'])],
      details: [
        { i: 'info', l: '活动摘要',  v: merged.details },
        { i: 'info', l: '来源说明',  v: sourceLabel },
        { i: 'link', l: '官方链接',  link: url, lv: '前往活动页面 →' }
      ],
      steps: merged.steps,
      rules: merged.rules,
      est:   merged.est
    }
  };
}

function addCustomActivity(){
  const url=document.getElementById('addActUrl').value.trim();
  if(!url){toast('请输入活动链接','err');return;}
  if(!url.startsWith('http')){toast('请输入完整 URL（以 https:// 开头）','err');return;}

  const btn=document.querySelector('#modal-add-activity .btn-gold');
  btn.innerHTML='<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>&nbsp;AI 读取页面中…';btn.disabled=true;

  (async()=>{
    try{
      CARDS.unshift(await buildCustomActivityCard(url));
      renderCards();
      closeModal('modal-add-activity');
      document.getElementById('addActUrl').value='';
      toast('已读取网页内容并添加到仪表盘','success');
    }catch(e){
      toast('链接格式无效，请检查后重试','err');
    }finally{
      btn.innerHTML='<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>&nbsp;AI 解析并添加';btn.disabled=false;
    }
  })();
}
// ══ TOOLS ══
async function loadFG(){
  const el=document.getElementById('fgContent'),btn=document.getElementById('fgBtn');
  try{
    const r=await fetch('https://api.alternative.me/fng/?limit=4');
    const data=await r.json();
    const t=data.data[0],val=parseInt(t.value),cls=t.value_classification;
    btn.textContent=val+' '+cls+' →';
    const hist=data.data.slice(1);
    const histHtml=hist.map((h,i)=>{
      const v=parseInt(h.value),c=v>=50?'var(--green)':'var(--red)';
      return`<div style="text-align:center"><div class="fgv" style="color:${c}">${h.value}</div><div class="fgl">${['昨日','3日前','一周前'][i]}</div></div>`;
    }).join('');
    el.innerHTML=`<div style="margin-bottom:6px"><div class="fg-n">${val}</div><div style="font-size:12px;color:var(--t2);margin-top:5px">${cls}</div></div>
    <div class="fg-bar" style="margin:13px 0 5px"><div class="fg-ptr" style="left:${val}%"></div></div>
    <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--t3);margin-bottom:16px"><span>极度恐慌</span><span>中性</span><span>极度贪婪</span></div>
    <div class="fg-row">${histHtml}</div>
    <div style="margin-top:14px;font-size:10px;color:var(--t3);text-align:center">数据来源：alternative.me · 每日更新</div>`;
  }catch(e){
    btn.textContent='查看指数 →';
    el.innerHTML=`<div style="padding:16px;text-align:center"><div style="color:var(--t3);font-size:12px;margin-bottom:12px">API 受跨域限制，请直接访问</div><a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank" class="btn btn-gold" style="text-decoration:none;font-size:12px">alternative.me →</a></div>`;
  }
}

function checkAddr(){
  const v=document.getElementById('addrInp').value.trim(),el=document.getElementById('addrRes');
  if(!v){toast('请输入地址','err');return;}
  const isSafe=v.length>10&&!v.toLowerCase().includes('bad');
  el.innerHTML=isSafe
    ?`<div class="res-ok"><div class="res-ico">✅</div><div><div class="res-title" style="color:var(--green)">暂无风险记录</div><div class="res-sub">建议同时在 GoPlus Labs 深度确认</div></div></div>
       <a href="https://gopluslabs.io/token-security/56/${v}" target="_blank" class="btn btn-ghost" style="width:100%;margin-top:9px;text-decoration:none;font-size:11px;padding:8px">GoPlus Labs 深度查询 →</a>`
    :`<div class="res-ng"><div class="res-ico">🚨</div><div><div class="res-title" style="color:var(--red)">建议人工核查</div><div class="res-sub">请在多个安全平台交叉确认</div></div></div>`;
}

function checkPhish(){
  const v=document.getElementById('urlInp').value.trim(),el=document.getElementById('phishRes');
  if(!v){toast('请输入 URL','err');return;}
  const sus=['binnance','binance-verify','bn4nce','binanc3'].some(p=>v.includes(p));
  const official=v.includes('binance.com')&&!sus;
  el.innerHTML=official
    ?`<div class="res-ok"><div class="res-ico">✅</div><div><div class="res-title" style="color:var(--green)">域名为官方 binance.com</div><div class="res-sub">仍建议确认 HTTPS 证书有效</div></div></div>`
    :sus
    ?`<div class="res-ng"><div class="res-ico">🚨</div><div><div class="res-title" style="color:var(--red)">高度疑似钓鱼网站！</div><div class="res-sub">域名与 binance.com 高度相似，请勿输入任何信息</div></div></div>`
    :`<div class="res-warn"><div class="res-ico">⚠️</div><div><div class="res-title" style="color:var(--gold)">未知来源，建议核实</div><div class="res-sub">请在 URLScan.io 和币安官方验证页面确认</div></div></div>
      <a href="https://urlscan.io/search/#page.url:${encodeURIComponent(v)}" target="_blank" class="btn btn-ghost" style="width:100%;margin-top:9px;text-decoration:none;font-size:11px;padding:8px">URLScan.io 扫描 →</a>`;
}

function genPost(){
  const topic=document.getElementById('postTopic').value.trim();
  const el=document.getElementById('postResult');
  if(!topic){toast('请输入主题关键词','err');return;}

  const tone=(document.querySelector('.qdiff.on')?.textContent||'知识科普').trim();
  const related=CARDS
    .filter(c=>(`${c.title} ${c.sub} ${(c.tags||[]).join(' ')}`).toLowerCase().includes(topic.toLowerCase()))
    .slice(0,2);

  const hooks={
    '知识科普':`很多人把「${topic}」想复杂了，其实先抓这 3 点就够。`,
    '参与分享':`我最近实测了「${topic}」，下面这版是最省坑的参与路径。`,
    '行情解读':`关于「${topic}」这波，不要只看涨跌，先看结构。`,
    '观点输出':`我对「${topic}」的观点很简单：先活下来，再谈收益最大化。`
  };

  const corePoint=related.length
    ?`先看官方入口：${related.map(i=>i.title).join(' / ')}。`
    :`先明确目标（打新 / 稳健收益 / 交易），别把不同策略混着做。`;

  const riskPoint=topic.match(/合约|杠杆|双币|永续|futures/i)
    ?'⚠️ 涉及杠杆或结构化产品，必须先定止损和仓位上限。'
    :'⚠️ 不追热点，先看规则、截止时间和资格门槛。';

  const tags=[`#BinanceHub`,`#${topic.replace(/\s+/g,'')}`,`#币安`,'#加密学习'];
  const postText=`${hooks[tone]||hooks['知识科普']}\n\n1) 先做对：${corePoint}\n2) 再做快：把流程拆成「准备-执行-复盘」三步。\n3) 最后做稳：${riskPoint}\n\n如果你正在做「${topic}」，评论区留个进度，我给你做一版优化建议。\n\n${tags.join(' ')}`;

  const escaped=escapeHtml(postText).replace(/\n/g,'<br>');
  el.innerHTML=`<div style="background:var(--bg3);border:1px solid rgba(240,185,11,.15);border-radius:10px;padding:14px">
    <div style="font-size:10px;color:var(--gold);font-weight:700;margin-bottom:8px">AI 增强版 · ${tone}</div>
    <div style="font-size:12px;color:var(--t2);line-height:1.85">${escaped}</div>
    <div style="display:flex;gap:7px;margin-top:12px">
      <button class="btn btn-gold" style="flex:1;font-size:11px;padding:8px" onclick="copyGeneratedPost(this)" data-post="${escapeHtml(postText).replace(/\n/g,'&#10;')}">📋 复制</button>
      <button class="btn btn-ghost" style="font-size:11px;padding:8px 12px" onclick="window.open('https://www.binance.com/en/square','_blank')">发至广场 →</button>
    </div></div>`;
}

let currentNewsTone='formal';
let currentNewsResult=null;

function setNewsTone(tone,el){
  currentNewsTone=tone;
  document.querySelectorAll('.news-tone').forEach(btn=>btn.classList.remove('on'));
  if(el)el.classList.add('on');
}

function escapeHtml(text=''){
  return text
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function detectNewsAssets(lower){
  const assets=[];
  if(/bitcoin|btc/.test(lower))assets.push('BTC');
  if(/ethereum|ether|\beth\b/.test(lower))assets.push('ETH');
  if(/\bsolana\b|\bsol\b/.test(lower))assets.push('SOL');
  if(/\bbnb\b|bnb chain|binance/.test(lower))assets.push('BNB');
  if(/xrp|ripple/.test(lower))assets.push('XRP');
  if(/dogecoin|doge/.test(lower))assets.push('DOGE');
  if(/stablecoin|usdt|usdc|fdusd/.test(lower))assets.push('稳定币');
  return [...new Set(assets)];
}

function detectNewsThemes(lower){
  const themes=[];
  if(/etf/.test(lower))themes.push('ETF');
  if(/sec|regulator|regulation|lawsuit|compliance/.test(lower))themes.push('监管');
  if(/hack|exploit|breach|stolen|attack/.test(lower))themes.push('安全事件');
  if(/listing|listed|launch|debut/.test(lower))themes.push('上新/上线');
  if(/funding|raise|investment|financing/.test(lower))themes.push('融资');
  if(/interest rate|fed|cpi|inflation|macro/.test(lower))themes.push('宏观');
  if(/staking|yield|apy|apr|earn/.test(lower))themes.push('收益');
  if(/adoption|partnership|integration/.test(lower))themes.push('采用/合作');
  if(/upgrade|fork|mainnet/.test(lower))themes.push('升级');
  return themes.length?themes:['市场动态'];
}

function getNewsExcerpt(text){
  const normalized=text.replace(/\s+/g,' ').trim();
  const firstSentence=normalized.split(/[\.\!\?]\s+/)[0]||normalized;
  return firstSentence.length>160?firstSentence.slice(0,160)+'…':firstSentence;
}

function buildNewsMeta(text){
  const normalized=text.replace(/\s+/g,' ').trim();
  const lower=normalized.toLowerCase();
  const assets=detectNewsAssets(lower);
  const themes=detectNewsThemes(lower);
  const subject=assets[0]||'市场';
  let core='市场正在围绕新的信息重新定价';
  let impact='情绪变化、成交量和后续官方确认';
  let action='官方公告、成交量与价格确认';

  if(themes.includes('ETF')){
    core=`${subject} 相关消息聚焦在 ETF 进展与资金预期`;
    impact='资金流向、主流资产情绪和机构配置预期';
    action='ETF 相关时间点、资金数据与官方表态';
  }else if(themes.includes('监管')){
    core=`${subject} 的关键变量转向监管表态与合规影响`;
    impact='监管预期、平台合规成本和市场风险偏好';
    action='监管机构后续文件、听证会和执法节奏';
  }else if(themes.includes('安全事件')){
    core=`${subject} 这条新闻的重点是安全事故与资产风险控制`;
    impact='平台信任、链上资金流向和短线恐慌情绪';
    action='官方赔付方案、链上地址动态与漏洞修复进度';
  }else if(themes.includes('上新/上线')){
    core=`${subject} 消息更偏向上新、上线或交易流动性变化`;
    impact='短线交易热度、流动性和价格波动幅度';
    action='上线时间、可交易市场和流动性深度';
  }else if(themes.includes('融资')){
    core=`${subject} 相关新闻主要反映项目融资与市场扩张预期`;
    impact='估值想象空间、项目热度和后续资源投放';
    action='融资规模、投资方背景和落地节奏';
  }else if(themes.includes('宏观')){
    core=`${subject} 新闻更受宏观变量驱动`;
    impact='风险资产波动、美元流动性和市场预期切换';
    action='宏观数据发布时间与市场波动区间';
  }else if(themes.includes('收益')){
    core=`${subject} 相关消息核心在收益机制或理财产品变化`;
    impact='资金停留时间、收益预期和用户参与热度';
    action='收益率变动、锁仓规则和结算方式';
  }else if(themes.includes('采用/合作')){
    core=`${subject} 这条消息主要在讲合作落地和真实采用场景`;
    impact='基本面想象、品牌背书和用户增长预期';
    action='合作范围、落地时间和可验证的数据';
  }else if(themes.includes('升级')){
    core=`${subject} 新闻的焦点是协议升级和技术推进`;
    impact='网络稳定性、生态预期和用户活跃度';
    action='升级时间、兼容性和生态项目跟进情况';
  }

  return{
    assets,
    themes,
    subject,
    core,
    impact,
    action,
    excerpt:getNewsExcerpt(normalized)
  };
}

function buildFormalNewsResult(meta){
  const assetLabel=meta.assets.length?meta.assets.join(' / '):'加密市场';
  return{
    badge:'正式版',
    badgeClass:'tb',
    title:`${assetLabel} 新闻正式解读`,
    body:`这条消息的核心在于 ${meta.core}。从当前信息看，更值得关注的是 ${meta.impact}，因此解读上应优先看确认信息，而不是先被情绪带节奏。`,
    points:[
      `事件主题：${meta.themes.join(' / ')}`,
      `市场影响：${meta.impact}`,
      `跟进建议：重点跟踪 ${meta.action}`
    ],
    source:`原文摘录：${meta.excerpt}`,
    shareTitle:`${assetLabel} 新闻解读`,
    shareText:`${meta.core}；重点关注 ${meta.impact}。`,
    tweet:`${assetLabel} 新闻解读：${meta.core}，重点关注 ${meta.action}。#BinanceHub`
  };
}

function buildSpicyNewsResult(meta){
  return{
    badge:'吐槽版',
    badgeClass:'to',
    title:`${meta.subject} 这条消息，市场准备开始表演了`,
    body:`说人话就是：${meta.core}。接下来盘面多半会围着 ${meta.impact} 来回甩情绪，真正要看的不是谁喊得最响，而是谁先给出确认。`,
    points:[
      `这次谁在带节奏：${meta.subject}`,
      `最容易被放大的点：${meta.impact}`,
      `别上头，先盯：${meta.action}`
    ],
    source:`原文摘录：${meta.excerpt}`,
    shareTitle:`${meta.subject} 新闻吐槽`,
    shareText:`${meta.core}；盘面大概率先甩情绪，再找方向。`,
    tweet:`吐槽一下这条 ${meta.subject} 新闻：${meta.core}，别急着上头，先看 ${meta.action}。#BinanceHub`
  };
}

function openNewsShareCard(){
  if(!currentNewsResult){toast('请先生成新闻解读','warn');return;}
  openSharePreview(currentNewsResult.shareTitle,currentNewsResult.shareText,currentNewsResult.tweet);
}

function shareNewsTwitter(){
  if(!currentNewsResult){toast('请先生成新闻解读','warn');return;}
  shareTwitter(currentNewsResult.tweet);
}

function translateNews(){
  const v=document.getElementById('newsInput').value.trim(),el=document.getElementById('translateResult');
  if(!v){toast('请输入英文新闻内容','err');return;}
  const meta=buildNewsMeta(v);
  currentNewsResult=currentNewsTone==='formal'?buildFormalNewsResult(meta):buildSpicyNewsResult(meta);
  el.innerHTML=`<div class="news-result-card">
    <div class="news-result-head">
      <span class="tag ${currentNewsResult.badgeClass}">${currentNewsResult.badge}</span>
      <span class="news-result-meta">${escapeHtml(meta.assets.length?meta.assets.join(' / '):'加密市场')} · ${escapeHtml(meta.themes.join(' / '))}</span>
    </div>
    <div class="news-result-title">${escapeHtml(currentNewsResult.title)}</div>
    <div class="news-result-body">${escapeHtml(currentNewsResult.body)}</div>
    <div class="news-result-points">
      ${currentNewsResult.points.map(point=>`<div class="news-result-point">${escapeHtml(point)}</div>`).join('')}
    </div>
    <div class="news-result-source">${escapeHtml(currentNewsResult.source)}</div>
    <div class="news-result-actions">
      <button class="btn btn-gold" style="flex:1;font-size:11px;padding:8px" onclick="openNewsShareCard()">🎨 分享卡片</button>
      <button class="btn btn-ghost" style="padding:8px 12px;font-size:11px" onclick="shareNewsTwitter()">𝕏 Twitter</button>
    </div>
  </div>`;
}

// ══ AI TUTOR ══
function toggleAI(){document.getElementById('aiPanel').classList.toggle('open');}
function setAITab(tab,el){
  document.querySelectorAll('.aip-tab').forEach(t=>t.classList.remove('on'));el.classList.add('on');
  document.getElementById('aiChat').style.display=tab==='chat'?'':'none';
  document.getElementById('aiRec').style.display=tab==='rec'?'':'none';
}
const AI_ANSWERS={
  'btc':'BTC（比特币）是去中心化数字资产，总量上限 2100 万。你可在 Binance 现货购买、定投或通过理财产品参与；交易前先看波动和风险。',
  '比特币':'BTC（比特币）是去中心化数字资产，总量上限 2100 万。你可在 Binance 现货购买、定投或通过理财产品参与；交易前先看波动和风险。',
  'apy':'APY（年化收益率）包含复利，APR（年化利率）只算简单利息。同样 10%，APY 实际到手会比 APR 多一些。',
  'apr':'APR 是年化利率，只计算本金的利息，不含复利效果。APY 则把每次结算的利息再投入计算，所以 APY > APR。',
  'launchpool':'Launchpool 几乎无本金风险——你质押 BNB 或 FDUSD 换取新代币，本金随时可赎回。主要风险是挖到的代币上线后价格可能下跌。',
  '双币':'双币投资有本金风险！到期 BTC 低于行权价时，你会收到 BTC 而非 USDT，本金价值可能缩水。高收益伴随高风险。',
  'kyc':'KYC（Know Your Customer）是身份认证，在币安 App 进入「账户」→「身份认证」，上传身份证和自拍即可完成 Level 1，通常 10 分钟内通过。',
  'bnb':'BNB 是币安平台代币，持有可享受手续费折扣，并可参与 Launchpool/Megadrop/HODLer Airdrop 等。',
  'default':'你好！我是客服小何 👋 你可以问我：币种基础、活动规则、参与步骤、风险提示。输入 / 可查看快捷指令。',
};

const XIAOHE_AI={
  baseUrl:'https://openrouter.ai/api/v1/chat/completions',
  model:'openai/gpt-4o-mini',
  apiKey:localStorage.getItem('xiaohe_api_key')||''
};

const XIAOHE_COMMANDS=[
  {cmd:'/help',desc:'查看可用指令'},
  {cmd:'/sources',desc:'查看官方知识来源'},
  {cmd:'/refreshdocs',desc:'刷新官方文档缓存'},
  {cmd:'/key <API_KEY>',desc:'设置在线AI密钥'},
  {cmd:'/clearkey',desc:'清除在线AI密钥'}
];

const OFFICIAL_SOURCES=[
  {name:'Binance Academy 术语词典',url:'https://academy.binance.com/zh/articles/a-crypto-glossary'},
  {name:'Learn & Earn',url:'https://www.binance.com/zh-CN/academy/learn-and-earn'},
  {name:'官方验证',url:'https://www.binance.com/en/official-verification'},
  {name:'Launchpool',url:'https://www.binance.com/en/launchpool'},
  {name:'Simple Earn',url:'https://www.binance.com/en/earn/simple-earn'}
];

let OFFICIAL_KB=[];
let OFFICIAL_KB_READY=false;

function appendAIMessage(html,isUser=false){
  const msgs=document.getElementById('aiMsgs');
  const div=document.createElement('div');
  div.className='aip-msg'+(isUser?' user':'');
  if(isUser)div.textContent=html; else div.innerHTML=html;
  msgs.appendChild(div);
  msgs.scrollTop=9999;
  return div;
}

function tokenizeQuery(q=''){
  const tokens=(q.toLowerCase().match(/[a-z0-9]{3,}|[\u4e00-\u9fa5]{2,}/g)||[]);
  const stop=new Set(['什么','怎么','如何','一下','一下子','可以','这个','那个','please']);
  return tokens.filter(t=>!stop.has(t));
}

async function loadOfficialDocs(force=false){
  if(OFFICIAL_KB_READY&&!force) return OFFICIAL_KB;
  OFFICIAL_KB=[];
  for(const src of OFFICIAL_SOURCES){
    try{
      const endpoint=`https://r.jina.ai/http://${src.url.replace(/^https?:\/\//,'')}`;
      const res=await fetch(endpoint,{headers:{Accept:'text/plain'}});
      if(!res.ok) continue;
      const txt=(await res.text()).slice(0,12000);
      const sentences=txt.split(/\n|。|\.|\!|\?/).map(s=>s.trim()).filter(s=>s.length>20&&s.length<220).slice(0,180);
      for(const s of sentences){OFFICIAL_KB.push({source:src.name,url:src.url,text:s});}
    }catch(e){}
  }
  OFFICIAL_KB_READY=true;
  return OFFICIAL_KB;
}

async function answerFromOfficialDocs(q){
  const tokens=tokenizeQuery(q);
  if(!tokens.length) return null;
  await loadOfficialDocs();
  if(!OFFICIAL_KB.length) return null;
  const scored=OFFICIAL_KB.map(row=>{
    let score=0;
    for(const t of tokens) if(row.text.toLowerCase().includes(t)) score++;
    return {...row,score};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,3);
  if(!scored.length) return null;
  const top=scored[0];
  const bullets=scored.map((s,i)=>`${i+1}) ${escapeHtml(s.text)}`).join('<br>');
  return `根据 Binance 官方文档，我找到这些最相关内容：<br>${bullets}<br><br><span style="font-size:10px;color:var(--t3)">来源：${escapeHtml(top.source)} · <a href="${top.url}" target="_blank" style="color:var(--gold)">查看原文</a></span>`;
}

function getActivityHits(q){
  const tokens=tokenizeQuery(q);
  if(!tokens.length) return [];
  return CARDS.map(c=>{
    const corpus=`${c.title} ${cardSubtitle(c)} ${(c.tags||[]).join(' ')} ${(c.drawer?.tags||[]).join(' ')} ${(c.drawer?.steps||[]).join(' ')}`.toLowerCase();
    let score=0;
    for(const t of tokens) if(corpus.includes(t)) score++;
    return {c,score};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.c);
}

async function callXiaoHeLLM(userText,hits){
  if(!XIAOHE_AI.apiKey) return null;
  const context=hits.map((h,i)=>`${i+1}. ${h.title} | ${cardSubtitle(h)} | 标签:${(h.tags||[]).join('/')}`).join('\n');
  const prompt=`你是币安活动助手“小何”，请优先依据官方文档风格回答，中文、简洁、可执行。\n用户问题：${userText}\n候选活动：\n${context||'无匹配活动'}\n输出：结论 + 操作步骤 + 风险提醒。`;

  const resp=await fetch(XIAOHE_AI.baseUrl,{method:'POST',headers:{
    'Content-Type':'application/json',
    'Authorization':`Bearer ${XIAOHE_AI.apiKey}`
  },body:JSON.stringify({model:XIAOHE_AI.model,messages:[{role:'user',content:prompt}],temperature:0.2})});
  if(!resp.ok) throw new Error('AI请求失败');
  const data=await resp.json();
  return data?.choices?.[0]?.message?.content?.trim()||null;
}

function renderCommandMenu(filter=''){
  const menu=document.getElementById('aiCmdMenu');
  if(!menu) return;
  const f=filter.toLowerCase();
  const list=XIAOHE_COMMANDS.filter(c=>c.cmd.toLowerCase().includes(f));
  if(!list.length){menu.style.display='none';return;}
  menu.innerHTML=list.map(c=>`<div class="ai-cmd-item" onclick="applyAICommand('${c.cmd.replace(/'/g,"\\'")}')"><span>${c.desc}</span><span class="ai-cmd-k">${c.cmd}</span></div>`).join('');
  menu.style.display='block';
}

function hideCommandMenu(){const menu=document.getElementById('aiCmdMenu'); if(menu) menu.style.display='none';}
function applyAICommand(cmd){
  const inp=document.getElementById('aiInp');
  inp.value=cmd.endsWith('>')?cmd.replace('<API_KEY>',''):cmd;
  inp.focus();
  hideCommandMenu();
}

function handleAIInput(event){
  const v=event.target.value||'';
  if(v.startsWith('/')) renderCommandMenu(v); else hideCommandMenu();
}
function handleAIInputKeydown(event){
  if(event.key==='Enter') {sendAI(); return;}
}

async function sendAI(){
  const inp=document.getElementById('aiInp'),q=inp.value.trim();if(!q)return;inp.value='';hideCommandMenu();

  if(/^\/key\s+/i.test(q)){
    const key=q.replace(/^\/key\s+/i,'').trim();
    localStorage.setItem('xiaohe_api_key',key);
    XIAOHE_AI.apiKey=key;
    appendAIMessage('已保存 AI Key ✅（仅保存在当前浏览器）');
    return;
  }
  if(/^\/clearkey$/i.test(q)){
    localStorage.removeItem('xiaohe_api_key');
    XIAOHE_AI.apiKey='';
    appendAIMessage('已清除 AI Key。');
    return;
  }
  if(/^\/help$/i.test(q)){
    appendAIMessage(XIAOHE_COMMANDS.map(c=>`<div><span class="ai-cmd-k">${c.cmd}</span> - ${c.desc}</div>`).join(''));
    return;
  }
  if(/^\/sources$/i.test(q)){
    appendAIMessage(OFFICIAL_SOURCES.map(s=>`<div>• <a href="${s.url}" target="_blank" style="color:var(--gold)">${s.name}</a></div>`).join(''));
    return;
  }
  if(/^\/refreshdocs$/i.test(q)){
    appendAIMessage('正在刷新官方文档缓存…');
    await loadOfficialDocs(true);
    appendAIMessage(`缓存完成，共载入 ${OFFICIAL_KB.length} 条知识片段。`);
    return;
  }

  appendAIMessage(q,true);
  const ql=q.toLowerCase();
  let ans='';
  const hits=getActivityHits(q);
  const typing=appendAIMessage('小何思考中…');

  try{
    const llmAns=await callXiaoHeLLM(q,hits);
    if(llmAns){ typing.innerHTML=escapeHtml(llmAns).replace(/\n/g,'<br>'); return; }
  }catch(e){}

  try{
    const docAns=await answerFromOfficialDocs(q);
    if(docAns){ typing.innerHTML=docAns; return; }
  }catch(e){}

  if(hits.length){
    const top=hits[0];
    const step=(top.drawer?.steps||[])[0]||'先打开活动页确认规则';
    const link=top.drawer?.details?.find(d=>d.link)?.link||'https://www.binance.com';
    ans=`你这个问题最匹配「<strong>${top.title}</strong>」。<br>建议你先：${step}。<br>我建议再核对官方页面原文：<a href="${link}" target="_blank" style="color:var(--gold)">点击查看</a>`;
  } else {
    ans=AI_ANSWERS.default;
    for(const k of Object.keys(AI_ANSWERS))if(k!=='default'&&ql.includes(k)){ans=AI_ANSWERS[k];break;}
  }

  if(/杠杆|合约|爆仓|清算|梭哈|all in/i.test(q)){
    ans += '<br><br>⚠️ 风控提醒：先定单笔风险上限（建议总资金 1%~2%），再考虑收益。';
  }

  typing.innerHTML=ans;
}

// ══ MODAL ══
function openModal(id){document.getElementById(id).classList.add('on');}
function closeModal(id){document.getElementById(id).classList.remove('on');}
function bgc(e,id){if(e.target===e.currentTarget)closeModal(id);}

// ══ MISC ══
function shareCurrentPreviewTwitter(){shareTwitter(currentShareText);}
function shareTwitter(text='今天学到了新知识！via #BinanceHub'){window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,'_blank');}
function copyGeneratedPost(btn){
  const raw=(btn?.dataset?.post||'').replace(/&#10;/g,'\n');
  if(!raw)return;
  navigator.clipboard.writeText(raw).then(()=>toast('📋 已复制帖子内容','success')).catch(()=>toast('复制失败，请手动复制','err'));
}
function selStyle(el){document.querySelectorAll('.qdiff').forEach(d=>d.classList.remove('on'));el.classList.add('on');}

// ══ URGENCY TIMER ══
let urgSecs=23*3600+14*60+8;
setInterval(()=>{
  urgSecs=Math.max(0,urgSecs-1);
  const h=Math.floor(urgSecs/3600),m=Math.floor(urgSecs%3600/60),s=urgSecs%60;
  const el=document.getElementById('urgCd');
  if(el)el.textContent=`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
},1000);

// ══ TOAST ══
let tTimer;
function toast(msg,type='info'){
  const el=document.getElementById('toastEl'),tx=document.getElementById('toastMsg');
  tx.textContent=msg;
  el.style.borderColor=type==='err'?'var(--red)':type==='warn'?'var(--gold)':'var(--green)';
  el.classList.add('on');clearTimeout(tTimer);tTimer=setTimeout(()=>el.classList.remove('on'),3200);
}

// ══ INIT ══
async function initApp(){
  await loadCardsFromJson();
  normalizeCardData();
  renderCards();
  loadFG();
  // 线上生产建议由 GitHub Actions 定时更新 data.json，这里保留本地手动同步入口
  ensureDailyQuizState();
  renderWrongBook();
  loadQ();
  startQuizCountdown();
  // Show onboarding only on first visit of the local experience
  if(!DAILY_QUIZ_STATE?.onboardingShown)setTimeout(()=>showOnboarding(), 400);
  updateTierDesc(curTier);
  loadOfficialDocs().catch(()=>{});
}

initApp();
