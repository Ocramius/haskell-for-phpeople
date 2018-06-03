<?php

class OnlyCoyotes
{
    /** @var Renderer */
    private $renderer;

    public function __construct(Renderer $renderer)
    {
        $this->products      = $products;
        $this->notifications = $notifications;
        $this->renderer      = $renderer;
    }

    public function __invoke(Request $request, callable $next) : Response
    {
        $user = $request->getAttribute('user');

        if (! ($user instanceof $user && $user->isCoyote())) {
            return $this
                ->renderer
                ->render(self::class, ['coyote' => false])
                ->withResponseCode(403);
        }

        return $next($request);
    }
}