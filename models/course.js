const courseSchema = new mongoose.Schema({
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true
    },
    lessonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson'
    },
    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    name: {
      type: String,
      required: true
    },
    teacherName: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    recommendedCourses: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Course'
    }
  });
