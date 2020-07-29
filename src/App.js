import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import CreateDialog from './Dialogs/CreateDialog/CreateDialog'
import IdGenerator from './utils/IdGenerator'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import UpdateDialog from './Dialogs/UpdateDialog/UpdateDialog';
import Avatar from './utils/Avatar';

class App extends Component {
  
  state = {
    contacts: [],
    dialogs: {
      showCreate: false,
      showUpdate: false
    },
    toUpdate: null,
  };

  constructor(props) {
    super(props);
    if (localStorage.getItem("contacts")) {
      this.state.contacts = JSON.parse(localStorage.getItem("contacts"));
    }
  }

  showCreate = () => {
    this.setState({dialogs: {showCreate: true}});
  }

  showUpdate = (index) => {
    this.setState({dialogs: {showUpdate: true}});
    const toUpd = {...this.state.contacts[index]};
    this.setState({toUpdate: toUpd});
  }

  sortContacts = (sortBy) => {
    let contacts = [...this.state.contacts];
    contacts.sort( (cnt1, cnt2) => {
      
      let cnt1param = cnt1[sortBy].toLowerCase();
      let cnt2param = cnt2[sortBy].toLowerCase();
    
      if (cnt1param < cnt2param) {
        return -1;
      }
      if (cnt1param > cnt2param) {
        return 1;
      }
      return 0;

    });
    this.setState({contacts}, this.saveToLocal);
  }

  deleteContactHandler = (contactIndex) => {
    const contacts = [...this.state.contacts];
    
    localStorage.removeItem("avatar-" + contacts[contactIndex].id);
    contacts.splice(contactIndex, 1);
    this.setState({contacts: contacts}, this.saveToLocal);
  }

  createContactHandler = async (event) => {
    event.preventDefault();
    event.persist();
    console.log(event);
    const nContact = {
      lastName: event.target[1].value,
      name:     event.target[2].value,
      email:    event.target[3].value,
      phone:    event.target[4].value,
      id: IdGenerator.generateGuid(),
    }

    if (event.target[0].files[0]) {
      await Avatar.saveAvatar(event.target[0].files[0], nContact.id);
      nContact.avatar = true;
    } else {
      nContact.avatar = false;
    }

    this.setState(state => {
      const contacts = state.contacts.concat(nContact);
      return {
        contacts: contacts,
        dialogs: {showCreate: false}
      };
    }, this.saveToLocal);
  }

  updateContactHandler = async (event, id) => {
    event.preventDefault();
    const contactIndex = this.state.contacts.findIndex(cont => {
      return cont.id === id;
    });

    const contact = {...this.state.toUpdate};

    if (event.target[0].files[0]) {
      await Avatar.saveAvatar(event.target[0].files[0], id);
      contact.avatar = true;
    }

    const contacts = [...this.state.contacts];
    contacts[contactIndex] = contact;

    this.setState({contacts, toUpdate: null, dialogs: {showUpdate: false}}, this.saveToLocal);
  }

  changeToUpdate = (prop, val) => {
    let updObj = {...this.state.toUpdate}
    updObj[prop] = val;
    this.setState({toUpdate: updObj});
  }

  handleCancel = () => {
    this.setState({dialogs: {
      showCreate: false,
      showUpdate: false
    }})
  }

  saveToLocal = () => {
    const local = this.state.contacts;
    localStorage.setItem('contacts', JSON.stringify(local));
  }

  render() {
    let dialog = null;
    
    if (this.state.dialogs.showCreate) {
      dialog = (
        <CreateDialog 
        handleCreate={this.createContactHandler}
        handleCancel={this.handleCancel}
        />
      );
    }
    
    if (this.state.dialogs.showUpdate) {
      dialog = (
        <UpdateDialog 
        toUpdate={this.state.toUpdate}
        change={this.changeToUpdate}
        handleUpdate={this.updateContactHandler}
        handleCancel={this.handleCancel}
        />
      );
    }

    return (
      <div className="App container">
        <h1>Contact Manager App</h1>
        <ContactList 
        sort={this.sortContacts}
        contacts={this.state.contacts}
        delete={this.deleteContactHandler}
        create={this.showCreate}
        update={this.showUpdate}
        />
        {dialog}
      </div>
    );
  }
}

export default App;
