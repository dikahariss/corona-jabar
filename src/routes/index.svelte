<script context="module">
    import requests from '../data/requests';

    export async function preload() {
        try {
            const jabarStats = await requests.jabarStats();

            return { jabarStats };
        } catch (e) {

        }
    }
</script>
<script>
    import CovidStat from "../components/CovidStat.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";

    export let jabarStats;
    console.log(jabarStats);
</script>

<svelte:head>
    <title>Corona Jabar</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Corona Jabar</h1>
    </div>
</div>

<CovidStat {...jabarStats}/>

<CovidChart/>

<TableContainer/>