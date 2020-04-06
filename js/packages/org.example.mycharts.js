'use strict';
Package('org.example.mycharts', [
  Class('BarChartFCController', FCController, {
    done: function() {
      // this is an example to build a bar chart using FusionCharts
      var controller = this;
      this.loadFusionCharts().then(
        function() {
          // Your custom datasource for your chart goes here
          // to get more examples and license using FusionCharts, go to fusioncharts.com

          const dataSource = {
            "chart": {
              "caption": "Countries With Most Oil Reserves [2017-18]",
              "subcaption": "In MMbbl = One Million barrels",
              "yaxisname": "Reserves (MMbbl)",
              "captionalignment": "left",
              "numbersuffix": "K",
              "labeldisplay": "AUTO",
              "theme": "fusion"
            },
            "data": [{
                "label": "Venezuela",
                "value": "290"
              },
              {
                "label": "Saudi",
                "value": "260"
              },
              {
                "label": "Canada",
                "value": "180"
              },
              {
                "label": "Iran",
                "value": "140"
              },
              {
                "label": "Russia",
                "value": "115"
              },
              {
                "label": "UAE",
                "value": "100"
              },
              {
                "label": "US",
                "value": "30"
              },
              {
                "label": "China",
                "value": "30"
              }
            ]
          };

          FusionCharts.ready(function() {
            const myChart = new FusionCharts({
              type: "column2d",
              renderAt: "chart-container",
              width: "100%",
              height: "500",
              dataFormat: "json",
              dataSource
            }).render();
          });

          // this is the end of your code

        });
    }
  }),
  Class('BarChartHCController', HighchartsController, {
    done: function() {
      // this is an example to build a bar chart using FusionCharts
      var controller = this;
      this.loadHighCharts().then(
        function() {
          // Your custom datasource for your chart goes here



          // this is the end of your code

        });
    }
  })
]);
