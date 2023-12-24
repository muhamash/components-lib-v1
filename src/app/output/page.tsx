'use client'

import CalibrationCard from "../CalibrationCards/page";
import CalibrationStateCard from "../CalibrationStatesCards/page";
import EmailCard from "../EmailCards/page";
import SettingsTab from "../../components/SettingsTab/SettingdTab";
import CustomInputField from "@/components/userActionBar/inputField";
import CustomButton from "@/components/Button/Button";
import { PlusOutlined } from '@ant-design/icons';
import TaskDetailCard from "../TaskCards/taskDetailsCard";
import CustomDropdown from "@/components/Dropdown/dropdown";

const users = [
    {
        name: "muktar",
        id: "1",
        image: "/user.jpg",
        status: 'completed',
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
                    buttons={[
                        {
                            ButtonTitle: 'Start Calibration',
                            ButtonClassName: `${ users[ 2 ].status }`,
                            
                        },

                    ]}
                />
                <CalibrationStateCard
                    title={"Calibration Title"}
                    amount={30}
                    element={"Nextjs"} />
                <EmailCard
                    head={"E"}
                    title={"Executive Directors"}
                    emailCount={'30 Emails'}
                    date={currentDate}
                    users={users} />
            </div>
            <div className="items-center py-10">
                <SettingsTab />
            </div>
            <div className="flex justify-between gap-10 items-center px-10 w-[400px]">
                <div>
                    <CustomInputField
                        onSearch={() =>
                    {
                        console.log( 'search' )
                    }}
                    placeholder={"search for machine"} />
                </div>
                <div>
                    <CustomButton
                        className="bg-[#054F9F] text-white"
                        title={"Add User"}
                        icon={<PlusOutlined />}
                        onClick={()=> console.log('add user')}
                    />
                </div>
            </div>
            <div className="p-10 flex gap-5">
                {/* <TaskDetailCard title="Publish Items?" subTitle="Are you sure you want to publish the selected items?" buttonTyped={<CustomButton title={"Publish All"} />} buttonCancel={<CustomButton title={"Cancel"} />} dropdown={<CustomDropdown width="400px" dropdownTitle={"Select assignee"} backgroundColor={"white"} />} /> */}
                
                {/* <TaskDetailCard subTitle="single title" dropdown={<CustomInputField onSearch={() =>
                {
                    console.log('hello')
                }} placeholder={"place holder"}/> } /> */}
                
                <TaskDetailCard
                    title="Delete Items?"
                    subTitle="Are you sure you want to delete the selected items permanently? Once deleted they won’t appear anymore anywhere"
                    buttons={[
                        {
                            buttonTitle: 'Delete Permanently',
                            buttonClassName: 'bg-[#E13333] text-[#FFFFFF]',
                            onClick: () =>
                            {
                                console.log( 'ok Button clicked!' );
                            },
                        },
                        {
                            buttonTitle: 'Cancel',
                            buttonClassName: 'hover:bg-[#EDF1F7]',
                            onClick: () =>
                            {
                                console.log('cancel button')
                            }
                        }
                    ]}
                />
                <TaskDetailCard
                    // title="Delete Items?"
                    subTitle="Machine Name"
                    ReactElementProps={
                        <CustomDropdown
                            dropdownTitle={"Select machine"}
                            width={"400px"}
                            backgroundColor={""}
                        />}
                    buttons={[
                        {
                            buttonTitle: 'Assign to Machine',
                            buttonClassName: 'bg-[#259660] text-[#FFFFFF]',
                            onClick: () =>
                            {
                                console.log( 'Button clicked!' );
                            },
                        },

                        {
                            buttonTitle: 'Cancel',
                            buttonClassName: 'hover:bg-[#EDF1F7]',
                        }
                    ]}
                />

                {/* <TaskDetailCard

                /> */}

                <CalibrationCard
                    users={users}

                    CardTitle={"Machine Name"}
                    CardDescription={"Sensor Name Here "}
                    CustomDate={currentDate}
                    width={"285px"}
                    buttons={[
                        {
                            ButtonTitle: 'Start Calibration',
                            ButtonClassName: 'bg-[#054F9F] text-[#FFFFFF] shadow',
                            
                       },

                    ]}

                />
            </div>
            

        </div>
    );

};

export default page;