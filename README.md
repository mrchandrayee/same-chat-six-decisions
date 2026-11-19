# Same Chat. Six Decisions. — Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/same-chat-six-decisions/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreation of the uploaded 100.47-second vertical UI/UX explainer.

## What the source video demonstrates

The title card says **“Same chat. Six decisions.”** The chat example is a conversation with **Maya Chen**:

- Maya: “Still on for tonight?” — 8:02 PM
- Maya: “Booked the table for 8” — 8:02 PM
- You: “Yes! Running 10 min late” — 8:03 PM
- You: “Order me the gnocchi” — 8:03 PM
- Maya: “Done. See you soon” — 8:04 PM

The video compares the original chat layout with six upgrades:

1. **Alignment — “Sides say who.”** Yours on the right, theirs on the left; sender names are removed from each message.
2. **Grouping — “Cluster by sender.”** Same-sender messages cluster into turns. Callout: `5 bubbles → 3 turns`; 4px in a run, 18px between turns.
3. **Colour — “Yours gets the colour.”** Outgoing bubbles use the accent colour; incoming bubbles remain neutral. The video callout says `accent text` and `yours, at a glance`.
4. **Timestamps — “Stamp the gap.”** Five message timestamps become one date/time divider. Callout: `5 stamps → 1 divider`.
5. **Status — “Did it land?”** Online presence in the header and a read receipt below the latest outgoing message.
6. **Motion — “Messages arrive.”** Typing dots, messages slide in over 240ms, and sent messages transition to read.

## Included interactions

- Switch between Before and After.
- Select each of the six upgrade explanations.
- Play the six-step sequence.
- Send your own message from the chat composer.
- Responsive layout for desktop and mobile.

## Run locally

No dependencies or build step required.

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Project files

- `index.html` — app structure
- `styles.css` — dark chat UI, before/after styling and motion
- `app.js` — message rendering, six upgrades, sequence and composer
- `README.md` — source summary and setup

## Source accuracy

This video is a visual design explainer, not a source-code tutorial. The conversation copy, visible upgrade names, callouts and behavior descriptions are taken from the video. The HTML, CSS and JavaScript are newly authored to reproduce the demonstrated design and interactions; they are not the original creator's source files. Timing and some layout measurements are approximations where the video does not expose exact implementation values.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
