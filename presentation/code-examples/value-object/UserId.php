<?php

final class UserId
{
    private $id;
    private function __construct()
    {
    }

    public static function fromInteger(int $id) : self
    {
        Assert::greaterThan(0, $id);

        $instance = new self();

        $instance->id = $id;

        return $instance;
    }

    // ... read-only API here
}