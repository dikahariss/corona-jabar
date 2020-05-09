<script context="module">
    import kabkotJabar from '../data/kabkotJabar';

    export async function preload(page) {
        const state = page.params["state"];

        if (kabkotJabar.find(s => s.kode_bps === parseInt(state)) === undefined) {
            this.error(404, "State Not Found");
            return;
        }
        const nama_wilayah = kabkotJabar.find(s => s.kode_bps === parseInt(state)).nama_wilayah;
        try {
            return { state: state, nama_wilayah };
        } catch (e) {
            this.error(
                500,
                "There was an error in calling the api, please try again in 5 minutes."
            );
            return;
        }
    }
</script>

<script>
    import CovidStat from "../components/CovidStat.svelte";
    import CovidChart from "../components/CovidChart.svelte";

    export let state;
    export let nama_wilayah;

</script>

<svelte:head>
    <title>Corona Jabar - {nama_wilayah}</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Corona Jabar - {nama_wilayah}</h1>
    </div>
</div>

<CovidStat/>

<CovidChart/>
