<?php

class php_Lib {
	public function __construct(){}
	static function hprint($v) {
		echo(Std::string($v));
	}
	static function toPhpArray($a) {
		return $a->a;
	}
	static function associativeArrayOfHash($hash) {
		return $hash->h;
	}
	static function objectOfAssociativeArray($arr) {
		foreach($arr as $key => $value){
			if(is_array($value)) $arr[$key] = php_Lib::objectOfAssociativeArray($value);
		}
		return _hx_anonymous($arr);
	}
	static function associativeArrayOfObject($ob) {
		return (array) $ob;
	}
	function __toString() { return 'php.Lib'; }
}
