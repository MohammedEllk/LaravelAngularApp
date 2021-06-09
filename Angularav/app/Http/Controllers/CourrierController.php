<?php

namespace App\Http\Controllers;
use App\Models\Courrier;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use \PDF;
use setasign\Fpdi\Fpdi;


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
        $file = "test/test";
       
        
            //store file into document folder
        
        
      
        $input = $request->all();
       
        $path = $request->file('file');
        $name = time() . $path->getClientOriginalName();
        $file_path  = 'api/doc';
        $path->move($file_path, $name);
        //dd(end(explode(".", $name)));
        $tmp = explode('.', $name); // pour prendre seulement l'extension .docx ou bien .jpg
        $extension = end($tmp);
        $courrier  = new Courrier([
            'title' => $request->get('title'), //$request->get('title')
            'content' => $request->get('title'), //$request->get('content')
            'priority' => $request->get('priority'), //$request->get('priority')
            'file' => $path
        ]);
        
        if($extension=="docx"){
        $domPdfPath = base_path('vendor/dompdf/dompdf');
        \PhpOffice\PhpWord\Settings::setPdfRendererPath($domPdfPath);
        \PhpOffice\PhpWord\Settings::setPdfRendererName('DomPDF');
        
        //Load word file
        $Content = \PhpOffice\PhpWord\IOFactory::load(public_path(''.'api/doc'.'\\'.$name)); 
        
        //Save it into PDF
        $PDFWriter = \PhpOffice\PhpWord\IOFactory::createWriter($Content,'PDF');
        $PDFWriter->save(public_path(''.'api/doc'.'\\'.$name.".pdf")); 
        $courrier->file = $name.".pdf";
        $courrier->save();
            
        return 'File has been successfully converted';
        }

        if($extension=="png" || $extension=="jpg" || $extension=="jpeg"){
            $withoutExt = preg_replace('/\.[^.\s]{3,4}$/', '', $name);
            $pdfName = $withoutExt.".pdf";
            $pdf = new Fpdi();
            $pdf->AddPage();
            $pdf->Image(public_path(''.'api/doc'.'\\'.$name),20,40,170);
            
            $courrier->file = $pdfName;
            $courrier->save();
            
           return  $pdf->Output('api/doc'.'\\'.$pdfName,"F");
           
        }
        $courrier->file = public_path(''.'api/doc'.'\\'.$name.'.pdf');
        $courrier->save();
        
        return PDF::loadFile(public_path(''.'api/doc'.'\\'.$name))
            ->setPaper('a4', 'landscape')
            ->setWarnings(false)
            ->save(public_path(''.'api/doc'.'\\'.$name.'.pdf'))
            ->stream();
    }

    public function getdoc(string $name){

            $headers = apache_request_headers();
            header("Content-Type","*");
            header("Content-Transfer-Encoding","*");
            header("Accept-Ranges", "*");
            header('Access-Control-Allow-Origin' , '*');
            header('Access-Control-Allow-Methods' , '*');
            header('Access-Control-Allow-Headers', '*');
      
            $path = public_path(''.'api/doc'.'\\'.$name);
            return response()->file($path,$headers);
            
            
                  
        

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
