# 🐷 Piggy Cash Watcher

Piggy Cash Watcher est une application React simple permettant de suivre
ses dépenses et ses revenus en temps réel.

voir sur Vercel : https://piggy-cash-watcher.vercel.app/

## Fonctionnalités

### Gestion des revenus

- Saisie d'un revenu utilisateur
- Validation des entrées (uniquement des nombres)
- Mise à jour du total disponible

### Gestion des dépenses

- Ajout d'une dépense (titre + montant)
- Modification d'une dépense existante
- Suppression d'une dépense
- Mise à jour dynamique du total des dépenses

### Calculs automatiques

- Total des dépenses
- Revenu total
- Solde restant (cash disponible)

## Concepts techniques utilisés

### React

- Hooks (`useState`, `useRef`, `useEffect`, `useLayoutEffect`)
- Gestion des formulaires
- Composants réutilisables
- Gestion du focus via `forwardRef`

### Redux Toolkit

- Création de slice (`createSlice`)
- Store global
- Actions synchrones
- `useDispatch` / `useSelector`

### Validation

- Nettoyage des inputs (regex)
- Conversion sécurisée (`Number`, `Number.isNaN`)

## Architecture

src/ components/ containers / store/ App.jsx main.jsx

## ⚙️ Installation

### Avec Docker (recommandé)

#### Windows:

```bash
git clone <repo>
cd <repo>
docker compose -f docker-compose.windows.yml up
```

#### Linux:

```bash
git clone <repo>
cd <repo>
docker compose -f docker-compose.windows.yml up
```

👉 Accès : http://localhost:5173

---

### 📖 Installation détaillée

Voir la documentation complète :

👉 [docs/deploy.md](docs/deploy.md)

```

##  Améliorations possibles

-   Persistance (localStorage / backend)
-   Graphiques
-   Catégorisation

##  Objectif pédagogique

-   Comprendre Redux
-   Maîtriser les formulaires React
-   Gérer les refs et le DOM


```
