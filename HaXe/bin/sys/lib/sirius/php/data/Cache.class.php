<?php

class sirius_php_data_Cache {
	public function __construct() {}
	public function set($name, $value) { if(!php_Boot::$skip_constructor) {
		$this->{$name} = $value;
	}}
	public function add($name, $value) {
		if($this->hasField($name)) {
			$value1 = $this->get($name)->concat($value);
			$this->{$name} = $value1;
		} else {
			$this->{$name} = $value;
		}
	}
	public function get($name) {
		return Reflect::field($this, $name);
	}
	public function hasField($name) {
		return _hx_has_field($this, $name);
	}
	public function json($print = null, $encoding = null) {
		if($print === null) {
			$print = true;
		}
		$result = json_encode($this,256);
		if($encoding !== null) {
			$result = call_user_func_array($encoding, array($result));
		}
		if($print) {
			php_Lib::hprint($result);
		}
		return $result;
	}
	function __toString() { return 'sirius.php.data.Cache'; }
}
