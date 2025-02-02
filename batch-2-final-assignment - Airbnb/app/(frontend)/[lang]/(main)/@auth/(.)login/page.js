import LoginPageCard from "@/app/_components/auth/LoginPageCard";
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
            <LoginPageCard lang={lang} />
        </Modal>
    );
};

export default page;
