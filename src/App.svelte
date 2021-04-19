<script>
  // This export pulls in the name from main.js
	// export let name;
  import { spring } from 'svelte/motion';

  let card = {
    width:200,
    height:280
  };
	let coords = spring({ x: 50, y: 50 }, {
		stiffness: 0.1,
		damping: 0.25
	});
	let size = spring(10);
</script>

<main
  on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
  on:mousedown="{() => size.set(30)}"
  on:mouseup="{() => size.set(10)}"
>
  <div class="card" style="
    transform:translate({$coords.x - card.width/2}px,{$coords.y - card.height/2}px);
    height:{card.height}px;
    width:{card.width}px;
    ">
    <h2>Monster Name</h2>
    <div class="image">Fake Image</div>
    <p class="details">STR:</p>
    <p class="details">WK:</p>
    <p class="details">PWR:</p>
    <p>coords: {Math.round($coords.x)},{Math.round($coords.y)}</p>
  </div>

	<h1>Svelte Motion Test</h1>
	<p>This is a test webpage.</p>
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

  h2,p {
    margin: 0em;
  }

	.card { 
    position:absolute; 
    color: #ff3e00;
    border: 0.2em solid black;
    border-radius: 0.4em;
    background-color: rgba(255, 255, 255, 0.7); 
    display: grid;
    gap: 0;
    align-items: center;
  }

  .details {
    margin: 0em;
  }

  .image {
    width: 150px;
    height: 100px;
    margin: 0.2em 0em;
    border: 1px solid black;
    justify-self: center;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>