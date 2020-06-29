<script>
    import { products } from   "./cart.js";
    import CompCartProduct from "./CompCartProduct.svelte"
</script>

<h1>Cart</h1>
{#each $products as product}
    <CompCartProduct product={product} />
{/each}
