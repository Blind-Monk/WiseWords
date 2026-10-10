# Wise Words Step-by-Step Local Development Guide

Follow this step-by-step guide to run and develop Wise Words locally.

---

## 1. Environment Setup

### Step 1: Install Node.js Dependencies
```bash
npm install
```

### Step 2: Build Workspace Packages
```bash
npm run build
```

### Step 3: Start Development Engine Gateway
```bash
npm run dev
```

The Wise Words API Gateway will start on `http://localhost:8080`.

---

## 2. Running Frontend Interface

Open `frontend/src/index.html` in your web browser or serve via a local HTTP static server:

```bash
npx serve frontend/src -p 4200
```
Navigate to `http://localhost:4200` to access the Wise Words Chat & Settings interface.
