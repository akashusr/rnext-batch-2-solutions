import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAdminApiHandlers from "../../hooks/useAdminApiHandlers";
import toast from "react-hot-toast";

const PublishAction = ({ status, quiz }) => {
    const { updateQuizSet } = useAdminApiHandlers();
    const queryClient = useQueryClient();

    // handle update mutation
    const { mutate } = useMutation({
        mutationFn: ({ quizSetId, data }) => updateQuizSet(quizSetId, data),
        onSuccess: () => {
            queryClient.invalidateQueries(["admin", "quizzes"]);
        },
    });

    // handle publish actions
    function handlePublishAction(type) {
        if (type === "published") {
            const takeConfirmation = confirm(
                "Are you sure ? you are going to publish this quiz."
            );
            if (takeConfirmation) {
                const quizSetId = quiz?.id;
                const data = {
                    status: "published",
                };
                mutate({ quizSetId, data });
            }
        } else if (type === "draft") {
            const takeConfirmation = confirm(
                "Are you sure, you are going to Unpublish this quiz ? Unpublishing a published quiz may effects in your users Experiences."
            );
            if (takeConfirmation) {
                const quizSetId = quiz?.id;
                const data = {
                    status: "draft",
                };
                mutate({ quizSetId, data });
            }
        }
    }

    return (
        <div className='flex justify-between items-center fixed top-4 right-12 mb-2'>
            <div className='button'>
                {quiz?.Questions.length > 0 && (
                    <>
                        {status === "draft" && (
                            <button
                                onClick={() => handlePublishAction("published")}
                                className='bg-primary ring-2 ring-offset-2 ring-transparent text-white hover:bg-indigo-900 hover:ring-primary duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-primary px-6 py-2 rounded-full'>
                                Publish Now
                            </button>
                        )}
                        {status === "published" && (
                            <button
                                onClick={() => handlePublishAction("draft")}
                                className='bg-primary ring-2 ring-offset-2 ring-transparent text-white hover:bg-indigo-900 hover:ring-primary duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-primary px-6 py-2 rounded-full'>
                                Unpublish
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PublishAction;
