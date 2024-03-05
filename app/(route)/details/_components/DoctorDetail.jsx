import React from "react";

const DoctorDetail = ({doctor}) => {
  return (
    <div className="p-5 md:px-10">
      <h2 className="font-bold text-[22px]">Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        {/* Doctor Detail  */}
        <div className=" col-span-3">
          {/* {doctor && <DoctorDetail doctor={doctor} />} */}
        </div>
        {/* Doctor Suggestion  */}
        <div>{/* <DoctorSuggestionList /> */}</div>
      </div>
    </div>
  );
};

export default DoctorDetail;
