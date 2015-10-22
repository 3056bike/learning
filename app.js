console.log('start');
var text = document.getElementById('w3r');
var button = document.getElementById('button');
var values = [];

function findAttr(elem){
    for (var i = 0; i < elem.attributes.length; i++) {
        var attrib = elem.attributes[i];
        console.log(attrib.name + " = " + attrib.value);
    }

}

button.onclick = function showAttributes(){
    values = findAttr(text);
    
    console.log(values);
    
    
};   

/*
button.onclick = function getAttributes(){
     var u = text.href;
     console.log('The value of the href attribute of the link is : '+u);
     var v = text.hreflang;   
     console.log('The value of the hreflang attribute of the link is : '+v);
     var w = text.rel; 
      console.log('The value of the rel attribute of the link is : '+w);
     var x = text.target; 
      console.log('The value of the taget attribute of the link is : '+x);
     var y = text.type; 
      console.log('The value of the type attribute of the link is : '+y);  
};
*/
console.log('end');

