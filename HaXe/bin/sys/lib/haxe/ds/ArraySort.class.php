<?php

class haxe_ds_ArraySort {
	public function __construct(){}
	static function sort($a, $cmp) {
		haxe_ds_ArraySort::rec($a, $cmp, 0, $a->length);
	}
	static function rec($a, $cmp, $from, $to) {
		$middle = $from + $to >> 1;
		if($to - $from < 12) {
			if($to <= $from) {
				return;
			}
			{
				$_g = $from + 1;
				while($_g < $to) {
					$i = $_g++;
					$j = $i;
					while($j > $from) {
						if(call_user_func_array($cmp, array($a[$j], $a[$j - 1])) < 0) {
							haxe_ds_ArraySort::swap($a, $j - 1, $j);
						} else {
							break;
						}
						$j--;
					}
					unset($j,$i);
				}
			}
			return;
		}
		haxe_ds_ArraySort::rec($a, $cmp, $from, $middle);
		haxe_ds_ArraySort::rec($a, $cmp, $middle, $to);
		haxe_ds_ArraySort::doMerge($a, $cmp, $from, $middle, $to, $middle - $from, $to - $middle);
	}
	static function doMerge($a, $cmp, $from, $pivot, $to, $len1, $len2) {
		$first_cut = null;
		$second_cut = null;
		$len11 = null;
		$len22 = null;
		$new_mid = null;
		if($len1 === 0 || $len2 === 0) {
			return;
		}
		if($len1 + $len2 === 2) {
			if(call_user_func_array($cmp, array($a[$pivot], $a[$from])) < 0) {
				haxe_ds_ArraySort::swap($a, $pivot, $from);
			}
			return;
		}
		if($len1 > $len2) {
			$len11 = $len1 >> 1;
			$first_cut = $from + $len11;
			$second_cut = haxe_ds_ArraySort::lower($a, $cmp, $pivot, $to, $first_cut);
			$len22 = $second_cut - $pivot;
		} else {
			$len22 = $len2 >> 1;
			$second_cut = $pivot + $len22;
			$first_cut = haxe_ds_ArraySort::upper($a, $cmp, $from, $pivot, $second_cut);
			$len11 = $first_cut - $from;
		}
		haxe_ds_ArraySort::rotate($a, $cmp, $first_cut, $pivot, $second_cut);
		$new_mid = $first_cut + $len22;
		haxe_ds_ArraySort::doMerge($a, $cmp, $from, $first_cut, $new_mid, $len11, $len22);
		haxe_ds_ArraySort::doMerge($a, $cmp, $new_mid, $second_cut, $to, $len1 - $len11, $len2 - $len22);
	}
	static function rotate($a, $cmp, $from, $mid, $to) {
		$n = null;
		if($from === $mid || $mid === $to) {
			return;
		}
		$n = haxe_ds_ArraySort::gcd($to - $from, $mid - $from);
		while($n-- !== 0) {
			$val = $a[$from + $n];
			$shift = $mid - $from;
			$p1 = $from + $n;
			$p2 = $from + $n + $shift;
			while($p2 !== $from + $n) {
				$a[$p1] = $a[$p2];
				$p1 = $p2;
				if($to - $p2 > $shift) {
					$p2 += $shift;
				} else {
					$p2 = $from + ($shift - ($to - $p2));
				}
			}
			$a[$p1] = $val;
			unset($val,$shift,$p2,$p1);
		}
	}
	static function gcd($m, $n) {
		while($n !== 0) {
			$t = _hx_mod($m, $n);
			$m = $n;
			$n = $t;
			unset($t);
		}
		return $m;
	}
	static function upper($a, $cmp, $from, $to, $val) {
		$len = $to - $from;
		$half = null;
		$mid = null;
		while($len > 0) {
			$half = $len >> 1;
			$mid = $from + $half;
			if(call_user_func_array($cmp, array($a[$val], $a[$mid])) < 0) {
				$len = $half;
			} else {
				$from = $mid + 1;
				$len = $len - $half - 1;
			}
		}
		return $from;
	}
	static function lower($a, $cmp, $from, $to, $val) {
		$len = $to - $from;
		$half = null;
		$mid = null;
		while($len > 0) {
			$half = $len >> 1;
			$mid = $from + $half;
			if(call_user_func_array($cmp, array($a[$mid], $a[$val])) < 0) {
				$from = $mid + 1;
				$len = $len - $half - 1;
			} else {
				$len = $half;
			}
		}
		return $from;
	}
	static function swap($a, $i, $j) {
		$tmp = $a[$i];
		$a[$i] = $a[$j];
		$a[$j] = $tmp;
	}
	function __toString() { return 'haxe.ds.ArraySort'; }
}
