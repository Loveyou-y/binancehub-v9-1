const originalActivities = [
  {
    id: "learn-earn-pyth",
    family: "学习赚币",
    title: "PYTH 学习赚币",
    status: "进行中",
    source: "Binance Academy Learn & Earn",
    sourceNote: "基于 Binance Academy 的 Learn & Earn 公开入口整理，具体资格和可参与状态需登录官方页面确认。",
    officialUrl: "https://academy.binance.com/zh-cn/learn-and-earn",
    summary: "适合想零门槛拿奖励的新手。流程短，主要是看内容、做测验、检查资格。",
    reward: "学习奖励资格",
    effort: "5 到 10 分钟",
    barrier: "需登录并满足资格",
    palette: "linear-gradient(135deg, #172724, #265f59 60%, #3e9a90)",
    aiSteps: [
      "进入 Learn & Earn 官方页并登录账号。",
      "确认当前账号和地区是否具备参与资格。",
      "阅读内容并完成测验。",
      "按官方规则领取或等待奖励发放。"
    ],
    rules: [
      "资格、地区限制和发放数量必须以官方页面为准。",
      "同类活动可能存在名额或库存限制。",
      "学习奖励不是所有账户都能参加。"
    ],
    tags: ["零门槛", "新手友好", "学习型"]
  },
  {
    id: "first-btc",
    family: "新手奖励",
    title: "赚取第一枚比特币",
    status: "新手向",
    source: "Binance Academy 首页",
    sourceNote: "基于 Binance Academy 首页公开入口整理，通常面向新用户。",
    officialUrl: "https://academy.binance.com/zh-CN",
    summary: "这是新手最容易理解的一类活动，适合作为刷卡流里的第一类订阅任务。",
    reward: "BTC 奖励资格",
    effort: "3 到 8 分钟",
    barrier: "通常面向新用户",
    palette: "linear-gradient(135deg, #2a2413, #8b6631 58%, #b78a45)",
    aiSteps: [
      "进入学院首页，找到对应新手奖励入口。",
      "看清是否要求新注册或未完成过相关任务。",
      "完成学习和短测。",
      "按页面指引领取奖励或等待发放。"
    ],
    rules: [
      "是否是新用户限定必须看官方当前说明。",
      "奖励库存和发放时间可能变化。",
      "同一账号通常不能重复领取同类新手奖励。"
    ],
    tags: ["BTC", "新手", "低门槛"]
  },
  {
    id: "launchpool",
    family: "Launch 系列",
    title: "Launchpool / HODLer AirDrop",
    status: "持续入口",
    source: "Binance Launchpool 官方页",
    sourceNote:
      "基于 Binance Launchpool 官方页整理。2026-03-18 页面可见 HODLer 空投历史项目，并提示新项目即将上线。",
    officialUrl: "https://www.binance.com/zh-CN/launchpool",
    summary: "适合愿意长期拿新币空投的人。不是一次性任务，而是一条持续跟踪的活动线。",
    reward: "新代币空投",
    effort: "首次设置 10 分钟",
    barrier: "通常需要 BNB 或指定资产",
    palette: "linear-gradient(135deg, #181d31, #224172 60%, #2f6cc8)",
    aiSteps: [
      "打开 Launchpool 页面，确认当前是否有可参与项目。",
      "查看支持资产池、时间窗口和奖励规则。",
      "按规则申购指定产品或锁定资产。",
      "订阅截止时间和发放时间。"
    ],
    rules: [
      "不同项目的支持资产和奖励计算方式不同。",
      "HODLer AirDrop 与 Launchpool 资格规则不完全相同。",
      "具体收益和代币数量必须以项目公告为准。"
    ],
    tags: ["空投", "BNB", "长期跟踪"]
  },
  {
    id: "megadrop",
    family: "Launch 系列",
    title: "Megadrop",
    status: "项目开放时参与",
    source: "Binance Academy 产品指南",
    sourceNote: "基于 Binance Academy 的 Megadrop 官方说明整理，当前是否有项目开放需以产品页为准。",
    officialUrl: "https://www.binance.com/zh-CN/academy/articles/what-is-binance-megadrop-and-how-to-use-it",
    summary: "适合能接受复杂路径的用户。它比 Launchpool 多一层 Web3 任务积分逻辑。",
    reward: "按积分分配的新币奖励",
    effort: "15 到 30 分钟",
    barrier: "需要 BNB 锁定和 Web3 任务",
    palette: "linear-gradient(135deg, #172923, #1f6148 60%, #26a069)",
    aiSteps: [
      "确认当前是否存在开放的 Megadrop 项目。",
      "锁定 BNB 到指定产品。",
      "完成官方列出的 Web3 任务。",
      "关注积分结算和项目上线时间。"
    ],
    rules: [
      "Megadrop 奖励取决于锁定量、时长和任务积分。",
      "不同项目的任务要求会变化。",
      "必须先确认当前是否真的有开放项目。"
    ],
    tags: ["Web3", "积分制", "复杂任务"]
  },
  {
    id: "airdrop-portal",
    family: "空投",
    title: "Airdrop Portal",
    status: "有项目时参与",
    source: "Binance Academy 产品指南",
    sourceNote: "基于 Binance Academy 的空投门户说明整理，适合集中查看空投公告和资格标准。",
    officialUrl: "https://www.binance.com/zh-CN/academy/articles/what-is-the-binance-airdrop-portal",
    summary: "这是最像“官方空投总入口”的活动线之一，适合专门追踪空投的人。",
    reward: "空投代币",
    effort: "5 到 15 分钟",
    barrier: "每个项目资格不同",
    palette: "linear-gradient(135deg, #29181a, #71303b 60%, #ae4b66)",
    aiSteps: [
      "进入空投门户，查看当前和即将开放的项目。",
      "点进对应公告，核对资格条件。",
      "完成报名、持仓或页面要求动作。",
      "等待代币发放到 Binance 账户。"
    ],
    rules: [
      "不同空投项目的资格差异很大。",
      "空投门户给的是入口，不等于自动满足资格。",
      "是否发放到现货账户要看具体公告。"
    ],
    tags: ["空投", "集中入口", "资格制"]
  },
  {
    id: "beginner-track",
    family: "学习奖励",
    title: "Beginner Track",
    status: "长期入口",
    source: "Binance Academy Beginner Track",
    sourceNote: "基于 Beginner Track 页面整理，公开页面显示课程时长约 2 小时并包含学习奖励和 NFT 证书信息。",
    officialUrl: "https://www.binance.com/zh-CN/academy/track/beginner-track",
    summary: "适合愿意系统学习的新手，不是快任务，但适合长期订阅。",
    reward: "学习奖励 + NFT 证书",
    effort: "约 2 小时，建议拆分",
    barrier: "时间投入高",
    palette: "linear-gradient(135deg, #1d1c17, #615731 60%, #908652)",
    aiSteps: [
      "进入 Beginner Track，看清完整课程结构。",
      "把课程拆成多天任务，不要一次做完。",
      "每个章节学习后完成测验。",
      "完成整条路线后领取证书或奖励。"
    ],
    rules: [
      "这是长期学习任务，不适合想快速拿奖励的人。",
      "课程内容和奖励形态可能变化。",
      "奖励和证书条件需要以页面当前说明为准。"
    ],
    tags: ["系统学习", "证书", "长期"]
  }
];

