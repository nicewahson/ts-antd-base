import axios from 'axios'

const instance = axios.create({
    timeout: 3000
})

export const request = (cb:Function) => {
    instance.get('http://mactivity-server.test.sanqimei.com/exchange/listPageExchangeCode?pageNumber=1&pageSize=10',
        {
            // params: {
            //     ID: 12345
            // }
            withCredentials: true
        })
        .then(function (response) {
            cb(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}