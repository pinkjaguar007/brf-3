# TACHKILA – Atlas FC Lineup Builder

An interactive **4-4-2 lineup builder** for the amateur football club **Atlas FC**. The coach manages the squad, then places players on a pitch built with native CSS Grid, without ever reloading the page.

Built as a individual project for the web development training at **YouCode Safi**.

- **Live demo:** [your-project.vercel.app](https://your-project.vercel.app) <!-- replace with your Vercel link -->
- **Task planning (Jira):** [link to your Jira board](https://your-workspace.atlassian.net) <!-- replace with your Jira link -->

<!-- Add a screenshot of the app here:
![TACHKILA screenshot](images/screenshot.png)
-->

---

## Table of contents

1. [Context](#context)
2. [Features](#features)
3. [Tech stack](#tech-stack)
4. [Project structure](#project-structure)
5. [The pitch (CSS Grid)](#the-pitch-css-grid)
6. [Data model](#data-model)
7. [How to use](#how-to-use)
8. [Getting started](#getting-started)
9. [Deployment](#deployment)
10. [Project planning](#project-planning)
11. [Roadmap](#roadmap)
12. [Author](#author)

---

## Context

Atlas FC wants to digitalise the preparation of its team lineups. The coach needs to:

- manage the squad (add, edit and delete a player with a name, a position and a number);
- see a schematic pitch with the 11 positions of a 4-4-2;
- assign players to positions;
- tell positions apart at a glance with a colour code.

This project practises DOM manipulation (selection, traversal, creation, modification, deletion), event handling, form handling, and responsive integration with Tailwind CSS and CSS Grid.

## Features

**Squad management**
- Add a player from a modal: full name, position (Gardien, Défenseur, Milieu, Attaquant) and number (1 to 99).
- Player list in the sidebar, built from an HTML `<template>`, one card per player (number, name, coloured dot).
- Click a card to select a player; his name appears in the selection panel.
- Edit the selected player (name and number) in a prefilled modal.
- Delete the selected player; he is also removed from the pitch.
- Live squad counter ("x joueur(s)").

**Colour code**

| Position | Short | Colour |
|---|---|---|
| Gardien | GB | Yellow / amber |
| Défenseur | DEF | Blue |
| Milieu | MIL | Green |
| Attaquant | ATT | Red |

The legend is in the header and each player card shows a dot in the colour of his position.

**Pitch**
- 12 columns × 9 rows grid, every cell written in HTML and positioned in CSS (`grid-column` / `grid-row`).
- The 11 positions of the 4-4-2 are highlighted with the colour of their line.
- Assign the selected player to a position with the select in the sidebar. If the position is already taken, the new player replaces the previous one.
- The player's name is displayed in his position on the pitch.

**Persistence**
- The squad (including each player's assigned position) is saved in `localStorage` and loaded when the app starts.

## Tech stack

| Technology | Usage |
|---|---|
| HTML5 | Structure, modals, `<template>` for player cards |
| Tailwind CSS v4 (CDN) | Layout and styling of the interface |
| CSS Grid (native, `style.css`) | The pitch and its 11 positions |
| Vanilla JavaScript (ES6) | DOM manipulation, events, state management |
| localStorage | Saving the squad in the browser |
| Git / GitHub | Version control |
| Vercel | Hosting |

## Project structure

```
tachkila/
├── index.html      # Page structure: header, sidebar, pitch, modals, player template
├── style.css       # Native CSS Grid for the pitch and the 11 positions
├── script.js       # App logic: state, rendering, events, localStorage
├── images/
│   └── logo-2048.png
└── README.md
```

## The pitch (CSS Grid)

The pitch is a `12 × 9` grid (`repeat(12, 1fr)` × `repeat(9, 1fr)`). Position cells are placed with `grid-column` and `grid-row`; the goalkeeper takes 2 columns × 3 rows, the other positions take 2 columns.

| Position | Class | Column | Row |
|---|---|---|---|
| Goalkeeper | `.gb` | 1 / 3 | 4 / 7 |
| Left back | `.dg` | 4 / 6 | 2 |
| Centre back 1 | `.dc-1` | 3 / 5 | 4 |
| Centre back 2 | `.dc-2` | 3 / 5 | 6 |
| Right back | `.dd` | 4 / 6 | 8 |
| Left midfielder | `.mg` | 8 / 10 | 2 |
| Centre midfielder 1 | `.mc-1` | 7 / 9 | 4 |
| Centre midfielder 2 | `.mc-2` | 7 / 9 | 6 |
| Right midfielder | `.md` | 8 / 10 | 8 |
| Striker 1 | `.bu-1` | 11 / 13 | 3 |
| Striker 2 | `.bu-2` | 11 / 13 | 8 |

The values of the position `<select>` in the sidebar match these class names, so JavaScript can find the right cell directly.

## Data model

Players are stored in an array of objects, synchronised with `localStorage` (key `localstoragedata`) using `JSON.stringify` / `JSON.parse`.

```json
{
  "id": 1761570000000,
  "name": "Ayoub Mansouri",
  "number": "7",
  "role": "milieu",
  "slot": "mc-1"
}
```

| Field | Description |
|---|---|
| `id` | Unique identifier generated with `Date.now()` (players are identified by id, not by number) |
| `name` | Full name |
| `number` | Shirt number (1 to 99) |
| `role` | `gardien`, `defenseur`, `milieu` or `attaquant` |
| `slot` | Assigned pitch position (`gb`, `dc-1`, `mc-2`…) or empty if not placed |

## How to use

1. Click **+ Ajoute un joueur**, fill in the name, choose a position, enter a number and click **Ajouter**.
2. The player appears in **liste des joueurs**. Click his card to select him.
3. Pick a position in the **Choisir une position** select to place him on the pitch.
4. With a player selected, use **Modifier** to change his name or number, or **Supprimer** to remove him.

## Getting started

No build step is needed. Tailwind CSS is loaded from a CDN, so an internet connection is required.

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git

# 2. Go into the project folder
cd <your-repo>

# 3. Open index.html in your browser
#    (or use the "Live Server" extension in VS Code)
```

## Deployment

The project is a static site hosted on **Vercel**:

1. Push the project to GitHub.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repository.
3. Keep the default settings (no framework, no build command) and click **Deploy**.

Every `git push` to the main branch redeploys the site automatically.

## Project planning

The tasks are planned in Jira (see the link at the top of this file). The brief is split over 7 days:

| Day | Date | Focus |
|---|---|---|
| 1 | 19/10 | Git repository, task planning, HTML / Tailwind structure |
| 2 | 20/10 | Pitch in native CSS Grid, modal open / close |
| 3 | 21/10 | Form validation, add a player, coloured list, first Vercel deployment |
| 4 | 22/10 | Assign a player to a position, display on the pitch, counters |
| 5 | 23/10 | Delete and edit a player |
| 6 | 26/10 | Messages, localStorage, responsive, error-case tests |
| 7 | 27/10 | Bonus, README, final delivery on Git and Vercel |

## Roadmap

Improvements planned or still to do:

- [ ] Real-time form validation with regex and error messages under each field (name: letters only, 3 to 30 characters; number: 1 to 99 and unique)
- [ ] Only accept a player on a position that matches his role (a goalkeeper cannot play as a striker)
- [ ] Allow changing the position in the edit modal
- [ ] Close the modals with `Esc` or a click on the backdrop
- [ ] Success / error messages that disappear after 3 seconds
- [ ] "Joueurs placés : x / 11" counter, "Sur le banc" option and faded card for placed players
- [ ] Confirmation before deleting a player
- [ ] Fully responsive layout (desktop, tablet, mobile)
- [ ] Accessibility (WCAG) and W3C HTML validation pass
- [ ] Bonus: drag & drop, automatic placement, filter the list by position

## Author

**[Your Name]** – YouCode Safi
GitHub: [@your-username](https://github.com/your-username)
