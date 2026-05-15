# BetterCart AI 申请站当前状态摘要

日期：2026-05-15

## 一句话结论

当前站点已经从“空模板站”推进到一个可用于早期 affiliate network 申请测试的内容型 publisher site。

它仍然不是成熟内容站，也没有流量历史，但已经具备基础审核所需的站点结构、内容厚度、合规披露和 reviewer-facing 页面。

## 当前站点包含什么

- 12 篇 packaged food buying guides
- 8 个 sample comparison pages
- 17 个 trust / policy pages
- 1 个 food comparison demo
- 1 个 For Reviewers 页面
- 1 个 Publisher Kit 页面
- 1 个 Site Index 页面
- 1 个 humans.txt 审核入口文件

## 当前最重要的提升

- 首页不再像空壳站，有清晰定位和内容入口。
- 有 About / Contact / Privacy / Terms / Affiliate Disclosure。
- 有 Editorial Policy / Methodology / Corrections / Data Sources。
- 有 How We Make Money 和 Program Compliance，解释 affiliate 关系与推广边界。
- 所有 sample comparison 都明确标注 sample data。
- Demo 明确说明不是 live retailer inventory、不是 paid placement、不是 affiliate ranking。
- 静态 QA 会检查关键页面、内部链接、placeholder、高风险 claim、图片 alt、sitemap、sample data disclosure 和非医疗免责声明。

## 当前仍然缺什么

- `bettercartai.com` 还需要完成域名审核、DNS、HTTPS、Netlify custom domain 配置。
- `contact@bettercartai.com` 还需要实际可收发。
- 站点没有真实流量历史。
- 没有真实 affiliate links。
- 没有真实 retailer-linked product pages。
- comparison pages 仍然是 sample editorial data，不是实际产品测评。

## 当前适合做什么

适合：

- 早期 network-level affiliate application 测试。
- 向老板展示最低申请站点需要的页面和内容结构。
- 作为后续真实内容站的基础。

不适合直接声称：

- 已有稳定流量。
- 已有 advertiser relationship。
- 已经做过 hands-on product testing。
- 提供 medical / clinical nutrition advice。

## 当前主要风险

- 严格 advertiser-level review 仍可能因为新站、无流量、无真实商品页而拒绝。
- 如果域名和邮箱没准备好，用临时 Netlify 域名申请会显得弱。
- 如果站点内容被描述成“真实评测”而不是 sample comparison，会有合规风险。

## 下一步人工动作

1. 等 `bettercartai.com` 域名审核完成。
2. 在 Netlify 绑定 `bettercartai.com` 和 `www.bettercartai.com`。
3. 配置 DNS 和 HTTPS。
4. 设置 `NEXT_PUBLIC_SITE_URL=https://bettercartai.com`。
5. 激活 `contact@bettercartai.com`。
6. 重新部署并跑 live QA。
7. 再提交 Awin / FlexOffers / Skimlinks 等申请。
