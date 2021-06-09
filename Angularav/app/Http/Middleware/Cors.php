<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next){
        return $next($request)
        ->header('Access-Control-Allow-Origin', 'http://127.0.0.1:4200')
        ->header('Access-Control-Allow-Methods', '*')
        ->header('Access-Control-Allow-Headers', '*')
        ->header('Access-Control-Allow-Credentials',' true');
      //->header('Access-Control-Allow-Origin', 'http://127.0.0.1:4200')
      //->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      //->header('Access-Control-Allow-Headers',' Origin, Content-Type, Accept, Authorization, X-Request-With')
      //->header('Access-Control-Allow-Credentials',' true');
}

}