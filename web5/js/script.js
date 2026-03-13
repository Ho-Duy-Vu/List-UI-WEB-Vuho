function toggleVideo() {
    var trailer = document.querySelector('.trailer');
    var video = trailer.querySelector('video');
    trailer.classList.toggle('active');
    if (trailer.classList.contains('active')) {
        video.play();
    } else {
        video.pause();
        video.currentTime = 0;
    }
}

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = banner.querySelectorAll('.content');
    banner.style.background = `url("../images/movies/${bg}") no-repeat center center`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundRepeat = 'no-repeat';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}