import { Globe, Trash } from "react-feather";
import UnPublishIcon from "../../svg/UnPublishIcon";
import useAdminApiHandlers from "../../hooks/useAdminApiHandlers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const CardActions = ({ quizCard, setMenuOpen }) => {
    const { updateQuizSet, deleteQuizSet } = useAdminApiHandlers();
    const queryClient = useQueryClient();

    //  actions mutation to publish or unpublish
    const { mutate } = useMutation({
        mutationFn: ({ quizSetId, data }) => updateQuizSet(quizSetId, data),
        onSuccess: () => {
            queryClient.invalidateQueries(["admin", "quizzes"]);
        },
    });

    // action mutation to delete
    const { mutate: deleteQuiz } = useMutation({
        mutationFn: (quizSetId) => deleteQuizSet(quizSetId),
        onSuccess: () => {
            queryClient.invalidateQueries(["admin", "quizzes"]);
        },
    });

    // action handler
    const handleAction = (e, action) => {
        e.stopPropagation();
        setMenuOpen(false);
        const quizSetId = quizCard?.id;
        if (action === "published") {
            const takeConfirmation = confirm(
                "Are you sure ? you are going to publish this quiz."
            );
            if (takeConfirmation) {
                // take confirmation to publish

                const data = {
                    status: "published",
                };
                mutate({ quizSetId, data });
            }
        } else if (action === "draft") {
            const takeConfirmation = confirm(
                // take confirmation to unpublish
                "Are you sure, you are going to Unpublish this quiz ? Unpublishing a published quiz may effects in your users Experiences."
            );
            if (takeConfirmation) {
                const data = {
                    status: "draft",
                };
                mutate({ quizSetId, data });
            }
        } else if (action === "delete") {
            const takeConfirmation = confirm(
                "Are you sure ? you are going to delete this quiz. this process cannot be undone !" // take confirmation before delete
            );
            if (takeConfirmation) {
                deleteQuiz(quizSetId);
            }
        }
    };

    return (
        <div className='absolute flex gap-4 top-2 right-0 rounded-md overflow-hidden   z-10 animate-slide-in'>
            <button
                title='Delete'
                onClick={(e) => handleAction(e, "delete")}
                className='block hover:text-gray-500 text-white w-full text-left '>
                <Trash />
            </button>
            {quizCard?.Questions && quizCard.Questions.length > 0 && (
                <>
                    {quizCard?.status === "published" && (
                        <button
                            title='Unpublish'
                            onClick={(e) => handleAction(e, "draft")}
                            className='block hover:text-gray-500 text-white w-full text-left '>
                            <UnPublishIcon />
                        </button>
                    )}

                    {quizCard?.status === "draft" && (
                        <button
                            title='Publish'
                            onClick={(e) => handleAction(e, "published")}
                            className='block hover:text-gray-500 text-white w-full text-left '>
                            <Globe />
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default CardActions;
