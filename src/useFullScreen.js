import { useRef } from 'react';

const useFullScreen = () => {
    const element = useRef();
    const toFullScreen = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen().catch((err) => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            } else if (element.current.mozRequestFullScreen) {
                // Firefox
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                // Chrome, Safari, Opera
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                // IE/Edge
                element.current.msRequestFullscreen();
            } else {
                console.log('fullScreen함수가 지원되지 않는 브라우저');
            }
        }
    };
    const toSmallScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            // Chrome, Safari, Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            // IE/Edge
            document.msExitFullscreen();
        }
    };
    return { fullScreenElement: element, toFullScreen, toSmallScreen };
};

export default useFullScreen;
