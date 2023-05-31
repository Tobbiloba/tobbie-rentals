// import { useState, useRef } from "react";
// import { InputLabel, Select, MenuItem } from "@mui/material";
// import { FormControl } from '@mui/material';
// import { BorderAllRounded } from "@mui/icons-material";
// // import FetchData from "../cards/FetchData";
// import Cars from "../cards/Cars";
// // import { SelectChangeEvent } from "@mui/material";
// const SelectRide = () => {
//     // const [brand, setBrand] = useState('')
//     const [brand, setBrand] = useState('');
//     const [type, setType] = useState('')


//     const handleBrandChange = (event) => {
//         // setBrand(event.target.value);
//         console.log(event.target.value)
//         // FetchData(brand, type);
//         console.log(brand)
//     };

//     // const [carType, setCarType] = useState('')
//     const handleTypeChange = (e) => {

//         setType(e.target.value)
//         console.log(e.target.value)
//         console.log(type)
//         // FetchData(brand, type);
//     }

//     // let res = FetchData()
//     return (
//         <div className="w-[100vw] h-[60vh] flex flex-col pt-12 lg:px-44 md:px-44 px-4 bg-slate-200">
//             <div className="flex flex-row border lg:gap-12 md:gap-10 gap-4 items-center ">
//                 <h1 className="lg:mr-16 md:mr-14 mr-6 lg:text-2xl md:text-2xl text-[16px] font-bold text-slate-700">Book your suitable ride</h1>
//                 <div className="flex flex-row lg:gap-12 md:gap-10 gap-4">

//                     <FormControl className="w-32">
//                         <InputLabel id="demo-simple-select-label">Brand</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             value={brand}
//                             label="Brand"
//                             ref={selectRef}
//                             onChange={handleBrandChange}
//                             className="h-12"
//                         >
//                             <MenuItem value='Bmw'>Bmw</MenuItem>
//                             <MenuItem value='Mercedes'>Mercedes</MenuItem>
//                             <MenuItem value='Lexus'>Lexus</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <FormControl className="w-32">
//                         <InputLabel id="demo-simple-select-label">Type</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             value={type}
//                             label="Type"
//                             onChange={handleTypeChange}
//                             className="h-12"
//                         >
//                             <MenuItem value='convertible'>Convertible</MenuItem>
//                             <MenuItem value='hatchBack'>Hatch Back</MenuItem>
//                             <MenuItem value='suv'>Suv</MenuItem>
//                         </Select>
//                     </FormControl>
//                 </div>
//             </div>
//             <div>
//                 {/* <Cars obj={res} /> */}
//             </div>

//         </div>
//     )
// }
// export default SelectRide;

import { useState, useEffect } from "react";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import Cars from "../cards/Cars";
import items from "../cards/Objects";
import { Rating } from "@mui/material"

const SelectRide = () => {
    const [brand, setBrand] = useState("");
    const [type, setType] = useState("");
    const [cars, setCars] = useState([])

    const handleBrandChange = (event) => {
        setBrand(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    console.log(type)

    useEffect(() => {
        if (brand === "" && type === "") {
            // const filteredType = items.filter(car => car.brand === 'mercedes');
            // console.log(filteredType);
            // setCars(filteredType)
            // console.log(cars)
            // console.log("both empty")
        } else if (brand === "" && type !== "") {
            const filteredType = items.filter(car => car.type === type);
            // console.log(filteredType);
            setCars(filteredType)
            // console.log('type is not empty, car is')
        } else if (type === "" && brand !== "") {
            const filteredBrand = items.filter(car => car.brand === type);
            // console.log(filteredBrand);
            setCars(filteredBrand)
            // console.log('car is not empty, type is')
        } else {
            // console.log("none is empty")
            const filteredCars = items.filter(car => car.brand === brand);
            const filteredType = filteredCars.filter(car => car.type === type);
            // console.log(filteredType);
            setCars(filteredType)
        }
    }, [brand, type]);

    return (
        <div className="w-[100vw] px-[1rem] flex flex-col pt-12 lg:px-44 md:px-[2rem] bg-slate-200">
            <div className="flex flex-row border flex-wrap  items-center ">
                <h1 className="lg:mr-16 md:mr-14 mr-6 lg:text-2xl md:text-2xl text-[16px] font-bold text-slate-700">Book your suitable ride</h1>
                <div className="flex flex-row flex-wrap mt-6 lg:mt-0  gap-6">
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
                            <MenuItem value="bmw">Bmw</MenuItem>
                            <MenuItem value="mercedes">Mercedes</MenuItem>
                            <MenuItem value="lexus">Lexus</MenuItem>
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
                            <MenuItem value="convertible">Convertible</MenuItem>
                            <MenuItem value="hatchBack">Hatch Back</MenuItem>
                            <MenuItem value="suv">Suv</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="flex flex-col h-fit md:grid md:grid-cols-3 md:gap-4 md:py-8 md:h-fit overflow-y-scroll border justify-center items-center border-white mt-6">
                {cars.map((item) => {
                    return (
                        <div key={item.id} className="lg:w-[18vw] md:w-[200px] gap-2 md:h-[220px]  w-full md:px-3 mt-5 border border-red-500  flex flex-col bg-white rounded-xl min-h-fit px-3 py-4">
                            <p className="font-bold">{item.name}</p>
                            <img src={`${item.img}`} />
                            <p>{item.price}/Day</p>
                            <Rating name="half-rating-read" defaultValue={item.stars} precision={0.5} readOnly />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SelectRide;
