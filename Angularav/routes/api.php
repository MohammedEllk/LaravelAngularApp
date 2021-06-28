<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileController;
use App\Http\Controllers\CourrierController;
use App\Http\Controllers\AuthController;
use App\Http\Models\Courrier;
use App\Models\Entity;
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

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
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
//get courrier by User.
Route::get('Courriers/Users/{id}', function($id) {
    $courriers = User::where('id', $id)->first()->courriers;
        return $courriers;
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
Route::get('doc/{filename}','App\Http\Controllers\CourrierController@getdoc');
Route::get('Courriers', 'App\Http\Controllers\CourrierController@index');
Route::get('Courriers/{id}', 'App\Http\Controllers\CourrierController@show');
Route::get('Courriers/Users/{id}', 'App\Http\Controllers\CourrierController@getCourrierByuser');
Route::post('Courriers', 'App\Http\Controllers\CourrierController@store');
Route::put('Courriers/{id}', 'App\Http\Controllers\CourrierController@update');
Route::delete('Courriers/{id}', 'App\Http\Controllers\CourrierController@delete');


/// Controller For entity
Route::get('Entities', function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return Entity::all();
});
Route::get('Entities/{id}', function($id) {
    return Entity::find($id);
});
 //getUserWithEntities 

Route::get('EntitiesUsers', function() {
       
    $entities = Entity::all();
        $array = [];
        foreach ($entities as $key => $entite) {
        
            $entities[$key]->users = json_encode($entite->users);
        }
        
        return $entities;

});
Route::put('Entities/{id}', function(Request $request, $id) {
    $entity = Entity::findOrFail($id);
    $entity->update($request->all());

    return $courrier;
});
Route::delete('Entities/{id}', function($id) {
    Entity::find($id)->delete();

    return 204;
});

Route::get('Entities', 'App\Http\Controllers\EntityController@index');
Route::get('Entities/{id}', 'App\Http\Controllers\EntityController@show');
Route::get('Entities/Users', 'App\Http\Controllers\EntityController@getAllEnUs');
Route::post('Entities', 'App\Http\Controllers\EntityController@store');
Route::put('Entities/{id}', 'App\Http\Controllers\EntityController@update');
Route::delete('Entities/{id}', 'App\Http\Controllers\EntityController@delete');

//api For Users


Route::get('Users', function() {
       
    $users = User::orderBy('entity_id')->get();
       
        
        return $users;

});


//Controller
Route::get('Users','App\Http\Controllers\UserController@getAllUs');