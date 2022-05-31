import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true,
      unique: true
    },
    address: {
      type: String
    }
  },
  {
    versionKey: false
  }
);

const Contact = mongoose.model('contact', ContactSchema);
export default Contact;
