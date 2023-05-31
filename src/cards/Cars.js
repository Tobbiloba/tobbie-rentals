import { useState, useEffect } from "react"
import { Rating } from "@mui/material"
// import FetchData from "./FetchData";
// import items from '../cards/object'
const Cars = ({ res }) => {


    // const [obj, setObj] = useState([]);
    // const [param1, setParam1] = useState('')
    // const [param2, setParam2] = useState('')


    // useEffect(() => {

    //     const filteredCars = items.filter(car => car.brand === param1);
    //     console.log(filteredCars)

    // }, [param1, param2])

    return (
        <div className="flex flex-row gap-4 mt-8 overflow-x-scroll w-[90vw] border border-black min-h-fit">
            {/* {res.map((item) => {
                return (
                    <div key={item.id} className="lg:w-[18vw] md:w-[20vw] w-[50vw] border border-red-500  flex flex-col bg-white rounded-xl min-h-fit pl-3 pt-4">
                        <p className="font-bold">{item.name}</p>
                        <img src={`${item.img}`} />
                        <p>{item.price}/Day</p>
                        <Rating name="half-rating-read" defaultValue={item.stars} precision={0.5} readOnly />
                    </div>
                )
            })} */}

            {/* <img src={img} /> */}
        </div>
    )
}
export default Cars