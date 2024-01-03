const BASE = "/api"

function Fetch(url, opt = {}) {
    url = BASE + url
    opt.method = opt.method || 'GET';
    opt.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    if (opt.body) {
        opt.body = JSON.stringify(opt.body)
    }
    opt.body = JSON.stringify(opt.data) || null;
    if (opt.formdata) {
        opt.body = opt.formdata;
    }
    return fetch(url, opt)
        .then(response => {
            if (response.ok) {
                return response.json().then(res => {
                    return res;
                });
            } else {
                return response.json().then(res => {
                    return new Promise((_, reject) => {
                        reject(res);
                    });
                });
            }
        })
        .catch(e => {
            console.log(`服务端错误：${e.message}`)
            throw e;
        })
}
