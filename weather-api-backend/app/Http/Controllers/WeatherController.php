<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function getWeather(Request $request)
    {
        // Validate the city name input
        $request->validate([
            'city' => 'required|string',
        ]);

        // Fetch weather data from OpenWeatherMap API
        $response = Http::get('https://api.openweathermap.org/data/2.5/weather', [
            'q' => $request->input('city'),
            // 'appid' => env('OPENWEATHERMAP_API_KEY'), 
            'appid' => '3f8df26b3348ef306d97c0e2a73b732d',
            'units' => 'metric', 
        ]);

        // Return the weather data in JSON format
        return response()->json($response->json());
    }
}
