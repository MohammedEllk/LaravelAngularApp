<?php

namespace App\Models;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entity extends Model
{
    protected $fillable = ['title'];
    use HasFactory;
    /**
     * relation with Entity
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
