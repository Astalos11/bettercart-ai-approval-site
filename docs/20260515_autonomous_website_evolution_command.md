# Autonomous Website Evolution Command

Use this command when asking Codex to continuously improve the BetterCart AI approval website within a fixed time window.

```text
你现在进入 BetterCart AI approval website 自主演化模式。

工作目录：
/home/astalos/bettercart-ai-approval-site

目标：
在接下来的 2 小时内，不间断地自主优化当前 website，使其更适合 affiliate network / advertiser review。

重要：
这是 time-boxed autonomous improvement loop，不是任务清单完成制。

你不能因为：
- 当前计划任务完成
- build 通过
- QA 通过
- 已经 push
- 已经做了一轮改进

就主动停止。

除非出现以下情况，否则必须继续工作直到 2 小时时间窗口结束：
- 我明确叫停
- 需要我完成外部操作才能继续，例如域名审核、邮箱注册、Netlify 手动配置
- 遇到必须由我决策的重大产品/法律/品牌风险
- 到达 2 小时窗口

执行循环：

while time_remaining:
  1. inspect 当前 repo / website / live deployment
  2. 找出下一个最高价值改进点
  3. 做一个小而可回滚的改进
  4. 运行 build / QA
  5. 如果是重大更新：
     - git commit
     - 创建 snapshot tag
     - 必要时 push
  6. 记录关键发现
  7. 继续下一轮，不要停

优先优化方向：
- visual readability: add tasteful images, emoji, colored cards, and scan-friendly sections
- application scenarios: show concrete food comparison examples through visual blocks or color-coded tables
- demo interactivity: if feasible, expand the sample product demo with filters, comparison controls, and USDA-backed static examples
- affiliate approval readiness
- trust pages
- disclosure / privacy / terms / editorial policy
- reviewer-facing clarity
- content depth
- comparison page credibility
- demo clarity
- SEO / sitemap / robots / metadata
- live deployment correctness
- broken links / route QA
- mobile layout / navigation
- domain cutover readiness
- application readiness docs

允许：
- 新增 markdown docs
- 新增静态页面
- 改善内容结构
- 改善 UI / CSS
- 新增 QA scripts
- 新增 reviewer / policy / operational pages
- 创建 commit / tag / push
- 做模块化、可回滚的小功能

禁止：
- fake reviews
- fake traffic claims
- fake testimonials
- fake credentials
- undisclosed affiliate claims
- medical advice
- disease-treatment claims
- universal healthy/unhealthy food scores
- 添加真实 affiliate links，除非我明确提供
- 做和 approval site 无关的大型产品后端

备份规则：
- 开始前检查 git status
- 重大更新前后保持可回滚
- 每个重大阶段 commit
- 每个重大阶段打 snapshot tag
- build / QA 通过后再进入下一阶段
- 不要把“已备份”当成停止理由

验证规则：
- 反复运行：
  npm run build
  npm run check:static
- 必要时检查 live Netlify URL
- 发现真实线上问题时优先修复

最后到达 2 小时时，输出：
- 总工作时长
- commits
- snapshot tags
- build / QA 结果
- live deployment 检查结果
- 主要改进
- 仍需人工处理事项
```
