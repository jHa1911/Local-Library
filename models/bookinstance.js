const mongoose = require("mongoose");
const schema = mongoose.schema;

const BookInstanceSchema = new Schema({
    book: { type: schema.Types.ObjectId, ref: "Book", required: true }, //this is a virtual field that references the id of the book
    imprint: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: ["Available", "Maintenance", "Loaned", "Reserved"],
        default: "Maintenance",
    },
    due_back: { type: Date, default: Date.now },
});

// Virtual for bookinstance's URL

BookInstanceSchema.virtual("url").get(function () {
    return `/catalog/bookinstance/${this._id}`;
});

// Export model
module.exports = mongoose.model("BookInstance", BookInstanceSchema);