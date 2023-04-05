import { useState, useEffect } from "react"
import { Rating } from "@mui/material"
import bmwConvertible1 from '../img/bmw convertible/bmw-convertible1.png'
import bmwConvertible2 from '../img/bmw convertible/bmw-convertible2.png'
import bmwConvertible3 from '../img/bmw convertible/bmw-convertible3.png'
import bmwConvertible4 from '../img/bmw convertible/bmw-convertible4.png'

import bmwHatchBack1 from '../img/bmw hatch back/bmw-hatchback1.png';
import bmwHatchBack2 from '../img/bmw hatch back/bmw-hatchback2.png';
import bmwHatchBack3 from '../img/bmw hatch back/bmw-hatchback3.png';

import bmwSuv1 from '../img/bmw suv/bmw-suv1.png';
import bmwSuv2 from '../img/bmw suv/bmw-suv2.png';
import bmwSuv3 from '../img/bmw suv/bmw-suv3.png';

const Cars = ({ brand, type }) => {
    const bmw = [

        {
            id: 1,
            name: 'BMW Convertible 1',
            type: 'convertible',
            img: bmwConvertible1,
            price: '$250',
            stars: '4',
            seats: '5',
            ac: 'yes',
            power: 'petrol',
            transmission: 'automatic'
        },
        {
            id: 2,
            name: 'BMW Convertible 2',
            type: 'convertible',
            img: bmwConvertible2,
            price: '$350',
            stars: '5',
            seats: '5',
            ac: 'yes',
            power: 'petrol',
            transmission: 'automatic'
        },
        {
            id: 3,
            name: 'BMW Convertible 3',
            type: 'convertible',
            img: bmwConvertible3,
            price: '$250',
            stars: '4',
            seats: '5',
            ac: 'yes',
            power: 'petrol',
            transmission: 'automatic'
        },
        {
            id: 4,
            name: 'BMW Convertible 4',
            type: 'convertible',
            img: bmwConvertible4,
            price: '$250',
            stars: '4',
            seats: '5',
            ac: 'yes',
            power: 'petrol',
            transmission: 'automatic'
        },
        {
            id: 5,
            name: 'BMW Suv 1',
            type: 'suv',
            img: { bmwSuv1 },
            price: '$270',
            stars: '4',
            seats: '5',
            ac: 'yes',
            power: 'petrol',
            transmission: 'automatic'
        },
        {
            id: 5,
            name: 'BMW Suv 1',
            type: 'suv',
            img: { bmwSuv1 },
            price: '$270',
            stars: '4',
            seats: '5',
            ac: 'yes',
            power: 'petrol',
            transmission: 'automatic'
        },
        {
            id: 6,
            name: 'BMW Suv 3',
            type: 'suv',
            img: { bmwSuv3 },
            price: '$730',
            stars: '4',
            seats: '5',
            ac: 'yes',
            power: 'petrol',
            transmission: 'automatic'
        }


    ]
    const [carObj, setCarObj] = useState([]);
    const [curBrand, setCurBrand] = useState('bmw')
    const [curType, setCurType] = useState('convertible')


    useEffect(() => {
        if (brand) {
            setCurBrand(brand)
        }
        if (type) {
            setCurType(type)
        }


    }, [brand, type])
    // console.log(curBrand, curType)
    // let result = [];
    let filtered = bmw.filter((item) =>
        item.type === curType
    )
    console.log(filtered)
    let img = bmw[0].img
    console.log(img)


    return (
        <div className="flex flex-row gap-4 mt-8 overflow-x-scroll w-[90vw] border border-black">
            {filtered.map((item) => {
                return (
                    <div key={item.id} className="lg:w-[18vw] md:w-[20vw] w-[50vw] border border-red-500  flex flex-col bg-white rounded-xl h-[40vh] pl-3 pt-4">
                        <p className="font-bold">{item.name}</p>
                        <img src={`${item.img}`} />
                        <p>{item.price}/Day</p>
                        <Rating name="half-rating-read" defaultValue={item.stars} precision={0.5} readOnly />
                    </div>
                )
            })}

            {/* <img src={img} /> */}
        </div>
    )
}
export default Cars