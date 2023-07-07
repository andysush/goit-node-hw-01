import contacts from "./contacts.js";
import { program } from "commander";

const invokeAction = async ({ action, id, name, email, phone }) => {
	try {
		switch (action) {
			case "list":
				const getallContacts = await contacts.listContacts();
				return console.table(getallContacts);
			case "get":
				const getcontactById = await contacts.getContactById(id);
				return console.log(getcontactById);
			case "remove":
				const removeContact = await contacts.removeContact(id);
				return console.log(removeContact);
			case "add":
				const addContact = await contacts.addContact({
					name,
					email,
					phone,
				});
				return console.log(addContact);

			default:
				console.warn("\x1B[31m Unknown action type!");
		}
	} catch (error) {
		console.warn(error.message);
	}
};

program
	.option("-a, --action <type>")
	.option("-i, --id <type>")
	.option("-n, --name <type>")
	.option("-e, --email <type>")
	.option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
