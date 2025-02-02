import RegisterPageCard from "@/app/_components/auth/RegisterPageCard";
import Modal from "@/app/_components/common/Modal";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async ({ params: { lang } }) => {
    const session = await auth();
    if (session?.user?.id) {
        return redirect("/");
    }
    return (
        <Modal>
            <RegisterPageCard lang={lang} />
        </Modal>
    );
};

export default page;
