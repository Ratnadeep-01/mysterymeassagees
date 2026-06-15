import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document{
    content : string;
    createdAt : Date;
}

const MessageSchema : Schema<Message> = new Schema ({
    content : {
        type : String,
        required : [true, "meassage are required"]
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
})

export interface User extends Document {
    username : string;
    email : string;
    password : string;
    verifyCode : string;
    vecrifyCodeExpiry : Date;
    isVerified : Boolean;
    isAcceptingMessage : Boolean;
    meassage : Message[];
}

const UserSchema : Schema<User> = new Schema ({
    username : {
        type : String,
        required : [true, "username is required"],
        trim : true,
        unique : true
    },
    email : {
        type : String,
        required : [true, "email is required"],
        unique : true,
        match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"please provide a valid email address"]
    },
    password : {
        type : String,
        required : [true, "password is required"],
    },
    verifyCode : {
        type: String,
        required : [true, "verification code is required"]
    },
    vecrifyCodeExpiry : {
        type : Date,
        required : true
    },
    isVerified:{
        type : Boolean,
        required : [true, "yyou must be verified"],
        default: false
    },
    isAcceptingMessage : {
        type : Boolean,
        default : true
    },
    meassage: [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || 
                  (mongoose.model<User>("User", UserSchema));

export default UserModel
