function paypal() {
  // create accessToken using your clientID and clientSecret
  // for the full stack example, please see the Standard Integration guide
  // https://developer.paypal.com/docs/multiparty/checkout/standard/integrate/

  const accessToken = "REPLACE_WITH_YOUR_ACCESS_TOKEN";
  
  return fetch ("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ${accessToken}',
    },
    body: JSON.stringify({
      "purchase_units": [
        {
          "amount": {
            "currency_code": "USD",
            "value": this.price
          },
          "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b"
        }
      ],
      "intent": "CAPTURE",
      "payment_source": {
        "paypal": {
          "experience_context": {
            "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
            "payment_method_selected": "PAYPAL",
            "brand_name": "EXAMPLE INC",
            "locale": "en-US",
            "landing_page": "LOGIN",
            "shipping_preference": "SET_PROVIDED_ADDRESS",
            "user_action": "PAY_NOW",
            "return_url": this.return_url,
            "cancel_url": this.cancel_url
          }
        }
      }
    })
  })
  .then((response) => response.json());
}
