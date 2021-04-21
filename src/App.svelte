<script>
  // This export pulls in the name from main.js
	// export let name;
  import { spring } from 'svelte/motion';
  import Card from './components/Card.svelte';
  import boardState from './components/stores'

	let size = spring(10);
</script>

<main
  on:mousedown="{() => size.set(30)}"
  on:mouseup="{() => size.set(10)}"
>
  <Card setCoords={{x:-100, y:-5}}/>
  <Card setCoords={{x:0, y:0}}/>
  <Card setCoords={{x:100, y:5}}/>
  <!-- reminder to spread cards no more than 100px apart. Can be less but never more. -->
  <header>
    <h1>Svelte Motion Test</h1>
  </header>
  <div id="frame">
    <p>Place card here</p>
  </div>
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
    grid-auto-rows: 100px 400px 1fr;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
    margin: 1rem;
	}

  #frame {
    height: 350px;
    width: 275px;
    border: 0.2em solid lightgrey;
    border-radius: 0.4em;
    place-self: center;
    place-content: center;
    color: lightgrey;
    z-index: -1;
  }

  #frame p {
    position: relative;
    top: 50%;
    margin:0em;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>