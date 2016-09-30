<!--
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
-->

<?php

  $a = "xyaabbbccccdefww";
  $b = "xxxxyyyyabklmopq";

  function longest($a, $b) {
      $result = $a . $b;
      $wordParts = str_split($result);
      sort($wordParts);
      $out_arr = array_unique($wordParts);
      echo implode('', $out_arr);
      return implode('', $out_arr);
  }

  longest($a,$b)

?>
