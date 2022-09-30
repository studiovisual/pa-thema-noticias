import 'slim-js/dist/index';
import 'slim-js/dist/directives/all';
import './load-more';

document.addEventListener("DOMContentLoaded", function() {
    embedVideo();
});

function embedVideo() {
    const element = document.getElementById('embed-video');
    element?.addEventListener('click', async() => {
        let EmbedVideo = await import('./embed-video');
        new EmbedVideo.default(element);
    });
}
