function countDivs () {
  var count = 0;
  $("div").each(function (){
    if($(this).hasClass("cardfront1"))
    {
      count++;
    }
  });
  return count;

}



$(document).ready(function() {
  $('#1').click(function() {
    $(this).toggleClass("backcards");
    $(this).toggleClass("cardfront1");
    console.log(countDivs());
  });
  $('#2').click(function() {
    $(this).toggleClass("cardfront1");
    $(this).toggleClass("backcards");
    console.log(countDivs());
  });
  $('#3').click(function() {
    $(this).toggleClass("cardfront2");
    $(this).toggleClass("backcards");
  });
  $('#4').click(function() {
    $(this).toggleClass("cardfront2");
    $(this).toggleClass("backcards");
  });
  $('#5').click(function() {
    $(this).toggleClass("cardfront3");
    $(this).toggleClass("backcards");
  });
  $('#6').click(function() {
    $(this).toggleClass("cardfront3");
    $(this).toggleClass("backcards");
  });
  console.log(countDivs());
  disableClick();
});



function disableClick() {
  $('#1').click(false);
}
