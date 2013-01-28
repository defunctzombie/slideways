var slideways = require('slideways');

var div = document.createElement('div');
div.innerHTML = '<form><div id="slider"></div>\
<input type="text" id="result" size="3"></form>';

var slider = slideways({ min: 2, max: 10, snap: 0.1, init: 5 });
slider.appendTo(div.querySelector('#slider'));

var result = div.querySelector('#result');
slider.on('value', function (value) {
    result.value = value;
});

div // =>

