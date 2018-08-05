$('h1').css('color', 'blue')
$('.red-div').css('color', 'red')
$('ul li:nth-child(1)').css('color', 'green')
$('ul li:nth-child(2)').css('color', 'pink')
$('#brown-div').css('color', 'brown')


var removeLi = function () {
    $(this).remove()
}

var clicked = function() {
    var myInput = $('#my-input').val()
    var newLi = $('<li>')
    newLi.text(myInput)
    newLi.click(removeLi)
    var newInput = $('.students').append(newLi)
    // newInput.bind() //I tried to add the .bind to no avail, leaving for now
}
$('button').click(clicked)

$('li').click(removeLi);
