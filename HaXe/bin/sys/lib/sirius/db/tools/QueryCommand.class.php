<?php

// Generated by Haxe 3.4.7
class sirius_db_tools_QueryCommand implements sirius_db_tools_ICommand{
	public function __construct($conn, $query, $parameters, $errors, $log) {
		if(!php_Boot::$skip_constructor) {
		$this->_log = $log;
		$this->_errors = $errors;
		$this->_query = $query;
		$this->conn = $conn;
		$this->_parameters = $parameters;
	}}
	public $_query;
	public $_parameters;
	public $_errors;
	public $_log;
	public $success;
	public $conn;
	public $statement;
	public $result;
	public $errors;
	public function get_errors() {
		return $this->_errors;
	}
	public function bind($parameters) {
		$this->_parameters = $parameters;
		return $this;
	}
	public function execute($handler = null, $type = null, $parameters = null) {
		if($this->conn !== null) {
			$p = null;
			if($parameters !== null) {
				$p = php_Lib::toPhpArray($parameters);
			}
			try {
				if($type !== null) {
					if(!Std::is($type, _hx_qtype("String"))) {
						$type = _hx_explode(".", Type::getClassName($type))->join("_");
					}
				} else {
					$type = "stdClass";
				}
				$statement = $this->conn;
				$statement1 = $this->log();
				$statement2 = $statement->query($statement1, PDO::FETCH_CLASS, $type);
				$tmp = (property_exists("haxe_Log", "trace") ? haxe_Log::$trace: array("haxe_Log", "trace"));
				$tmp1 = $this->log();
				call_user_func_array($tmp, array($tmp1, _hx_anonymous(array("fileName" => "QueryCommand.hx", "lineNumber" => 67, "className" => "sirius.db.tools.QueryCommand", "methodName" => "execute"))));
				if($statement2 !== null) {
					$obj = null;
					$this->result = (new _hx_array(array()));
					while(true) {
						$obj = $statement2->fetchObject($type);
						if(!$obj) {
							break;
						}
						$this->result[$this->result->length] = $obj;
						if($handler !== null) {
							call_user_func_array($handler, array($obj));
						}
					}
				} else {
					$tmp2 = $this->get_errors();
					$tmp3 = $this->get_errors()->length;
					$tmp4 = $statement2->errorCode();
					$tmp2[$tmp3] = new sirius_errors_Error($tmp4, haxe_Json::phpJsonEncode($statement2->errorInfo(), null, null), null);
				}
			}catch(Exception $__hx__e) {
				$_ex_ = ($__hx__e instanceof HException) && $__hx__e->getCode() == null ? $__hx__e->e : $__hx__e;
				$e = $_ex_;
				{
					if(Std::is($e, _hx_qtype("String"))) {
						_hx_array_assign($this->get_errors(), $this->get_errors()->length, new sirius_errors_Error(0, $e, null));
					} else {
						$tmp5 = $this->get_errors();
						$tmp6 = $this->get_errors()->length;
						$tmp7 = $e->getCode();
						$tmp5[$tmp6] = new sirius_errors_Error($tmp7, $e->getMessage(), null);
					}
				}
			}
			if($this->_log !== null) {
				$tmp8 = null;
				if($this->success) {
					$tmp8 = "[1]";
				} else {
					$tmp8 = "[0]";
				}
				$this->_log[$this->_log->length] = _hx_string_or_null($tmp8) . " " . _hx_string_or_null($this->log());
			}
		} else {
			_hx_array_assign($this->get_errors(), $this->get_errors()->length, new sirius_errors_Error(0, "A connection with database is required.", null));
		}
		return $this;
	}
	public function fetch($handler) {
		sirius_utils_Dice::Values($this->result, $handler, null);
		return $this;
	}
	public function find($param, $values, $limit = null) {
		if($limit === null) {
			$limit = 0;
		}
		$filter = (new _hx_array(array()));
		sirius_utils_Dice::Values($this->result, array(new _hx_lambda(array(&$filter, &$limit, &$param, &$values), "sirius_db_tools_QueryCommand_0"), 'execute'), null);
		return $filter;
	}
	public function length($prop = null) {
		if($prop === null) {
			$prop = "COUNT(*)";
		}
		$tmp = null;
		if($this->result !== null) {
			$tmp = $this->result->length > 0;
		} else {
			$tmp = false;
		}
		if($tmp) {
			$r0 = $this->result[0];
			if(_hx_has_field($r0, $prop)) {
				return Std::parseInt(Reflect::field($r0, $prop));
			} else {
				return $this->result->length;
			}
		}
		return 0;
	}
	public function log() {
		$_gthis = $this;
		$r = _hx_explode("?", $this->_query);
		sirius_utils_Dice::All($r, array(new _hx_lambda(array(&$_gthis, &$r), "sirius_db_tools_QueryCommand_1"), 'execute'), null);
		return $r->join("");
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
	static $__properties__ = array("get_errors" => "get_errors");
	function __toString() { return 'sirius.db.tools.QueryCommand'; }
}
function sirius_db_tools_QueryCommand_0(&$filter, &$limit, &$param, &$values, $v) {
	{
		$tmp = Reflect::field($v, $param);
		if(sirius_utils_Dice::Match((new _hx_array(array($tmp))), $values, 1) > 0) {
			$filter[$filter->length] = $v;
			$aNeg = $limit < 0;
			$bNeg = 0 < 0;
			$tmp1 = null;
			if($aNeg !== $bNeg) {
				$tmp1 = $aNeg;
			} else {
				$tmp1 = $limit > 0;
			}
			if($tmp1) {
				$limit = $limit - 1;
				return $limit === 0;
			} else {
				return false;
			}
		}
		return false;
	}
}
function sirius_db_tools_QueryCommand_1(&$_gthis, &$r, $p, $v) {
	{
		if($p < _hx_field($_gthis->_parameters, "length")) {
			$e = $_gthis->_parameters[$p];
			if(Std::is($e, _hx_qtype("String"))) {
				$e = "\"" . Std::string($e) . "\"";
			}
			$tmp = _hx_string_or_null($v) . Std::string($e);
			$r[$p] = $tmp;
		}
	}
}
