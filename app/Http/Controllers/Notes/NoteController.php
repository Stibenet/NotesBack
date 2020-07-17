<?php

namespace App\Http\Controllers\Notes;

use App\Http\Controllers\Controller;
use App\Model\NoteModel;

class NoteController extends Controller
{
    public function index(){
        return response()->json(NoteModel::get(), 200);
    }
}
