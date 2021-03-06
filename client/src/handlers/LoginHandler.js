import urls from '../consts/urls';

const LoginHandler = (json, onFetched, onError)=>{

    fetch(urls.authenticate, {
        method:"POST",
        body: JSON.stringify(json),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
        })
        .then(res =>{

            if(res.status === 200){
                
                res.json().then(data=>{

                    onFetched(data)
                })
                
            
            }else if(res.status === 500){

                onError("خطای حاصل از نقص سرور");

            }else{

                res.json().then(res=> onError(res.error))
                .catch(err=>{ onError("خطای شبکه و اتصال به سرور") });
            }
        }).catch(err=>{

            onError("خطای شبکه و اتصال به سرور");
        });
}

export default LoginHandler;