$('#background-img').on('load', function() {
  console.log($(this).attr('src'));
  var body = $('body');
  var imageURL = $(this).attr('src');
  body.css('background-image', 'url(' + imageURL + ')');
});
