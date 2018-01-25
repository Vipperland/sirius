<?php

class sirius_Sirius {
	public function __construct(){}
	static $_loaded = false;
	static $resources;
	static $domain;
	static $logger;
	static function main() {}
	static $header;
	static $gate;
	static $loader;
	static $tick;
	static function hrequire($file) {
		require_once($file);
	}
	static function module($file, $content = null, $handler = null) {
		if(_hx_index_of($file, "http", null) === -1) {
			sirius_Sirius::$resources->prepare($file);
		} else {
			sirius_Sirius::$loader->async($file, $content, $handler);
		}
	}
	static function request($url, $data = null, $method = null, $handler = null, $headers = null) {
		if($method === null) {
			$method = "post";
		}
		sirius_Sirius::$loader->request($url, $data, $method, $handler, $headers);
	}
	static function log($q, $type = null) {
		if($type === null) {
			$type = -1;
		}
		sirius_Sirius::$logger->push($q, $type);
	}
	function __toString() { return 'sirius.Sirius'; }
}
sirius_Sirius::$resources = new sirius_modules_ModLib();
sirius_Sirius::$domain = new sirius_net_Domain();
sirius_Sirius::$logger = new sirius_data_Logger();
sirius_Sirius::$header = new sirius_net_Header();
sirius_Sirius::$gate = new sirius_db_Gate();
sirius_Sirius::$loader = new sirius_net_Loader(null);
sirius_Sirius::$tick = time();
