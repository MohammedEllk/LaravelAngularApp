<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Courrier;

class CourriersTableSeeder extends Seeder
{
    

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Courrier::truncate();
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 50; $i++) {
            Courrier::create([
                'title' => $faker->sentence,
                'content' => $faker->paragraph,
                'priority' => $faker->sentence,
                'filecourriername'=> $faker->sentence,
            ]);
        }
    }
}
