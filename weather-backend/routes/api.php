<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

/*
| API Routes
|
| Here is where you can register API routes for your application. 
|
*/

// Optionally: API versioning (e.g., /api/v1/weather)
Route::prefix('v1')->group(function () {
    // Public routes (no auth required)
    Route::get('/weather', [WeatherController::class, 'getWeather']);
    
    // Protected routes (auth required)
    Route::middleware('auth:sanctum')->group(function () {
        // Example: Save user's favorite cities
        Route::post('/weather/save', [WeatherController::class, 'saveLocation']);
    });
});

// Fallback for undefined API routes
Route::fallback(function () {
    return response()->json([
        'message' => 'Endpoint not found'
    ], 404);
});