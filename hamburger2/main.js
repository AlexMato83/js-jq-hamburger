var burgerino = $(".fas.fa-bars");
var crocetta = $(".fas.fa-times");
burgerino.click(
  function(){
    burgerino.hide();
    $("#hamburger-menu").show();
  }
)
crocetta.click(
  function(){
    burgerino.show();
    $("#hamburger-menu").hide();
  }
)
