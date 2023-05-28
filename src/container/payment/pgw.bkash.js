//import api from 'api'
import axios from 'axios'

axios.create({
  baseURL: 'https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout',
  accept: 'application/json',
  'content-type': 'application/json',
  username: process.env.REACT_APP_BKASH_PGW_USERNAME,
  password: process.env.REACT_APP_BKASH_PGW_PASSWORD
})

// const sdk = api('@bkash/v1.2.0-beta#1mld74kq6voepa')

// export const grantTokenRequest = () => {
//   sdk
//     .getTokenUsingPOST(
//       {
//         app_key: process.env.REACT_APP_BKASH_PGW_API_KEY,
//         app_secret: process.env.REACT_APP_BKASH_PGW_SECRET_KEY
//       },
//       {
//         username: process.env.REACT_APP_BKASH_PGW_USERNAME,
//         password: process.env.REACT_APP_BKASH_PGW_PASSWORD
//       }
//     )
//     .then(({ data }) => console.log(data))
//     .catch((err) => console.error(err))
// }

export const grantTokenRequestPromise = new Promise((myResolve, myReject) => {
  const data = {
    app_key: process.env.REACT_APP_BKASH_PGW_API_KEY,
    app_secret: process.env.REACT_APP_BKASH_PGW_SECRET_KEY
  }
  axios
    .post('/token/grant', data)
    .then((data) => {
      console.log(data)
      myResolve(data)
    })
    .catch((err) => {
      console.log(err)
      myReject(err)
    })
})
