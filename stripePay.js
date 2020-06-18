window.onload = function () {
  // Your code, and code from Stripe's walkthrough goes here.
  var stripe = Stripe('pk_test_AJl3M91EcB8hQCmZWkzdOcMl');

  // [x] select an element and store it in a variable using javascript
  // [] add event listener on said variable
  
  let indy = document.querySelector('#indy')
  let choc = document.querySelector('#choc')
  

  function checkout(event) {
    stripe.redirectToCheckout({
          lineItems: [
            // Replace with the ID of your price
            {price: `price_${event.target.dataset.sku}`, quantity: 1}
          ],
          mode: 'payment',
          successUrl: 'http://localhost:8000/success.html',
          cancelUrl: 'http://localhost:8000/cancel.html',
        }).then(function (result) {
          console.log(result.error.message)
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
  }


  indy.addEventListener('click', checkout)
  choc.addEventListener('click', checkout)
  


};