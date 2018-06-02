<?php

include 'functions.php.inc';

// register globals
foreach ($_REQUEST as $var => $value) {
    $$var = $value;
}