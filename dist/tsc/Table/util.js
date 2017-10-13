import axios from 'axios';
const instance = axios.create({
    timeout: 3000
});
export const request = (url, cb) => {
    instance.get(url, {
        // params: {
        //     ID: 12345
        // }
        withCredentials: true
    })
        .then(function (response) {
        cb(response.data);
    })
        .catch(function (error) {
        console.log(error);
    });
};
