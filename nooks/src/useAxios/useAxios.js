import axios from 'axios'
import { useEffect, useState } from 'react';

export const useAxios = (opts, axiosInstance = axios) => {
  const [trigger, setTrigger] = useState(0);
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  })
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now())
  };

  useEffect(() => {
    if (!opts.url) return;
    axiosInstance(opts).then(res => {
      setState({
        ...state,
        loading: false,
        data: res
      })
    }).catch(error => {
      setState({ ...state, loading: false, error })
    })
  }, [trigger])

  return {...state, refetch };
}