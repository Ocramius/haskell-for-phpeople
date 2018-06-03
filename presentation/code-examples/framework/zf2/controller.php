<?php

class PurchaseController extends BaseController
{
    /** @var SecurityCheck */
    private $securityCheck;
    /** @var PurchaseForm */
    private $form;
    /** @var ProductRepository */
    private $products;
    /** @var Authentication */
    private $authentication;
    /** @var Notifications */
    private $notifications;

    public function __construct(
        SecurityCheck $securityCheck,
        PurchaseForm $form,
        ProductRepository $products,
        Authentication $authentication,
        Notifications $notifications
    ) {
        $this->securityCheck  = $securityCheck;
        $this->form           = $form;
        $this->products       = $products;
        $this->authentication = $authentication;
        $this->notifications = $notifications;
    }

    public function purchaseAction()
    {
        $this->securityCheck->assertIsCoyote();

        if (! $this->form->isValid($this->request)) {
            return new ViewModel(['form' => $this->form]);
        }

        $data = $this->form->getData();

        $user    = $this->authentication->requireUser();
        $product = $this->products->get($data['product']);
        $product->purchaseWithUser($user);

        $this->notifications->send($user, 'Purchase completed');

        return new ViewModel(['success' => true]);
    }
}