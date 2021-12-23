import Franchise from "../components/franchise.js";
import Head from "next/head";
import axios from "axios";
import React, { Component } from "react";

function franchise ({procedures,pricings,faqs}){
    return (
      <div className="franchise">
        <Head>
          <title>Franchise</title>
          <link rel="shortcut icon" href="kalbe.ico" />
        </Head>
        <Franchise procedures={procedures} pricings={pricings} faqs = {faqs}></Franchise>
      </div>
    );
}

export default franchise;

export async function getServerSideProps() {
  const procedureRes = await axios("https://asd-portal-be.herokuapp.com/procedures");
  const procedures = procedureRes.data;

  const pricingRes = await axios("https://asd-portal-be.herokuapp.com/pricings");
  const pricings = pricingRes.data;

  const faqRes = await axios("https://asd-portal-be.herokuapp.com/faqs");
  const faqs = faqRes.data;

  return { props: { procedures,pricings,faqs} };
}
