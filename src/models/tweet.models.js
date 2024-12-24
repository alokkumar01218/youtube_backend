import mongoose from "mongoose";


const tweetschema = new mongoose.Schma(
    {
        content: {
            type: String,
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

export const Tweet = mongoose.model("Tweet", tweetschema);