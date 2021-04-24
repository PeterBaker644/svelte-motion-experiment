<script>
  import Board from './components/Board.svelte'
</script>

<div class="container">

  <header>
    <h1>Svelte Motion Test</h1>
  </header>
  <Board/>
    
</div>

<style>

	h1 {
		color: #ff3e00;
    text-align: center;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
    margin: 1rem;
	}

  .container {
    height: 100%;
  }

</style>