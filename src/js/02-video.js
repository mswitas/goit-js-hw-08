import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

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