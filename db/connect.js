const mongoose=require('mongoose')
const connDB=async (url)=>
{
return mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
}

module.exports=connDB

