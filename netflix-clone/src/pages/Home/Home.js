import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import RowList from "../../components/Rows/RowList/RowList";
// import Nav from "../../components/Nav/Nav";

const Home = () => {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
