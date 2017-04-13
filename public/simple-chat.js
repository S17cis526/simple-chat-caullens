var socket = io();

socket.on('welcome', function(data) {
  $('<li>').text(data.message).appendTo('#message-log');
});

socket.on('message', function(message) {
  var li = $('<li>').css('color', message.color).appendTo('#message-log');
  $('<strong>')
    .text(message.user)
    .appendTo(li)
    .css('padding-right', '1rem');
  $('<span>')
    .text(message.text)
    .appendTo(li);
});

$('#chat-send').on('click', function() {
  var text = $('#chat-text').val();
  socket.emit('message', {message: text});
  $('#chat-text').val('');
});

$('#color').on('change', function() {
  var color = $(this).val();
  socket.emit('color', color);
});
