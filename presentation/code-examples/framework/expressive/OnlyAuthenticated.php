<?php

class OnlyAuthenticated
{
    /** @var Authentication */
    private $authentication;
    /** @var Renderer */
    private $renderer;

    public function __construct(
        Authentication $authentication,
        Renderer $renderer
    ) {
        $this->authentication = $authentication;
        $this->renderer       = $renderer;
    }

    public function __invoke(Request $request, callable $next) : Response
    {
        $user = $this->authentication->userForCookie($request->getHeader('Cookie'));

        if (! $user) {
            return $this->renderer->render(self::class, ['authenticated' => false])
                                  ->withResponseCode(401);
        }

        return $next($request->withAttribute('user', $user));
    }
}