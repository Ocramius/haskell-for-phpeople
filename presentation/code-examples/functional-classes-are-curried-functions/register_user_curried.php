<?php

function register_user(Db $db, CreateUser $createUser, UserData $userData)
{
    // ...
}

$constructed = curry('register_user', [$db, $createUser]);