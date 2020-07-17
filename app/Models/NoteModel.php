<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class NoteModel extends Model
{
    protected $table = "notes";

    protected $fillable = [
        'slug',
        'title',
        'description',
        'isActive'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
