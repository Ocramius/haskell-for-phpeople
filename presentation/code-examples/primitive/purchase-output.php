<?php

include 'header.php';

if (! isset($success)) {
?>
<span style="color:red">Sorry, something went wrong</span>
<?php
    exit();
}

?>
<span>Thank you for your purchase!</span>

<?php

include 'product-details.php';
include 'footer.php';