import bg1 from '../img/bg1.png'
import bg2 from '../img/bg2.png'
const HomePage = () => {
    return (
        <div >
            <div className="w-[100vw] m-h-fit overflow-x-hidden ">
                <div className="w-[100vw] min-h-fit bg-black lg:pl-12 rounded-br-full flex lg:flex-row md:flex-row flex-col justify-between overflow-hidden"
                // style={{ borderRadius: '0% 0px 150% 200%' }}
                >
                    <div className="lg:w-[27vw] md:w-[27vw] w-[70vw] ml-12 flex flex-col justify-center lg:pt-0 md:pt-0 pt-6">
                        <p className="lg:text-[12px] md:text-[12px] text-[10px] text-white">Car rental Specialist</p>
                        <h1 className="lg:text-[4vw] md:text-[5vw] text-[9vw] font-bold text-white">Rent the Best Car Around the World</h1>
                        <p className="lg:text-[16px] md:text-[16px] text-[12px] mt-6 text-white">We provide the best car options and expert services for the greatest customer experience.</p>
                    </div>
                    <div className="lg:w-[60vw] md:w-[60vw] w-[100vw] min-h-fit rounded-br-full overflow-hidden flex justify-center">
                        <img src='https://wallpaperaccess.com/full/2602598.jpg' className='rotate-30  lg:w-[80vw] md:w-[70vw] w-[100vw] min-h-[55vh]' />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default HomePage;