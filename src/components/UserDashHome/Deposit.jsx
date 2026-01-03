import { FaRegUserCircle  } from "react-icons/fa";
import { IoIosSend,IoMdArrowBack } from "react-icons/io";
import { TbWallet,TbCancel } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { FaBitcoin,FaPaypal } from "react-icons/fa6";
import { FaPiggyBank } from "react-icons/fa6";
import InputLabel from '@mui/material/InputLabel';
import { useForm,Controller } from "react-hook-form";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
 import InputAdornment from '@mui/material/InputAdornment';
import { RiSecurePaymentFill } from "react-icons/ri";




const Deposit = () => {


      const {
    handleSubmit,
    register,
    reset,
    getFieldState,
    formState: { errors, isValid,
     isDirty,
       isSubmitSuccessful, },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
    },
  });


  return (
    <>
    <div className="pt-10 pb-56 px-3 lg:px-20 xl:px-24">
          <h1 className='text-xl font-bold'>Deposit Funds</h1>
                 <div className='bg-slate-950 rounded-2xl'>
                    <div className='flex flex-col justify-center items-center mt-5 text-zinc-100' >
                        <div className='text-current p-2 border bg-slate-950 rounded-full shadow-3xl my-2 text-slate-50'><FaPiggyBank className='text-2xl'/></div>
                        <h2 className='text-sm font-bold'>Local Bank Transfer</h2>
                        <p className="text-xs">Choose your preferred deposit method and amount</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,122.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="my-5 text-sm">Select deposit method</div>
    
            <form  className="grid px-5">
                <div class="flex flex-col w-full gap-7">
                    <label class="flex items-center w-full border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-gray-50 has-[:checked]:border-gray-600 has-[:checked]:bg-blue-50">
                        <span class="ml-3 flex gap-2 items-center flex-1 text-xs"><TbWallet/> <span>USDT</span></span>
                        <input type="radio" name="option" class="w-3 h-5 text-gray-600" />
                    </label>
                    
                    <label class="flex items-center w-full border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-gray-50 has-[:checked]:border-gray-600 has-[:checked]:bg-blue-50">
                         <span class="ml-3 flex gap-2 items-center flex-1 text-xs">Bank Transfer</span>
                        <input type="radio" name="option" class="w-3 h-5 text-gray-600" />
                    </label>
                    
                    <label class="flex items-center w-full border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-gray-50 has-[:checked]:border-gray-600 has-[:checked]:bg-blue-50">
                        <span class="ml-3 flex gap-2 items-center flex-1 text-xs"><CiCreditCard1 />PayPal</span>
                        <input type="radio" name="option" class="w-3 h-5 text-gray-600" />
                    </label>
    
                    <label class="flex items-center w-full border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-gray-50 has-[:checked]:border-gray-600 has-[:checked]:bg-blue-50">
                        <span class="ml-3 flex gap-2 items-center flex-1 text-xs"><FaBitcoin/>Bitcoin</span>
                        <input type="radio" name="option" class="w-3 h-5 text-gray-600" />
                    </label>
                </div>
    
    
                <div className="my-9">
                        <InputLabel htmlFor="tranfer-amount" sx={{ fontSize: '0.775rem' }}>Transfer Amount</InputLabel>
                        <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Email is required',
                            }}
                            render={({ field }) => (
                                <FormControl fullWidth   sx={{
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                            borderColor: 'black',
                            padding:'5px'
                            }
                        }
                        }} error={!!errors.username} >
                                <OutlinedInput
                                    id="tranfer-amount"
                                    {...field}
                                    // label="Email"
                                    type="text"
                                    startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                    }
                                    endAdornment={
                                    <InputAdornment position="end">
                                        .00
                                    </InputAdornment>
                                    }
                                />
                                {errors.username && (
                                    <FormHelperText>{errors.username.message}</FormHelperText>
                                )}
                                </FormControl>
                            )}
                            />
                 </div>
    
                   {/* submit form */}
                <div className='flex justify-center items-center rounded-md text-xs font-medium bg-slate-950 text-slate-50 p-1 gap-1 mt-3 mb-3' ><CiCreditCard1 /> <span>Continue to deposit</span></div>
                <div className='flex justify-center items-center rounded-md text-xs font-medium border-2 border-stone-300 p-1 gap-1 mt-3 mb-3'> <IoMdArrowBack /> <span>Back to Dashboard</span></div>                        
            </form>
    
                <div className='flex flex-row items-center mb-1 mt-8 pl-5 gap-3 text-sm'>
                    <RiSecurePaymentFill /> <p>Secure Deposit</p>
                </div>
                <p className='text-xs px-6'>All deposits are processed through secure payment channels. Your financial information is never stored on our server.</p>

    </div> 
    </>
  )
}

export default Deposit
