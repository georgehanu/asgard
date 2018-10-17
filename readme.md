[![Latest Version](https://img.shields.io/packagist/v/asgardcms/platform.svg?style=flat-square)](https://github.com/asgardcms/platform/releases)
[![Build Status](https://img.shields.io/travis/AsgardCms/Platform/master.svg?style=flat-square)](https://travis-ci.org/AsgardCms/Platform)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Total Downloads](https://img.shields.io/packagist/dd/asgardcms/platform.svg?style=flat-square)](https://packagist.org/packages/asgardcms/platform)
[![Total Downloads](https://img.shields.io/packagist/dm/asgardcms/platform.svg?style=flat-square)](https://packagist.org/packages/asgardcms/platform)
[![Total Downloads](https://img.shields.io/packagist/dt/asgardcms/platform.svg?style=flat-square)](https://packagist.org/packages/asgardcms/platform)
[![PHP7 Compatible](https://img.shields.io/badge/php-7-green.svg?style=flat-square)](https://packagist.org/packages/asgardcms/platform)

## AsgardCMS Platform

View the documentation at [AsgardCMS.com/docs](http://asgardcms.com/docs/).

Join the conversation on Slack [![Slack](http://slack.asgardcms.com/badge.svg)](http://slack.asgardcms.com/)

## License

The AsgardCMS is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

To run the React-Editor:

run$ composer install

run$ setup a database

run$ php artisan asgard:install

run$ composer install

apply the fix described here: https://github.com/JeffreyWay/laravel-mix/issues/1437

commit asgard\Themes\Flatly\views\layouts\master.blade.php from the git, because composer changed this file

run$ php artisan serve -> to open php server

run$ npm run react-hot:admin -> to open the react server

navigate to http://localhost:8000/en and the editor should be there

All the editor files are in resources/editor
