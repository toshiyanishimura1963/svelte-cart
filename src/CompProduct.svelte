<script>
  import { products } from './cart.js';
  export let product = {};
  const buyProduct = () => {
    for (let item of $products) {
      if (item.id == product.id) {
        item.quantity++;
        $products = $products;
        return;
      }
    }
    product.quantity = 1;
    $products = [...$products, product];
  };
</script>

<style>

</style>

<div class="product">
  id: {product.id} name: {product.name} price: {product.price}
 
  <button on:click={buyProduct}>buy</button>
</div>
