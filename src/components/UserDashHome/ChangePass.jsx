import { FaCircleInfo,FaLock } from "react-icons/fa6";
import { FiKey } from "react-icons/fi";
import { LuCircleCheckBig } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { CiWarning } from "react-icons/ci";
import { useForm,Controller } from "react-hook-form";
import { IconButton , Stack, } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
 import InputAdornment from '@mui/material/InputAdornment';
 import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState,useEffect } from 'react'




const ChangePass = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

   const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



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
    <div className='pt-10 pb-32 px-4 text-2xl'>


       <div className="text-sm font-bold">
        Security Settings
       </div>

      

     

        <form className='w-full flex flex-col items-center p-3  h-auto'>
        <Stack spacing={3} >
            <div className="flex flex-col my-4">
            <div className="flex items-center"><span><MdOutlineShield className="text-sm" /></span><span className="text-xs font-bold ml-1">Change Password</span></div>
            <p className="text-xs">Update your account password to maintain security</p>
            </div>
               

               <div>
                <InputLabel htmlFor="tf-pin" sx={{ fontSize: '0.775rem' }}>Current Password</InputLabel> 
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{
                    required: 'Email is required',
                    }}
                    render={({ field }) => (
                    <FormControl fullWidth  size="small"  sx={{
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                    borderColor: 'black',
                }
                }
                }} error={!!errors.username} >
            
                        {/* <InputLabel>Email</InputLabel> */}
                        <OutlinedInput
                        id="tf-pin"
                        {...field}
                        // label="Email"
                        startAdornment={
                            <InputAdornment position="start">
                            <FaLock />
                            </InputAdornment>
                        }
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
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
                <InputLabel htmlFor="tf-pin" sx={{ fontSize: '0.775rem' }}>New Password</InputLabel> 
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{
                    required: 'Email is required',
                    }}
                    render={({ field }) => (
                    <FormControl fullWidth  size="small"  sx={{
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                    borderColor: 'black',
                }
                }
                }} error={!!errors.username} >
            
                        {/* <InputLabel>Email</InputLabel> */}
                        <OutlinedInput
                        id="tf-pin"
                        {...field}
                        // label="Email"
                        startAdornment={
                            <InputAdornment position="start">
                            <FiKey />
                            </InputAdornment>
                        }
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
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
                <InputLabel htmlFor="tf-pin" sx={{ fontSize: '0.775rem' }}>Confirmpassword </InputLabel> 
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{
                    required: 'Email is required',
                    }}
                    render={({ field }) => (
                    <FormControl fullWidth  size="small"  sx={{
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                    borderColor: 'black',
                }
                }
                }} error={!!errors.username} >
            
                        {/* <InputLabel>Email</InputLabel> */}
                        <OutlinedInput
                        id="tf-pin"
                        {...field}
                        // label="Email"
                        startAdornment={
                            <InputAdornment position="start">
                            <LuCircleCheckBig />
                            </InputAdornment>
                        }
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
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



            <div className="flex flex-col gap-3">
            <div className="flex"><span><MdOutlineShield className="text-sm" /></span><span className="text-xs">Password requirement</span></div>
            <div className="text-xs">Ensure that these requirements are met:</div>
            <ul className="text-xs list-disc list-inside mb-4">
                <li>At least 8 characters long</li>
                <li>Contains at least one uppercase letter (A-Z)</li>
                <li>Contains at least one lowercase letter (a-z)</li>
                <li>Includes at least one number (0-9)</li>
                <li>Has at least one special character (e.g., !@#$%^&*)</li>
            </ul>
           </div>
        

            <div className="flex gap-2 text-yellow-800 border-yellow-200">
            <div className="mt-1"><CiWarning className="text-sm" /></div>
            <div className="flex flex-col"><span className="text-xs font-bold">Security Reminder</span><span className="text-xs text-wrap">After changing your password, you'll be required to log in again with your new credentials.<br/> Make sure to remember your new password or store it in a secure password manager.</span></div>
            </div>
            

            <button className="flex items-center justify-center text-xs text-slate-100 bg-slate-700 hover:bg-slate-900 px-4 py-2 rounded-md shadow-md mt-4">
                <span><TbArrowsExchange /></span>
                <span className="text-xs ml-1">Change Password</span>
            </button>

        </Stack>
        </form>
         


       
    </div>
  )
}

export default ChangePass
