<script>
	import { spring } from 'svelte/motion';
	import { borders } from './stores.js';
  import defineCoords from './defineCoords';
  export let setCoords = {x: 0, y: 0};
  // this could be way problematic because the coords are being changed with update.
	// export let id; 
  const stopSpring = {stiffness: 0.02, damping: 0.4};
  // coords are defined here.
	const coords = spring(setCoords, stopSpring);
  let x,y;
  let card = {
    width:200,
    height:280
  };

	function handleMouseDown(event) {
    event.preventDefault();
		coords.stiffness = 0.1;
    coords.damping = 0.4;
    x = event.clientX;
		y = event.clientY;
		window.addEventListener('mousemove', handleMousemove);
    window.addEventListener('mouseup', handleMouseup);
	}

	function handleMousemove(event) {
    const dx = event.clientX - x;
		const dy = event.clientY - y;
		coords.update($coords => ({
			x: $coords.x + dx,
			y: $coords.y + dy
		}));
    x = event.clientX;
		y = event.clientY;
	}

	function handleMouseup(event) {
		coords.stiffness = 0.03;
		coords.damping = 0.4;

    // setCoords replaces the current coords with the origin.
		coords.set(setCoords);
    x = event.clientX;
		y = event.clientY;
    window.removeEventListener('mousemove', handleMousemove);
    window.removeEventListener('mouseup', handleMouseup);
	}

</script>

<div class="card"
	on:mousedown={handleMouseDown}
	style="transform:
		translate({$coords.x}px,{$coords.y}px)
		rotate({($coords.x * 0.1)}deg);
    height:{card.height}px;
    width:{card.width}px;"
>
  <h2>New Version</h2>
  <div class="image">Fake Image</div>
  <div class="details">
    <p>STR:</p>
    <p>WK:</p>
    <p>PWR:</p>
  </div>
  <p>x: {x} y: {y}</p>
  <p>coords: {Math.round($coords.x)},{Math.round($coords.y)}</p>
</div>

<style>
  h2,p {
    margin: 0em;
  }

  h2 {
    color: #ff3e00;
  }

	.card {
		position: absolute;
		left: calc(50% - 200px / 2);
		bottom: calc(15% - 280px / 2);
		border-radius: 4px;
    border: 0.2em solid black;
    border-radius: 0.4em;
    background-color: rgba(255, 255, 255, 0.9);
    display: grid;
    gap: 0;
    align-items: center;
		cursor: move;
    z-index: 1;
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
</style>