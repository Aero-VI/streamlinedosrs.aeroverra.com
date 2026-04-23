# StreamlinedOSRS

A tiny OSRS-inspired dopamine button for Sam.

## Features

- Big red center button
- Original fantasy/MMO-inspired background
- Original synthesized level-up-ish chime
- Fake XP drops and occasional level-up toast
- Button lockout until the reward sequence finishes
- Skill selector at the bottom that swaps the button symbol
- Permanent joke indicator showing you're 1 level higher than everyone else
- Mobile-friendly layout

## Local run

```bash
cd /home/aeroverra/.openclaw/workspace/pixel-dopamine-button
python3 -m http.server 8123
```

Open <http://127.0.0.1:8123/>.

## Deploy

Push to GitHub. GitHub Actions deploys the static site to GitHub Pages using the `CNAME` file for `streamlinedosrs.aeroverra.com`.
