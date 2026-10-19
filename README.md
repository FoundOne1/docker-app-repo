# 🚀 docker-app-repo

A CI/CD pipeline for a Dockerized Node.js app, built with **GitHub Actions** and deployed to **Azure Container Apps**.

## ✨ Features

- 🐳 Dockerized Node.js app with an automated image build
- 🔁 Reusable GitHub Actions workflows
- 🧪 Continuous testing (container test and `/health` check)
- ☁️ Azure integration with continuous deployment to Dev and Prod
- 🏷️ Images tagged with the Git commit SHA
- 🔐 Passwordless Azure login (OIDC) and secrets management with GitHub
- 📊 Live dashboard showing version, environment and health

## 🧭 How It Works

- 🌿 Push to `feature_branch` → build → test → deploy to **Dev**
- 🏭 Merge into `main` → promote the image → deploy to **Prod**

## ▶️ Run Locally

```bash
cd dockerFiles
docker build -t myapp .
docker run -p 8080:80 -e ENVIRONMENT=DEV -e APP_VERSION=latest myapp
```

Open http://localhost:8080 🎉

## 👨‍💻 Author

**Vigneswaran R**
