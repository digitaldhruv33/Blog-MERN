import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'

const storage = new GridFsStorage({
    url: "mongodb+srv://user:codewithdhruva@cluster0.8u02j.mongodb.net/blog?retryWrites=true&w=majority",
    options :{ useNewUrlParser: true, useUnifiedTopology: true,},
    file:(request, file)=>{
       const match = ["image/png", "image/jpg"]

       if(match.indexOf(file.memeType) === -1)
           return `${Date.now()}-blog${file.orignalname}`
       
        
        return {
            bucketName:"photos",
            filename: `${Date.now()}-blog${file.orignalname}`
        }   
    }
})

export default multer({storage})