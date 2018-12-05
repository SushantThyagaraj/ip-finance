const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrgSchema = new Schema({
    name: String,
    public_address: String,
    description: String,
    imgsrc: String,
    title: String,
    subtitle: String,
}); // not use normalization for quick dev

UsersSchema.methods.setInfo = function(name, public_addr, description, imagesrc, titile, subtitle) {
    // set the salt
    this.name = name;
    this.public_addr = public_addr;
    this.description = description;
    this.imagesrc = imagesrc;
    this.titile = titile;
    this.subtitle = subtitle;
  };

let Org = mongoose.model('Orgs', OrgSchema);
module.exports = Org;