<?php

interface sirius_net_ILoader {
	//;
	//;
	//;
	//;
	function progress();
	function get($module, $data = null);
	function async($file, $data = null, $handler = null);
	function add($files);
	function start();
	function request($url, $data = null, $method = null, $handler = null, $headers = null);
}
