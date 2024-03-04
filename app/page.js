"use client"
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";
import Hero from "./_components/Hero";

export default function Home() {

  const [doctorList,setDoctorList]=useState([]);
  useEffect(()=>{
    getDoctorList();
  },[])
  const getDoctorList=()=>{
    GlobalApi.getDoctorList().then(resp=>{
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    })
  }

  return (
  <div>
    {/*Hero section */}
    <Hero />

    {/* search bar + Category*/}
    <CategorySearch />
    

    {/* popular doctor list */}

    <DoctorList doctorList={doctorList}/>
  </div>
  );
}
