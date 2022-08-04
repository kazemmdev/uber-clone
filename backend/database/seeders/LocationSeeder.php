<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $csvFile = fopen(base_path("database/locations.csv"), "r");

        $firstline = null;
        while (($data = fgetcsv($csvFile, 2000, ",")) !== False) {
            if (!$firstline && strlen($data[2]) > 0) {
                Location::create([
                    "name" => $data[3],
                    "latitude" => $data[1],
                    "longitude"  => $data[2]
                ]);
            }

            $firstline = false;
        }

        fclose($csvFile);
    }
}
