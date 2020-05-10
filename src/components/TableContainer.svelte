<script>
    import Table from "./Table.svelte";
    import TableFilter from "./TableFilter.svelte";

    export let data;
    $: kabkot = data;
</script>

<TableFilter/>
<Table {kabkot}/>
