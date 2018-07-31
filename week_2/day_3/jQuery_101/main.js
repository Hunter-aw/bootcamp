$('h1').css('color', 'blue')
$('.red-div').css('color', 'red')
$('ul li:nth-child(1)').css('color', 'green')
$('ul li:nth-child(2)').css('color', 'pink')
$('#brown-div').css('color', 'brown')


var clicked = function() {
    var myInput = $('#my-input').val()
    var newInput = $('.students').append('<li>' + myInput + '</li>')
    newInput
    newInput.bind() //I tried to add the .bind to no avail, leaving for now
}
$('button').click(clicked)

var removeLi = function () {
    $(this).remove()
}
$('li').click(removeLi);
