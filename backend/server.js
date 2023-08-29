const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/Data");
const connectDB = require("./config/db");
const userRoutes  = require('./routes/userRoutes');
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");



// middleware
dotenv.config();

connectDB();
const app = express();

app.use(express.json()); //to accept json data




// API'S
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get('/api/chat', (req, res) => {
//     res.send(chats);
// });
// app.get('/api/chat/:id', (req, res) => {
//   // res.send(chats);
//   // console.log(req.params.id);
//   const sinlgleChat = chats.find((c) => c._id === req.params.id);
//   res.send(sinlgleChat);
// });










const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`connected on PORT ${PORT}`);
});
