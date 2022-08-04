<?php

namespace Tests\Feature;

use Database\Seeders\LocationSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LocationTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function search_in_loations_by_key()
    {
        $key = "er";

        $this->seed(LocationSeeder::class);

        $this->get('api/locations?key=' . $key)->assertOk();
    }
}
