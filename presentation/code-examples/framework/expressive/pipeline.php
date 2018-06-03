<?php

$app = pipe(
    new OnlyAuthenticated($authentication, $renderer),
    new OnlyCoyotes($renderer),
    new OnlyWithValidFormData($renderer),
    new PurchaseAction($products, $notifications, $renderer)
);