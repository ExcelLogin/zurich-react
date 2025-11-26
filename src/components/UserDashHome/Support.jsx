import { SlSupport } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { useForm,Controller } from "react-hook-form";
import { IconButton , Stack, } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
 import InputAdornment from '@mui/material/InputAdornment';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";



const Support = () => {

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
    <div className="pt-10 px-3 pb-32 bg-gray-200 lg:px-32">
        <div className="text-xl font-bold"><h2>Support Center</h2></div>
        <div className="p-5">
            <div className="flex items-center gap-2 font-bold"><span><SlSupport /></span> <span>Submit a Support Ticket</span></div>
            <div><p className="text-xs">We're here to help. Tell us about your issue and we'll find a solution</p></div>
        </div>

        <div className="flex items-center justify-center mx-16 my-12 ">
            <span className="bg-gray-300 p-4 rounded-full"><IoIosHelpCircleOutline /></span>
        </div>


       <form>
       <Stack spacing={3} >
         <div>
            <InputLabel htmlFor="ben-name" sx={{ fontSize: '0.775rem' }}>Ticket Title</InputLabel>    
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
                    // label="Email"
                    type="text"
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
            <InputLabel htmlFor="type">Priority Level</InputLabel> 
            <Controller
                name="category"
                control={control}
                rules={{ required: 'Category is required' }}
                render={({ field }) => (
                    <FormControl fullWidth error={!!errors.category} size="small">
                    {/* <InputLabel>Category</InputLabel> */}
                    <Select
                    id="type"
                        {...field}
                    //   label="Category"
                    >
                        <MenuItem value="Online banking Account">
                        <em>Online banking Account</em>
                        </MenuItem>
                        <MenuItem value="meat">Online banking Account</MenuItem>
                        <MenuItem value="fish">Joint banking Account</MenuItem>
                        <MenuItem value="vegetables">Checking Account</MenuItem>
                        <MenuItem value="vegetables">Savings Account</MenuItem>
                    </Select>
                    {errors.category && (
                        <FormHelperText>{errors.category.message}</FormHelperText>
                    )}
                    </FormControl>
                )}
                />
        </div>

        <div>
            <InputLabel htmlFor="des" sx={{ fontSize: '0.775rem' }}>Describe Your issue</InputLabel> 
            <Controller
            name="notes"
            control={control}
            defaultValue=""
            rules={{ required: 'Notes are required' }}
            render={({ field }) => (
                <FormControl fullWidth size="small"  error={!!errors.notes}>
                {/* <InputLabel>Notes</InputLabel> */}
                <OutlinedInput
                id="des"
                    {...field}
                    placeholder="Please provide all relevant detais about your issue so we can help you better"
                    multiline
                    rows={4}
                />
                {errors.notes && (
                    <FormHelperText>{errors.notes.message}</FormHelperText>
                )}
                </FormControl>
            )}
            />
        </div>

       </Stack>
       <div className="text-xs mt-28"><p>Include any relevant details that might help us resolve your issue</p></div>
       <div className="flex gap-1 mt-4"><div><CiCircleInfo className="mt-1"/></div> <div className="flex flex-col text-xs"><span className="font-medium">support Information</span><span className="text-xs">Our support team typically responds within 24 hours. for urgent matters, please select "High Priority" and we'll do our best to assist you sooner.</span></div></div>

       <div className="flex items-center justify-center bg-slate-950 text-slate-50 rounded-lg p-2 gap-1 mt-7"><span><IoIosSend /></span><span>Submit Ticket</span></div>
       </form>


    </div> 
    </>
  )
}

export default Support
