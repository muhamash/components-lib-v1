'use client'

import CalibrationCard from "../calibrationCards/page";
import CalibrationStateCard from "../calibrationStatesCards/page";
import EmailCard from "../emailCards/page";
import SettingsTab from "../../components/settingsTab/SettingdTab";
import CustomInputField from "@/components/userActionBar/inputField";
import CustomButton from "@/components/button";
import { PlusOutlined } from '@ant-design/icons';
import TaskDetailCard from "../taskCards/taskDetailsCard";
import CustomDropdown from "@/components/dropdown";

const users = [
    {
        name: "muktar",
        id: "1",
        image: "/user.jpg",
        status: 'pending',
    },

    // {
    //     name: "ashraful",
    //     id: "2",
    //     image: "/user.jpg",
    //     status: 'completed',
    // },
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

    {
        name: "rakib",
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
];


const page = () =>
{
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="flex flex-col">
            <div className="flex gap-10 justify-center items-center py-10">
                <CalibrationCard
                    users={users}
                    CardTitle={"MIKRON UCP 600"}
                    CardDescription={"F-7.5.13-59 EX-HS-2L Intelli-Drill Router"}
                    CustomDate={currentDate}
                    width="350px"
                />
                <CalibrationStateCard title={"Calibration Title"} amount={30} element={"Nextjs"} />
                <EmailCard head={"E"} title={"Executive Directors"} emailCount={'30 Emails'} date={currentDate} users={users} />
            </div>
            <div className="items-center py-10">
                <SettingsTab />
            </div>
            <div className="flex justify-between gap-10 items-center px-10 w-[400px]">
                <div>
                    <CustomInputField onSearch={() =>
                    {
                        console.log( 'search' )
                    }} placeholder={"search for machine"} />
                </div>
                <div>
                    <CustomButton status="pending" title={"Add User"} icon={<PlusOutlined className="text-black"/>}/>
                </div>
            </div>
            <div className="p-10 flex gap-5">
                <TaskDetailCard title="Publish Items?" subTitle="Are you sure you want to publish the selected items?" buttonTyped={<CustomButton title={"Publish All"} />} buttonCancel={<CustomButton title={"Cancel"} />} dropdown={<CustomDropdown width="400px" dropdownTitle={"Select assignee"} backgroundColor={"white"} />} />
                
                <TaskDetailCard subTitle="single title" dropdown={<CustomInputField onSearch={() =>
                {
                    console.log('hello')
                }} placeholder={"place holder"}/> } />
            </div>

        </div>
    );

};

export default page;