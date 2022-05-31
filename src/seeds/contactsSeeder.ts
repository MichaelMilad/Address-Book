import mongoose from 'mongoose';
import Contact from '../models/contact';

mongoose
  .connect('mongodb://localhost:27017/address-book')
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log('Database Connection Error', err));

const contacts = [
  {
    name: 'Michael Milad',
    number: 201068595906,
    address: 'Cairo, Egypt'
  },
  {
    name: 'Michael Milad',
    number: 201095632683,
    address: 'Giza, Egypt'
  },
  {
    name: 'Daniel',
    number: 20101044815,
    address: 'Atlanta'
  },
  {
    name: 'Kareem',
    number: 201225069390,
    address: 'New York'
  },
  {
    name: 'Ehab',
    number: 201225011127,
    address: 'Nasr City'
  },
  {
    name: 'John Doe',
    number: 201212112269,
    address: 'Colombia'
  }
];
console.log('You are Here');

async function save(contact: {
  name: string;
  number: number;
  address: string;
}) {
  const { name, number, address } = contact;
  const newContact = new Contact({ name, number, address });
  await newContact.save();
}

for (const contact of contacts) {
  save(contact);
}
