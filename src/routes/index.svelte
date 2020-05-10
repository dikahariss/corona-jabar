<script context="module">
    import requests from '../data/requests';

    export async function preload() {
        try {
            const jabarStats = await requests.jabarStats();
            const rekapJabar = await requests.rekapJabar();
            const kabkotData = await requests.kabkotData();

            return { jabarStats, rekapJabar, kabkotData };
        } catch (e) {
            this.error(
                500,
                "There was an error in calling the api please try agai in 5 minutes."
            );
        }
    }
</script>
<script>
    import CovidStat from "../components/CovidStat.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";

    export let jabarStats;
    export let rekapJabar;
    export let kabkotData;
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

<CovidChart dataRekap={rekapJabar} title="Dashboard Kasus COVID-19 Provinsi Jawa Barat"/>

<TableContainer data={kabkotData}/>