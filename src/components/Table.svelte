<script>
    export let kabkot;
</script>

<style>
    table {
        width: 100%;
    }
    .section {
        padding: 0.5rem 1.5rem;
    }
</style>

<div class="section">
    <div class="container">
        <table class="table is-bordered is-striped">
            <thead>
            <tr>
                <th>Kabupaten/Kota</th>
                <th>Terkonfirmasi</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
            </tr>
            </thead>
            <tbody>
            {#each kabkot as kab (kab.kode_kab)}
                <tr>
                    <td>
                        <a rel="prefetch" href={kab.kode_kab}>{kab.nama_kab}</a>
                    </td>
                    <td>{kab.positif}</td>
                    <td>{kab.sembuh}</td>
                    <td>{kab.meninggal}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>