# CLAUDE.md — BinanceHub 修改约束（给 Claude 用）

## 项目目标
这是一个部署在 GitHub Pages 的活动看板项目。
核心要求：
1. 保留现有高质量活动卡片内容（尤其详情/步骤/剩余时间）。
2. 新活动通过抓取自动补充，不能破坏旧卡片。
3. 数据质量稳定，避免反爬垃圾文本进入页面。

---

## 允许修改的文件
- `index.html`（页面骨架）
- `assets/styles.app.css`（样式）
- `assets/app.bundle.js`（前端逻辑）
- `data.json`（活动数据）
- `scripts/fetch_binance_activities.mjs`（抓取脚本）
- `scripts/validate_data.mjs`（数据校验）
- `.github/workflows/update-data.yml`（定时任务）

除非明确要求，不要重命名文件，不要新增复杂框架。

---

## 硬约束（必须遵守）

### 1) 非破坏性合并
- 新抓取数据只能“增量补充”。
- 对已存在卡片，必须保留原核心字段：
  - `deadline`
  - `deadlineSoon`
  - `dlLabel`
  - `nums`
  - `drawer.details`
  - `drawer.steps`

### 2) 详情完整性
每条活动至少包含：
- `title`
- `cat`
- `drawer.details`（>=1）
- `drawer.steps`（>=1）

### 3) 脏文本过滤
禁止将以下文本写入 `subtitle/steps/details`：
- `security check`
- `max challenge attempts exceeded`
- `verify that you are human`
- `cloudflare`

### 4) 标签规范
分类仅使用以下值：
- `launch`
- `earn`
- `trade`
- `welfare`
- `square`
- `social`
- `newbie`

---

## 推荐工作流
1. 先改脚本：`scripts/fetch_binance_activities.mjs`
2. 运行抓取：
   - `node scripts/fetch_binance_activities.mjs`
3. 运行校验：
   - `node scripts/validate_data.mjs`
4. 本地预览：
   - `python3 -m http.server 8787`
5. 再改前端（如有必要）：
   - `assets/app.bundle.js`, `assets/styles.app.css`

---

## 提交要求
每次输出：
1. 修改文件列表
2. 关键变更说明（3-6条）
3. `git diff --stat` 摘要
4. 建议 commit message

---

## 禁止事项
- 不要把所有内容重新塞回单个 HTML
- 不要删除现有卡片而不说明原因
- 不要在未校验 `data.json` 的情况下建议发布
