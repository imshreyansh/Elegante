export const getTime = (data)=>{
   const time= `${new Date(data).getHours()}:${new Date(data).getMinutes()}`
   return time
}

export const getDate = (data)=>{
    const date= `${new Date(data).getDate()}/${new Date(data).getMonth()+1}/${new Date(data).getFullYear()}`
    return date
 }