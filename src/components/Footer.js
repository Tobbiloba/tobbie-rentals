import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='flex lg:flex-row md:flex-row flex-col justify-around md:items-center items-start lg:items-center px-8 py-5'>
                <div className='flex flex-row mb-4'>
                    <p className='text-slate-800 text-xl font-bold mr-5'>Tobbie<span className='text-slate-300'>|</span>Rentals</p>
                    <FacebookIcon className="mr-3" />
                    <TwitterIcon className="mr-3" />
                    <InstagramIcon />
                </div>
                {/* <div className='flex flex-row'>
                    <p className='font-bold ml-6 txt-slate-800'>Home</p>
                    <p className='font-bold ml-6 txt-slate-800'>Shop</p>
                    <p className='font-bold ml-6 txt-slate-800'>FAQ</p>
                </div> */}
                <div className="flex fles-row">
                    <LocalPhoneIcon />
                    <p className='font-normal text-slate-900 ml-3'>+234 986 084 4783</p>
                </div>
            </div>

            <div className='bg-slate-200 flex justify-center items-center py-2'>
                <div>
                    <p className='font-bold text-slate-900'>copyright tobbie|rentals lmtd</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;