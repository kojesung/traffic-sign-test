const useNotification = (title, option) => {
    if (!('Notification' in window)) {
        //Notification이 변수가 아니라 속성이름임을 확실히하기 위해서 문자열 처리해야함
        //window 객체에 "Notification" 속성이 있는지 확인한다는 뜻
        return;
    }
    const fireNotif = () => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification(title, option);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, option);
            console.log(title);
        }
    };
    return fireNotif;
};

export default useNotification;
