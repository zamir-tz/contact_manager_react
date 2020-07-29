import React from "react";
import Contact from "./Contact/Contact"

const ContactList = (props) => {
    const contacts = props.contacts.map((contact, index) => {
        return (
            <Contact
            avatar={contact.avatar}
            id={contact.id}
            lastName={contact.lastName}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            key={contact.id}
            delete={() => props.delete(index)}
            update={() => props.update(index)}
            />
        );
    });

    return (
        <div className="table-responsive-sm" >
            <table className="table table-hover" style={{tableLayout: "fixed"}}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Avatar</th>
                        <th scope="col" onClick={() => props.sort('lastName')}>Last name</th>
                        <th scope="col" onClick={() => props.sort('name')} >Name</th>
                        <th scope="col" onClick={() => props.sort('email')}>Email</th>
                        <th scope="col" onClick={() => props.sort('phone')}>Phone</th>
                        <th><button className="btn btn-primary" onClick={() => props.create("create")}>Create contact</button></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts}
                </tbody>
            </table>
        </div>
    );

}

export default ContactList;