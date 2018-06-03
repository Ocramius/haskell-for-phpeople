<?php

class OnlyWithValidFormData
{
    /** @var Renderer */
    private $renderer;
    /** @var Form */
    private $form;

    public function __construct(Renderer $renderer, Form $form)
    {
        $this->renderer = $renderer;
        $this->form     = $form;
    }

    public function __invoke(Request $request, callable $next) : Response
    {
        list ($invalid, $valid) = $this->form->validate($this->request);

        if ($invalid) {
            return $this->renderer->render(self::class, ['invalid' => $invalid])
                                  ->withResponseCode(422);
        }

        return $next($request->withAttribute('validatedFormData', $valid));
    }
}