"use client";
import DoctorList from "../../../_components/DoctorList";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../../_utils/GlobalApi";

function Search({params}) {

  const [doctorList,setDoctorList]=useState([]);
  useEffect(()=>{
    console.log(params.cname);
    getDoctors();
  },[])

  const getDoctors=()=>{
    GlobalApi.getDoctorByCategory(params.cname).then(resp=>{
      setDoctorList(resp.data.data);
    })
  }
  return (
    <div className='mt-5'>
        <DoctorList heading={params.cname}
        doctorList={doctorList}
        />
    </div>
  )
}

export default Search
