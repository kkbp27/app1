import React from "react";
import { userContext } from "./context";
export default class Header2 extends React.Component{
    static contextType = userContext

    render(){
        let[user, setUser] = this.context
        const headStyle = {
            backgroundColor : '#cee',
            textAlign:'center',
            padding:10
        }
        const onclickSignout=(event)=>{
            event.preventDefault()
            setUser('')
        }
        const onclickSignin = (event) =>{
            event.preventDefault()
            setUser('Tom Jerry')
        }
        return(
            <div style={headStyle}>
                <a href=" ">Home</a>&nbsp;-&nbsp;
                <a href=" ">Product</a>&nbsp;-&nbsp;
                <a href=" ">Contact Us</a>&nbsp;-&nbsp;&nbsp;
                {
                    (user)
                    ? <span>[{user}&nbsp;:&nbsp;<a href=" "onClick={onclickSignout}>Signout</a>]</span>
                    : <span>[<a href=" " onClick={onclickSignin}>Signin</a>]</span>
                }
            </div>
        )
    }
}