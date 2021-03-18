import axios from 'axios'


export const sendMessage = async (obj) => {

   return await axios.post('https://safe-fjord-00802.herokuapp.com/sendMessage', obj)
       .then(res => res.data)
}