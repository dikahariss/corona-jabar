import axios from 'axios';
import parsers from "./parsers";

async function jabarStats() {
    const response = await axios.get(
        'https://covid19-public.digitalservice.id/api/v1/rekapitulasi/jabar?level=prov'
    );

    return parsers.jabarStats(response.data.data.content);
}

async function kabkotStats(kabkot) {
    const response = await axios.get(
        'https://covid19-public.digitalservice.id/api/v1/rekapitulasi/jabar?level=kab'
    );

    return parsers.kabkotStats(kabkot, response.data.data.content);
}

async function rekapJabar() {
    const response = await axios.get(
        'https://covid19-public.digitalservice.id/api/v1/rekapitulasi/jabar/harian?level=prov'
    );

    return parsers.rekapJabar(response.data.data.content);
}

async function rekapKabkot(kabkot) {
    const response = await axios.get(
        'https://covid19-public.digitalservice.id/api/v1/rekapitulasi/jabar/harian?level=kab'
    );

    return parsers.rekapKabkot(kabkot, response.data.data.content);
}

export default {
    jabarStats,
    kabkotStats,
    rekapJabar,
    rekapKabkot,
};