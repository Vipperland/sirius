<?php

// Generated by Haxe 3.4.7
interface jotun_data_IFragments {
	//;
	//;
	//;
	//;
	function split($separator);
	function glue($value);
	function addPiece($value, $at = null);
	function get($i, $e = null);
	function set($i, $val);
	function find($value);
	function clear();
}