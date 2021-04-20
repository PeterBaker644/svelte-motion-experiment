<script>
  // This export pulls in the name from main.js
	// export let name;
  import { spring } from 'svelte/motion';
  import Card from "./components/Card(old).svelte";
  import Cube from './components/Cube.svelte';

	let size = spring(10);
</script>

<main
  on:mousedown="{() => size.set(30)}"
  on:mouseup="{() => size.set(10)}"
>
  <Cube/>

	<h1>Svelte Motion Test</h1>
	<p>The current size is {$size}.</p>
    
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
    width: 100%;
    height: 100%;
    display: grid;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>