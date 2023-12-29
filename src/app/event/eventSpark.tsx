import Image from "next/image";
import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
// import DateFormatter from "@/components/common/DateFormatter/DateFormatter";
import { Space } from "antd";
import './page.css'

function EventCard({ event }: any) {

  const blurBackgroundStyle = {
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "10px",
    backgroundImage: `linear-gradient(91deg, black 15.34%, rgba(15, 31, 43, 0.12) 100.05%), url(${ event?.eventBanner })`,
    transition: "background-size 3s ease-in-out",
  };

  return (
    <div className="group relative flex justify-center py-10">

      {/* hover div */}
      <div
        style={blurBackgroundStyle}
        className={`group-hover:block h-[325px] hidden w-[280px]`}
      >
        <Space size='middle' direction="vertical" className="flex ml-[20px] justify-center h-[325px]">
          {event?.ticketCategories?.map((cat: any, index: any) => (
            <Space size='middle' key={index} className="flex flex-row">
              <Image
                alt="ticket_category"
                src="/ticket_category_icon.svg"
                width={40}
                height={40}
              />
              <div className="text-white">
                <p className="text-[14px] font-Poppins font-[500px] leading-[22px]">
                  {cat.label}
                </p>
                <p className="text-[16px] font-Poppins font-semibold leading-[22px]">
                  {cat.price===0 ? `Free` : `${cat.price} BDT`} 
                </p>
              </div>
            </Space>
          ))}
        </Space>
      </div>

      {/* main div */}
      <div className="w-[280px] h-[325px] shadow-md rounded-[10px] group-hover:hidden">
        <div className="relative">
          <div className="bg-custom-purple flex items-center justify-center text-white h-[33px] w-[120px] absolute z-index-[2px] mt-[23px] ml-[21px] rounded-[12px]">
            {/* <DateFormatter date={event?.startDate} /> */}
          </div>
          <Image
            src={event?.eventBanner}
            width={280}
            height={0}
            className="h-[181px] min-w-[280px] rounded-tl-[10px] rounded-tr-[10px]"
            alt="event-banner"
          />
        </div>

        <div className="mt-[20px] p-[17px]">
          <h1 className="font-poppins font-semibold text-[18px] leading-[33px] whitespace-nowrap overflow-hidden text-ellipsis">
            {event?.eventName}
          </h1>
          <p className="font-poppins font-normal text-[15px] leading-[29px] whitespace-nowrap overflow-hidden text-ellipsis">
            by {event?.organizationName}
          </p>
          <p className="font-poppins font-semibold text-[15px] leading-[29px] mt-[10px] text-link whitespace-nowrap overflow-hidden text-ellipsis">
            <EnvironmentOutlined /> {event?.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;