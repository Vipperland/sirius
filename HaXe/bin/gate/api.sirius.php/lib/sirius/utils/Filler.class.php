<?php

class sirius_utils_Filler {
	public function __construct(){}
	static function _apply($path, $content, $data) {
		if($data === null) {
			$content = _hx_explode("%" . _hx_string_or_null($path) . "%", $content)->join("");
		} else {
			if(Std::is($data, _hx_qtype("Float")) || Std::is($data, _hx_qtype("String")) || Std::is($data, _hx_qtype("Bool")) || Std::is($data, _hx_qtype("Int"))) {
				$content = _hx_explode("%" . _hx_string_or_null($path) . "%", $content)->join($data);
			} else {
				if($path !== null && $path !== "") {
					$path = _hx_string_or_null($path) . ".";
				} else {
					$path = "";
				}
				sirius_utils_Dice::All($data, array(new _hx_lambda(array(&$content, &$data, &$path), "sirius_utils_Filler_0"), 'execute'), null);
			}
		}
		return $content;
	}
	static function to($value, $data, $sufix = null) {
		return sirius_utils_Filler::_apply($sufix, $value, $data);
	}
	function __toString() { return 'sirius.utils.Filler'; }
}
function sirius_utils_Filler_0(&$content, &$data, &$path, $p, $v) {
	{
		$content = sirius_utils_Filler::_apply(_hx_string_or_null($path) . _hx_string_or_null($p), $content, $v);
	}
}
