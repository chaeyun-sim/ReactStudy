export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.premission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, options)
        } else {
          return;
        }
      })
    } else {
      new Notification(title, options)
    }
  };
  return fireNotif;
};

