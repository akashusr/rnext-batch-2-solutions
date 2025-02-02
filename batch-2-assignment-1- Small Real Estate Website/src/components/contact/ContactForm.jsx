function InputText({
    label = 'Input Label',
    type = 'text',
    placeholder = null,
    name = null,
    required = false,
}) {
    return (
        <div className="mb-[22px]">
            <label
                htmlFor={name}
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
            >
                {label}
                {required && '*'}
            </label>

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
            />
        </div>
    );
}

function InputTextarea({
    label = 'Input Label',
    placeholder = null,
    name = null,
    required = false,
}) {
    return (
        <div className="mb-[22px]">
            <label
                htmlFor={name}
                className="mb-4 block text-sm text-body-color dark:text-dark-6"
            >
                {label}
                {required && '*'}
            </label>
            <textarea
                name={name}
                rows="1"
                placeholder={placeholder}
                className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
            ></textarea>
        </div>
    );
}

export default function ContactForm() {
    return (
        <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className=" rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
                <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                    Send us a Message
                </h3>
                <form>
                    <InputText
                        label={'Full Name'}
                        type={'text'}
                        placeholder={'Adam Gelius'}
                        name={'fullName'}
                        required={true}
                    />

                    <InputText
                        label={'Email'}
                        type={'email'}
                        placeholder={'example@yourmail.com'}
                        name={'email'}
                        required={true}
                    />

                    <InputText
                        label={'Phone'}
                        type={'text'}
                        placeholder={'+885 1254 5211 552'}
                        name={'phone'}
                        required={true}
                    />

                    <InputTextarea
                        label={'Message'}
                        placeholder={'type your message here'}
                        name={'message'}
                        required={true}
                    />

                    <div className="mb-0">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
