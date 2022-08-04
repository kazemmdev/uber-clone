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
        $csvFile = fopen(base_path("database/worldcities.csv"), "r");

        $firstline = true;
        while (($data = fgetcsv($csvFile, 2000, ",")) !== False) {
            if (!$firstline) {
                Location::create([
                    "name" => $data[0],
                    "latitude" => $data[2],
                    "longitude"  => $data[3]
                ]);
            }
            $firstline = false;
        }

        fclose($csvFile);

        $this->command->info(Location::count() . ' locations added!');
    }
}
