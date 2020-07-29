import React from 'react';
import '../Dialogs.css'

const CreateDialog = (props) => {
    return (
        <div className="dil">

                        <form onSubmit={props.handleCreate} className="dil-main form ">    
                        <table className="table">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <label>Avatar: </label>
                                        </td>
                                        <td>
                                            <div htmlFor="avatar" className="avatar-upload btn btn-primary">
                                                Upload avatar
                                                <input type="file" name="avatar" className="avatar-upload"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="lastName" >Last name: </label>
                                        </td>
                                        <td>
                                            <input type="text" name="lastName" required />
                                        </td>
                                    </tr>                            
                                    <tr>
                                        <td>
                                            <label htmlFor="name">Name: </label>
                                        </td>    
                                        <td>
                                            <input type="text" name="name" required/>
                                        </td>
                                    </tr>                         
                                    <tr>
                                        <td>
                                            <label htmlFor="email">Email: </label>
                                        </td>
                                        <td>
                                            <input type="text" name="email"/>
                                        </td>
                                    </tr>                            
                                    <tr>
                                        <td>
                                            <label htmlFor="phone">Phone: </label>
                                        </td>
                                        <td>
                                            <input type="text" name="phone"/>
                                        </td>
                                    </tr>     
                                    </tbody>                       
                        </table>        
                    <input type="submit" value="Create" className="btn btn-primary" />
                    <button onClick={props.handleCancel} className="btn btn-secondary">Cancel</button>
                    </form>

        </div>
    );
}

export default CreateDialog;