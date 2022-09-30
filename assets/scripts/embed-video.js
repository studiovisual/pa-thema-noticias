import YTPlayer from 'yt-player';

export default class EmbedVideo {

    constructor(element) {
        this.element = element;

        if(!this.element?.dataset.unplayable)
            this.play();
    }

    play() {
        let videoID = '';
        this.element.removeEventListener('click', () => this.play());
        this.element?.querySelector('.card__play').remove();

        if(this.element?.dataset.video.startsWith('https://youtu.be'))
            videoID = this.element.dataset.video.substring(this.element.dataset.video.lastIndexOf('/') + 1);
        else {
            let params = {};

            this.element?.dataset.video.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value) => params[key] = value);
            videoID = params.v;
        }

        if(videoID == '')
            return;

        const player = new YTPlayer(this.element.querySelector('img'));
        player.load(videoID, true);

        player.on('unstarted', () => {
            this.video = this.element.querySelector('iframe');

            this.element.querySelector('figure')?.insertAdjacentHTML('beforeend', '<em class="floating-video__close cursor-pointer position-fixed transition-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#000000" d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29ZM19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"/></svg></em>');
        });
    }
}
