import Header from "../components/Dashboard/Header";
import ChartJS from "../components/Dashboard/Chart";
import MainTabs from "../components/Dashboard/Tabs/Tabs";
import { useSelector } from "react-redux";

export default function Dashboad() {
  return (
    <>
      <Header />
      <ChartJS />
      <MainTabs />
    </>
  );
}
