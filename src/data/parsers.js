import format from "./format";

function jabarStats(data) {
    const jabarStatRaw = data;

    return {
        positif: format.number(jabarStatRaw.positif),
        sembuh: format.number(jabarStatRaw.sembuh),
        meninggal: format.number(jabarStatRaw.meninggal),
        perawatan: format.number(jabarStatRaw.positif - (jabarStatRaw.sembuh + jabarStatRaw.meninggal)),
        odp_proses: format.number(jabarStatRaw.odp_proses),
        odp_selesai: format.number(jabarStatRaw.odp_selesai),
        odp_total: format.number(jabarStatRaw.odp_total),
        pdp_proses: format.number(jabarStatRaw.pdp_proses),
        pdp_selesai: format.number(jabarStatRaw.pdp_selesai),
        pdp_total: format.number(jabarStatRaw.pdp_total),
    };

}

export default {
  jabarStats,
};