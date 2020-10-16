var miniwirepath0 = anime.path('#miniringpath1');
var minianimePath0 = anime({
  loop: true,
  autoplay: true,
  targets: ['#ele0_0', '#ele0_1','#ele0_2', '#ele0_3'],
  translateX: miniwirepath0('x'),
  translateY: miniwirepath0('y'),
  rotate: miniwirepath0('angle'),
  duration: 30000,
  delay: anime.stagger(500),
});

var miniwirepath1 = anime.path('#miniringpath3');
var minianimePath1 = anime.timeline({
  loop: true,
  easing: 'linear',
  autoplay: true,
});
const runningAnim1 = {
  targets: ['#ele1_0', '#ele1_1','#ele1_2', '#ele1_3'],
  keyframes: [
    { opacity: 1, duration: 0.001 },
    {
      translateX: miniwirepath1('x'),
      translateY: miniwirepath1('y'),
      rotate: miniwirepath1('angle'),
      duration: 10000,
      delay: anime.stagger(500),
    },
  ],
};
const fadingAnim1 ={
  targets: ['#ele1_0', '#ele1_1','#ele1_2', '#ele1_3'],
  opacity: [
    { value: 0.5, duration: 600 },
    { value: 0.7, duration: 200 },
    { value: 0.3, duration: 400 },
    { value: 0.8, duration: 80 },
    { value: 0, duration: 100 },
    { value: 0, duration: 500 },
  ],
  delay: anime.stagger(500),
  complete: function() {
    anime({
      targets: ['#ele1_0', '#ele1_1','#ele1_2', '#ele1_3'],
      opacity: 0,
    })
  }
};
minianimePath1
.add(runningAnim1)
// .add(fadingAnim1, '-=3000');
// minianimePath1.play();

// Wire Color
$(".pathcolor").hover(function(){
  $(this).data("hover", true)
  if ($(this).data("clicked")) {
    $(this).css("stroke", "purple");    // hover over clicked
  }
  else {
    $(this).css("stroke", "rgba(113, 187, 255, 0.90");      // hover over not clicked
  }
  }, function(){
    $(this).data("hover", false)
      if ($(this).data("clicked")) {
        $(this).css("stroke", "#ff105e");   // not hover and clicked
      }
      else {
        $(this).css("stroke", "grey");       // not hover and not clicked
      }
});
$(".pathcolor").click(function(){
  if ($(this).data("clicked")){
    $(this).css("stroke", "white");
    $(this).data("clicked", false);
  }
  else {
    $(this).data("clicked", true);
  }
});

// pam3 chart
let myChart = document.getElementById('pam3-signal').getContext('2d');
color_choice = ['rgba(122,141,181, 0.5)', 'rgba(128,180,158, 0.5)', 'rgba(182,124,124, 0.5)', 'rgba(124, 169, 182, 1)'];
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
Chart.defaults.global.backgroundColor = "rgba(122,141,181, 0.5)";
var top_line = [8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000];
var mid_line = [4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000];
var bottom_line = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var first_data = [7500, 8000, 7500, 6000, 4500, 4000, 4500, 6000, 7500, 8000, 7500];
var first_data_ = [4500, 4000, 4500, 6000, 7500, 8000, 7500, 6000, 4500, 4000, 4500];
var first_data_0 = [];
var third_data = [500, 2000, 3500, 4000, 3500, 2000, 500, 0, 500, 2000, 3500];
var third_data_0 = [];
var third_data_ = [3500, 2000, 500, 0, 500, 2000, 3500, 4000, 3500, 2000, 500];
var second_data = [1200, 2000, 1800, 2000, 1800, 1200, 2000];

let massPopChart = new Chart(myChart, {
  type: 'line',
  backgroundColor: "yellow",
  data:{
    labels: ['1', "2", '3', '4', "5", "6", "7", "8", "9", "10", "11"],
    datasets: [{
        label: 'Volts',
        data: top_line,
        borderWidth: 2,
        borderColor: color_choice[0],
        hoverBorderWidth: 5,
        hoverBorderColor: 'white',
        fill:false,
        radius: 0,
      },{
        data: bottom_line,
        borderWidth: 2,
        borderColor: color_choice[0],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        radius: 0,
      },{
        data: mid_line,
        borderWidth: 2,
        borderColor: color_choice[0],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        radius: 0,
      },{
        data: third_data_0,
        borderWidth: 2,
        borderColor: color_choice[1],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        radius: 0,
      },{
        data: third_data_,
        borderWidth: 2,
        borderColor: color_choice[3],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        // radius: 0,
      },{
        data: third_data,
        borderWidth: 2,
        borderColor: color_choice[1],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        // radius: 0,
      },{
        data: first_data,
        borderWidth: 2,
        borderColor: color_choice[3],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        // radius: 0,
      },{
        data: first_data_0,
        borderWidth: 2,
        borderColor: color_choice[2],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        // radius: 0,
      },{
        label: 'Volts',
        data: first_data_,
        borderWidth: 2,
        borderColor: color_choice[2],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        // radius: 0,
      }]
    },
  options:{

    title:{
      display: true,
      text: "PAM3",
      fontSize: 30,
      fontStyle: 'bold',
      padding: 25
    },
    legend:{
      display: false,
      position:'bottom',
      labels:{
        fontColor:'black'
      }
    },
    layout:{
      padding: {
        left: 50,
        right: 100,
        bottom:50,
        top: 50
      },
      margin: {
        left: 20,
        right:20,
      }
    },
    tooltips:{
      enabled:true
    },
    // backgroundColor: false
    backgroundColor: 'rgba(122,141,181, 0.5)'
  },
  backgroundColor: 'rgba(122,141,181, 0.5)'
});

