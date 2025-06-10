# Eventure

## Event Management Platform

![Laravel v11.x](https://img.shields.io/badge/Laravel-v11.x-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React v18.x](https://img.shields.io/badge/React-v18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Inertia.js](https://img.shields.io/badge/Inertia.js-000000?style=for-the-badge&logo=inertia&logoColor=white)
![PHP v8.2+](https://img.shields.io/badge/PHP-v8.2+-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🎯 Project Goal

Eventure is a web application designed to simplify event management and participation. This project serves as a university assignment, focusing on demonstrating core web development concepts rather than production-grade security or scalability.

The primary objectives are:
* Allow **Administrators** to create, manage (CRUD), and view participants for various events.
* Enable **Participants** to browse available events and register for them.
* Provide user profile management for all registered users.

## ✨ Features

* **User Authentication:** Secure registration, login, and password management.
* **Role-Based Access Control:** Distinct functionalities for `Organizer` (Admin) and `Participant` roles.
* **Event Management (Organizer):**
    * Create new events with details (name, description, dates, location, capacity, cover photo).
    * Edit existing event details.
    * Delete events.
    * View a list of participants for each event.
* **Event Browse (Participant):**
    * Browse a list of available events.
    * View detailed information for each event.
    * Filter events by title (and potentially by location/date).
* **Event Registration (Participant):**
    * Register and unregister for events.
    * Automatic capacity checks.
* **User Profile Management:**
    * Edit personal details (username, email, password).
    * View a list of registered events (for Participants).

## 🛠️ Technologies & Tools

**Backend:**
* **PHP (v8.2+)**: Core programming language.
* **Laravel Framework (v11.x)**: MVC framework for robust web application development.
    * **Eloquent ORM**: For seamless database interaction.
    * **Migrations**: For database schema management.
    * **Middleware**: For request filtering and access control.
* **MySQL**: Relational database management system (via XAMPP).

**Frontend:**
* **React (v18.x)**: JavaScript library for building user interfaces.
* **Inertia.js**: A "bridge" between Laravel and React, enabling single-page application (SPA) experiences without building an API.
* **Vite**: Frontend build tool for fast development and asset bundling.
* **shadcn/ui**: Component library for aesthetic and accessible UI elements.

**Development Environment:**
* **XAMPP**: Apache, MySQL for local server setup.
* **Composer**: PHP dependency manager.
* **NPM**: Node.js package manager for frontend dependencies.
* **Git**: Version control.

## 🚀 Getting Started

To set up and run Eventure locally, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone [your-repository-url] eventure
    cd eventure
    ```

2.  **Install PHP Dependencies:**
    ```bash
    composer install
    ```

3.  **Configure Environment Variables:**
    * Copy the example environment file:
        ```bash
        cp .env.example .env
        ```
    * Generate an application key:
        ```bash
        php artisan key:generate
        ```
    * Open `.env` and configure your MySQL database connection details:
        ```ini
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=eventure_db # Ensure this database exists in phpMyAdmin
        DB_USERNAME=root
        DB_PASSWORD=
        ```

4.  **Database Setup:**
    * Ensure MySQL is running in your XAMPP Control Panel.
    * Create the database (`eventure_db`) in phpMyAdmin.
    * Run migrations to set up database tables:
        ```bash
        php artisan migrate:fresh
        ```

5.  **Install Node.js Dependencies:**
    ```bash
    npm install
    ```

6.  **Run Development Servers:**
    * In your **first terminal**, start the Laravel development server:
        ```bash
        php artisan serve
        ```
    * In your **second terminal**, start the Vite frontend development server:
        ```bash
        npm run dev
        ```

7.  **Access the Application:**
    Open your web browser and navigate to `http://localhost:8000` (or the port shown by `php artisan serve`).

## 🔑 Initial Setup for Roles

After registration, users are assigned the `participant` role by default. To create an `organizer` (admin) user:

1.  Register a new user through the application's registration page.
2.  Access phpMyAdmin (`http://localhost/phpmyadmin`).
3.  Navigate to the `eventure_db` database and the `users` table.
4.  Find your newly registered user and manually change their `role` column value from `'participant'` to `'organizer'`.

Now, when you log in with this user, they will have administrator privileges.

---

## 🚧 Project Status

This project is currently under active development as a university assignment. Features are being implemented iteratively.

---

## 🤝 Contributing

As this is a university project, external contributions are not expected. However, if you find any issues or have suggestions, please feel free to open an issue.

---
