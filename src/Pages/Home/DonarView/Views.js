import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Views = ({ view }) => {
  const { memberType, viewContext, image, name, email } = view;
  return (
    <div className="flex items-center">
      <div>
        <h2 class="text-primary font-bold text-3xl uppercase text-center">
          {memberType} opinion
        </h2>
        <p className=" text-gray-600 text-lg my-10 text-center">
          <FormatQuoteIcon className=" rotate-[180deg] scale-150 mr-2" />
          <span>{viewContext}</span>
          <FormatQuoteIcon className=" scale-150 ml-2" />
        </p>
        <div className="flex flex-col gap-4 items-center mb-8">
          <div class="avatar p-3 mr-2">
            <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-medium text-center">{name}</h4>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Views;
