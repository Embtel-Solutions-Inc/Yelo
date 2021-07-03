<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\NewPasswordRequest;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use App\User;

class NewPasswordController extends Controller
{
    //

    public function generate(NewPasswordRequest $req)
    {
        # code...

        if (!$this->validateEmail($req->email)) {
            return $this->failedResponse();
        }
        $user=User::where('email', $req->email)->first();
        $user->password = $req->password;
        $user->update();
        return response()->json(['data'=>'Password Successfully Changed'],Response::HTTP_CREATED);
    }
    public function failedResponse()
    {
        return response()->json([
            'error' => 'Email doesn\'t found on our database'
        ], Response::HTTP_NOT_FOUND);
    }
    public function validateEmail($email)
    {
        return !!User::where('email', $email)->first();
    }
}
