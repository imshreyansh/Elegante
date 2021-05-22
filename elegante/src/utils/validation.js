export const validation = (e,fieldName,type,error)=>{
    var emailVer = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var value, valueE, valueD = {}
if(type === 'text'){
    value={
        [fieldName]:e.target.value
    }
    if(e.target.value === ''){
        valueE={
            [fieldName+'E']:error ? error[0] || 'This field is required' : 'This field is required'
        }
    }else{
        valueE={
            [fieldName+'E']:''
        }
    }
}
    else if(type==='email'){
        value={
            [fieldName]:e.target.value
        }
        if(e.target.value === ''){
            valueE={
                [fieldName+'E']:error ? error[0] || 'This field is required' : 'This field is required'
            }
        }else if(!emailVer.test(e.target.value)){
            valueE={
                [fieldName+'E']:error ? error[1] || 'Email is incorrect' : 'Email is incorrect'
            }
        }else{
            valueE={
                [fieldName+'E']:''
            }
        }
    }else if (type === 'mobile') {
        value = {
          [fieldName]: e.target.value
        }
         if(e.target.value==='') {
          valueE = {
            [fieldName + 'E']: error ? error[0] || 'This field is required' : 'This field is required'
          }
        }else{
            valueE={
                [fieldName+'E']:''
            }
        }
    }
    

return {...value,...valueE,...valueD}
}