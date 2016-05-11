$(document).ready(function(){
  //Variables containing HTML elements used for lightbox.
  var $lightbox = $('<div id="lightbox"></div>');
  var $image = $("<img>");
  var $caption = $("<p></p>");
  //Adds the image and caption variables to the lightbox variable. 
  $lightbox.append($image);
  $lightbox.append($caption);
  //Adds the lightbox variable to the body. 
  $("body").append($lightbox);
//Runs the function below when an anchor with the ID or 'gallery' is clicked. 
$("#gallery a").click(function(event){
  //Prevents default event upon clickin an anchor, which is leaving the page in this case. 
  event.preventDefault();
  //Stores a variable which holds 'this' href attribute. In this case, a link to the image.
  var imageLocation = $(this).attr("href");
//Sets the 'src' attribute of the image variable to the contents of imageLocation, a link to the image in this case.
  $image.attr("src", imageLocation);
//Shows the lightbox
  $lightbox.show();
  
//Stores a variable holding the contents of the 'title' attribute from the first child of 'this' that is an image.
  var captionText = $(this).children("img").attr("title");
//Sets the text of the $caption variable to that of $captionText
  $caption.text(captionText);
   });
//Hide's the lightbox if it itself is clicked, allowing the user to click other pictures. 
$lightbox.click(function(){
  $lightbox.hide();
    });

});  