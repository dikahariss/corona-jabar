import axios from 'axios';
import parsers from "./parsers";

async function jabarStats() {
    const response = await axios.get(
        'https://covid19-public.digitalservice.id/api/v1/rekapitulasi/jabar'
    );

    return parsers.jabarStats(response.data.data.content);
}

export default {
    jabarStats,
};