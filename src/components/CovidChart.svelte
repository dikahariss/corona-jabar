<script>
    import { onMount, onDestroy } from 'svelte';
    import Chart from 'chart.js';

    export let dataRekap;
    export let title;

    let hideChart;
    let chartElement;
    let chart;

    onMount(() => {
        window.addEventListener('orientationchange', function () {
            window.location.reload();
        }, false);

        if (dataRekap && document.body.clientWidth > 680) {
            createChart();
            return;
        }

        hideChart = true;
    });

    onDestroy(() => {
        if (chart) {
            chart.destroy();
        }
    });

    function createChart() {
        chart = new Chart(chartElement.getContext('2d'), {
            type: 'line',
            data: {
                datasets: dataRekap
            },
            options: {
                responsive: true,
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            let label = data.datasets[tooltipItem.datasetIndex].label;

                            label += ": ";
                            label += tooltipItem.yLabel.toLocaleString();

                            return label;
                        }
                    }
                },
                title: {
                    display: true,
                    text: title
                },
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            parser: 'D/M/YY',
                            tooltipFormat: 'll'
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Tanggal"
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true
                        },
                        tick: {
                            beginAtZero: true,
                            userCallback: function (value, index, values) {
                                return value.toLocaleString();
                            }
                        }
                    }]
                }
            }
        });
    }
</script>

{#if !hideChart}
<div class="container">
    <canvas bind:this={chartElement}></canvas>
</div>
{/if}
