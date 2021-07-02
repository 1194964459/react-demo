const Jsonp = ({ url, params, callbackName })=>{

    return new Promise((resolve, reject)=>{

        const generateUrl = ()=>{
            let dataSrc = ''
            for(let key in params){
                dataSrc += `${key}=${params[key]}&`
            }
            dataSrc += `callbackName=${callbackName}`
            
            return `${url}?${dataSrc}`
        }

        let script = document.createElement("script")
        script.src = generateUrl(url)
        document.body.appendChild(script)

        // window[callbackName] 使用
        window[`${callbackName}`] = function(data){
            resolve(data)
            document.body.removeChild(script)
        }
    })
}

Jsonp({
    url: 'baidu.com',
    params: {
        test: 'bb'
    },
    callbackName: 'show'
}).then(
    console.log(data)
)
