<?php

abstract class BaseController
{
    public function __call($name, $arguments)
    {
        HelperRegistry::getHelper($name)->call($arguments);
    }
}