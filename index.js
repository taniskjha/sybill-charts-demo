function toMs(h, m) {
    return Date.UTC(1970, 0, 1, h, m);
  }
  
  const series = [{
    // First series
    name: 'Engaged',
    color: 'green',
    dataRaw: [{
      y: 1,
      xRanges: [
        // first value: from; second value: to
        [toMs(15, 30), toMs(15, 40)],
        [toMs(15, 50), toMs(16, 05)  ]
      ]
    }, {
      y: 2,
      xRanges: [
        // first value: from; second value: to
        [toMs(15, 30), toMs(15, 55)]
      ]
    }]
  }, {
    // Second series
    name: 'Not Engaged',
    color: 'red',
    dataRaw: [{
      y: 1,
      xRanges: [
        // first value: from; second value: to
        [toMs(15, 40), toMs(15, 50)],
          [toMs(16, 05), toMs(16, 10)]
      ]
    }, {
      y: 2,
      xRanges: [
        // first value: from; second value: to
        [toMs(15, 55), toMs(16, 10)]
      ]
    }]
  },
].map(function(series) {
    series.data = [];
    series.dataRaw.forEach(function(dataRaw) {
      dataRaw.xRanges.forEach(function(xRange) {
        series.data.push([xRange[0], dataRaw.y], [xRange[1], dataRaw.y], [xRange[1], null]); // null breakes the line
      }); // forEach
    }); // forEach
    return series;
  });
  
  console.log(series);
  
  var chart = Highcharts.chart('container', {
    chart: {
      type: 'scatter'
    },
  
  
    title: {
      text: ''
    },
    
        credits: {
      enabled: false
  },
  
    tooltip: {
      formatter: function() {
        return Highcharts.dateFormat('%H:%M', this.x);
      }
    },
    plotOptions: {
      series: {
        lineWidth: 5,
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      }
    },
  
  
    xAxis: {
      title: {
        text: 'Time'
      },
      type: 'datetime',
      dateTimeLabelFormats: { //force all formats to be hour:minute
        second: '%H:%M',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%H:%M',
        week: '%H:%M',
        month: '%H:%M',
        year: '%H:%M'
      }
    },
  
    yAxis: {
        visible: false,
      tickInterval: 1
    },
    series: series
  });
  