This is a laravel backend application used for developing a weather api which is consumed in a weather app frontend application using NextJs and Typescript.

## Initializing the project locally

Clone the project:

```bash
git clone https://github.com/Celine-Bowen/weather-api-backend.git
```

Install dependencies:

```bash
composer install
```

Create and configure a new .env file then add your OPENWEATHERMAP_API_KEY

Serve the project:

```bash
php artisan serve
```

Test your Get weather api on postman

```bash
http://localhost:8000/api/weather?city=Nairobi
```

Consume the api on the weather app frontend application
