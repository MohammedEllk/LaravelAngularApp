<?php

namespace App\Models;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Courrier extends Model
{
    use HasFactory;
    protected $fillable = ['title','content','priority','file'];
    
    public function users() {
        return $this->belongsToMany(User::class);
    }
    
}
