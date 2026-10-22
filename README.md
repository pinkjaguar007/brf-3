Tachkila – Football Lineup Builder

Tachkila is an interactive web app that lets a coach manage a squad and place players on a 4-4-2 pitch. It was built for the amateur club Atlas FC as a YouCode brief, using HTML, Tailwind CSS, native CSS Grid and vanilla JavaScript (DOM manipulation).

Live site: [Vercel link]
Repository: [GitHub link]
Task planning: Jira project "brief 3" (7 daily epics, 19 stories)
Features
Manage the squad: add, edit and delete a player (name, role, number)
Pitch drawn as a 12 × 9 native CSS Grid with the 11 positions of the 4-4-2
Assign a player to a position that matches their role (a goalkeeper cannot play as a striker), one player per position
Color code for roles and for the state of each position (free / occupied)
Real-time form validation with regular expressions
Live counters: squad size and "Joueurs placés : x / 11"
Success and error messages that disappear after 3 seconds
Squad and lineup saved in localStorage
Responsive layout for desktop, tablet and mobile
Role colors
Role	Meaning	Color
GB	Goalkeeper (Gardien)	Yellow
DEF	Defender (Défenseur)	Blue
MIL	Midfielder (Milieu)	Green
ATT	Attacker (Attaquant)	Red
Form validation rules
Name: required, letters only, 3 to 30 characters
Role: required
Number: required, from 1 to 99, and unique
Project status
 Git repository and task planning
 Header (logo, role legend, 4-4-2 scheme) and aside layout (add button, squad counter)
 Pitch area (CSS Grid, 11 positions)
 Add / edit modal
 Form validation with regex
 Add, edit and delete players
 Assign players to positions
 Messages and localStorage
 Responsive, W3C and accessibility checks
 Bonus features
Tech stack
HTML5 with semantic tags
Tailwind CSS v4, loaded through the Play CDN script (no install needed)
Native CSS Grid for the pitch
JavaScript (DOM, events), const and let only
Git / GitHub, Vercel, Jira
Project structure
tachkila/
├── index.html
├── style.css
├── script.js        # to come
└── images/
    └── logo-2048.png
Run locally

There is no build step and nothing to install. Clone the repository and open index.html in your browser. An internet connection is required because Tailwind is loaded from a CDN.

bash
git clone [GitHub link]
cd tachkila
Data model

Players are stored in an array of objects, kept in sync with localStorage (JSON.stringify / JSON.parse):

js
{ id, nom, numero, poste, position } // position stays empty while the player is on the bench
Responsive targets
Screen	Width
Large desktop	1280 px and up
Small desktop	1024 to 1279 px
Tablet	768 to 1023 px
Mobile	up to 767 px
Planning

The work is split into 7 days, from 19 to 27 October 2026, with the final deadline on 27/10/2026 at 17:20. Each day is an epic in Jira, with its stories and due dates.
