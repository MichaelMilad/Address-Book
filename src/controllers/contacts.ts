import Contact from '../models/contact';
import { Request, Response, NextFunction } from 'express';

//Adding new Contacts
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //In the case of a single contact
    if (!req.body.contacts) {
      const { name, number, address } = req.body;
      const contact = new Contact({ name, number, address });
      await contact.save();
      return res.json({
        message: 'created',
        data: {
          name: contact.name,
          number: contact.number,
          address: contact.address
        }
      });
      //In the case of Bulk Contacts, found in contacts array
    } else if (req.body.contacts) {
      for (const contact of req.body.contacts) {
        const { name, number, address } = contact;
        const newContact = new Contact({ name, number, address });
        await newContact.save();
      }
      return res.json({
        message: 'bulk users created',
        data: req.body.contacts
      });
    }
  } catch (error) {
    next(error);
  }
};

//Showing all Contacts, or searching for contacts by Number or Name;
const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name: searchName, number: searchNumber } = req.query;
    if (searchNumber) {
      if (isNaN(parseInt(searchNumber as string))) {
        return res.json({
          message: 'please enter a valid Number'
        });
      }
      const contacts = await Contact.findOne({ number: { $in: searchNumber } });
      return res.json({
        message: 'Contact found by Number',
        contacts
      });
    } else if (searchName) {
      const contacts = await Contact.find({ name: { $in: searchName } });
      return res.json({
        message: 'Contacts found by Name',
        contacts
      });
    } else {
      const contacts = await Contact.find({});
      return res.json({
        message: 'All Contacts',
        contacts
      });
    }
  } catch (error) {
    next(error);
  }
};

//Showing only one contact by ID;
const showOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    return res.json({
      message: 'Success',
      contact
    });
  } catch (error) {
    next(error);
  }
};

//Deleting a Contact
const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    return res.json({
      message: 'Deleted',
      contact
    });
  } catch (error) {
    next(error);
  }
};

//Updating a Contact
const updateOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, number, address } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      id,
      {
        name,
        number,
        address
      },
      { new: true }
    );
    return res.json({
      message: 'Successfully Updated',
      contact
    });
  } catch (error) {
    next(error);
  }
};

export { create, index, showOne, deleteOne, updateOne };
