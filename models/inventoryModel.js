const mongoose=require('mongoose')

const inventoryModel=new mongoose.schema({
  inventoryType:{
    type:String,
    required:[true,'inventory type require'],
    enum:['in','out']
  },
  bloodGroup:{
    type:String,
    required:[true,'blood group is required'],
    enum:['O+','O-','AB+','AB-','A+','A-','B+','B-']
  },
  quantity:{
    type:Number,
    require:[true,'blood qunatity is require']
  },
  organisation:{
    type:mongoose.Schema.Types.ObjectId
    ref:'user',
    required:[true,'organisation is required']
  },
  hospital:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:function(){
      return this.inventoryType==='out'
    }

  },
  donar:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:function(){
      retun this.inventoryType==='in';
    },
  },
},
{timestamps:true}
)