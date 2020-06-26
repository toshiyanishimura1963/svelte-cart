import { writable } from 'svelte/store';

export let products = writable([
  { id: 1, name: 'a', price: 10 },
  { id: 2, name: 'b', price: 20 },
  { id: 3, name: 'c', price: 30 },
  { id: 4, name: 'd', price: 40 },
]);
