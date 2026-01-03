import visa from '../../assets/visa.png'
import mastercard from '../../assets/master.png'
import american from '../../assets/american.png'
import { IoIosArrowRoundBack,IoIosArrowRoundForward } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
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


const ApplyCrad = () => {



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
    <div className='text-2xl pt-10 pb-32 px-4  md:px-24'>
      <div className='flex justify-between' >
        <div className='text-sm font-bold'>Apply for Virtual Cards</div>
        <div className='flex items-center  bg-slate-950 text-slate-100 text-xs py-1 px-2 rounded-md'> <span><IoIosArrowRoundBack /></span> <span className='ml-1'>Back to cards</span> </div>
      </div>

        <div className='p-5 bg-slate-950 text-gray-100 rounded-t-2xl my-6'>
          <div>
             <div className='flex justify-between'><span className='font-bold text-sm'>Apply for a Virtual Card</span><span className='hidden'>icon</span></div>
             <div className='text-xs md:text-sm'>Get instant access to a virtual card for online payments and subscriptions</div>
          </div>
        </div>


   
        <h1 className='text-sm my-2 font-medium'>Card Details</h1>

        <form className='flex flex-col gap-6'>
          <span className='text-xs'>Card Type</span>
         

         <div className='grid grid-cols-1 gap-2 md:grid-cols-2 '>


          <div className='flex flex-col gap-2'>
              <div class="flex flex-col w-full gap-7">
                  <label class="flex items-center w-full border border-gray-300 rounded-lg py-1 px-2 cursor-pointer hover:bg-gray-50 has-[:checked]:border-gray-600 has-[:checked]:bg-blue-50">
                    <input type="radio" name="option" class="w-4 h-7 mb-4" />
                    <div class="ml-3 flex gap-2 items-center flex-1 text-xs"><div className='flex flex-col'><span className='font-bold'>VISA</span><span className='text-xs'>Accepted worldwide, suitable for most online purchases</span></div></div>
                    <div><img src={visa} alt="" className='w-8 h-6'/></div>
                  </label>                       
              </div>
              <div class="flex flex-col w-full gap-7">
                  <label class="flex items-center w-full border border-gray-300 rounded-lg py-1 px-2 cursor-pointer hover:bg-gray-50 has-[:checked]:border-gray-600 has-[:checked]:bg-blue-50">
                    <input type="radio" name="option" class="w-4 h-7 mb-4" />
                    <div class="ml-3 flex gap-2 items-center flex-1 text-xs"><div className='flex flex-col'><span className='font-bold'>MASTERCARD</span><span className='text-xs'>Global acceptance with enhanced security features</span></div></div>
                    <div><img src={mastercard} alt="" className='w-8 h-6'/></div>
                  </label>                       
              </div>
              <div class="flex flex-col w-full gap-7">
                  <label class="flex items-center w-full border border-gray-300 rounded-lg py-1 px-2 cursor-pointer hover:bg-gray-50 has-[:checked]:border-gray-600 has-[:checked]:bg-blue-50">
                    <input type="radio" name="option" class="w-4 h-7 mb-4" />
                    <div class="ml-3 flex gap-2 items-center flex-1 text-xs"><div className='flex flex-col'><span className='font-bold'>AMERICAN EXPRESS</span><span className='text-xs'>Premium benefits and exclusive rewards program</span></div></div>
                    <div><img src={american} alt="" className='w-8 h-6'/></div>
                  </label>                       
              </div>
          </div>

                          <div>
                            <InputLabel htmlFor="type" sx={{ fontSize: '0.775rem' }}>Currency</InputLabel> 
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
                            <InputLabel htmlFor="type" sx={{ fontSize: '0.775rem' }}>Card Level <span className='text-red-900'>*</span></InputLabel> 
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
                            <InputLabel htmlFor="tranfer-amount" sx={{ fontSize: '0.775rem' }}>Daily spending limit</InputLabel>
                            <Controller
                                name="username"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Email is required',
                                }}
                                render={({ field }) => (
                                <FormControl fullWidth size="small"  sx={{'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: 'black',}}}} error={!!errors.username} >
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
                                    {errors.username && (<FormHelperText>{errors.username.message}</FormHelperText>)}
                                </FormControl>
                                )}
                            />
                            <span className='text-xs'>Limits: $1,000.00 - $10,000.00</span>
                        </div>

          </div>

          <div className='flex flex-col mt-4'>
                <div><h1 className='font-bold'>Billing Information</h1></div>
                  <div>
                        <InputLabel htmlFor="ben-name" sx={{ fontSize: '0.775rem' }}>Card holder Name</InputLabel>    
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
                                // startAdornment={
                                //   <InputAdornment position="start">
                                    
                                //   </InputAdornment>
                                // }
                              />
                              {errors.username && (
                              <FormHelperText>{errors.username.message}</FormHelperText>
                              )}
                            </FormControl>
                          )}
                        />
                        <span className='text-xs'>Name to appear on your card</span>
                </div>


                  <div>
                  <InputLabel htmlFor="des" sx={{ fontSize: '0.775rem' }}>Billing Address</InputLabel> 
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
                        //   label="Notes"
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

          </div>

          <div className='flex flex-row gap-4 mt-6'>
             <div className='text-xl'><IoIosInformationCircle /></div>
             <div>
              <h1 className='font-bold text-xs'>Card Issuance Fee</h1>
              <span className='text-xs'>There is a one-time issuance fee for your new virtual card:</span>
              <ul className='list-disc list-inside text-xs'>
               <li>Standard: $5.00</li>
               <li>Gold: $15.00</li>
               <li>Platinum: $25.00</li>
               <li>Black: $50.00</li>
              </ul>
              <span className='text-xs'>The fee will be charged to your account immediately upon approval.</span>
             </div>
          </div>

          <div className='flex flex-row gap-2 mt-6'>
            <div className='mb-6'><input type="checkbox"/></div>
            <div className='flex flex-col gap-2 text-xs'>
              <span>I agree to the terms and conditions</span>
              <span>By applying for this card, you agree to our Terms of Service and Card Agreement.</span>
            </div>
          </div>

          <button className='flex items-center justify-center bg-slate-700 text-slate-100  p-2 rounded-md hover:bg-slate-800'><span className='text-sm'>Apply for card</span> <IoIosArrowRoundForward className='text-2xl ml-2' /></button>
          

        </form>


      
         <div className="my-10 font-bold text-sm">Frequently Asked Question</div>
    
        <div className="flex flex-col gap-9">
           <div className="">
             <h5 className="font-bold text-sm  mb-4">What is a virtual card</h5>
             <p className="text-xs">Virtual card is a digital payment card that can be used for online transactions. It works just like a physical card but exist only in digital form, providing enhanced security for online purchases </p>
           </div>

           <div>
             <h5 className="font-bold text-sm mb-4">How secure are virtual cards?</h5>
             <p className="text-xs">Virtual cards offer additional security as they are separate from your primary account. You can create cards with specific spending limits and even creat single-use cards for enhanced protection against fraud. </p>
           </div>

           <div>
             <h5 className="font-bold text-sm mb-4">Can i have multiple cards?</h5>
             <p className="text-xs">Yes, you can apply for multiple virtual cards for different purposes - such as one for subscriptions, another for shopping, etc. Each card can have its own limits and settings.</p>
           </div>

            <div>
             <h5 className="font-bold text-sm mb-4">How long does it take to have a virtual card?</h5>
             <p className="text-xs">Virtual cards are typically issued within minutes after approval. Once approved, you can immediately view and use the card details for online transactions.</p>
           </div>

        </div>




      
    </div>
  )
}

export default ApplyCrad
