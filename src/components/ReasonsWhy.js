import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const ReasonsWhy = () => {
    return (
        <div className='w-[100vw] flex flex-col justify-between items-center px-8 py-16'>
            <p className='text-2xl font-bold mb-16'>Why choose <span className='text-blue-500'>Tobbie</span><span className='text-slate-300'>|</span><span className='text-blue-500'>Rentals</span></p>
            <div className='flex lg:flex-row gap-6 justify-center  overflow-hidden md:flex-row flex-col'>
                <div className='border rounded-xl flex flex-col items-center px-6 lg:w-[25vw] md:w-[30vw] w-[60vw]  md:h-[50vh] h-[37.5vh] lg:h-[50vh] justify-center gap-5'>
                    <CheckBoxIcon style={{ color: 'purple', fontSize: '44px' }} />
                    <p className='lg:text-[1.5vw] md:text-[1.8vw] font-bold'>Fast & Easy Booking</p>
                    <p className="font-light lg:text-[1vw] md:text-[1.3vw] text-[12px] flex text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className='flex flex-col bg-black rounded-xl text-white md:h-[50vh] h-[37.5vh] items-center px-6 lg:w-[25vw] md:w-[30vw] w-[60vw] lg:h-[50vh] justify-center gap-5'>
                    <LocationOnIcon style={{ color: 'orange', fontSize: '44px' }} />
                    <p className='lg:text-[1.5vw] md:text-[1.8vw] font-bold'>Many Pickup Location</p>
                    <p className="font-light lg:text-[1vw] md:text-[1.3vw] text-[12px] flex text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className='border rounded-xl flex flex-col items-center py-4 px-6 lg:w-[25vw] md:w-[30vw] w-[60vw] md:h-[50vh] h-[37.5vh] lg:h-[50vh] justify-center gap-5'>
                    <PeopleAltIcon style={{ color: 'green', fontSize: '44px' }} />
                    <p className='lg:text-[1.5vw] md:text-[1.8vw] font-bold'>Satisfied Customers</p>
                    <p className="font-light lg:text-[1vw] md:text-[1.3vw] text-[12px] flex text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
        </div>
    )
}
export default ReasonsWhy;