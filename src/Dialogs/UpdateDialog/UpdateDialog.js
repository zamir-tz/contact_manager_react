import React from 'react';

const UpdateDialog = (props) => {
    return (
        <div className="dil">
                <form onSubmit={(event) => props.handleUpdate(event, props.toUpdate.id)} className="dil-main form">    
                <table className="table">
                    <tbody>
                    <tr>
                                    <td>
                                        <label>Avatar: </label>
                                    </td>
                                    <td>
                                        <div htmlFor="avatar" className="avatar-upload btn btn-primary">
                                            Update avatar
                                            <input type="file" name="avatar" className="avatar-upload"/>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="lastName" >Last name: </label>
                                        </td>
                                        <td>
                                        <input type="text" name="lastName" onChange={e => {props.change("lastName", e.target.value)}} value={props.toUpdate.lastName} required/>
                                        </td>
                                    </tr>                            
                                    <tr>
                                        <td>
                                            <label htmlFor="name">Name: </label>
                                        </td>    
                                        <td>
                                        <input type="text" name="name" onChange={e => {props.change("name", e.target.value)}} value={props.toUpdate.name} required />
                                        </td>
                                    </tr>                         
                                    <tr>
                                        <td>
                                            <label htmlFor="email">Email: </label>
                                        </td>
                                        <td>
                                        <input type="text" name="email" onChange={e => {props.change("email", e.target.value)}} value={props.toUpdate.email}/>
                                        </td>
                                    </tr>                            
                                    <tr>
                                        <td>
                                            <label htmlFor="phone">Phone: </label>
                                        </td>
                                        <td>
                                            <input type="text" name="phone" onChange={e => {props.change("phone", e.target.value)}} value={props.toUpdate.phone}/>
                                        </td>
                                    </tr>     
                    </tbody>
                </table>

                <input type="submit" value="Update" className="btn btn-primary" />
                <button onClick={props.handleCancel} className="btn btn-secondary">Cancel</button>
                </form>
            </div>
    );
}

export default UpdateDialog;


