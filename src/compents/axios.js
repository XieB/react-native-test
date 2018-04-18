fetch.get = function(url,config = {}){
    return fetch(url,config).then(res=>res.json());
}

fetch.post = function(url,data,config = {}){
    let defaultOptions = {
        method: 'POST',
        body : JSON.stringify(data),
    }
    let options = Object.assign(config,defaultOptions);
    return fetch(url,options).then(res=>res.json());
}


export function homeList(){
    return fetch.get('http://192.168.0.119/v1/Jokes/get');
}