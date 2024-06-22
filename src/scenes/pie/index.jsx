import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import Selecter from '../../components/Select';
import { getUniqueValues, getAllCountryOfRegion, countTopics } from "../../data/DataConverter";
import { useState, useEffect } from "react";
import data from "../../Database/jsondata"

const Pie = () => {
  let [region, ChangeReg] = useState([]);
  let [Country, ChangeCount] = useState([]);
  let [Year, ChangeYear] = useState([]);
  let [Currregion, ChangeCurrReg] = useState("World");
  let [CurrCountry, ChangeCurrCount] = useState("Overall");
  let [CurrYear, ChangeCurrYear] = useState("Overall");
  const [Maindata, setData] = useState([]);
  let [PieData, SetPie] = useState([]);

  useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    // const response = await fetch('/arrow');
    // const jsonData = await response.json();
    const jsonData = data;
    setData(jsonData);
    let opt_reg = getUniqueValues(jsonData, "region");
    let opt_Count = getUniqueValues(jsonData, "country");
    let opt_year = getUniqueValues(jsonData, "end_year");
    opt_year.sort();
    ChangeCount(opt_Count);
    ChangeReg(opt_reg);
    ChangeYear(opt_year);
    // console.log(opt_sec);
    SetPie(countTopics(jsonData, Currregion, CurrCountry, CurrYear));
};

useEffect(() => {
  getData();
}, [Currregion, CurrCountry, CurrYear]);


  function ChangeRegion(region){
    // Onchange of region, chnage list of countries
    ChangeCurrReg(Currregion => region);
    // console.log("Its getting changed");
    let country = getAllCountryOfRegion(Maindata, region);
    // console.log(country);
    ChangeCount(country);
  }

  function getData(){
    let data = countTopics(Maindata, Currregion, CurrCountry, CurrYear);
    console.log(data);
    SetPie(data);
  }

  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart -- Topics" />
      <Selecter defaulty={"World"} options={region} changer={ChangeRegion} Curr = {Currregion} label={"Region"} ></Selecter>
      <Selecter defaulty={"Overall"} options={Country} changer={ChangeCurrCount} Curr = {CurrCountry} label={"Country"} ></Selecter>
      <Selecter defaulty={"Overall"} options={Year} changer={ChangeCurrYear} Curr = {CurrYear} label={"Year"} ></Selecter>
      <br /><br /><br /><br />
      <Box height="75vh">
        <PieChart data={PieData}/>
      </Box>
    </Box>
  );
};

export default Pie;
