# BetterCart AI Approval Site Agent Rules

## Time-Boxed Autonomous Work

When the user asks for autonomous work within a hard time box, the work is time-boxed, not checklist-boxed.

Do not stop early just because:

- the current plan tasks are complete
- build passes
- QA passes
- changes are committed
- changes are pushed
- the repo is clean
- the current page or document looks good enough
- one round of improvement is finished
- the user sends a normal message

User messages are not a stop signal.

Only stop before the time box ends if:

- the user explicitly says to stop, pause, wait, or not continue
- continuing requires an external action only the user can do
- there is a major product, legal, billing, credential, or brand decision that cannot be reasonably assumed
- the time box or token budget is reached

If the current workstream is complete, choose the next highest-value improvement within scope and continue.

## Idea Capture

Valuable ideas are project contributions even when they are not immediately implemented.

When a useful site, affiliate, product, data, or workflow idea appears:

- record it in the main project ideas backlog when it affects the broader project
- use `/home/astalos/usda_food_pipeline/project_ops/ideas/` for global ideas
- include enough context to recover why the idea mattered
- do not force immediate implementation if it would interrupt higher-priority work
- revisit captured ideas during planning, shutdown, or when choosing the next task

## Current Scope

This repo is the BetterCart AI affiliate approval / publisher website.

Current direction:

- use `BetterCart AI` as the active brand name
- keep improving the site beyond the old minimum approval-site threshold
- improve reviewer clarity, trust pages, content depth, demo interactivity, and operational QA
- use local USDA-derived data where useful for static demos

Do not add:

- fake reviews
- fake traffic claims
- fake testimonials
- fake affiliate partnerships
- medical or disease-treatment claims
- live affiliate links unless explicitly provided and approved
