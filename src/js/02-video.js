import { save, load } from './storage';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const setTimeOnload = () => {
    const currentTime = load('videoplayer-current-time');
    player.setCurrentTime(currentTime.seconds).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                console.log('Range error');
                break;

            default:
                console.log('Unknown error');
                break;
        }
    });
}

const onTimeUpdate = (data) => {
    save('videoplayer-current-time', data);
};

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 3000));
window.addEventListener('load', setTimeOnload);