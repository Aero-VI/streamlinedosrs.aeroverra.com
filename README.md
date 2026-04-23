# StreamlinedOSRS

A tiny OSRS-inspired dopamine button for Sam.

## Features

- Big red center button
- Original fantasy/MMO-inspired background
- Original synthesized fantasy/MMO level-up-ish chime with a more tavern-jingle feel
- Fake XP drops and occasional level-up toast
- No button lockout — mash it as fast as your thumbs allow
- Skill selector at the bottom that swaps the button symbol
- Permanent joke indicator showing you're 1 level higher than everyone else
- Mobile-friendly layout with rapid-tap-safe button behavior

## Local run

```bash
cd /home/aeroverra/.openclaw/workspace/pixel-dopamine-button
python3 -m http.server 8123
```

Open <http://127.0.0.1:8123/>.

## Deploy

Push to GitHub. GitHub Actions deploys the static site to GitHub Pages using the `CNAME` file for `streamlinedosrs.aeroverra.com`.
