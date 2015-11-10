<?php

class Date {
	public function __construct($year, $month, $day, $hour, $min, $sec) {
		if(!php_Boot::$skip_constructor) {
		$GLOBALS['%s']->push("Date::new");
		$__hx__spos = $GLOBALS['%s']->length;
		$this->__t = mktime($hour, $min, $sec, $month + 1, $day, $year);
		$GLOBALS['%s']->pop();
	}}
	public $__t;
	public function getTime() {
		$GLOBALS['%s']->push("Date::getTime");
		$__hx__spos = $GLOBALS['%s']->length;
		{
			$tmp = $this->__t * 1000;
			$GLOBALS['%s']->pop();
			return $tmp;
		}
		$GLOBALS['%s']->pop();
	}
	public function toString() {
		$GLOBALS['%s']->push("Date::toString");
		$__hx__spos = $GLOBALS['%s']->length;
		{
			$tmp = date("Y-m-d H:i:s", $this->__t);
			$GLOBALS['%s']->pop();
			return $tmp;
		}
		$GLOBALS['%s']->pop();
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
	static function now() {
		$GLOBALS['%s']->push("Date::now");
		$__hx__spos = $GLOBALS['%s']->length;
		{
			$tmp = Date::fromPhpTime(round(microtime(true), 3));
			$GLOBALS['%s']->pop();
			return $tmp;
		}
		$GLOBALS['%s']->pop();
	}
	static function fromPhpTime($t) {
		$GLOBALS['%s']->push("Date::fromPhpTime");
		$__hx__spos = $GLOBALS['%s']->length;
		$d = new Date(2000, 1, 1, 0, 0, 0);
		$d->__t = $t;
		{
			$GLOBALS['%s']->pop();
			return $d;
		}
		$GLOBALS['%s']->pop();
	}
	function __toString() { return $this->toString(); }
}
