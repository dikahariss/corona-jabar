<script>
    export let namaKabkot;
    export let urutkan = 'nama_kab';
</script>

<style>
    input,
    .select,
    select {
        width: 100%;
    }
    .column {
        padding-left: 0;
    }
</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-6">
                <input type="text" class="input"
                       bind:value={namaKabkot}
                       placeholder="Cari Kabupaten/Kota" />
            </div>
            <div class="column is-6">
                <div class="select">
                    <select bind:value={urutkan}>
                        <option value="nama_kab">Kabupaten/Kota</option>
                        <option value="positif">Terkonfirmasi</option>
                        <option value="sembuh">Sembuh</option>
                        <option value="meninggal">Meninggal</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>