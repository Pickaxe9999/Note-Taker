const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//route links
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


//print if the server starts correctly
app.listen(PORT, () => {
    console.log('Server started on port 3001');
})