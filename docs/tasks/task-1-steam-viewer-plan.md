# Implementation Plan: Steam Free Games Viewer

## 1. Project Initialization
- [ ] Initialize React App (Vite).
- [ ] Clean default boilerplate.
- [ ] Install dependencies (start with minimal, standard React).

## 2. Core Styling (Dark Theme)
- [ ] Define CSS variables (Hues of Purple/Dark Slate).
- [ ] Setup `index.css` for global reset.

## 3. Data Layer
- [ ] Create `src/services/api.js`.
- [ ] Implement `fetchFreeGames` function using CheapShark API (`storeID=1`, `upperPrice=0`).

## 4. Components
- [ ] `GameCard`: Display image, title, "FREE" badge, original price, and "Claim" button.
- [ ] `GameList`: Grid layout container.
- [ ] `Header`: App branding.

## 5. Main Application Integration
- [ ] Assemble components in `App.jsx`.
- [ ] Implement `useEffect` for data fetching.
- [ ] Handle Loading/Error/Empty states.

## 6. Polish
- [ ] Verification on different screen sizes.
- [ ] Ensure "WOW" factor (hover effects, transitions).
