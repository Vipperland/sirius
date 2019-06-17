<?php

// Generated by Haxe 3.4.7
class jotun_data_DataCache implements jotun_data_IDataCache{
	public function __construct($name = null, $path = null, $expire = null, $base64 = null) {
		if(!php_Boot::$skip_constructor) {
		if($expire === null) {
			$expire = 0;
		}
		$this->_validated = false;
		$this->_name = $name;
		$this->_path = $path;
		$this->_expire = $expire;
		$this->_base64 = $base64;
		$this->clear(null);
	}}
	public $_DB;
	public $_path;
	public $_name;
	public $_expire;
	public $_loaded;
	public $_base64;
	public $__time__;
	public $data;
	public function get_data() {
		return $this->_DB;
	}
	public function _now() {
		return Date::now()->getTime();
	}
	public $_validated;
	public function _checkPath() {
		$p = _hx_explode("/", $this->_path);
		if($p->length > 0) {
			$t = (new _hx_array(array()));
			if($p[0] === "") {
				$t[0] = "/";
			} else {
				if($p[0] === ".") {
					$t[0] = "./";
				}
			}
			jotun_utils_Dice::Values($p, array(new _hx_lambda(array(&$t), "jotun_data_DataCache_0"), 'execute'), null);
		}
		$this->_name = _hx_string_or_null($this->_path) . "/" . _hx_string_or_null($this->_name);
		$this->_validated = true;
	}
	public function _fixData() {
		$data = _hx_anonymous(array());
		$this->_fixParams($this->_DB, $data);
		php_Lib::dump($data);
		return $data;
	}
	public function _fixParams($from, $data) {
		$i = null;
		jotun_utils_Dice::All($from, array(new _hx_lambda(array(&$data), "jotun_data_DataCache_1"), 'execute'), null);
	}
	public function clear($p = null) {
		if($p !== null) {
			if($p !== "__time__") {
				Reflect::deleteField($this->_DB, $p);
			}
		} else {
			$this->_DB = _hx_anonymous(array());
			if($this->_expire > 0) {
				$this->_DB->__time__ = $this->_now();
			}
			{
				$path = $this->_path;
				unlink($path);
			}
		}
		return $this;
	}
	public function set($p, $v) {
		{
			$o = $this->_DB;
			$o->{$p} = $v;
		}
		return $this;
	}
	public function merge($p, $v) {
		$tmp = null;
		if(Std::is($v, _hx_qtype("Array"))) {
			$o = $this->_DB;
			$field = $this->_name;
			$tmp = _hx_has_field($o, $field);
		} else {
			$tmp = false;
		}
		if($tmp) {
			$t = $this->get($p);
			if(Std::is($t, _hx_qtype("Array"))) {
				return $this->set($p, $t->concat($v));
			}
		}
		{
			$o1 = $this->_DB;
			$o1->{$p} = $v;
		}
		return $this;
	}
	public function get($id = null) {
		$d = null;
		if($id !== null) {
			$d = Reflect::field($this->_DB, $id);
		} else {
			$d = null;
		}
		if($d === null) {
			$d = _hx_anonymous(array());
			$this->set($id, $d);
		}
		return $d;
	}
	public function exists($name = null) {
		if($name !== null) {
			$o = $this->_DB;
			return _hx_has_field($o, $name);
		} else {
			return $this->_loaded;
		}
	}
	public function save() {
		$data = null;
		if($this->_base64) {
			$data = jotun_serial_IOTools::encodeBase64($this->_DB);
		} else {
			$data = $this->json(false);
		}
		if(!$this->_validated) {
			$this->_checkPath();
		}
		if($this->_expire > 0) {
			$this->_sign(true);
		}
		sys_io_File::saveContent($this->_name, $data);
		if($this->_expire > 0) {
			$this->_sign(false);
		}
		return $this;
	}
	public function _sign($add) {
		if($add) {
			$this->_DB->__time__ = $this->_now();
		} else {
			$tmp = null;
			if($this->_expire > 0) {
				$tmp = _hx_field($this->_DB, "__time__");
			} else {
				$tmp = 0;
			}
			$this->__time__ = $tmp;
			Reflect::deleteField($this->_DB, "__time__");
		}
	}
	public function load() {
		$this->_DB = null;
		if(!$this->_validated) {
			$this->_checkPath();
		}
		$path = $this->_name;
		if(file_exists($path)) {
			$c = sys_io_File::getContent($this->_name);
			$tmp = null;
			if($this->_base64) {
				$tmp = jotun_serial_IOTools::decodeBase64($c, true);
			} else {
				$tmp = haxe_Json::phpJsonDecode($c);
			}
			$this->_DB = $tmp;
		}
		$tmp1 = null;
		if(_hx_field($this, "_DB") !== null) {
			if($this->_expire !== 0) {
				if(_hx_field($this->_DB, "__time__") !== null) {
					$tmp2 = $this->_now();
					$tmp1 = $tmp2 - _hx_field($this->_DB, "__time__") >= $this->_expire;
				} else {
					$tmp1 = true;
				}
			} else {
				$tmp1 = false;
			}
		} else {
			$tmp1 = true;
		}
		if($tmp1) {
			$this->_DB = _hx_anonymous(array());
			$this->_loaded = false;
		} else {
			$this->_sign(false);
			$this->_loaded = true;
		}
		return $this->_loaded;
	}
	public function refresh() {
		$this->__time__ = $this->_now();
		return $this;
	}
	public function json($print = null) {
		$result = jotun_serial_JsonTool::stringfy($this->_DB, null, " ");
		if($print) {
			php_Lib::hprint($result);
		}
		return $result;
	}
	public function base64($print = null) {
		$result = jotun_serial_IOTools::encodeBase64($this->_DB);
		if($print) {
			php_Lib::hprint($result);
		}
		return $result;
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
	static $__properties__ = array("get_data" => "get_data");
	function __toString() { return 'jotun.data.DataCache'; }
}
function jotun_data_DataCache_0(&$t, $v) {
	{
		if(jotun_tools_Utils::isValid($v, null)) {
			$t[$t->length] = $v;
			$v = $t->join("/");
			if(!file_exists($v)) {
				$path = haxe_io_Path::addTrailingSlash($v);
				$_p = null;
				$parts = (new _hx_array(array()));
				while(true) {
					$_p = haxe_io_Path::directory($path);
					if(!($path !== $_p)) {
						break;
					}
					$parts->unshift($path);
					$path = $_p;
				}
				{
					$_g = 0;
					while($_g < $parts->length) {
						$part = $parts[$_g];
						$_g = $_g + 1;
						$tmp = null;
						if(_hx_char_code_at($part, strlen($part) - 1) !== 58) {
							$tmp = !file_exists($part);
						} else {
							$tmp = false;
						}
						if($tmp) {
							@mkdir($part, 493);
						}
						unset($tmp,$part);
					}
				}
			}
			return false;
		}
		return true;
	}
}
function jotun_data_DataCache_1(&$data, $p, $v) {
	{
		$tmp = null;
		$tmp1 = null;
		$tmp2 = null;
		if(!Std::is($v, _hx_qtype("Float"))) {
			$tmp2 = Std::is($v, _hx_qtype("Bool"));
		} else {
			$tmp2 = true;
		}
		if(!$tmp2) {
			$tmp1 = Std::is($v, _hx_qtype("String"));
		} else {
			$tmp1 = true;
		}
		if(!$tmp1) {
			$tmp = Std::is($v, _hx_qtype("Int"));
		} else {
			$tmp = true;
		}
		if($tmp) {
			$data->{$p} = $v;
		} else {
			if(Std::is($v, _hx_qtype("Array"))) {
				$v = php_Lib::toPhpArray($v);
			} else {
				if(Std::is($v, _hx_qtype("Dynamic"))) {
					$v = php_Lib::associativeArrayOfObject($v);
				}
			}
		}
		$data->{$p} = $v;
	}
}
