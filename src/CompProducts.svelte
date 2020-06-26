<script>
    import {products} from "./products.js"
    import CompProduct from "./CompProduct.svelte";

</script>

<h1>Products</h1>
<!-- {JSON.stringify($products)} -->
{#each $products as product}
    <CompProduct product={product} />
    <!-- {JSON.stringify(product)} -->
{/each}
