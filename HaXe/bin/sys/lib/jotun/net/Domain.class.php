<?php

// Generated by Haxe 3.4.7
class jotun_net_Domain implements jotun_net_IDomain{
	public function __construct() {
		if(!php_Boot::$skip_constructor) {
		$this->_parseURI();
	}}
	public $host;
	public $port;
	public $url;
	public $data;
	public $input;
	public $server;
	public $client;
	public $file;
	public $params;
	public function _parseURI() {
		$this->data = php_Lib::objectOfAssociativeArray($_SERVER);
		$this->server = _hx_string_or_null(dirname($_SERVER["SCRIPT_FILENAME"])) . "/";
		$this->host = $_SERVER['SERVER_NAME'];
		$this->client = $_SERVER['REMOTE_ADDR'];
		$this->port = $_SERVER['SERVER_PORT'];
		$boundary = $this->_getMultipartKey();
		if($this->data->CONTENT_TYPE === "application/json") {
			$this->input = haxe_Json::phpJsonDecode(file_get_contents('php://input'));
		}
		$this->params = $this->_getParams();
		if($boundary !== null) {
			Reflect::deleteField($this->params, $boundary);
			$boundary = _hx_array_get(_hx_explode("\x0D\x0A", $boundary), 0);
			$this->_getRawData($boundary, $this->params);
		}
		$p = $_SERVER['SCRIPT_NAME'];
		$this->url = new jotun_data_Fragments($p, "/");
	}
	public function hrequire($params) {
		$_gthis = $this;
		$r = true;
		jotun_utils_Dice::Values($params, array(new _hx_lambda(array(&$_gthis, &$r), "jotun_net_Domain_0"), 'execute'), null);
		return $r;
	}
	public function _getParams() {
		$a = array_merge($_GET, $_POST);
		if(get_magic_quotes_gpc()) {
			reset($a); while(list($k, $v) = each($a)) $a[$k] = stripslashes((string)$v);
		}
		return php_Lib::objectOfAssociativeArray($a);
	}
	public function _getRawData($boundary, $data = null) {
		if($data === null) {
			$data = _hx_anonymous(array());
		}
		$input = file_get_contents('php://input');
		$result = _hx_explode($boundary, $input);
		jotun_utils_Dice::Values($result, array(new _hx_lambda(array(&$data), "jotun_net_Domain_1"), 'execute'), null);
		return $data;
	}
	public function _getMultipartKey() {
		$a = $_POST;
		if(get_magic_quotes_gpc()) {
			reset($a); while(list($k, $v) = each($a)) $a[$k] = stripslashes((string)$v);
		}
		$post = php_Lib::hashOfAssociativeArray($a);
		{
			$key = $post->keys();
			while($key->hasNext()) {
				$key1 = $key->next();
				if(_hx_index_of($key1, "Content-Disposition:_form-data;_name", null) !== -1) {
					return $key1;
				}
				unset($key1);
			}
		}
		return null;
	}
	public function parseFiles($onPart, $onData) {
		if(!isset($_FILES)) {
			return;
		}
		$parts = new _hx_array(array_keys($_FILES));
		{
			$_g = 0;
			while($_g < $parts->length) {
				$part = $parts[$_g];
				$_g = $_g + 1;
				$info = $_FILES[$part];
				$tmp = $info["tmp_name"];
				$file = $info["name"];
				$err = $info["error"];
				if($err > 0) {
					switch($err) {
					case 1:{
						throw new HException("The uploaded file exceeds the max size of " . _hx_string_or_null(ini_get("upload_max_filesize")));
					}break;
					case 2:{
						throw new HException("The uploaded file exceeds the max file size directive specified in the HTML form (max is" . _hx_string_or_null((_hx_string_or_null(ini_get("post_max_size")) . ")")));
					}break;
					case 3:{
						throw new HException("The uploaded file was only partially uploaded");
					}break;
					case 4:{
						continue 2;
					}break;
					case 6:{
						throw new HException("Missing a temporary folder");
					}break;
					case 7:{
						throw new HException("Failed to write file to disk");
					}break;
					case 8:{
						throw new HException("File upload stopped by extension");
					}break;
					}
				}
				call_user_func_array($onPart, array($part, $file));
				if("" !== $file) {
					$h = fopen($tmp, "r");
					$bsize = 8192;
					while(!feof($h)) {
						$buf = fread($h, $bsize);
						$size = strlen($buf);
						call_user_func_array($onData, array(haxe_io_Bytes::ofString($buf), 0, $size));
						unset($size,$buf);
					}
					fclose($h);
					unset($h,$bsize);
				}
				unset($tmp,$part,$info,$file,$err);
			}
		}
	}
	public function __call($m, $a) {
		if(isset($this->$m) && is_callable($this->$m))
			return call_user_func_array($this->$m, $a);
		else if(isset($this->__dynamics[$m]) && is_callable($this->__dynamics[$m]))
			return call_user_func_array($this->__dynamics[$m], $a);
		else if('toString' == $m)
			return $this->__toString();
		else
			throw new HException('Unable to call <'.$m.'>');
	}
	function __toString() { return 'jotun.net.Domain'; }
}
function jotun_net_Domain_0(&$_gthis, &$r, $v) {
	{
		$o = $_gthis->params;
		$r = _hx_has_field($o, $v);
		return !$r;
	}
}
function jotun_net_Domain_1(&$data, $v) {
	{
		$tmp = null;
		if($v !== null) {
			$tmp = strlen($v) === 0;
		} else {
			$tmp = true;
		}
		if($tmp) {
			return;
		}
		if(_hx_index_of($v, "Content-Disposition: form-data;", null) < 30) {
			$point = _hx_explode("Content-Disposition: form-data; name=", $v);
			$point1 = _hx_explode("\x0D\x0A\x0D\x0A", $point[1]);
			$param = _hx_explode("\"", $point1[0])->join("");
			if(_hx_index_of($param, "Content-Type:", null) === -1) {
				$value = _hx_array_get(_hx_explode("\x0D\x0A", $point1[1]), 0);
				$tmp1 = null;
				$tmp2 = null;
				if(strlen($param) > 0) {
					$tmp2 = strlen($value) > 0;
				} else {
					$tmp2 = false;
				}
				if($tmp2) {
					$tmp1 = $value !== "null";
				} else {
					$tmp1 = false;
				}
				if($tmp1) {
					if(_hx_index_of($param, "[]", null) === -1) {
						$data->{$param} = $value;
					} else {
						if(!_hx_has_field($data, $param)) {
							$data->{$param} = (new _hx_array(array()));
						}
						Reflect::field($data, $param)->push($value);
					}
				}
			}
		}
	}
}
