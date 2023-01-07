import { nanoid } from 'nanoid'
export const getnanoid=()=>{
    let nanoid_token=localStorage.getItem('nanoidtotaken')
    if(!nanoid_token){
        nanoid_token=nanoid()
        localStorage.setItem('nanoidtotaken',nanoid_token)
    }
    return nanoid_token
}