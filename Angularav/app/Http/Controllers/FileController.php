<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    //
    function upload(Request $req){
        $result = $req->file('file')->store('apiDoc');
        return ["result" => $result ];
    }
}
