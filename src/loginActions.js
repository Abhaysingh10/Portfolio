
import axiosInstance from './AxiosInstance/axiosInstance'

export const loginActions = data => {
  return (dispatch, getState) => {
    axiosInstance.post('login', data).then(({ data }) => {
      console.log(data)
      console.log('getState', getState())
    }).catch((err)=>{
        console.log(err);
    })
  }
}
