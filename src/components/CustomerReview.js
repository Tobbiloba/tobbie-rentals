import { Rating, Avatar } from "@mui/material";
const CustomerReview = () => {
    return (
        <div className="flex flex-col w-[100vw] lg:h-[85vh]  bg-black items-center lg:justify-between md:justify-between justify-center py-[6vh]">
            <h1 className="text-slate-200 text-2xl font-bold">What Customers are saying</h1>
            <div className="lg:pl-0 md:pl-0 pl-[3vw] border-white lg:flex md:flex grid grid-cols-2 gap-1 flex-row lg:w-[100vw] md:w-[100vw] w-[94vw]">
                <div className="bg-slate-100 min-h-fit rounded-xl px-4 py-8 lg:w-[17.5vw] md:w-[17.5vw] w-[40vw] lg:mr-12 md:mr-10 mr-3 lg:h-[62.5vh] md:h-[60vh]">
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    <p className="text-black text-[14px] lg:h-fit md:h-fit h-[420px] overflow-y-hidden my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Except</p>
                    <div className="flex flex-row items-center">
                        <Avatar className="font-bold" sx={{ bgcolor: 'red', width: '50px', height: '50px' }}>TS</Avatar>
                        <p className="ml-4 font-bold text-slate-900">Trap Scott</p>
                    </div>
                </div>
                <div className="bg-slate-100 rounded-xl px-4 py-8 lg:w-[17.5vw] min-h-fitmd:w-[17.5vw] w-[40vw] lg:mr-12 md:mr-10 lg:h-[45vh]">
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    <p className="text-black text-[14px] my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                    <div className="flex flex-row items-center">
                        <Avatar className="font-bold" sx={{ bgcolor: 'red', width: '56px', height: '56px' }}>JN</Avatar>
                        <p className="ml-4 font-bold text-slate-900">John Doe</p>
                    </div>
                </div>
                <div className="bg-slate-100 rounded-xl px-4 py-8 lg:w-[17.5vw] md:w-[17.5vw] lg:mt-0 md:mt-0 mt-4  w-[40vw] lg:mr-12 md:mr-10 mr-3 min-h-fit lg:h-[62.5vh] md:h-[60vh]">
                    <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                    <p className="text-black text-[14px] lg:h-fit md:h-fit h-[420px] overflow-y-hidden my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte</p>
                    <div className="flex flex-row items-center">
                        <Avatar className="font-bold" sx={{ bgcolor: 'red', width: '56px', height: '56px' }}>MJ</Avatar>
                        <p className="ml-4 font-bold text-slate-900">Micheal Jackson</p>
                    </div>
                </div>
                <div className="bg-slate-100 rounded-xl px-4 py-8 lg:w-[17.5vw] md:w-[17.5vw] lg:mt-0 md:mt-0 mt-4 w-[40vw] min-h-fit lg:mr-12 md:mr-10 lg:h-[45vh]">
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    <p className="text-black text-[14px] my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden</p>
                    <div className="flex flex-row items-center">
                        <Avatar className="font-bold" sx={{ bgcolor: 'red', width: '56px', height: '56px' }}>JD</Avatar>
                        <p className="ml-4 font-bold text-slate-900">Jenny Nelson</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerReview;