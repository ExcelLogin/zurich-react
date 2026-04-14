import { IoIosSend,IoMdArrowBack } from "react-icons/io";
import { IoWarning} from "react-icons/io5";
import { TbWallet,TbCancel } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { FaCircleInfo } from "react-icons/fa6";
import { MdTask } from "react-icons/md";
import { BsBuildingFillCheck } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { useForm,Controller } from "react-hook-form";
import {Stack} from "@mui/material";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
 import InputAdornment from '@mui/material/InputAdornment';
 import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState,useEffect } from 'react'
import { useStoreActions,useStoreState } from 'easy-peasy';
// import { Link } from "react-router-dom";
 import OtpPinModal from './OtpPinModal';




const LocalTransfer = () => {

  const usr = useStoreState((state) => state.usr);

  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



const [otpModalOpen, setOtpModalOpen] = useState(false);
const [pendingTransferData, setPendingTransferData] = useState(null);





const {
  handleSubmit,
  register,
  reset,
  watch,                        // ← add this
  formState: { errors, isValid, isDirty, isSubmitSuccessful, dirtyFields },
  control,
} = useForm();


const watchedAmount = watch("amountTransferred");
const fee = 0.00;
const amount = parseFloat(watchedAmount) || 0;
const total = amount + fee;
const newBalance = (usr?.balance || 0) - total;
const hasAmount = amount > 0;


const onSubmit = (data) => {
  console.log(data)
  setPendingTransferData(data);
  setOtpModalOpen(true);
};








// Handle success — update balance in store, etc.
const handleTransferSuccess = (responseData) => {
  console.log('Transfer done, new balance:', responseData.newBalance);
  // e.g. dispatch to easy-peasy: setUsr({ ...usr, balance: responseData.newBalance })
  reset(); // reset the form
};






  return (
    <>

      <div className="mx-3 pt-10 pb-56 bg-gray-200 lg:mx-10 xl:mx-28">
                    <h1 className='text-lg font-bold'>Local Transfer</h1>
                    <div className='bg-[#5B0F12] rounded-2xl my-1'>
                        <div className='flex flex-col justify-center items-center mt-5 text-zinc-100' >
                            <div className=' p-2 border rounded-full shadow-3xl mb-2 mt-2 text-zinc-100'><IoIosSend className='text-2xl'/></div>
                            <h2 className='text-sm font-semibold'>Local Bank Transfer</h2>
                            <p className='text-xs'>Send money to any local bank securely</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,122.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </div>
                 
                    <div className='flex flex-row gap-4 px-3 my-5'><div className='text-current p-2 bg-slate-950 rounded-full shadow-3xl mb-4 text-slate-50' ><TbWallet /></div> <div className='font-bold'><h5>Available balance</h5><div className='text-sm'>${usr?.balance.toFixed(2)}</div></div></div>

                  {/* deposit form */}
                  <form  onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col p-3  h-auto'>
                    <Stack spacing={3} >
                        <div>
                            <InputLabel htmlFor="tranfer-amount" sx={{ fontSize: '0.775rem' }}>Transfer Amount</InputLabel>
                            <Controller
                                name="amountTransferred"
                                control={control}
                                // defaultValue=""
                                rules={{
                                    required: 'Enter an amount',
                                }}
                                render={({ field }) => (
                                <FormControl fullWidth size="small"  sx={{'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: 'black',}}}} error={!!errors.amountTransferred } >
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
                                   
                                    />
                                    {errors.amountTransferred && (<FormHelperText>{errors.amountTransferred.message}</FormHelperText>)}
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
                            name="beneficiaryName"
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
                                }} error={!!errors.beneficiaryName} >
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
                                {errors.beneficiaryName && (
                                <FormHelperText>{errors.beneficiaryName.message}</FormHelperText>
                                )}
                             </FormControl>
                            )}
                          />
                       </div>

                       <div>
                          <InputLabel htmlFor="bank-name" sx={{ fontSize: '0.775rem' }}>Bank Account Number</InputLabel> 
                           <Controller
                              name="accountNumber"
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
                             error={!!errors.accountNumber} >
  
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
                              {errors.accountNumber && (
                             <FormHelperText>{errors.accountNumber.message}</FormHelperText>
                              )}
                            </FormControl>
                              )}
                          />      
                       </div>

                       <div>
                             <InputLabel htmlFor="acc-no" sx={{ fontSize: '0.775rem' }}>Bank Name</InputLabel> 
                            <Controller     
                                  name="bankName"
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
                              }} error={!!errors.bankName} >
                            
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
                                      {errors.bankName && (
                                        <FormHelperText>{errors.bankName.message}</FormHelperText>
                                      )}
                                    </FormControl>
                                  )}
                              />
                       </div>
