## Import JS


## Data
var test_json = {
    "Data": [
    { "Name":"Amit Goenka" ,
    "Major":"Physics" }, 
    { "Name":"Smita Pallod" ,
    "Major":"Chemistry" }, 
    { "Name":"Rajeev Sen" , 
    "Major":"Mathematics" }
 ]
}
  
## parse data

var cities = [];

var $this, input, text, obj;
$('.line').each(function() { 
   $this = $(this);
   $input = $this.find("input");
   text = $this.text();
   obj = {};
   obj[text] = $input.val();
   cities.push(obj);
});

users[0].cities = cities;
