<?php

declare(strict_types=1);

final class UserId
{
    /** @var int */
    private $id;

    private function __construct(int $id)
    {
        $this->id = $id;
    }

    public static function fromId(int $id) : self
    {
        if ($id <= 0) {
            throw new \InvalidArgumentException('Invalid ID');
        }

        return new self($id);
    }

    public function toScalar() : int
    {
        return $this->id;
    }
}