const state = {
  family: "全部",
  deck: [],
  currentIndex: 0,
  subscribed: [],
  skipped: []
};

const families = ["全部", ...new Set(originalActivities.map((item) => item.family))];

const els = {
  familyFilters: document.getElementById("family-filters"),
  progressText: document.getElementById("progress-text"),
  subscribeStat: document.getElementById("subscribe-stat"),
  skipStat: document.getElementById("skip-stat"),
  deck: document.getElementById("deck"),
  drawer: document.getElementById("drawer"),
  drawerTitle: document.getElementById("drawer-title"),
  drawerSummary: document.getElementById("drawer-summary"),
  drawerMeta: document.getElementById("drawer-meta"),
  drawerSteps: document.getElementById("drawer-steps"),
  drawerRules: document.getElementById("drawer-rules"),
  drawerSource: document.getElementById("drawer-source"),
  drawerSourceNote: document.getElementById("drawer-source-note"),
  drawerLink: document.getElementById("drawer-link")
};

function buildDeck() {
  state.deck = originalActivities.filter((item) => state.family === "全部" || item.family === state.family);
  state.currentIndex = 0;
}

function currentCard() {
  return state.deck[state.currentIndex] || null;
}

function renderFilters() {
  els.familyFilters.innerHTML = families
    .map(
      (family) =>
        `<button class="filter-chip ${state.family === family ? "active" : ""}" data-family="${family}">${family}</button>`
    )
    .join("");

  document.querySelectorAll("[data-family]").forEach((button) => {
    button.addEventListener("click", () => {
      state.family = button.dataset.family;
      buildDeck();
      renderAll();
    });
  });
}

function renderStatus() {
  const total = state.deck.length;
  const current = total === 0 ? 0 : Math.min(state.currentIndex + 1, total);
  els.progressText.textContent = total ? `${current} / ${total}` : `0 / 0`;
  els.subscribeStat.textContent = `已订阅 ${state.subscribed.length}`;
  els.skipStat.textContent = `已跳过 ${state.skipped.length}`;
}

