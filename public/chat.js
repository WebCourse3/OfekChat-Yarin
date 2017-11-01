(function () {
    var socket = io();

    $('form').submit(function () {
        socket.emit('chat message',
            { name: $('#name').val(), message: $('#message').val() }
        );
        $('#message').val('');
        return false;
    });

    socket.on('chat message', function (msg) {
        $('#messages-list').append($('<li>').text(msg.name + ': ' + msg.message));
    });
})();