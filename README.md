# 🚀 Project 2 — Kustomize + FluxCD GitOps Platform

## 📌 Overview

This project demonstrates a complete end-to-end GitOps CI/CD platform using:

* Kubernetes
* Minikube
* Kustomize
* FluxCD
* GitHub Actions
* DockerHub
* Node.js
* Express.js
* Ingress NGINX

The project follows modern GitOps principles where:

* Git becomes the single source of truth
* FluxCD continuously reconciles cluster state
* GitHub Actions automates image builds
* Kustomize overlays manage environments
* Kubernetes performs rolling updates automatically

---

# 🏗️ Architecture

```text
Developer
   ↓
Git Push
   ↓
GitHub Actions
   ↓
Docker Image Build
   ↓
DockerHub Push
   ↓
GitOps Repository Update
   ↓
FluxCD Reconciliation
   ↓
Kustomize Overlay Applied
   ↓
Kubernetes Rolling Update
   ↓
Ingress
   ↓
Browser
```

---

# 🧰 Tech Stack

| Tool           | Purpose                           |
| -------------- | --------------------------------- |
| Kubernetes     | Container orchestration           |
| Minikube       | Local Kubernetes cluster          |
| FluxCD         | GitOps operator                   |
| Kustomize      | Kubernetes manifest customization |
| GitHub Actions | CI automation                     |
| DockerHub      | Container registry                |
| Node.js        | Backend runtime                   |
| Express.js     | Web framework                     |
| Ingress NGINX  | External traffic routing          |

---

# 📁 Repository Structure

## Application Repository

```text
kustomize-flux-node-app
│
├── .github/workflows
│   └── docker-build.yml
│
├── Dockerfile
├── .dockerignore
├── package.json
├── server.js
└── ...
```

---

## GitOps Repository

```text
kustomize-flux-gitops
│
├── base
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── kustomization.yaml
│
├── overlays
│   └── dev
│       ├── replica-patch.yaml
│       └── kustomization.yaml
│
├── git-source.yaml
└── flux-kustomization.yaml
```

---

# ⚙️ Application Features

* Task manager web application
* Node.js + Express backend
* Minimal responsive UI
* Environment information
* Version information
* Kubernetes deployment ready
* GitOps compatible

---

# 🐳 Dockerization

## Docker Build

```powershell
docker build -t shivawmm1810/task-manager-app:v1 .
```

## Run Container

```powershell
docker run -d -p 3001:3000 --name task-manager-container shivawmm1810/task-manager-app:v1
```

## Access Application

```text
http://localhost:3001
```

---

# 🔄 CI/CD Workflow

## GitHub Actions Responsibilities

* Build Docker image
* Push image to DockerHub
* Update GitOps repository
* Commit new immutable image tag

---

# 🔐 GitHub Secrets

| Secret          | Purpose                    |
| --------------- | -------------------------- |
| DOCKER_USERNAME | DockerHub username         |
| DOCKER_PASSWORD | DockerHub access token     |
| GITOPS_TOKEN    | GitHub PAT for GitOps repo |

---

# ☸️ Kubernetes Resources

## Base Resources

* Deployment
* Service
* Ingress

## Overlay Resources

* Replica patches
* Image tag overrides
* Environment-specific customizations

---

# 📦 Kustomize Concepts Used

## Base

Reusable Kubernetes manifests.

## Overlay

Environment-specific customizations.

## Strategic Merge Patch

Used to override:

```yaml
replicas: 2
```

without modifying base manifests.

## Image Transformer

Used to dynamically update:

```yaml
newTag:
```

inside overlays.

---

# 🔁 FluxCD GitOps Flow

FluxCD continuously:

1. Pulls Git repository
2. Detects manifest changes
3. Applies Kustomize overlays
4. Reconciles cluster state
5. Performs rolling updates

---

# 🚀 Deployment Steps

## Start Minikube

```powershell
minikube start --driver=docker
```

---

## Enable Ingress

```powershell
minikube addons enable ingress
```

---

## Start Tunnel

> Run PowerShell as Administrator

```powershell
minikube tunnel
```

---

## Verify Cluster

```powershell
kubectl get nodes
```

---

## Verify Pods

```powershell
kubectl get pods -A
```

---

# 🌐 Hosts File Configuration

Open:

```text
C:\Windows\System32\drivers\etc\hosts
```

Add:

```text
127.0.0.1 task-manager.local
```

---

# 🌍 Access Application

```text
http://task-manager.local
```

---

# 🔍 FluxCD Commands

## Verify Git Sources

```powershell
flux get sources git
```

## Verify Kustomizations

```powershell
flux get kustomizations
```

## Force Reconciliation

```powershell
flux reconcile source git kustomize-flux-gitops
```

---

# 📈 Rolling Update Demo

Watch pods during deployment:

```powershell
kubectl get pods -n kustomize-flux-demo -w
```

Observe:

* new pod creation
* old pod termination
* zero downtime rollout

---

# ♻️ Self-Healing Demo

Delete a pod manually:

```powershell
kubectl delete pod <pod-name> -n kustomize-flux-demo
```

Kubernetes automatically recreates it.

---

# 🧠 Important Concepts Learned

* GitOps
* FluxCD reconciliation
* Kustomize overlays
* Strategic merge patches
* Image transformers
* Immutable deployments
* Rolling updates
* Kubernetes networking
* Ingress routing
* CI/CD automation
* Docker image lifecycle

---

# ⚖️ Helm vs Kustomize

| Helm                | Kustomize               |
| ------------------- | ----------------------- |
| Template generation | YAML patching           |
| values.yaml         | overlays                |
| Package manager     | Customization engine    |
| Go templates        | Strategic merge patches |

---

# 🎯 Project Outcomes

✅ Node.js application containerized

✅ DockerHub integration completed

✅ GitHub Actions CI pipeline configured

✅ FluxCD GitOps deployment implemented

✅ Kustomize overlays configured

✅ Kubernetes ingress routing enabled

✅ Automated rolling updates working

✅ Immutable image deployments implemented

---

# 📚 Useful Commands

## Start Cluster

```powershell
minikube start --driver=docker
```

## Stop Cluster

```powershell
minikube stop
```

## Start Tunnel

```powershell
minikube tunnel
```

## Check Pods

```powershell
kubectl get pods -A
```

## Check Application Pods

```powershell
kubectl get pods -n kustomize-flux-demo
```

## Check Services

```powershell
kubectl get svc -n kustomize-flux-demo
```

## Check Ingress

```powershell
kubectl get ingress -n kustomize-flux-demo
```

## Check Flux Resources

```powershell
flux get all
```

---

# 🏁 Final Result

This project demonstrates a production-style GitOps deployment platform using:

* Kustomize overlays
* FluxCD reconciliation
* GitHub Actions automation
* Kubernetes rolling deployments
* Immutable image tagging

This architecture closely resembles modern cloud-native DevOps workflows used in real Kubernetes environments.
