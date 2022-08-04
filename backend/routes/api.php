<?php

use App\Http\Controllers\LocationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("locations", [LocationController::class, "index"])->name("locations.search");
