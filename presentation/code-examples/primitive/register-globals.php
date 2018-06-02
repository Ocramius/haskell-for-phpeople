<?php

include 'functions.php.inc';

// register_globals polyfill
foreach ($_REQUEST as $var => $value) {
    $$var = $value;
}