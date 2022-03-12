module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      username: { type : String , unique : true, required : true },
      fullname: { type : String , required : true },
      birthdate: Date,
      password: { type : String , required : true },
      email: { type : String , required : true },
      image: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const User = mongoose.model("user", schema);
  return User;
};
