$(document).ready(function() {
    $('.play-btn').on('click', function() {
        const item = $(this).closest('.meditation-item');
        const type = item.data('type');
        const url = item.data('url');

        if (type === 'audio') {
            $('#video-player').hide();
            $('#audio-player').show();
            $('#audio-element').attr('src', url)[0].play();
        } else if (type === 'video') {
            $('#audio-player').hide();
            $('#video-player').show();
            $('#video-element').attr('src', url)[0].play();
        }

        $('#player-container').fadeIn();
    });

    $('#close-player').on('click', function() {
        $('#player-container').fadeOut();
        $('#audio-element')[0].pause();
        $('#video-element')[0].pause();
    });
});
