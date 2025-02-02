import { FaCommentAlt } from "react-icons/fa";
import { FaEnvelope, FaSuitcase } from "react-icons/fa6";

const NextSteps = ({ dictionary }) => {
    return (
        <div className='dark:bg-gray-900 bg-white rounded-lg shadow-sm p-6 mb-8'>
            <h3 className='text-xl font-semibold mb-6'>
                {dictionary?.success?.nextSteps}
            </h3>
            <div className='space-y-6'>
                <div className='flex gap-4'>
                    <div className='text-primary'>
                        <FaEnvelope className=' text-xl' />
                    </div>
                    <div>
                        <h4 className='font-semibold mb-1'>
                            {dictionary?.success?.checkEmail}
                        </h4>
                        <p className='text-zinc-600'>
                            {dictionary?.success?.sentConfirmationText}
                        </p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='text-primary'>
                        <FaCommentAlt className=' text-xl' />
                    </div>
                    <div>
                        <h4 className='font-semibold mb-1'>
                            {dictionary?.success?.messageYourHost}
                        </h4>
                        <p className='text-zinc-600'>
                            {dictionary?.success?.introduceYourselfText}
                        </p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='text-primary'>
                        <FaSuitcase className='text-xl' />
                    </div>
                    <div>
                        <h4 className='font-semibold mb-1'>
                            {dictionary?.success?.planYourTrip}
                        </h4>
                        <p className='text-zinc-600'>
                            {dictionary?.success?.reviewHouseRulesText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextSteps;
