import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selecter({ defaulty , options , changer, Curr, label }) {
    // const [Curr, setAge] = React.useState('');

    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };
    return (
        <>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={Curr}
            label="Sort By"
            onChange={(event) => changer(event.target.value)}
            >
            { label !== "Region" ? defaulty!==""? <MenuItem value={defaulty}>
                <em>{defaulty}</em>
            </MenuItem>: null : null}
            {options.map((element, index) => (
                <MenuItem key={index} value={element}>
                {element}
                </MenuItem>
            ))}
            </Select>
            {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
        </>
    );
}