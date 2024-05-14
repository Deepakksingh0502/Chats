const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "preeti",
    to: "Deepak",
    msg: "love you 3000",
    created_at: new Date(),
  },
  {
    from: "Kunal",
    to: "Pk",
    msg: "Show me your bike",
    created_at: new Date(),
  },
  {
    from: "anuj",
    to: "shanu",
    msg: "bring me some fruits",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
