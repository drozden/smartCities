const mongoose = require('mongoose');

var connectWithRetry = function() {

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { 
        console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
        setTimeout(connectWithRetry, 5000);
        console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); 
        mongoose.connect(process.env.MONGODB_URI);
    
    }
});
}
connectWithRetry();

require('./user.model');




// var mongoose = require('mongoose')
// var mongoUrl = "mongodb://localhost:27017/test"

// var connectWithRetry = function() {
//   return mongoose.connect(mongoUrl, function(err) {
//     if (err) {
//       console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
//       setTimeout(connectWithRetry, 5000);
//     }
//   });
// };
// connectWithRetry();