<script>
  export let product = {};
  import {products} from "./cart.js";
  let disabled = false;

  const addOne = () => {
      product.quantity++;
      $products = $products;
      disabled = false;
  }
    const subtractOne = () => {
      product.quantity--;
      $products = $products;
      if(product.quantity == 0) disabled = true;
  }
    const deleteProduct = () => {
      $products = $products.filter(item => item.id != product.id);
  }
</script>

<div class="product">
  Name : {product.name} Price : {product.price} Units : {product.quantity}
  <button on:click={addOne}>+</button>
  <button on:click={subtractOne} {disabled}>-</button>
  <button on:click={deleteProduct}>remove</button>
</div>
