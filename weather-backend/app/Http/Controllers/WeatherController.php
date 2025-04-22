<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function getWeather(Request $request)
    {
        $request->validate([
            'city' => 'required|string',
            'units' => 'nullable|in:metric,imperial'
        ]);

        $apiKey = env('OPENWEATHER_API_KEY');
        $city = $request->input('city');
        $units = $request->input('units', 'metric');

        $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
            'q' => $city,
            'appid' => $apiKey,
            'units' => $units
        ]);

        return $response->json();
    }

    public function saveLocation(Request $request)
    {
        // Example protected route logic
    }
}