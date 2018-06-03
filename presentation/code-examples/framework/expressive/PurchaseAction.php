<?php

class PurchaseAction
{
    /** @var ProductRepository */
    private $products;
    /** @var Notifications */
    private $notifications;
    /** @var Renderer */
    private $renderer;

    public function __construct(
        ProductRepository $products,
        Notifications $notifications,
        Renderer $renderer
    ) {
        $this->products      = $products;
        $this->notifications = $notifications;
        $this->renderer      = $renderer;
    }

    public function __invoke(Request $request) : Response
    {
        $formData = $request->getAttribute('validatedFormData');
        $user     = $request->getAttribute('user');

        $product = $this->products->get($formData['product']);
        $product->purchaseWithUser($user);

        $this->notifications->send($user, 'Purchase completed');

        return $this->renderer->render(self::class, ['success' => true]);
    }
}