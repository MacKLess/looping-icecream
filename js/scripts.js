$(document).ready(function(){
  var flavors = ["chocolate" , "vanilla" , "licorice" , "rockyroad" , "tuttifrutti", "bubblegum"]
  flavors.forEach(function(flavor){
    $("#1").text(flavors[0]);
    $("#2").text(flavors[1]);
    $("#3").text(flavors[2]);
    $("#4").text(flavors[3]);
    $("#5").text(flavors[4]);
    $("#6").text(flavors[5]);
  });
});
