import format from "./format";
import moment from 'moment';

function jabarStats(data) {
    const jabarStatRaw = data;

    return parseStats(jabarStatRaw);

}

function rekapJabar(dataRekap) {
    return parseRekap(dataRekap);
}

function rekapKabkot(kabkot, dataRekap) {
    const kabkotRekap = dataRekap.filter(
        d => d.kode_kab === kabkot
    );

    return parseRekap(kabkotRekap);
}

function parseRekap(dataRekap) {
    return [
        {
            label: 'Terkonfirmasi',
            key: 'positif',
            color: 'rgb(239, 100, 100)'
        },
        {
            label: 'Sembuh',
            key: 'sembuh',
            color: 'rgb(59, 180, 110)'
        },
        {
            label: 'Meninggal',
            key: 'meninggal',
            color: 'rgb(239, 169, 101)'
        }
    ].reduce((prev, next) => {
        if (dataRekap.filter(d => d[next.key] !== null).length > 4) {
            prev.push(parseChart(dataRekap, next.key, next.label, next.color));
        }

        return prev;
    }, []);
}

function parseChart(dataRekap, key, label, color) {
    const chartData = dataRekap.map(data => {
        return {
            x: moment(data.tanggal, 'YYYY-MM-DD'),
            y: data[key]
        };
    });

    return {
        label,
        data:chartData,
        fill: false,
        borderColor: color
    };
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
    rekapJabar,
    rekapKabkot,
};