let animChart = document.getElementById('anim-signal').getContext('2d');
// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 15;
// Chart.defaults.global.defaultFontColor = '#777';
let animatedChart = new Chart(animChart, {
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
      borderColor: 'rgba(170, 115, 14, 0.8)',
      hoverBorderWidth: 5,
      hoverBorderColor: '#000',
      radius: 0,
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
      borderColor: 'rgba(16, 193, 185, 0.7)',
      hoverBorderWidth: 5,
      hoverBorderColor: '#000',
      radius: 0,
      backgroundColor: 'rgba(7, 85, 81, 0.58)' 
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
            top: 50,
        }
    },
    tooltips:{
        enabled:true
    },
    backgroundColor: false
  }
});
var c_type = false;
var data1 = [200000, 180000, 80000, 80000, 180000, 200000];
var data2 = [353060, 181045, 017595, 018072, 185162, 356519];
var data3 = [117595, 281045, 353060, 356519, 81045, 217595];
var data4 = [200000, 350000, 200000, 350000, 200000, 350000];

function mutateFig() {
  console.log("30000 milliseconds");
  if (Boolean(c_type) == false) {
    c_type = true;
    animatedChart.options.title.text="Second Title Input";
    animatedChart.data.datasets[0].data= data1;
    animatedChart.data.datasets[1].data= data2;

    animatedChart.update();
  }
  else {
    animatedChart.options.title.text="Third Input";
    animatedChart.data.datasets[0].data= data3;
    animatedChart.data.datasets[1].data= data4;
    animatedChart.update();
    c_type = false;
  }
}
window.setInterval(mutateFig, 3000);

// pam3-alternative chart
let pam3Alt = document.getElementById('pam3Alternative').getContext('2d');
var pam3_original_1 = [4500,6000, ...first_data]
var pam3_original_2 = [7500,6000, ...first_data_]
let pam3_vs = new Chart(pam3Alt, {
  type: 'line',
  data:{
    labels: ['1', "2", '3', '4', "5", "6", "7", "8", "9", "10", "11"],
    datasets: [{
        label: 'Volts',
        data: top_line,
        borderWidth: 2,
        borderColor: color_choice[0],
        hoverBorderWidth: 5,
        hoverBorderColor: 'white',
        fill:false,
        radius: 0,
      },{
        data: bottom_line,
        borderWidth: 2,
        borderColor: color_choice[0],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        radius: 0,
      },{
        data: mid_line,
        borderWidth: 2,
        borderColor: color_choice[0],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        radius: 0,
      },
      {
        data: first_data,
        borderWidth: 2,
        borderColor: color_choice[3],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        radius: 0,
      },
      {
        data: first_data_,
        borderWidth: 2,
        borderColor: color_choice[3],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        radius: 0,
      },
      {
        data: third_data,
        borderWidth: 2,
        borderColor: color_choice[1],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        radius: 0,
      },
      {
        data: third_data_,
        borderWidth: 2,
        borderColor: color_choice[3],
        hoverBorderWidth: 5,
        hoverBorderColor: '#000',
        fill:false,
        radius: 0,
      }]
    },
  options:{
    title:{
      display: true,
      text: "PAM3-VS",
      fontSize: 30,
      fontStyle: 'bold',
      padding: 25
    },
    legend:{
      display: false,
      position:'bottom',
      labels:{
        fontColor:'black'
      }
    },
    layout:{
      padding: {
        left: 50,
        right: 100,
        bottom:50,
        top: 50
      },
      margin: {
        left: 20,
        right:20,
      }
    },
    tooltips:{
      enabled:true
    },
    backgroundColor: 'rgba(122,141,181, 0.5)'
  },
  backgroundColor: 'rgba(122,141,181, 0.5)'
});
pam3_alt = false;
function mutatePAM3() {
  console.log("30000 milliseconds");
  if (Boolean(pam3_alt) == false) {
    pam3_alt = true;
    pam3_vs.options.title.text="PAM3";
    pam3_vs.data.datasets[3].data= pam3_original_1;
    pam3_vs.data.datasets[4].data= pam3_original_2;
    pam3_vs.update();
  }
  else {
    pam3_vs.options.title.text="PAM3 Alternative";
    pam3_vs.data.datasets[3].data= first_data;
    pam3_vs.data.datasets[4].data= first_data_;
    pam3_vs.update();
    pam3_alt = false;
  }
}
window.setInterval(mutatePAM3, 3000);