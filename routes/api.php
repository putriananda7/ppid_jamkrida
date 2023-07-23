<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\UserController as PenggunaController;
use App\Http\Controllers\API\GuestController;
use App\Http\Controllers\API\QueueController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('login', [AuthController::class, 'login']);
Route::get('dashboard', [DashboardController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {

    Route::get('profile', [AuthController::class, 'profile']);
    Route::post('profile/update', [AuthController::class, 'update']);
    Route::get('logout', [AuthController::class, 'logout']);

    Route::apiResource('pengguna', PenggunaController::class);

    Route::apiResource('guest', GuestController::class);
    Route::apiResource('queue', QueueController::class);
});

