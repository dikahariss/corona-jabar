<script>
    import TableFilter from "./TableFilter.svelte";
    import Table from "./Table.svelte";

    export let data;
    let urutkan = 'nama_kab';
    let namaKabkot = '';
    $: dataKabkot = filterAndSort(data, namaKabkot, urutkan);

    function filterAndSort(data, namaKabkot, urutkan) {
        const filteredData = data.filter(d => {
            return (
                    namaKabkot === "" ||
                    d.nama_kab.toLowerCase().indexOf(namaKabkot.toLowerCase()) > -1
            );
        });

        if (urutkan !== "nama_kab") {
            return filteredData.sort((a, b) => {
                return +b[urutkan].replace(",", "") - +a[urutkan].replace(",", "");
            });
        }

        return filteredData;
    }
</script>

<TableFilter bind:namaKabkot bind:urutkan />
<Table kabkot={dataKabkot} />