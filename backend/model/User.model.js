//************************************************************************************************User Model + schema */
const { model, Schema } = require("mongoose");
const userSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String, min: 5, max: 8 },
  profile: { data: Buffer, contentType: String },
  cart: [{ type: Schema.Types.ObjectId, ref: "product" }],
  wishlist: [{ type: Schema.Types.ObjectId, ref: "product" }],
});
const userModel = model("user", userSchema);
module.exports = userModel;
