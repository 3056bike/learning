console.log('start');
var text = document.getElementById('w3r');
var button = document.getElementById('button');

button.onclick = function getAttributes(){
    for (var i = text.length; i++; ) {
        var hreflang = text[i].getAttribute('hreflang', 'rel', 'target', 'href');
    }
    return value;
};
console.log('end');

/*
    for (var i = val.length; i++; ) {
        if (val === 'hreflang'){
            console.log(val[i].value);   
        } else if (val === 'target'){
            console.log(val[i].value);   
        } else if (val === 'href'){
            console.log(val[i].value);   
        } else {
            console.log('hello');
        }
        
    }
*/