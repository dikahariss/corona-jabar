<script>
    export let kabkot;
</script>

<style>
    table {
        width: 100%;
    }
    .section {
        padding: 0.5rem 1.5rem;
        min-height: 100vh;
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
            {#each kabkot as data (data.kode_kab)}
                <tr>
                    <td>
                        <a rel="prefetch" href={data.kode_kab}>{data.nama_kab}</a>
                    </td>
                    <td>{data.positif}</td>
                    <td>{data.sembuh}</td>
                    <td>{data.meninggal}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>