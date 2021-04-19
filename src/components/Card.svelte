<script>
  export let coords;
  let card = {
    width:200,
    height:280
  };
</script>

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

<style>

  h2,p {
    margin: 0em;
  }
  
  .card {
    position: absolute;
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
</style>
