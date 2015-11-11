<?php

class haxe_crypto_Base64 {
	public function __construct(){}
	static $CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	static $BYTES;
	static function encode($bytes, $complement = null) {
		if($complement === null) {
			$complement = true;
		}
		$str = _hx_deref(new haxe_crypto_BaseCode(haxe_crypto_Base64::$BYTES))->encodeBytes($bytes)->toString();
		if($complement) {
			$_g = _hx_mod($bytes->length, 3);
			switch($_g) {
			case 1:{
				$str .= "==";
			}break;
			case 2:{
				$str .= "=";
			}break;
			default:{}break;
			}
		}
		return $str;
	}
	static function decode($str, $complement = null) {
		if($complement === null) {
			$complement = true;
		}
		if($complement) {
			while(_hx_char_code_at($str, strlen($str) - 1) === 61) {
				$str = _hx_substr($str, 0, -1);
			}
		}
		return _hx_deref(new haxe_crypto_BaseCode(haxe_crypto_Base64::$BYTES))->decodeBytes(haxe_io_Bytes::ofString($str));
	}
	function __toString() { return 'haxe.crypto.Base64'; }
}
haxe_crypto_Base64::$BYTES = haxe_io_Bytes::ofString(haxe_crypto_Base64::$CHARS);