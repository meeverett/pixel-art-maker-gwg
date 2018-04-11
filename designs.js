var color = $("#colorPicker").val();// Select color input
var size = $("#sizePicker");// Select size input

// When size is submitted by the user, call makeGrid()

size.submit(function makeGrid(event) {

  $('table tr').remove();
  
  var rows=$('#inputHeight').val();
  var cells=$('#inputWeight').val();
  
  for (var i = 1; i <= rows; i++) {
    $('table').append("<tr></tr>");
    for (var j = 1; j <= cells; j++) {
      $( 'tr:last' ).append("<td></td>");
      $('td').attr('class','pixel');
    }
  }
  
  event.preventDefault();
  
});

// Allows user to select color
$("#pixelCanvas").on('click','.pixel',function(){
  $( this ).css("background-color",color);
});
