$('p').text('Hello World !');
$('a').attr("href", "https://developers.google.com/speed/libraries#jquery").text('click me');
$('#div1').height('40px').width('40px');

let divs = $('#monDiv')
divs.eq(1).text('deuxième div');

alert("En JS, les tableaux commence avec l'index " + divs.index()).width('50px').height('50px').border('1px solid black');