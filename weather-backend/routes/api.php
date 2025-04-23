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

Route::get('/weather', [WeatherController::class, 'getWeather']);

// Fallback for undefined API routes
Route::fallback(function () {
    return response()->json([
        'message' => 'Endpoint not found'
    ], 404);
});