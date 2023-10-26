const mongoose = require("mongoose");
const questionSchema= new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answers: {
        type: [String],
        required: true,
        validate: {
            validator: (answers) => answers.length ===4,
            message: "There must be 4 answers",
        } ,
    },
    correctAnswer: {
        type: Number,
        required: true,
        validate: {
            validator: (correctAnswer) => correctAnswer >= 0 && correctAnswer <= 3,
            message: "The correct answer must be between 0 and 3",
        }
    }
},{
_id: false,
});
const quizSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    questions: [questionSchema]
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;