import CalibrationCard from "../calibrationCards/page";
import CalibrationStateCard from "../calibrationStatesCards/page";
import EmailCard from "../emailCards/page";
import EmailCards from "../emailCards/page";

const users = [
    {
        name: "muktar",
        id: "1",
        image: "/user.jpg",
        status: 'pending',
    },

    {
        name: "ashraful",
        id: "2",
        image: "/user.jpg",
        status: 'completed',
    },
    {
        name: "rifat",
        id: "3",
        image: "/user.jpg",
        status: 'completed',
    },

    {
        name: "siam",
        id: "4",
        image: "/user.jpg",
        status: 'completed',
    },

    {
        name: "rakib",
        id: "4",
        image: "/user.jpg",
        status: 'completed',
    },
]

const page = () =>
{
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="flex gap-10 justify-center items-center py-10">
            <CalibrationCard
                users={users}
                CardTitle={"MIKRON UCP 600"}
                CardDescription={"F-7.5.13-59 EX-HS-2L Intelli-Drill Router"}
                CustomDate={currentDate}
                width="350px"
                />
            <CalibrationStateCard title={"Calibration Title"} amount={30} element={"Nextjs"} />
            <EmailCard head={"E"} title={"Executive Directors"} emailCount={'30 Emails'} date={currentDate}/>
        </div>
    )

};

export default page;