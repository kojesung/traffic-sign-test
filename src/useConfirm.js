/**
 *
 * @param {string} message 확인을 위한 문구
 * @param {function} callback 경고창을 확인했을 때 작동시킬 함수
 * @param {function} rejection 경고창을 취소했을 때 작동시킬 함수
 * @returns
 */
const useConfirm = (message, callback, rejection) => {
    if (typeof callback !== 'function') {
        return;
    }
    if (typeof rejection !== 'function') {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        } else {
            rejection();
        }
    };
    return confirmAction;
};

export default useConfirm;
