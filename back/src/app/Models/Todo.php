<?php

namespace App\Models;

use Attribute;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $primaryKey = 'id';

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];
}
