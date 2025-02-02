import { getDictionary } from "@/app/(frontend)/[lang]/_dictionaries/dictionaries";
import HotelCreateEditForm from "@/app/_components/createPageInputs/form/HotelCreateEditForm";

const CreatePage = async ({ params: { lang } }) => {
    const { createUpdate } = await getDictionary(lang);


    return <HotelCreateEditForm dictionary={createUpdate} />;
};

export default CreatePage;
