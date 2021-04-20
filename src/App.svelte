<script>
  // This export pulls in the name from main.js
	// export let name;
  import { spring } from 'svelte/motion';
  import Card from "./components/Card.svelte";
  import Cube from './components/Cube.svelte';
	let coords = spring({ x: 50, y: 50 }, {
		stiffness: 0.07,
		damping: 0.3
	});
	let size = spring(10);
</script>

<main
  on:mousedown="{() => size.set(30)}"
  on:mouseup="{() => size.set(10)}"
>
  <Card/>
  <Card/>
  <Cube/>

	<h1>Svelte Motion Test</h1>
	<p>The current size is {$size}.</p>
  <div style="position: absolute; right: 1em;">
    <label>
      <h3>stiffness ({coords.stiffness})</h3>
      <input bind:value={coords.stiffness} type="range" min="0" max="1" step="0.01">
    </label>

    <label>
      <h3>damping ({coords.damping})</h3>
      <input bind:value={coords.damping} type="range" min="0" max="1" step="0.01">
    </label>
  </div>
    
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