<script>
export let card;
</script>

<section>
  <div>
    Name: 
    <span class="name">{card.name}</span>
  </div>
  <div>
    Strength: 
    <span class="detail">{card.strength}</span>
  </div>
  <div>
    Weakness: 
    <span class="detail">{card.weakness}</span>
  </div>
  <div>
    Power: 
    <span class="detail">{card.power}</span>
  </div>
  <div>
    Notes: 
    <span class="detail">{card.notes}</span>
  </div>
</section>

<style>

div {
  margin: 1em 0 0 0;
}

.detail {
  color: dimgray
}

.name {
  font-size: 2em;
  font-weight: 600
  ;
}
</style>