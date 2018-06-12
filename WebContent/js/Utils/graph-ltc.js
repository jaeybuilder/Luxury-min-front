ltc = (fechas) => {
    /*Inicio de valores para las gráficas*/
    var datos_hashes = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    /*Fin de valores para las gráficas*/

    /*Gráfíca lineal del home*/
    var dom = document.getElementById("graph-ltc");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        legend: {
            data: ['Megahashes'],
            textStyle: {
                fontSize: 16
            },
            right: '3%',
            top: 8,
        },
        grid: {
            x: '10%',
            y: '18%',
            width: '84%',
            height: '60%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: 'white',
                }
            },
            axisLabel: {
                color: 'white',
                fontSize: 12,
                fontFamily: "Franklin Gothic Book"
            },
            axisTick: {
                lineStyle: {
                    color: 'white',
                    shadowColor: 'white',
                    shadowOffsetY: 6.5
                },
                length: 3.5,
                alignWithLabel: true,
                inside: true,

            },
            type: 'category',
            backgroundColor: 'white',
            data: fechas,
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: 'black',
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'black',
                }
            },
            axisLabel: {
                color: 'white',
                fontSize: 10,
                fontFamily: "Franklin Gothic Book",
                formatter: '{value} mh/s',
            },
            nameTextStyle: {
                color: 'white',
                fontSize: 16,
            },
            type: 'value',
            position: 'right',
            nameLocation: 'center',
            name: 'Hashes (LTC)',
            nameGap: 55,
            fontFamily: "Franklin Gothic Book",
            fontSize: 16,
            max: 1.2,
            min: 0.8,
            color: 'white',
        },
        dataZoom: [{}, {
            type: 'inside',
        }],
        series: [{
                data: datos_hashes,
                type: 'line',
                smooth: true,
                name: 'megahashes',
                color: '#D4AF37',

            },

        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
};