<div className='hidden'>
  <Controller
    name="Transactiontype"
    control={control}
    defaultValue="Debit"
    rules={{ required: 'Category is required' }}
    render={({ field }) => (
      <FormControl fullWidth error={!!errors.Transactiontype} size="small">
        <Select id="type" {...field}>
          <MenuItem value="Online banking Account">
            <em>Online banking Account</em>
          </MenuItem>
          <MenuItem value="Credit">Credit</MenuItem>
          <MenuItem value="Debit">Debit</MenuItem>
        </Select>
        {errors.Transactiontype && (
          <FormHelperText>{errors.Transactiontype.message}</FormHelperText>
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
                            
                              name="purposeOfTransfer"
                              control={control}
                              defaultValue=""
                              rules={{ required: 'Notes are required' }}
                              render={({ field }) => (
                                <FormControl fullWidth size="small"  error={!!errors.purposeOfTransfer}>
                                  {/* <InputLabel>Notes</InputLabel> */}
                                  <OutlinedInput
                                  id="des"
                                    {...field}
                                  //   label="Notes"
                                    multiline
                                    rows={4}
                                  />
                                  {errors.purposeOfTransfer && (
                                    <FormHelperText>{errors.purposeOfTransfer.message}</FormHelperText>
                                  )}
                                </FormControl>
                              )}
                            />
                         </div>
     
                
                

                       {/* total */}


                   <div className=''>
  <div className={`mt-4 p-2 rounded-lg text-sm transition-all duration-300 ${hasAmount ? 'bg-gray-300' : 'bg-gray-200 opacity-70'}`}>
    <div className='flex flex-row items-center gap-3'>
      <BsBuildingFillCheck />
      <span className='font-medium'>Transaction Summary</span>
      {!hasAmount && (
        <span className='text-xs text-gray-400 ml-auto'>Enter amount to preview</span>
      )}
    </div>

    <div className='flex flex-row justify-between my-3'>
      <div className='text-gray-600'>Amount</div>
      <div className={hasAmount ? 'font-medium' : 'text-gray-400'}>
        {hasAmount ? `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '—'}
      </div>
    </div>

    <div className='flex flex-row justify-between my-3'>
      <div className='text-gray-600'>Fees</div>
      <div>{hasAmount ? `$${fee.toFixed(2)}` : '—'}</div>
    </div>

    <div className='flex flex-row justify-between my-3 border-t border-gray-400 pt-2'>
      <div className='font-medium'>Total</div>
      <div className={`font-semibold ${hasAmount ? 'text-[#5B0F12]' : 'text-gray-400'}`}>
        {hasAmount ? `$${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '—'}
      </div>
    </div>

    <div className='flex flex-row justify-between my-3'>
      <div className='text-gray-600'>New balance after transfer</div>
      <div className={`${hasAmount && newBalance >= 0 ? 'text-green-700' : hasAmount ? 'text-red-600 font-medium' : 'text-gray-400'}`}>
        {hasAmount
          ? (newBalance >= 0
              ? `$${newBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
              : 'Insufficient funds')
          : '—'}
      </div>
    </div>
  </div>
</div>
                           
                   
                      

                        <button type="submit" className='w-full flex justify-center items-center rounded-md text-xs font-medium bg-[#5B0F12] text-slate-50 p-2 gap-1 mt-1 mb-3'>
                           <IoIosSend /> <span>Proceed to Transfer</span>
                        </button>

                        <div className='flex justify-center items-center rounded-md text-xs font-medium border-2 border-stone-300 p-1 gap-1 mt-3 mb-3'>
                          <IoMdArrowBack /> <span>Back to Dashboard</span>
                        </div>
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

          <OtpPinModal
            open={otpModalOpen}
            onClose={() => setOtpModalOpen(false)}
            transferData={pendingTransferData}
            onSuccess={handleTransferSuccess}
          />

      

  </>
  )
}

export default LocalTransfer
