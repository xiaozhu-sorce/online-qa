// const BASE = "http://10.135.158.45:8080"
const BASE = "/api"

function Fetch(url, opt = {}) {
    url = BASE + url
    opt.method = opt.method || 'GET';
    opt.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
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

const mRegister = (tel, pwd) => {
    return Fetch('/mRegister', {
      method: "POST",
      data: {
        tel,
        pwd
      }
    })
}

const mLogin = (tel, pwd) => {
    return Fetch('/mLogin', {
      method: "POST",
      data: {
        tel,
        pwd
      }
    })
}

const uRegister = (tel, pwd) => {
    return Fetch('/uRegister', {
      method: "POST",
      data: {
        tel,
        pwd
      }
    })
}

const uLogin = (tel, pwd) => {
    return Fetch('/uLogin', {
      method: "POST",
      data: {
        tel,
        pwd
      }
    })
}



const deleteUser = (id) => {
    return Fetch('/user', {
      method: "DELETE",
      data: {
        id
      }
    })
}

const getUserList = () => {
    return Fetch('/infos')
}

const searchUser = (nickname) => {
    return Fetch('/search',{
        method: "POST",
        data: {
            nickname
        }
    })
}

const getUserInfo = (id) => {
  return Fetch('/userinfo',{
    method: "POST",
    data: {
      id
    }
  })
}

const modifyInfo = (userInfo) => {
  return Fetch('/info',{
    method: "POST",
    data: userInfo
  })
}

const modifyPwd = (userInfo) => {
  return Fetch('/pwd',{
    method: "POST",
    data: userInfo
  })
}

const Server = {}

Server.mRegister = mRegister
Server.mLogin = mLogin
Server.uRegister = uRegister
Server.uLogin = uLogin
Server.getUserList = getUserList
Server.searchUser = searchUser
Server.deleteUser = deleteUser
Server.modifyInfo = modifyInfo
Server.getUserInfo = getUserInfo
Server.modifyPwd = modifyPwd

export default Server