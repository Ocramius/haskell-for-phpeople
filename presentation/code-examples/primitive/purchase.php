<?php

if ($type == 'purchase' && $userType == 'coyote') {
    $products = mysql_query(
        'SELECT * FROM product WHERE id = ' . $productId
    );

    if ($product = mysql_fetch_assoc($products)) {
        if ($purchase && strlen($creditCard) == 16) {
            $success = true;
            mysql_query(
                'INSERT INTO purchase (product_id, credit_card, user)
                VALUES (' . $productId . ', "' . $creditCard . '", "' . $user . '")'
            );
            mail(
                $userEmail,
                'Purchase completed',
                'Thank you for your purchase!'
            );
        }
    }
}