function renderDeck() {
  const cards = state.deck.slice(state.currentIndex, state.currentIndex + 3);
  if (!cards.length) {
    els.deck.innerHTML = `
      <div class="empty-card">
        <div>
          <p class="eyebrow">没有更多卡片</p>
          <h2>这一组已经刷完</h2>
          <p class="muted">你可以切换活动线，或者点击重置重新开始。</p>
        </div>
      </div>
    `;
    renderDrawer(null);
    return;
  }

  els.deck.innerHTML = cards
    .map(
      (card, depth) => `
        <article class="swipe-card ${depth > 0 ? "preview-card" : ""}" data-id="${card.id}" data-depth="${depth}" style="background:${card.palette}">
          <span class="action-stamp skip">跳过</span>
          <span class="action-stamp like">订阅</span>

          <div class="card-top">
            <span class="pill">${card.family}</span>
            <span class="pill">${card.status}</span>
          </div>

          ${
            depth === 0
              ? `
                <h2 class="card-title">${card.title}</h2>
                <p class="card-copy">${card.summary}</p>
                <div class="card-metrics">
                  <article class="card-panel">
                    <span>奖励</span>
                    <strong>${card.reward}</strong>
                  </article>
                  <article class="card-panel">
                    <span>耗时</span>
                    <strong>${card.effort}</strong>
                  </article>
                  <article class="card-panel">
                    <span>门槛</span>
                    <strong>${card.barrier}</strong>
                  </article>
                </div>
                <div class="card-footer">
                  <div class="card-tags">
                    ${card.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                  </div>
                </div>
              `
              : `
                <div class="preview-shell">
                  <span class="preview-line"></span>
                  <span class="preview-line short"></span>
                </div>
              `
          }
        </article>
      `
    )
    .join("");

  attachSwipe();
  renderDrawer(cards[0], false);
}

function renderDrawer(card, open = false) {
  if (!card) {
    els.drawerTitle.textContent = "没有当前活动";
    els.drawerSummary.textContent = "当前没有可查看的详情。";
    els.drawerMeta.innerHTML = "";
    els.drawerSteps.innerHTML = "";
    els.drawerRules.innerHTML = "";
    els.drawerSource.textContent = "";
    els.drawerSourceNote.textContent = "";
    els.drawerLink.removeAttribute("href");
    if (open) toggleDrawer(true);
    return;
  }

  els.drawerTitle.textContent = card.title;
  els.drawerSummary.textContent = card.summary;
  els.drawerMeta.innerHTML = `
    <article class="meta-item">
      <span>活动线</span>
      <strong>${card.family}</strong>
    </article>
    <article class="meta-item">
      <span>奖励</span>
      <strong>${card.reward}</strong>
    </article>
    <article class="meta-item">
      <span>耗时</span>
      <strong>${card.effort}</strong>
    </article>
    <article class="meta-item">
      <span>门槛</span>
      <strong>${card.barrier}</strong>
    </article>
  `;
  els.drawerSteps.innerHTML = card.aiSteps.map((step) => `<li>${step}</li>`).join("");
  els.drawerRules.innerHTML = card.rules.map((rule) => `<li>${rule}</li>`).join("");
  els.drawerSource.textContent = card.source;
  els.drawerSourceNote.textContent = card.sourceNote;
  els.drawerLink.href = card.officialUrl;

  if (open) toggleDrawer(true);
}

function decide(direction) {
  const card = currentCard();
  if (!card) return;

  if (direction === "like") state.subscribed.push(card);
  if (direction === "skip") state.skipped.push(card);

  state.currentIndex += 1;
  renderAll();
}

function toggleDrawer(open) {
  els.drawer.classList.toggle("hidden", !open);
}

function attachSwipe() {
  const topCard = els.deck.querySelector('.swipe-card[data-depth="0"]');
  if (!topCard) return;

  let startX = 0;
  let deltaX = 0;
  let dragging = false;

  function resetCard() {
    topCard.classList.remove("is-dragging", "show-like", "show-skip");
    topCard.style.transform = "";
  }

  function applyMove(distance) {
    const rotate = distance / 18;
    topCard.style.transform = `translateX(${distance}px) rotate(${rotate}deg)`;
    topCard.classList.toggle("show-like", distance > 55);
    topCard.classList.toggle("show-skip", distance < -55);
  }

  topCard.addEventListener("pointerdown", (event) => {
    dragging = true;
    startX = event.clientX;
    deltaX = 0;
    topCard.classList.add("is-dragging");
    topCard.setPointerCapture(event.pointerId);
  });

  topCard.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    deltaX = event.clientX - startX;
    applyMove(deltaX);
  });

  function release() {
    if (!dragging) return;
    dragging = false;

    if (deltaX > 110) {
      topCard.style.transform = "translateX(140%) rotate(18deg)";
      setTimeout(() => decide("like"), 160);
      return;
    }

    if (deltaX < -110) {
      topCard.style.transform = "translateX(-140%) rotate(-18deg)";
      setTimeout(() => decide("skip"), 160);
      return;
    }

    resetCard();
  }

  topCard.addEventListener("pointerup", release);
  topCard.addEventListener("pointercancel", release);
  topCard.addEventListener("click", () => renderDrawer(currentCard(), true));
}

function resetAll() {
  state.subscribed = [];
  state.skipped = [];
  buildDeck();
  renderAll();
}

function renderAll() {
  renderStatus();
  renderDeck();
}

document.getElementById("skip-btn").addEventListener("click", () => decide("skip"));
document.getElementById("like-btn").addEventListener("click", () => decide("like"));
document.getElementById("detail-btn").addEventListener("click", () => renderDrawer(currentCard(), true));
document.getElementById("reset-btn").addEventListener("click", resetAll);
document.getElementById("drawer-close").addEventListener("click", () => toggleDrawer(false));
document.getElementById("drawer-x").addEventListener("click", () => toggleDrawer(false));

buildDeck();
renderFilters();
renderAll();
