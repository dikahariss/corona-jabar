import format from "./format";

function jabarStats(data) {
    const jabarStatRaw = data;

    return parseStats(jabarStatRaw);

}

function kabkotStats(kabkot, data) {
    const kabkotRawData = data.find(d => d.kode_kab === kabkot);

    return parseStats(kabkotRawData);
}

function parseStats(rawStats) {
    return {
        positif: format.number(rawStats.positif),
        sembuh: format.number(rawStats.sembuh),
        meninggal: format.number(rawStats.meninggal),
        perawatan: format.number(rawStats.positif - (rawStats.sembuh + rawStats.meninggal)),
        // odp_proses: format.number(rawStats.odp_proses),
        // odp_selesai: format.number(rawStats.odp_selesai),
        // odp_total: format.number(rawStats.odp_total),
        // pdp_proses: format.number(jabarStatRaw.pdp_proses),
        // pdp_selesai: format.number(jabarStatRaw.pdp_selesai),
        // pdp_total: format.number(rawStats.pdp_total),
    };
}

export default {
    jabarStats,
    kabkotStats,
};