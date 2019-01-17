<?php

// Generated by Haxe 3.4.7
class sirius_db_objects_Column {
	public function __construct($data) {
		if(!php_Boot::$skip_constructor) {
		$this->name = _hx_field($data, "COLUMN_NAME");
		$this->nullable = _hx_equal(_hx_field($data, "IS_NULLABLE"), "YES");
		$this->position = Std::parseInt(_hx_field($data, "ORDINAL_POSITION"));
		$this->value = _hx_field($data, "COLUMN_DEFAULT");
		$this->dataType = _hx_field($data, "DATA_TYPE");
		$this->columnType = _hx_field($data, "COLUMN_TYPE");
		$this->key = _hx_field($data, "COLUMN_KEY");
		$this->extra = _hx_field($data, "EXTRA");
		$this->charset = _hx_field($data, "CHARACTER_SET_NAME");
		$this->comment = _hx_field($data, "COLUMN_COMMENT");
		$this->length = Std::parseInt(_hx_field($data, "CHARACTER_MAXIMUM_LENGTH"));
		$this->previleges = _hx_string_call(_hx_field($data, "PRIVILEGES"), "split", array(","));
	}}
	public $name;
	public $nullable;
	public $value;
	public $dataType;
	public $columnType;
	public $charset;
	public $key;
	public $extra;
	public $comment;
	public $position;
	public $length;
	public $previleges;
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
	function __toString() { return 'sirius.db.objects.Column'; }
}
