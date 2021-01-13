console.log('link');

$('#submit').click(() => {
    $.ajax({
        type: 'POST',
        url: 'https://script.google.com/macros/s/AKfycbxfBDVYDvJTwxujOufq3c_xktwDi38KMgEpOCFlYmYztGw2-SIQ8GJplQ/exec',
        data: {
            'username': $('#username').val(),
            'phone': $('#phone').val(),
            'time': $('#time').val()
        },
        success: function(res) {
            if (res === 'success') {
                alert('add data success');
            }
        }
    });
});