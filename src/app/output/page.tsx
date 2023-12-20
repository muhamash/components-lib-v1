import CalibrationCard from "../cards/page";

const users = [
    {
        name: "muktar",
        id: "1",
        image: "/user.jpg"
    },

    {
        name: "ashraful",
        id: "2",
        image: "/user.jpg"
    },
    {
        name: "rifat",
        id: "3",
        image: "/user.jpg"
    },

    {
        name: "siam",
        id: "4",
        image: "/user.jpg"
    },

    {
        name: "rakib",
        id: "4",
        image: "/user.jpg"
    },
]

const page = () =>
{
    const currentDate = new Date().toLocaleDateString();

    return (
        <div>
            <CalibrationCard
                users={users}
                CardTitle={"MIKRON UCP 600"}
                CardDescription={"F-7.5.13-59 EX-HS-2L Intelli-Drill Router"}
                CustomDate={currentDate}
                width="350px"
                />
                
        </div>
    )

};

export default page;