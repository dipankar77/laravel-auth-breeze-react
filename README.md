# 🔐 Laravel + Breeze + React Authentication Demo

This repository showcases a modern authentication setup using Laravel Breeze with React, Inertia.js, and Tailwind CSS — ideal for full-stack Laravel development.

## 🚀 Tech Stack

- **Laravel 12**
- **Laravel Breeze (React)**
- **Inertia.js**
- **React 18**
- **Tailwind CSS**
- **SQLite (for easy setup)**

## ✨ Features

- ✅ User registration, login, password reset
- ✅ Authenticated routes with middleware
- ✅ React-based frontend using Inertia.js
- ✅ Tailwind CSS styling
- ✅ Profile page (optional enhancement)
- ✅ Clean code and developer-friendly setup

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/dipankar77/laravel-auth-breeze-react.git
cd laravel-auth-breeze-react
```

### 2. Install PHP Dependencies
```bash
composer install
```

### 3. Configure Environment
```bash
cp .env.example .env
php artisan key:generate
```

### 4. Set Up the Database (SQLite)
```bash
touch database/database.sqlite
```
### Then update your .env with the correct database path:
- DB_CONNECTION=sqlite
- DB_DATABASE=database/database.sqlite

### 5. Run Database Migrations
```bash
composer install
```

### 6. Install JavaScript Dependencies
```bash
npm install
npm run dev
```

### 7. Start the Development Server
```bash
php artisan serve
```
- Then open your browser and visit: http://127.0.0.1:8000