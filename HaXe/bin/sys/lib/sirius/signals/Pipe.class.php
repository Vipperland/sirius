<?php

class sirius_signals_Pipe implements sirius_signals_IPipe{
	public function __construct($name, $host) {
		if(!php_Boot::$skip_constructor) {
		$this->calls = 0;
		$this->enabled = true;
		$this->transfer = true;
		$this->name = $name;
		$this->reset();
	}}
	public $name;
	public $transfer;
	public $enabled;
	public $calls;
	public $current;
	public $_l;
	public function add($handler) {
		if(Lambda::indexOf($this->_l, $handler) === -1) {
			$this->_l->push($handler);
		}
		return $this;
	}
	public function remove($handler) {
		$i = Lambda::indexOf($this->_l, $handler);
		if($i !== -1) {
			$this->_l->splice($i, 1);
		}
		return $this;
	}
	public function call($data = null) {
		$_g = $this;
		if($this->enabled) {
			++$this->calls;
			$this->current = new sirius_signals_Flow($this, $data);
			$this->transfer = true;
			sirius_utils_Dice::Values($this->_l, array(new _hx_lambda(array(&$_g, &$data), "sirius_signals_Pipe_0"), 'execute'), null);
		}
		$this->current = null;
		return $this;
	}
	public function stop() {
		$this->transfer = false;
	}
	public function reset() {
		$this->_l = (new _hx_array(array()));
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
	function __toString() { return 'sirius.signals.Pipe'; }
}
function sirius_signals_Pipe_0(&$_g, &$data, $v) {
	{
		call_user_func_array($v, array($_g->current));
		return !$_g->transfer;
	}
}
