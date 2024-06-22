import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Selecter from '../../components/Select';
import Chiper from '../../components/Chips';
import { getUniqueValues, BarDataConverter, Search_From_What } from "../../data/DataConverter";
import { useState, useEffect } from "react";
import data from "../../Database/jsondata"
// import TransitionsModal from '../../components/ModalYear';

const Bar = () => {
  // let [Category, ChangeCat] = useState([Overall, region, country, sector ]);
  let [SubCate, ChangeSubCate] = useState([]);
  let [Year, ChangeYear] = useState([]);
  let [CurrCate, ChangeCate] = useState("Overall");
  let [CurrSub, ChangeCurrSub] = useState("None");
  let [ChipList, ChangeList] = useState([]);
  let [ChipOptions, ChangeChip] = useState([]);
  const [Maindata, setData] = useState([]);
  let [BarData, SetBar] = useState([]);

  useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    // const response = await fetch('/arrow');
    // const jsonData = await response.json();
    const jsonData = data;
    setData(jsonData);
    let Options =  getUniqueValues(jsonData,"sector")
    let years = Search_From_What(jsonData, Options, "sector", "end_year");
    years.sort();
    console.log(years);
    // ChangeSubCate(opt_Count);
    ChangeYear(years);
    ChangeChip(Options);
    // console.log(opt_sec);
    // SetPie(countTopics(jsonData, Currregion, CurrCountry, CurrYear));
};

  function changeCategory(name) {
    ChangeCate(name);
    name = name.toLowerCase();
    let subCat = getUniqueValues(Maindata, name);
    ChangeSubCate(subCat);
    let data;
    if(name==="sector"){
      data = getUniqueValues(Maindata, "topic");
      ChangeChip(data);
      console.log(data);
      ChangeList([]);
    }
    else{
      data = getUniqueValues(Maindata, "sector");
      ChangeChip(data);
      ChangeList([]);
    }     
  }

  function changeSubCategory(name) {
    ChangeCurrSub(name);
    let data;
    if(CurrCate==="Sector"){
      data = Search_From_What(Maindata, [name], "sector", "topic");
      console.log(data);
      ChangeChip(data);
    }
    else{
      data = Search_From_What(Maindata, [name], CurrCate.toLowerCase(), "sector");
      console.log(data);
      ChangeChip(data);
    }
  }

  function ChipSetChoosing(data) {
    ChangeList(data);
    let years = Search_From_What(Maindata, data, "sector", "end_year");
    years.sort();
    ChangeYear(years);
    let Bar = BarDataConverter(Maindata, data, years);
    console.log(ChipList);
    SetBar(Bar);
    // console.log(years);   
  }

  return (
    <Box m="20px" >
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      {/* <Selecter defaulty={"Overall"} options={[1,2,3,4,5]}></Selecter> */}
      <Selecter defaulty={""} options={[ "Region", "Country", "Sector"]} changer={changeCategory} Curr={CurrCate} label={"Select Category"}></Selecter>
      <Selecter defaulty={"Overall"} options={SubCate} changer={changeSubCategory} Curr={CurrSub} label={CurrCate === "Overall" ? "Sub-Category" : CurrCate} ></Selecter>
      <Chiper options={ChipOptions} dataChanger={ChipSetChoosing} CurrList={ChipList} label={CurrCate === "Sector" ? "Topics" : "Sector"}></Chiper>
      
      <Box height="75vh">
        <BarChart data={BarData} y_list={ChipList} y_label={CurrCate === 'Sector' ? "Topic" : "Sector"} />
      </Box>
    </Box>
  );
};

export default Bar;
