<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function index()
    {
        if (!request("key") || (request("key") && strlen(request("key")) < 2))
            return response()->json([], 200);

        $location = Location::query()
            ->whereRaw("LOWER(`name`) LIKE ?",  ["%" . trim(strtolower(request("key"))) . "%"])
            ->take(5)
            ->get();

        return response()->json($location, 200);
    }
}
