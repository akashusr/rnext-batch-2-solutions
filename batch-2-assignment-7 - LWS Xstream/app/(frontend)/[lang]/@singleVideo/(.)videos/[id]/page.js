import Modal from "@/app/(frontend)/_components/modal/Modal";
import SingleVideo from "@/app/(frontend)/_components/video/SingleVideo";
import { getVideos } from "@/app/(frontend)/_data/getVideos";
import { getDictionary } from "../../../_dictionaries/dictionaries";
import ReletedVideos from "@/app/(frontend)/_components/video/ReletedVideos";

export default async function InterceptedSingleVideoPage({
    params: { id, lang },
}) {
    const video = await getVideos("single", id);
    const dictionary = await getDictionary(lang || "en");
    return (
        <Modal>
            <SingleVideo dictionary={dictionary} video={video} />
        </Modal>
    );
}
