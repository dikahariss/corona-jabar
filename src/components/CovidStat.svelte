<script>
    export let positif;
    export let sembuh;
    export let meninggal;
    export let perawatan;
</script>

<style>
    .columns {
        border: solid 1px gray;
    }
</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <h2 class="is-3 column">Terkonfirmasi: {positif}</h2>
            <h2 class="is-3 column">Meninggal: {meninggal}</h2>
            <h2 class="is-3 column">Sembuh: {sembuh}</h2>
            <h2 class="is-3 column">Perawatan: {perawatan}</h2>
        </div>
    </div>
</div>