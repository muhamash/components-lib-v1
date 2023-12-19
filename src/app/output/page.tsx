import CalibrationCard from "../cards/page";

const page = () =>
{
    const currentDate = new Date().toLocaleDateString();

    return (
        <div>
            <CalibrationCard
                CardTitle={"MIKRON UCP 600"}
                CardDescription={"F-7.5.13-59 EX-HS-2L Intelli-Drill Router"}
                CustomDate={currentDate}
                width="350px"
                />
                
        </div>
    )

};

export default page;