import { Flat } from "@alptugidin/react-circular-progress-bar";
import { getStrockColor } from "../../utils";

const ProgressReport = ({ totalCorrectMarks, totalMarks }) => {
    const percentage = (totalCorrectMarks / totalMarks) * 100;
    const strockColor = getStrockColor(percentage);

    return (
        <div className='order-1 sm:order-2 w-2/3 sm:w-1/2  dark:bg-dark-secondary bg-primary/80 rounded-md border border-white/20 flex items-center p-4'>
            <div className='flex-1'>
                <p className='text-2xl font-bold'>
                    {totalCorrectMarks}/{totalMarks}
                </p>

                <p>Your Mark</p>
            </div>
            <div className='h-24 w-24'>
                <Flat
                    progress={percentage}
                    sx={{
                        strokeColor: strockColor,
                        barWidth: 9,
                        bgStrokeColor: percentage === 0 ? "red" : "#999",
                        valueColor: "#ffffff",
                        miniCircleSize: 0,
                        loadingTime: 500,
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressReport;
