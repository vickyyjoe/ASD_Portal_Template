import Services from "../components/services.js";
import Head from "next/head";
import axios from "axios";

import React, { Component } from "react";

function service({ ourServices,toolDatas }) {
  return (
    <div className="service">
      <Head>
        <title>Service</title>
        <link rel="shortcut icon" href="kalbe.ico" />
      </Head>
      <Services ourServices={ourServices} toolDatas={toolDatas}></Services>
    </div>
  );
}

export default service;

export async function getServerSideProps() {
  const ourServiceRes = await axios(
    "https://asd-portal-be.herokuapp.com/our-services?_sort=serviceId"
  );
  const ourServices = ourServiceRes.data;

  const toolDataRes = await axios("https://asd-portal-be.herokuapp.com/Tools?_sort=toolId");
  const toolDatas = toolDataRes.data;

  return { props: { ourServices, toolDatas } };
}
