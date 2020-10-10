// var ctx = document.getElementById('pam3-signal')
// var x
// var y = 3*(Math.cos(x**2)*Math.sin(x))
// var mixedChart = new Chart(ctx, {
//     data: {
//         datasets: [{
//             type: 'line',
//             label: 'signal',
//             data: [50, 50, 50, 50]    
//         }]
//         // {
//         //     type: 'bar',
//         //     label: 'threshold',
//         //     data: [10, 20, 30, 40]
//         // }]
//     },
//     options:{}
// });

let myChart = document.getElementById('pam3-signal').getContext('2d');
            
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
  type: 'line',
  data:{
    labels: ['1', "2", '3', '4', "5", "6"],
    datasets: [{
      label: 'Volts',
      data: [
          017595,
          181045,
          353060,
          356519,
          185162,
          018072,
      ],
      backgroundColor: [
          'green',
          'yellow',
          'orange',
          'purple',
          'red',
          'blue',
      ],
      borderWidth: 2,
      borderColor: 'red',
      hoverBorderWidth: 5,
      hoverBorderColor: '#000',
      fill:false,
    }, {
      label: 'Volts Form',
      data: [
          353060,
          181045,
          017595,
          018072,
          185162,
          356519,
      ],
      //backgroundColor: 'blue',
      backgroundColor: [
          'green',
          'yellow',
          'orange',
          'purple',
          'red',
          'blue'
      ],
      borderWidth: 2,
      borderColor: 'green',
      hoverBorderWidth: 5,
      hoverBorderColor: '#000',
      backgroundColor: 'cyan' 
    }]
  },
  options:{
    title:{
        display: true,
        text: "PAM3",
        fontSize: 25
    },
    legend:{
      display: false,
      position:'right',
      labels:{
          fontColor:'black'
      }
    },
    layout:{
        padding: {
            left: 50,
            right: 50,
            bottom:0,
            top: 50
        }
    },
    tooltips:{
        enabled:true
    },
    backgroundColor: false
  }
});
var c_type = false;
var first_data = [200000, 180000, 80000, 80000, 180000, 200000];
var second_data = [353060, 181045, 017595, 018072, 185162, 356519];
var third_data = [017595, 181045, 353060, 356519, 181045, 017595];
var fourth_data = [200000, 350000, 200000, 350000, 200000, 350000];
function mutateFig() {
  console.log("30000 milliseconds");
  if (Boolean(c_type) == false) {
      c_type = true;
      massPopChart.options.title.text="Second Title Input";
      massPopChart.data.datasets[1].data.forEach(elm => console.log(elm))
      console.log("")
      var n = 0;
      massPopChart.data.datasets[0].data= first_data;
      massPopChart.data.datasets[1].data= third_data;

      massPopChart.data.datasets[0].data.forEach(elm => console.log(elm))

      //massPopChart.data.datasets[0].data.forEach(elm => elm=5000)
      massPopChart.update();

  }
  else {
      massPopChart.options.title.text="Third Input";
      massPopChart.data.datasets[0].data= second_data;
      massPopChart.data.datasets[1].data= fourth_data;
      massPopChart.update();
      c_type = false;
  }
}
window.setInterval(mutateFig, 2000);