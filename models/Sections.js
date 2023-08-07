import { Schema, model, models} from "mongoose";

const sectionSchema = new Schema({
    lessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }],
    title: {
        type: String, 
        required: true
    }
})

export const Sections = models.Sections || model("Sections", sectionSchema)