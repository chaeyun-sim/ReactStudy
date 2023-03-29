import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  }

  useEffect(() => {
    if (typeof onBefore !== 'function') {
      return;
    }

    document.addEventListener('mouseleave', handle);
    // mousemove로 바꾸면 마우스가 움직일때마다 에러 발생할 수 있음.
    return () => document.removeEventListener('mouseleave', handle);  // 화면을 벗어나면 에러 발생!
  }, [])
};