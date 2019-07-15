const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    
      // status:{
      //   type: String,
      //   required: true,
      //   trim: true,  
      // }
  
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
price: {
    type: Number,
    required: true,
    trim: true,
  },
menu: {
    type: String,
    required: true,
    trim: true,
  }

}
    
    ,{
        timestamps:true
});

module.exports = mongoose.model('Order', OrderSchema);