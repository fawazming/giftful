<?php namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php'))
{
	require SYSTEMPATH . 'Config/Routes.php';
}

/**
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);

/**
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');
$routes->get('/db', 'Home::db');
$routes->get('/lpin', 'Home::lpin');
$routes->get('/register', 'Home::register');
$routes->get('/logout', 'Home::logout');

$routes->post('/register', 'Home::postregister');
$routes->post('/login', 'Home::postlogin');
$routes->post('/lpin', 'Home::postlpin');
$routes->post('/buyData', 'Home::buyData');


$routes->get('/oga', 'Home::oga');
$routes->get('/sms', 'Home::sms');
$routes->get('/writesms', 'Home::writesms');

// $routes->get('/test', 'Home::test');

$routes->post('/pin', 'Home::genpin');
$routes->post('/oga', 'Home::poga');

$routes->get('/(:any)', 'Home::index/$1');

/**
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php'))
{
	require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
