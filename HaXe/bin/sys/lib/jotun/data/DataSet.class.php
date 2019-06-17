<?php

// Generated by Haxe 3.4.7
class jotun_data_DataSet implements jotun_data_IDataSet{
	public function __construct($q = null) {
		if(!php_Boot::$skip_constructor) {
		$tmp = null;
		if($q !== null) {
			$tmp = $q;
		} else {
			$tmp = _hx_anonymous(array());
		}
		$this->_content = $tmp;
	}}
	public $_content;
	public function get($p) {
		return Reflect::field($this->_content, $p);
	}
	public function set($p, $v) {
		{
			$o = $this->_content;
			$o->{$p} = $v;
		}
		return $this;
	}
	public function hunset($p) {
		Reflect::deleteField($this->_content, $p);
		return $this;
	}
	public function exists($p) {
		$o = $this->_content;
		return _hx_has_field($o, $p);
	}
	public function clear() {
		$this->_content = _hx_anonymous(array());
		return $this;
	}
	public function find($v) {
		$r = (new _hx_array(array()));
		jotun_utils_Dice::All($this->_content, array(new _hx_lambda(array(&$r, &$v), "jotun_data_DataSet_0"), 'execute'), null);
		return $r;
	}
	public function index() {
		$r = (new _hx_array(array()));
		jotun_utils_Dice::Params($this->_content, (property_exists($r, "push") ? $r->push: array($r, "push")), null);
		return $r;
	}
	public function values() {
		$r = (new _hx_array(array()));
		jotun_utils_Dice::Values($this->_content, (property_exists($r, "push") ? $r->push: array($r, "push")), null);
		return $r;
	}
	public function filter($p, $handler = null) {
		$r = new jotun_data_DataSet(null);
		$h = $handler !== null;
		jotun_utils_Dice::All($this->_content, array(new _hx_lambda(array(&$h, &$handler, &$p, &$r), "jotun_data_DataSet_1"), 'execute'), null);
		return $r;
	}
	public function each($handler) {
		jotun_utils_Dice::All($this->_content, $handler, null);
	}
	public function data() {
		return $this->_content;
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
	function __toString() { return 'jotun.data.DataSet'; }
}
function jotun_data_DataSet_0(&$r, &$v, $p, $x) {
	{
		$tmp = null;
		if(Std::is($x, _hx_qtype("String"))) {
			$tmp = !_hx_equal(_hx_string_call($x, "indexOf", array($v)), -1);
		} else {
			$tmp = false;
		}
		if($tmp) {
			$r[$r->length] = $p;
		} else {
			if(_hx_equal($x, $v)) {
				$r[$r->length] = $p;
			}
		}
	}
}
function jotun_data_DataSet_1(&$h, &$handler, &$p, &$r, $p2, $v) {
	{
		if(Std::is($v, _hx_qtype("jotun.data.IDataSet"))) {
			if($v->exists($p)) {
				$tmp = null;
				if($h) {
					$tmp = call_user_func_array($handler, array($v));
				} else {
					$tmp = $v->get($p);
				}
				$r->set($p2, $tmp);
			}
		} else {
			if(_hx_has_field($v, $p)) {
				$tmp1 = null;
				if($h) {
					$tmp1 = call_user_func_array($handler, array($v));
				} else {
					$tmp1 = Reflect::field($v, $p);
				}
				$r->set($p2, $tmp1);
			}
		}
	}
}
