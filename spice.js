
// file controls
// and more
window.onscroll = function() {apply_sticky()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function apply_sticky() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  }
  else {
    navbar.classList.remove("sticky");
  };
};

// mini e animated diagram

var miniwirepath1_0 = anime.path('#miniringpath3');
var minianimePath1_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim = {
     targets: ['#ele1_0', '#ele1_1'],
     keyframes: [
         { opacity: 1, duration: 0.001 },
         {
             translateX: miniwirepath1_0('x'),
             translateY: miniwirepath1_0('y'),
             rotate: miniwirepath1_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
};

const fadingAnim ={
    targets: ['#ele1_0', '#ele1_1'],
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
              targets: ['#ele1_0', '#ele1_1'],
              opacity: 0,
          })
    }
};
minianimePath1_0
.add(runningAnim)
.add(fadingAnim, '-=3000');
minianimePath1_0.play();

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
// var first_data_ = [8000, 4500, 4000, 4500, 7500, 8000, 7500, 4500, 4000, 4500, 8000];
var first_data_0 = [];
// var first_data_0 = [8000, 500, 0, 500, 7500, 8000, 7500, 500, 0, 500, 8000];
var third_data = [500, 2000, 3500, 4000, 3500, 2000, 500, 0, 500, 2000, 3500];
var third_data_0 = [];
var third_data_ = [3500, 2000, 500, 0, 500, 2000, 3500, 4000, 3500, 2000, 500];
// var third_data_ = [4000, 500, 0, 500, 3500, 4000, 3500, 500, 0, 500, 3500];
// var third_data_ = [4000, 500, 0, 500, 3500, 4000, 3500, 500, 0, 500, 3500];
// var third_data_0 = [0, 7500, 8000, 7500, 500, 0, 500, 7500, 8000, 7500, 0];
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
