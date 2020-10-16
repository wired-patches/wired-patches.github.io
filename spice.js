
// nav sticky
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

// scroll animate in file
$(document).ready(function(){
  $("a").on('click', function(event){
    if (this.hash !==""){
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash=hash;
      }
      )
    }
  });
});


// Withing Stripe

// var stripe = Stripe()


// // STRIPE

// const stripe = require('stripe')('	pk_test_51HbbcRCFtyo6pYI00Oj6G1ewHrsYcslzTF7Tsa2cWD1MWg7BF5RtsaecKOdjPJ7wCr6blpT4Eu1t5nH7mrxhO0x600Qam897SQ');
// const DOM = 'https://wired-patches.github.io/st.html';
// const express = require('express');
// const app = express()
// app.use(express.static('.'));

// app.post('/create-session', async(req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Attachments',
//           },
//           unit_amount: 1,
//         },
//         qualtity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: '${DOM}/success.html',
//     cancel_url: '${DOM}/cancel.html',
//   });
//   res.json({ id: session.id });
// });

// app.listen(4242, () => console.log('Running on port 4242'));