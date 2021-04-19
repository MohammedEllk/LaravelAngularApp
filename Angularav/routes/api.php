<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileController;
use App\Http\Controllers\CourrierController;
use App\Http\Models\Courrier;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("upload",[FileController::class,'upload']);

Route::get('Courriers', function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return Courrier::all();
});
 
Route::get('Courriers/{id}', function($id) {
    return Courrier::find($id);
});

Route::post('Courriers', function(Request $request) {
    return Courrier::create($request->all);
});

Route::put('Courriers/{id}', function(Request $request, $id) {
    $courrier = Courrier::findOrFail($id);
    $courrier->update($request->all());

    return $courrier;
});

Route::delete('Courriers/{id}', function($id) {
    Courrier::find($id)->delete();

    return 204;
});

Route::get('Courriers', 'App\Http\Controllers\CourrierController@index');
Route::get('Courriers/{id}', 'App\Http\Controllers\CourrierController@show');
Route::post('Courriers', 'App\Http\Controllers\CourrierController@store');
Route::put('Courriers/{id}', 'App\Http\Controllers\CourrierController@update');
Route::delete('Courriers/{id}', 'App\Http\Controllers\CourrierController@delete');