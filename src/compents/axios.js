let baseUrl = 'http://api.jokes.etab.top/v1';

function dealUrl(url){
    return baseUrl + url;
}
fetch.get = function(url,config = {}){
    return fetch(dealUrl(url),config).then(res=>res.json());
}

fetch.post = function(url,data,config = {}){
    let defaultOptions = {
        method: 'POST',
        body : JSON.stringify(data),
    }
    let options = Object.assign(config,defaultOptions);
    return fetch(dealUrl(url),options).then(res=>res.json());
}


export function homeList(){
    return fetch.get('/Jokes/lists');
}