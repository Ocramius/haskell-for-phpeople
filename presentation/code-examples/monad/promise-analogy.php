<?php

$result = get_users_count()
    ->then(function (int $result) : int {
        return remove_inactive_users($result);
    })
    ->then(function (int $result) : int {
        return remove_banned_users($result);
    })
    ->then(function (int $result) : int {
        return remove_administrators($result);
    })
    ->wait();
