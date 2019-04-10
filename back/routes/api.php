<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::Resource('/clientes', 'ClienteController');
Route::Resource('/administracion/companias', 'CompaniaController');
Route::Resource('/administracion/organizadores', 'OrganizadorController');
Route::Resource('/administracion/productores', 'ProductorController');
Route::Resource('/administracion/marcas', 'AutomotorMarcaController');
Route::Resource('/administracion/modelos', 'AutomotorModeloController');
Route::Resource('/administracion/versiones', 'AutomotorVersionController');
Route::Resource('/localidades', 'LocalidadController');
Route::Resource('/anios', 'AnioController');
Route::Resource('/codigoorganizador', 'CodigoOrganizadorController');
Route::Resource('/codigoproductor', 'CodigoProductorController');
Route::Resource('/cobertura', 'CoberturaController');
Route::Resource('/tiporiesgo', 'TipoRiesgoController');
Route::Resource('/tipovigencia', 'TipoVigenciaController');
Route::Resource('/polizas', 'PolizaController');
Route::get('/numerosolicitud', 'PolizaController@numeroDeSolicitud');
Route::get('/codigoorganizador/compania/{id}', 'CodigoOrganizadorController@indexFiltrado');
Route::get('/codigoproductor/compania/{id}', 'CodigoProductorController@indexFiltrado');
Route::get('/cobertura/compania/{id}', 'CoberturaController@indexFiltrado');
Route::get('/companias/busquedaCuit', 'CompaniaController@search');
Route::get('/organizadores/busquedaCuit', 'OrganizadorController@searchCuit');
Route::get('/organizadores/busquedaMatricula', 'OrganizadorController@searchMatricula');
Route::get('/productores/busquedaCuit', 'ProductorController@searchCuit');
Route::get('/productores/busquedaMatricula', 'ProductorController@searchMatricula');
Route::get('/codigo_organizadores/busquedaCO', 'CodigoOrganizadorController@searchCO');
Route::get('/codigo_productores/busquedaCP', 'CodigoProductorController@searchCP');
Route::get('/cliente/busquedaDNI', 'ClienteController@searchDNI');
Route::get('/cliente/busquedaCuit', 'ClienteController@searchCuit');
Route::get('/modelos/filtrar/{id}', 'AutomotorModeloController@filtro');
Route::get('/versiones/filtrar/{id}', 'AutomotorVersionController@filtro');
Route::get('/marcas/busquedaMarca', 'AutomotorMarcaController@searchMarca');
Route::get('/marcas/busquedaModelo', 'AutomotorModeloController@searchModelo');
Route::get('/marcas/busquedaVersion', 'AutomotorVersionController@searchVersion');

