import Contact from '../models/Contact.js';

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    });

    const createdContact = await contact.save();
    res.status(201).json(createdContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findById(req.params.id);
    
    if (contact) {
      contact.status = status;
      const updatedContact = await contact.save();
      res.json(updatedContact);
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      await Contact.deleteOne({ _id: req.params.id });
      res.json({ message: 'Contact removed' });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
