<script>
  import {products} from "./cart.js";
  let itemInCart = 0;
  $:{
    let count = 0;
    for( let item of $products){
      count += item.quantity;
    }
    itemInCart = count;
  }

</script>

<nav>
  <a href="/">home</a>
  <a href="/contact-us">contact us</a>
  Items in cart {itemInCart}
</nav>
