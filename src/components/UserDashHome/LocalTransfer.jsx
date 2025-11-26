import { IoIosSend,IoMdArrowBack } from "react-icons/io";
import { FaRegUserCircle  } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import  { IoHome,IoGridSharp  } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import {MdOutlineAppSettingsAlt } from "react-icons/md";
import { TbWallet,TbCancel } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { FaCircleInfo,FaLock } from "react-icons/fa6";
import { MdTask } from "react-icons/md";
import { BsBuildingFillCheck } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
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
import { useStoreActions,useStoreState } from 'easy-peasy';
import { Link } from "react-router-dom";




const LocalTransfer = () => {

  const usr = useStoreState((state) => state.usr);

  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
 <>

 <div className="mx-3 pt-10 pb-14 bg-gray-200 lg:mx-10 xl:mx-28">

  <h1 className='text-lg font-bold'>Local Transfer</h1>
                    <div className='bg-slate-950 rounded-2xl my-1'>
                        <div className='flex flex-col justify-center items-center mt-5 text-zinc-100' >
                            <div className=' p-2 border rounded-full shadow-3xl mb-2 mt-2 text-zinc-100'><IoIosSend className='text-2xl'/></div>
                            <h2 className='text-sm font-semibold'>Local Bank Transfer</h2>
                            <p className='text-xs'>Send money to any local bank securely</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,122.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </div>
                 
                    <div className='flex flex-row gap-4 px-3 my-5'><div className='text-current p-2 bg-slate-950 rounded-full shadow-3xl mb-4 text-slate-50' ><TbWallet /></div> <div className='font-bold'><h5>Available balance</h5><div className='text-sm'>${usr?.balance}</div></div></div>

                  {/* deposit form */}
                  <form className='w-full flex flex-col p-3  h-auto'>
                    <Stack spacing={3} >
                        <div>
                            <InputLabel htmlFor="tranfer-amount" sx={{ fontSize: '0.775rem' }}>Transfer Amount</InputLabel>
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
                        </div>

                        <div className='flex flex-row items-center  gap-1'>
                            <span className='text-current p-3 bg-gray-300 rounded-full shadow-3xl text-zinc-100'><CiUser className='text-gray-500'/></span> 
                             <span><h4> Beneficiary Details</h4></span>
                        </div>

                        <div>
                          <InputLabel htmlFor="ben-name" sx={{ fontSize: '0.775rem' }}>Beneficiary Account Name</InputLabel>    
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
                          <InputLabel htmlFor="bank-name" sx={{ fontSize: '0.775rem' }}>Bank Account Number</InputLabel> 
                           <Controller
                              name="username"
                              control={control}
                              defaultValue=""
                              rules={{
                                required: 'Email is required',
                              }}
                              render={({ field }) => (
                              <FormControl fullWidth size="small"  sx={{
                              '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                  borderColor: 'black',
                                }
                              }
                             }} 
                             error={!!errors.username} >
  
                             {/* <InputLabel>Email</InputLabel> */}
                            <OutlinedInput
                              id="bank-name"
                               {...field}
                               type="text"
                              startAdornment={
                              <InputAdornment position="start">
                                   #
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
                             <InputLabel htmlFor="acc-no" sx={{ fontSize: '0.775rem' }}>Bank Name</InputLabel> 
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
                            
                                      {/* <InputLabel>Email</InputLabel> */}
                                      <OutlinedInput
                                      id="acc-no"
                                        {...field}
                                        // label="Email"
                                        type="text"
                                        startAdornment={
                                          <InputAdornment position="start">
                                            <BsBuildingFillCheck />
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
                            <InputLabel htmlFor="type" sx={{ fontSize: '0.775rem' }}>Transaction type</InputLabel> 
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

                        <div className='flex flex-row items-center  gap-1'>
                              <span className='text-current p-3 bg-gray-300 rounded-full shadow-3xl text-zinc-100'><FaCircleInfo /></span> 
                              <span><h4>Additional Information</h4></span>
                        </div>

                        <div>
                            <InputLabel htmlFor="des" sx={{ fontSize: '0.775rem' }}>Description/Memo</InputLabel> 
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
     

                         <div>
                          <InputLabel htmlFor="tf-pin" sx={{ fontSize: '0.775rem' }}>Transaction Pin</InputLabel> 
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

                       {/* total */}
                        <div className=''>
                            <div className='mt-4 bg-gray-300 p-2 rounded-lg text-sm'> 
                                  <div className='flex flex-row items-center gap-3'>
                                  <BsBuildingFillCheck />
                                  <span> Transaction Summary</span>
                                  </div>
                                <div className='flex flex-row justify-between my-3'>
                                    <div>Amount</div>  <div>$97000</div>    
                                </div>
                                  <div  className='flex flex-row justify-between my-3'>
                                      <div>Fees</div>  <div>0.00</div>    
                                  </div>
                                  <div className='flex flex-row justify-between my-3'>
                                      <div>Total</div>  <div className='tt-bal'>$97000</div>    
                                  </div>
                                  <div  className='flex flex-row justify-between my-3'>
                                      <div>New Blance after transfer</div>  <div>$97000</div>    
                                </div>
                          </div>
                         </div>
                        {/* submit form */}
                        <div className='flex justify-center items-center rounded-md text-xs font-medium bg-slate-950 text-slate-50 p-1 gap-1 mt-3 mb-3' onClick={handleOpen} > <Visibility /> <span>Preview tranfer</span></div>
                        <div className='flex justify-center items-center rounded-md text-xs font-medium border-2 border-stone-300 p-1 gap-1 mt-3 mb-3'> <IoMdArrowBack /> <span>Back to Dashboard</span></div>
                             
                  </Stack>
                 </form>
                  <div className='flex flex-row items-center mb-1 mt-4 gap-3'>
                      <RiSecurePaymentFill /> <p className="text-xs">Secure Deposit</p>
                  </div>
                  <p className='text-xs pb-10'>All deposits are processed through secure payment channels. Your financial information is never stored on our server.</p>
              
 </div>
 
   

         {/* Modal */}
                         <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box className="flex flex-col  w-11/12 h-auto  absolute rounded-lg  bg-zinc-200  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className='flex flex-row justify-between px-7 pt-6 pb-10'> 
                              <div className='flex flex-row justify-center items-center text-lg font-bold gap-2'><MdTask /><span>Confirm Transfer Details</span></div><div>&times;</div>
                            </div>
                            <div className='px-7 py-0'>
                                  <div className=''>
                                    <h5 className='font-bold'>Transfer summary</h5>
                                      <div className='pt-2'> 
                                              <div className='flex flex-row justify-between pt-5 text-sm'>
                                                  <div>Amount</div>  <div className='cfm-tf-data' >$97000</div>    
                                              </div>
                                            <div className='flex flex-row justify-between pt-5 text-sm'>
                                                    <div>Recipient</div>  <div className='cfm-tf-data' >0.00</div>    
                                            </div>
                                              <div className='flex flex-row justify-between pt-5 text-sm'>
                                                    <div>Account Number</div>  <div className='cfm-tf-data' >$97000</div>    
                                            </div>
                                            <div className='flex flex-row justify-between pt-5 text-sm'>
                                                <div>Account Type</div>  <div className='cfm-tf-data'>$97000</div>    
                                            </div>
                                            <div className='flex flex-row justify-between pt-5 text-sm'>
                                                <div>Description</div>  <div className='cfm-tf-data' >$97000</div>    
                                            </div>
                                            <div className='flex flex-row justify-between pt-5 text-sm'>
                                                    <div>Total</div>  <div className='cfm-tf-data tt'>$97000</div>    
                                              </div>
                                            <div className='flex flex-row justify-between pt-5 text-sm'>
                                                    <div> New balance after transfer</div>  <div className='cfm-tf-data'>$97000</div>    
                                            </div>  
                                    </div>
                                  </div>
                                  <div className='flex flex-row p-3 mt-5 mb-4 text-xs text-red-500 border-l-orange-200 border-2 gap-1'>
                                      <div><IoWarning/></div><div><p>Please very the transfer details carefully before proceeding</p></div>
                                  </div>
                                  <div className='flex justify-center items-center rounded-md text-sm font-medium bg-red-950 text-slate-50 p-1 gap-1 mt-3 mb-3'> <GiConfirmed /><span className="text-xs">Confirm Transfer</span></div>
                                   <div className='flex justify-center items-center rounded-md text-sm font-medium border-2 border-stone-300 p-1 gap-1 mt-3 mb-3'><TbCancel /> <span className="text-xs">Cancel</span></div>
                            </div>
                          </Box>
                        </Modal>



 </>
  )
}

export default LocalTransfer
