const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'donut';

const userRouter = require('./routes/user');
const commentRouter = require('./routes/comment');
const shopRouter = require('./routes/shop.js');
const registerRouter = require('./routes/register.js');
const themeRouter = require('./routes/theme.js');
const rankRouter = require('./routes/rank.js');
const adminRouter = require('./routes/admin.js');
<<<<<<< HEAD
const reviewRouter = require('./routes/review.js')
=======
const stationRouter = require('./routes/station.js');
>>>>>>> c2c90b70f6f28b8377f897b890374d57828b9c4f

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(COOKIE_SECRET));

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

app.use('/user', userRouter);
// app.use('/comment', commentRouter);
app.use('/shop', shopRouter)
app.use('/register', registerRouter);
app.use('/theme', themeRouter);
app.use('/rank', rankRouter);
app.use('/dt/admin/menu', adminRouter)
<<<<<<< HEAD
app.use('/review', reviewRouter)
=======
app.use('/station', stationRouter);
>>>>>>> c2c90b70f6f28b8377f897b890374d57828b9c4f

app.listen(PORT, ()=>{
    console.log('back server 4000');
});