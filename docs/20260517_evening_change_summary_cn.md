# 2026-05-17 晚间变更摘要

## 当前版本最重要变化

网站已经不只是“最低限度申请水站”。

今天后半段主要把它推进成一个更像真实产品雏形的 publisher site：

```text
申请可信页面
+ 可交互 demo
+ USDA-derived 静态商品样本
+ affiliate 申请策略文档
+ advertiser 申请种子表
+ 操作 / 部署 / QA 规则
```

## Demo 升级

`/tools/food-comparison-demo/` 已从少量手写样例升级为：

- 80 条静态 USDA FDC-derived canonical sample products。
- 来源是本地 cleaned canonical nutrition dataset。
- 支持 intent 切换。
- 支持 category filter。
- 支持 product search。
- 支持 quick searches。
- 支持 3 个商品对比。
- 显示 dataset snapshot。
- 明确没有 live retailer inventory。
- 明确没有 affiliate links。
- 明确没有 paid placement。

这解决了一个关键问题：

```text
网站看起来不再只是模板内容站，而有一个基于真实食品数据的产品体验雏形。
```

## Website / QA 改进

新增或加强：

- `npm run build:demo-data`
- `npm run build:zip`
- `npm run check:zip`
- static QA 检查 demo JSON 是否存在、至少 80 条、关键字段齐全
- static QA 检查 homepage / demo / publisher kit 关键信息
- live QA 检查 publisher kit 关键信息

## Affiliate 申请策略

已记录的新策略：

- 品牌名固定使用 `BetterCart AI`。
- 通过 network 后，advertiser 申请要尽量广泛，用真实申请结果观察通过率。
- 相关度高的 food / grocery / nutrition / snack / beverage / supplement advertiser 更重要，但不要一开始只盯极少数。
- 网站不再只按最低申请门槛做，能继续优化就继续优化。

## 新增申请辅助材料

新增：

- advertiser seed list
- advertiser seed list notes
- application copy v2
- boss-facing summary
- source notes
- application tracker CSV

这些材料用于明天 Awin / FlexOffers 后续申请和记录。

## 新增项目规则

新增到 AGENTS / project_ops：

- 硬时间盒 autonomous work 不能因为 QA 通过、commit 完成、repo 干净、用户普通发言而停止。
- 用户普通发言不是 pause / stop signal。
- 有价值的想法也是贡献，应记录到 `project_ops/ideas/`。
- 想法不一定要马上实现，但要能后续恢复和推进。

## 数据层新增认知

新增一个重要想法 / 决策：

```text
canonical product 选 current best row 不代表丢弃多余 UPC / GTIN / source-row identity signals
```

这些多余信号未来对 affiliate feed / retailer product identity matching 可能很重要。

建议后续新增 derived identity-signal layer，而不是覆盖当前 canonical CSV。

## 明天最实际的人工动作

1. 手动上传最新 `approval-site-out.zip` 到阿里云 OSS。
2. 上传后跑：

```bash
npm run check:live
```

3. 打开：

```text
https://www.bettercartai.com/tools/food-comparison-demo/
```

确认能看到 80 条 USDA demo dataset 相关文案。

4. 用 `https://www.bettercartai.com` 和 `contact@bettercartai.com` 继续 Awin / FlexOffers。

