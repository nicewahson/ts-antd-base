export const request = (url: string, cb: Function) => {
    fetch(url, {
        // params: {
        //     ID: 12345
        // }
        credentials: 'include'
    })
        .then(function (response) {
            return response.json()
        }).then(function (json) {
        cb(json)
    })
        .catch(function (error) {
            console.error(error);
        });
}