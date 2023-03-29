export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = '';
  }
  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener)
  }

  // beforeunload : 작성 중에 저장하지 않고 나가려고 할 때 정말 나가시겠습니까? (저장안됩니다) 가 뜨는 것
  const disablePrevent = () => {
    window.addEventListener('beforeunload', listener)
  }

  return { enablePrevent, disablePrevent }
};