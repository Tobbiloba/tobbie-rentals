import { useState } from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { FormControl } from '@mui/material';
import { BorderAllRounded } from "@mui/icons-material";
import Cars from "../cards/Cars";
// import { SelectChangeEvent } from "@mui/material";
const SelectRide = () => {
    // const [brand, setBrand] = useState('')
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('')


    const handleBrandChange = (event) => {
        setBrand(event.target.value);
    };

    // const [carType, setCarType] = useState('')
    const handleTypeChange = (e) => {
        // console.log(carType)
        setType(e.target.value)
    }
    return (
        <div className="w-[100vw] h-[60vh] flex flex-col pt-12 lg:px-44 md:px-44 px-4 bg-slate-200">
            <div className="flex flex-row border lg:gap-12 md:gap-10 gap-4 items-center ">
                <h1 className="lg:mr-16 md:mr-14 mr-6 lg:text-2xl md:text-2xl text-[16px] font-bold text-slate-700">Book your suitable ride</h1>
                <div className="flex flex-row lg:gap-12 md:gap-10 gap-4">

                    <FormControl className="w-32">
                        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={brand}
                            label="Brand"
                            onChange={handleBrandChange}
                            className="h-12"
                        >
                            <MenuItem value='Bmw'>Bmw</MenuItem>
                            <MenuItem value='Mercedes'>Mercedes</MenuItem>
                            <MenuItem value='Lexus'>Lexus</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="w-32">
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Type"
                            onChange={handleTypeChange}
                            className="h-12"
                        >
                            <MenuItem value='convertible'>Convertible</MenuItem>
                            <MenuItem value='Hatch Back'>Hatch Back</MenuItem>
                            <MenuItem value='Suv'>Suv</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div>
                <Cars brand={brand} type={type} />
            </div>

        </div>
    )
}
export default SelectRide;