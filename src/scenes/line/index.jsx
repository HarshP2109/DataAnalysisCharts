import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Selecter from '../../components/Select';
import LineChart from "../../components/LineChart";
import { getUniqueValues } from "../../data/DataConverter";
import data from "../../Database/jsondata"

const Line = () => {
  let [Currsector , secChange] = useState("Overall");
  let [CurrYear , yearChange] = useState("2016");
  const [Maindata, setData] = useState([]);
  const [sectores, setSec] = useState([]);
  const [secEndYears, setYear] = useState([]);

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      // const response = await fetch('/arrow');
      // const jsonData = await response.json();
      const jsonData = data;
      setData(jsonData);
      let opt_sec = getUniqueValues(jsonData, "sector");
      let opt_year = getUniqueValues(jsonData, "end_year");
      opt_year.sort();
      setSec(opt_sec);
      setYear(opt_year);
      // console.log(opt_sec);
      // console.log(opt_year);
  };

  // setData(sectores => getAllSectors(Maindata));
  // console.log(optionss);
  let subtitler_up = "Simple Line Chart for "+Currsector;
  let subtitler_dn = "Simple Line Chart for "+Currsector +" in the Year "+CurrYear;


  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle={subtitler_up} />
      <Box height="75vh">
        <Selecter defaulty={"Overall"} options={sectores} changer={secChange} Curr = {Currsector} label={"Sort by"} ></Selecter>
        <LineChart Maindata={Maindata} CurrentS={Currsector} whattosearch={Currsector} BasisON={"end_year"} Constraint={"sector"}/>
      </Box>
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <Header title="Line Chart" subtitle={subtitler_dn} />
      <Box height="75vh">
        <Selecter defaulty={"2016"} options={secEndYears} changer={yearChange} Curr = {CurrYear} label={"Sort by"} ></Selecter>
        <LineChart Maindata={Maindata} CurrentS={Currsector} whattosearch={CurrYear} BasisON={"region"} Constraint={"end_year"} />
      </Box>
    </Box>
  );
};

export default Line;
