<?php

namespace App\Http\Controllers;
use App\Models\Courrier;
use Illuminate\Http\Request;

class CourrierController extends Controller
{
    //
    public function index()
    {
        return Courrier::all();
    }
 
    public function show($id)
    {
        return Courrier::find($id);
    }

    public function store(Request $request)
    {
        return Courrier::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $courrier = Courrier::findOrFail($id);
        $courrier->update($request->all());

        return $courrier;
    }

    public function delete(Request $request, $id)
    {
        $courrier = Courrier::findOrFail($id);
        $courrier->delete();

        return 204;
    }
}
