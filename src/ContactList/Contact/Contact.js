import React from "react";

const Contact = (props) => {
    let avatarSrc = "placeholder.png"
    if (props.avatar) {
            avatarSrc = localStorage.getItem("avatar-" + props.id);
    } 
    let avatar = <img src={avatarSrc} alt="user avatar" className="rounded img-fluid" style={{width: "50%"}}/>
    return (
        <tr className="contact">
            <td> {avatar} </td>
            <td> {props.lastName} </td>
            <td> {props.name} </td>
            <td> {props.email} </td>
            <td> {props.phone} </td>
            <td> 
                <div className="btn-group">
                    <button onClick={props.update} className="btn btn-primary">Update </button>
                    <button onClick={props.delete} className="btn btn-danger">Delete</button>
                </div>
            </td>
        </tr>
    );
}

export default Contact;