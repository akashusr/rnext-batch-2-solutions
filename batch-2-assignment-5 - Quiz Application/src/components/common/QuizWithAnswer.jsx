import { Check, X } from "react-feather";
import cn from "../../utils/cn";

const QuizWithAnswer = ({
    index,
    mySubmittedAnswers,
    adminsAnswer,
    ques,
    children,
    isInPerviewMode,
}) => {
    // transform admins answers object structure same as mySubmittedAnswers data structure
    const adminAnsArray = Object.entries(adminsAnswer).map(
        ([question_id, answer]) => ({
            question_id,
            answer,
        })
    );

    // find admins given answer to this question
    // it will applicable only when admin login and test the application
    const adminsAns =
        adminAnsArray &&
        adminAnsArray?.find((ans) => ans?.question_id === ques?.id);

    //  find user given answer to this question
    const myAnswer =
        mySubmittedAnswers &&
        mySubmittedAnswers?.find((ans) => ans?.question_id === ques?.id);
    console.log(`ques`, ques);

    return (
        <div className='rounded-lg border border-gray-200 dark:border-dark-textSecondary overflow-hidden dark:text-dark-textPrimary shadow-sm mb-4'>
            <div className='bg-white dark:bg-dark-primary p-6 md:w-[450px]  lg:w-[600px] !pb-2'>
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-lg text-wrap lg:w-[400px] xl:w-[550px] font-semibold'>
                        {index + 1}. {ques?.question}
                    </h3>
                </div>
                <div className='space-y-2 mb-5'>
                    {ques?.options &&
                        ques?.options?.map((option, index) => {
                            return (
                                <>
                                    <label
                                        key={index}
                                        className={cn(
                                            `flex items-center space-x-3 p-2 rounded`,
                                            option === ques.correctAnswer
                                                ? "!bg-[#3a945b] !text-[#ffffff] "
                                                : "bg-[#FD7272] text-gray-700"
                                        )}>
                                        {isInPerviewMode ? (
                                            <input
                                                type='radio'
                                                readOnly
                                                disabled={
                                                    option !== adminsAns?.answer
                                                }
                                                checked={
                                                    option === adminsAns?.answer
                                                }
                                                className='form-radio text-buzzr-purple'
                                            />
                                        ) : (
                                            <input
                                                type='radio'
                                                readOnly
                                                disabled={
                                                    option !== myAnswer?.answer
                                                }
                                                checked={
                                                    option === myAnswer?.answer
                                                }
                                                className='form-radio text-buzzr-purple'
                                            />
                                        )}

                                        <div className='flex justify-between w-full pr-4'>
                                            <span>{option}</span>

                                            {isInPerviewMode
                                                ? option ===
                                                      ques.correctAnswer &&
                                                  ques.correctAnswer ===
                                                      adminsAns?.answer && (
                                                      <Check />
                                                  )
                                                : option ===
                                                      ques.correctAnswer &&
                                                  ques.correctAnswer ===
                                                      myAnswer?.answer && (
                                                      <Check />
                                                  )}

                                            {option !== ques.correctAnswer && (
                                                <X />
                                            )}
                                        </div>
                                    </label>
                                    {isInPerviewMode
                                        ? option === adminsAns?.answer &&
                                          adminsAns.answer !==
                                              ques.correctAnswer && (
                                              <span className='text-xs text-red-400'>
                                                  <span className='text-[9px]'>
                                                      ❌
                                                  </span>{" "}
                                                  You have selected this option,
                                                  but it
                                                  {"'"}s incorrect.
                                              </span>
                                          )
                                        : option === myAnswer?.answer &&
                                          myAnswer.answer !==
                                              ques.correctAnswer && (
                                              <span className='text-xs text-red-400'>
                                                  <span className='text-[9px]'>
                                                      ❌
                                                  </span>{" "}
                                                  You have selected this option,
                                                  but it
                                                  {"'"}s incorrect.
                                              </span>
                                          )}

                                    {isInPerviewMode
                                        ? option !== adminsAns?.answer &&
                                          option === ques.correctAnswer && (
                                              <span className='text-xs '>
                                                  <span className='text-[9px]'>
                                                      ❗
                                                  </span>{" "}
                                                  This option is correct,but you
                                                  not select this option.
                                              </span>
                                          )
                                        : option !== myAnswer?.answer &&
                                          option === ques.correctAnswer && (
                                              <span className='text-xs '>
                                                  <span className='text-[9px]'>
                                                      ❗
                                                  </span>{" "}
                                                  This option is correct,but you
                                                  not select this option.
                                              </span>
                                          )}

                                    {isInPerviewMode
                                        ? option === adminsAns?.answer &&
                                          option === ques.correctAnswer && (
                                              <span className='text-xs '>
                                                  <span className='text-[9px] text-green-600 '>
                                                      ✅
                                                  </span>{" "}
                                                  This is correct option, and
                                                  you checked this option.
                                              </span>
                                          )
                                        : option === myAnswer?.answer &&
                                          option === ques.correctAnswer && (
                                              <span className='text-xs '>
                                                  <span className='text-[9px] text-green-600 '>
                                                      ✅
                                                  </span>{" "}
                                                  This is correct option, and
                                                  you checked this option.
                                              </span>
                                          )}
                                </>
                            );
                        })}
                </div>
                <span className='text-sm'>
                    ℹ️ 🟢 green background{"'"}s option is correct and, 🔴 red
                    background{"'"}s options are incorrect
                </span>
            </div>
            {children}
        </div>
    );
};

export default QuizWithAnswer;
