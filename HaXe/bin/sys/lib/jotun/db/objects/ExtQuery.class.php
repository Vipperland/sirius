<?php

// Generated by Haxe 3.4.7
class jotun_db_objects_ExtQuery extends jotun_db_objects_Query implements jotun_db_objects_IExtQuery{
	public function __construct($table, $data) {
		if(!php_Boot::$skip_constructor) {
		parent::__construct($table,true);
		$tmp = null;
		if($data !== null) {
			$tmp = $data;
		} else {
			$tmp = (new _hx_array(array()));
		}
		$this->data = $tmp;
	}}
	public $data;
	public function each($handler) {
		jotun_utils_Dice::Values($this->data, array(new _hx_lambda(array(&$handler), "jotun_db_objects_ExtQuery_0"), 'execute'), null);
	}
	public function one($i) {
		if($i < $this->data->length) {
			return $this->data[$i];
		} else {
			return null;
		}
	}
	public function first() {
		return $this->one(0);
	}
	public function last() {
		return $this->one($this->data->length - 1);
	}
	public function slice() {
		if($this->data->length > 0) {
			return $this->data->shift();
		} else {
			return null;
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
	function __toString() { return 'jotun.db.objects.ExtQuery'; }
}
function jotun_db_objects_ExtQuery_0(&$handler, $v) {
	{
		return call_user_func_array($handler, array($v)) === true;
	}
}
