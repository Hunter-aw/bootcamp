// const sauceType = $('p:contains("Brisket")').data().sauce;

// alert(sauceType);

// var callbackFunc = function () {
//     console.log(this);
//   }
  
//   var button = {
//     hey: function (event, func) {
//       console.log(event)
  
//       //Adds 'func' as one of this object's properties
//       this.func = func;
  
//       //Invokes func
//       this.func();
//     }
//   }
  
//   button.hey('click', callbackFunc);

var beerList = $('ul')
function clickRemove() {
    $(this).remove()
}
beerList.children().click(clickRemove)

$('button').click(function () {
    var name = $('#my-input').val();
    $('ul').append('<li>' + name + '</li>');
    // bindEvents();
  });
  
//   var bindEvents = function () {
//     $('li').off()
//     $('li').click(function () {
//       console.log("invoked")
//       $(this).remove();
//     });
//   }
// bindEvents() 

$('ul').on('click', 'li', function () {
    $(this).remove();
  });

$('button').on('click', function() {
    var relevantInput = $(this).closest("div").find("input").val();
    alert(relevantInput)
  })