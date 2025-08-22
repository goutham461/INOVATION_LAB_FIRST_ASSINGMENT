let contacts = [
    {
      name: "yono",
      phone: "1234567890",
      email: "yono@example.com",
      displayInfo: function () {
        const { name, phone, email } = this;
        return `${name} - ${phone} - ${email}`;
      }
    },
    {
      name: "john",
      phone: "9876543210",
      email: "john@example.com",
      displayInfo: function () {
        const { name, phone, email } = this;
        return `${name} - ${phone} - ${email}`;
      }
    }
  ];
  
  function displayAllContacts() {
    const output = document.getElementById("output");
    output.innerHTML = "";
    contacts.forEach(contact => {
      output.innerHTML += contact.displayInfo() + "<br>";
    });
  }
  
  function addMultipleContacts(...newContacts) {
    contacts.push(...newContacts);
  }
  
  const moreContacts = [
    { name: "das", phone: "5551112222", email: "das@example.com", displayInfo: contacts[0].displayInfo },
    { name: "simon", phone: "4443332222", email: "simon@example.com", displayInfo: contacts[0].displayInfo }
  ];
  
  addMultipleContacts(...moreContacts);
  
  const otherContacts = [
    { name: "adam", phone: "1112223333", email: "adam@example.com", displayInfo: contacts[0].displayInfo }
  ];
  
  contacts = [...contacts, ...otherContacts];
  
  const personA = { name: "David King", phone: "9998887777", email: "david@example.com", displayInfo: contacts[0].displayInfo };
  const personB = { name: "Eva Queen", phone: "8887776666", email: "eva@example.com" };
  
  contacts[0].displayInfo.call(personB);
  contacts[0].displayInfo.apply(personB);
  const boundDisplay = contacts[0].displayInfo.bind(personB);
  
  displayAllContacts();
  