<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourriersUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courrier_user', function (Blueprint $table) {
            $table->increments('id');
            $table->engine = 'MyISAM';
            $table->integer('courrier_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->foreign('courrier_id')->references('id')->on('courriers')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courriers_users');
    }
}
