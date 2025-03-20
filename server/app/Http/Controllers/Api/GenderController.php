<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gender;
use Illuminate\Http\Request;

class GenderController extends Controller
{
    public function storeGender(Request $request) {
        $validated = $request->validate([
            'gender' => ['required', 'min:4', 'max:10'],
        ]);


        Gender::create([
            'gender' => $validated['gender']
        ]);

        return response()->json([
            'message' => 'Gender Added Successfully'
        ], 200);
    }
}
