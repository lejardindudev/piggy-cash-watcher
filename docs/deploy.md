# 🚀 Projet React + Vite + Docker (Linux / Windows)

## 📦 Prérequis

- Docker installé
- Docker Compose disponible

---

## 🧱 Structure du projet

- `docs/`
- `src/`
- `tools/`
  - `templates/`
  - `copy-to/`
- `.env` (Non versionné)
- `.env-sample`
- `docker-compose.linux.yml`
- `docker-compose.windows.yml`
- `package.json`
- `generate-react-cli.json`
- `jsconfig.json`

---

# 🐧 Installation (Linux)

```bash
git clone <repo>
cd <repo>
docker run -it --rm --user $(id -u):$(id -g) -v ${PWD}:/app -w /app node:24-bookworm sh -c "npm create vite@latest . -- --template react && npm pkg set scripts.g:component='generate-react-cli component'"
docker compose -f docker-compose.linux.yml up
```

**NB: Copier les fichiers présents dans le répertoire tools/copy-to**

👉 Accès : http://localhost:5173

---

# 🪟 Installation (Windows PowerShell)

```powershell
git clone <repo>
cd <repo>
docker run -it --rm -v ${PWD}:/app -w /app node:24-bookworm sh -c "npm create vite@latest . -- --template react && npm pkg set scripts.g:component='generate-react-cli component'"
docker compose -f docker-compose.windows.yml up
```

**NB: Copier les fichiers présents dans le répertoire tools/copy-to**

👉 Accès : http://localhost:5173

---

# ⚙️ Commandes utiles

## Générer un composant

La libraire generate-react-cli permet d'automatiser la création de composants en utilisant un dossier "template de référence".
Le composant créé contient d'office :

- Un fichier .scss du nom du composant
- Un import de mon utils classManager pour gérer la propagation des classes parentes aux childComponents (utilisation de BEM)
- import du fichier css
- l'écriture de la classe dans le composant
- index.js pour réduire la longueur de l'import

### Linux

```bash
yes | docker compose -f docker-compose.linux.yml run --rm app npx generate-react-cli component [Nom_du_component]

```

### Windows

```powershell
docker compose -f docker-compose.windows.yml run --rm app sh -c "printf 'y\n' | npx generate-react-cli component [Nom_du_component]"

```

---

## Installer une dépendance

### Linux

```bash
docker compose -f docker-compose.linux.yml run --rm app npm install [nom_du_module]
```

### Windows

```powershell
docker compose -f docker-compose.windows.yml run --rm app npm install [nom_du_module]
```

---
