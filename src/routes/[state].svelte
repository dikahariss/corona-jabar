<script context="module">
    import kabkotJabar from '../data/kabkotJabar';
    import requests from '../data/requests';

    export async function preload(page) {
        const state = page.params["state"];

        if (kabkotJabar.find(s => s.kode_bps === parseInt(state)) === undefined) {
            this.error(404, "Kabupaten / Kota tidak Terdaftar!");
            return;
        }
        const nama_wilayah = kabkotJabar.find(s => s.kode_bps === parseInt(state)).nama_wilayah;
        try {
            const kabkotStats = await requests.kabkotStats(state);
            const rekapKabkot = await requests.rekapKabkot(state);
            return { state: state, nama_wilayah, kabkotStats, rekapKabkot };
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
    export let kabkotStats;
    export let rekapKabkot;
</script>

<svelte:head>
    <title>Corona Jabar - {nama_wilayah}</title>
</svelte:head>

<div class="section header">
    <div class="container">
        <h1>Corona Jabar - {nama_wilayah}</h1>
    </div>
</div>

<CovidStat {...kabkotStats}/>

<CovidChart dataRekap={rekapKabkot} title="Dashboard Kasus COVID-19 {nama_wilayah}"/>
