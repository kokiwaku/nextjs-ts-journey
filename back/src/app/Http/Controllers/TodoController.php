<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Models\User;
use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class TodoController extends Controller
{

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function get(Request $request, string $id)
    {
        $userId = Auth::getUser()->getAuthIdentifier();
        $todo = Todo::query()->where('id', $id)->where('user_id', $userId)->first();
        if ($todo === null) {
            return response()->json(['msg' => 'Todo not found'], 404);
        }

        return response()->json([
            'todo' => $todo->toArray(),
        ]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getList(Request $request)
    {
        // middlewareで認証済み
        $userId = Auth::getUser()->getAuthIdentifier();
        $todoList = Todo::query()->where('user_id', operator: $userId)->get()->toArray();

        return response()->json([
            'todoList' => $todoList,
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        $userId = Auth::getUser()->getAuthIdentifier();
        $todo = new Todo();
        $todo->user_id = $userId;
        $content = $request->input('content');
        if ($content === null) {
            return response()->json(data: ['msg' => 'content is require'], status: 400);
        }
        $todo->content = $content;
        $todo->save();

        return response()->json([
            'todo' => $todo->toArray(),
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(Request $request, string $id)
    {
        $userId = Auth::getUser()->getAuthIdentifier();
        $todo = Todo::query()->where('id', $id)->where('user_id', $userId)->first();
        if ($todo === null) {
            return response()->json(['msg' => 'Todo not found'], 404);
        }

        $todo->delete();
        return response()->json(null, 204);
    }

}
