{
  const myChart = echarts.init(document.querySelector('.line .chart'));
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: 52,
      right: 52,
      top: 20,
      bottom: 31,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: [],
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#4e4c4c',
          fontSize: 11
        }
      },
      axisLine: {
        lineStyle: {
          type: 'dotted',
          color: '#ccc'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dotted',
          color: '#ccc'
        }
      },
      axisLabel: {
        formatter: '{value}人'
      }
    },
    series: [{
      data: [],
      type: 'line',
      smooth: true,
      label: {
        show: true,
        color: "#4587f0",
        fontSize: 11,
        position: 'top',
      },
      lineStyle: {
        color: '#4587f0',
        width: 2
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1, [{
                offset: 0,
                color: 'rgba(69, 135, 240,.2)'
              },
              {
                offset: .8,
                color: 'rgba(69, 135, 240,.1)'
              }
            ],
          false
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)"
      },
      itemStyle: {
        color: '#4587f0',
      }
    }]
  };

  const month = [];
  const value = [];
  $.get('https://edu.telking.com/api/?type=month', res => {
    res.data.xAxis.forEach(v => month.push(v))
    res.data.series.forEach(v => value.push(v))
    myChart.setOption({
      xAxis: {
        data: month
      },
      series: {
        data: value
      }
    });
  });

  myChart.setOption(option);
}

{
  const myChart = echarts.init(document.querySelector('.bar .chart'));
  const option = {
    color: ['#c03736', '#2f4553', '#63a0a7', '#d28167', '#93c7af', '#759e84', '#c8842f'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
      type: 'pie',
      radius: '70%',
      center: ['50%', '50%'],
      label: {
        fontSize: 11
      },
      labelLine: {
        length: 10,
        length2: 8
      },
      data: []
    }],
  };

  const seriesdata = [];
  $.get('https://edu.telking.com/api/?type=week', res => {
    for (let i in res.data.series) {
      seriesdata.push({
        name: res.data.xAxis[i],
        value: res.data.series[i]
      });
    }
    myChart.setOption({
      series: {
        data: seriesdata
      }
    });
  });

  myChart.setOption(option);  
}

{
  const myChart = echarts.init(document.querySelector('.pie .chart'));
  const option = {
    color: ['#4587f0'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 44,
      right: 44,
      top: 29,
      bottom: 29,
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: [],
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#4e4c4c',
          fontSize: 11
        }
      },
      axisLine: {
        lineStyle: {
          type: 'dotted',
          color: '#ccc'
        }
      }
    }],
    yAxis: [{
      type: 'value',
      name: '商品数',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dotted',
          color: '#ccc'
        }
      },
    }],
    series: [{
      type: 'bar',
      barWidth: '30%',
      data: []
    }]
  };

  const week = [];
  const value = [];
  $.get('https://edu.telking.com/api/?type=week', res => {
    res.data.xAxis.forEach(v => week.push(v))
    res.data.series.forEach(v => value.push(v))
    myChart.setOption({
      xAxis: {
       data: week
      },
      series: {
        data: value
      }
    });
  });

  myChart.setOption(option);
}