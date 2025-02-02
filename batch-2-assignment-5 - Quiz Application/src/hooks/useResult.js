import useAuth from "./useAuth";

const useResult = (data) => {
    const { auth } = useAuth();

    // find the attempts of logged in user
    const myAttempts = data?.attempts?.find(
        (attempt) => attempt?.user?.id === auth?.user?.id
    );
    const mySubmittedAnswers = myAttempts?.submitted_answers;
    const correctAnswers = myAttempts?.correct_answers;

    const myCorrectAnswers = [];
    const myIncorrectAnswers = [];
    const getRightAndWrongAnswers = (correctAnswers, submittedAnswers) => {
        submittedAnswers &&
            submittedAnswers.forEach((submittedAns) => {
                // check that is I perticipate the question
                const correctAnswer = correctAnswers.find(
                    (correct) =>
                        correct.question_id === submittedAns.question_id
                );

                // if I perticipate than what my answer wrong or right
                if (correctAnswer) {
                    if (correctAnswer.answer === submittedAns.answer) {
                        myCorrectAnswers.push({
                            ...submittedAns,
                            marks: correctAnswer.marks,
                        });
                    } else {
                        myIncorrectAnswers.push({
                            ...submittedAns,
                            marks: correctAnswer.marks,
                        });
                    }
                }
            });

        return { myCorrectAnswers, myIncorrectAnswers };
    };

    getRightAndWrongAnswers(correctAnswers, mySubmittedAnswers);

    // Calculate total marks
    const totalCorrectMarks = myCorrectAnswers.reduce(
        (sum, obj) => sum + obj.marks,
        0
    );
    const totalIncorrectMarks = myIncorrectAnswers.reduce(
        (sum, obj) => sum + obj.marks,
        0
    );

    //get all users score
    const leaderboard =
        data?.attempts &&
        data?.attempts.map((attempt) => {
            let totalScore = 0;

            attempt.correct_answers.forEach((correctAnswer) => {
                const submittedAnswer = attempt.submitted_answers.find(
                    (ans) => ans.question_id === correctAnswer.question_id
                );
                if (
                    submittedAnswer &&
                    submittedAnswer.answer === correctAnswer.answer
                ) {
                    totalScore += correctAnswer.marks;
                }
            });

            return {
                userId: attempt.user.id,
                full_name: attempt.user.full_name,
                email: attempt.user.email,
                score: totalScore,
            };
        });

    leaderboard && leaderboard.sort((a, b) => b.score - a.score);
    leaderboard &&
        leaderboard?.forEach((item, index) => {
            item.position = index + 1;
        });

    // adjusting position whom score are same
    let currentPosition = 0;
    let previousScore = null;
    leaderboard?.forEach((user) => {
        if (user.score !== previousScore) {
            currentPosition++;
            previousScore = user.score;
        }
        user.position = currentPosition;
    });

    // Step 2: Filter users up to position 5
    const topFiveRankHolders = leaderboard?.filter(
        (user) => user.position <= 5
    );

    return {
        mySubmittedAnswers,
        correctAnswers,
        myCorrectAnswers,
        myIncorrectAnswers,
        totalCorrectMarks,
        totalIncorrectMarks,
        getRightAndWrongAnswers,
        leaderboard,
        topFiveRankHolders,
    };
};

export default useResult;
