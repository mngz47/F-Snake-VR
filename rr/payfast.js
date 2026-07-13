var price = 100;
var return_url = location.hostname;
var cancel_url = location.hostname;
var product = "Flower Snake Challenge";

function payfast(){

const obj = { 
            merchant_id: "12647788" ,
             merchant_key: "nliu1lbt07r75" ,
               return_url: return_url ,
               cancel_url: cancel_url ,
                amount: price ,
               item_name: product ,
               email_confirmation: "1" 
            };

const request = new Request("https://www.payfast.co.za/eng/process", {
  method: "POST",
  body: JSON.stringify(obj),
});

request.json().then((data) => {
  // do something with the data sent in the request
});
}

function formData(name,value){
var field = ne("input");
field.name = name;
field.value = value;
return field;
}

function payfast2(){ 
            var form = ne("form");
            form.action = "https://www.payfast.co.za/eng/process";
            form.method = "post";
                        form.appendChild(formData("merchant_id","12647788"));
                        form.appendChild(formData("merchant_key","nliu1lbt07r75"));
                        form.appendChild(formData("return_url",return_url));
                        form.appendChild(formData("cancel_url",cancel_url));
                        form.appendChild(formData("amount",price));
                        form.appendChild(formData("item_name",product));
                        form.appendChild(formData("email_confirmation","1"));    
            document.body.appendChild(form);
            form.submit();
}
