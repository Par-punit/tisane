import type { NextPage } from "next";
import Contact from "../components/Contact/Contact";
import Header from "@/components/Header/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Contact />
    </>
  );
};

export default Home;
