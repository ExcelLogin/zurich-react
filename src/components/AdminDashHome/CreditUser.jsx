// import { IoIosSend,IoMdArrowBack } from "react-icons/io";
// import { IoWarning} from "react-icons/io5";
// import { TbWallet,TbCancel } from "react-icons/tb";
// import { CiUser } from "react-icons/ci";
// import { FaCircleInfo } from "react-icons/fa6";
// import { MdTask } from "react-icons/md";
// import { BsBuildingFillCheck } from "react-icons/bs";
// import { RiSecurePaymentFill } from "react-icons/ri";
// import { GiConfirmed } from "react-icons/gi";
// import { useForm,Controller } from "react-hook-form";
// import {Stack} from "@mui/material";
// import FormControl from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import FormHelperText from '@mui/material/FormHelperText';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
//  import InputAdornment from '@mui/material/InputAdornment';


// import { useState,useEffect } from 'react'
// import { useStoreActions,useStoreState } from 'easy-peasy';
// import useAxiosPrivate from '../../hooks/useAxiosPrivate';





// const CreditUser = () => {

//   const usr = useStoreState((state) => state.usr);

//   // const [open, setOpen] =useState(false);
//   // const handleOpen = () => setOpen(true);
//   // const handleClose = () => setOpen(false);









//   const {
//     handleSubmit,
//     register,
//     reset,
//     getFieldState,
//     formState: { errors, isValid,
//      isDirty,
//        isSubmitSuccessful,dirtyFields  },
//     control,
//   } = useForm({
//     // defaultValues:  {
//     //   beneficiaryName: "",
//     //   accountNumber,
//     //   bankName:"",
//     //   amountTransferred:"",
//     //   purposeOfTransfer:"",
//     //   Transactiontype:""
//     // },
// });


// const onSubmit = async (data) => {


//       const response = await axiosPrivate.post(`/Admin/credit/${id}`)


// }








// // Handle success — update balance in store, etc.
// const handleTransferSuccess = (responseData) => {
//   console.log('Transfer done, new balance:', responseData.newBalance);
//   // e.g. dispatch to easy-peasy: setUsr({ ...usr, balance: responseData.newBalance })
//   reset(); // reset the form
// };






//   return (
//     <>

//       <div className="mx-3 pt-10 pb-56 bg-gray-200 lg:mx-10 xl:mx-28">
//                     <h1 className='text-lg font-bold'>Credit User</h1>
//                     {/* <div className='bg-[#5B0F12] rounded-2xl my-1'>
//                         <div className='flex flex-col justify-center items-center mt-5 text-zinc-100' >
//                             <div className=' p-2 border rounded-full shadow-3xl mb-2 mt-2 text-zinc-100'><IoIosSend className='text-2xl'/></div>
//                             <h2 className='text-sm font-semibold'>Local Bank Transfer</h2>
//                             <p className='text-xs'>Send money to any local bank securely</p>
//                         </div>
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,154.7C672,128,768,96,864,122.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
//                     </div> */}
                 
//                     {/* <div className='flex flex-row gap-4 px-3 my-5'><div className='text-current p-2 bg-slate-950 rounded-full shadow-3xl mb-4 text-slate-50' ><TbWallet /></div> <div className='font-bold'><h5>Available balance</h5><div className='text-sm'>${usr?.balance.toFixed(2)}</div></div></div> */}

//                   {/* deposit form */}
//                   <form  onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col p-3  h-auto'>
//                     <Stack spacing={3} >
//                         <div>
//                             <InputLabel htmlFor="tranfer-amount" sx={{ fontSize: '0.775rem' }}>Transfer Amount</InputLabel>
//                             <Controller
//                                 name="amountTransferred"
//                                 control={control}
//                                 // defaultValue=""
//                                 rules={{
//                                     required: 'Enter an amount',
//                                 }}
//                                 render={({ field }) => (
//                                 <FormControl fullWidth size="small"  sx={{'& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: 'black',}}}} error={!!errors.amountTransferred } >
//                                     <OutlinedInput
                                    
//                                         id="tranfer-amount"
//                                         {...field}
//                                         // label="Email"
//                                         type="text"
//                                         startAdornment={
//                                         <InputAdornment position="start">
//                                             $
//                                         </InputAdornment>
//                                         }
                                   
//                                     />
//                                     {errors.amountTransferred && (<FormHelperText>{errors.amountTransferred.message}</FormHelperText>)}
//                                 </FormControl>
//                                 )}
//                             />
//                         </div>

//                         <div className='flex flex-row items-center  gap-1'>
//                             <span className='text-current p-3 bg-gray-300 rounded-full shadow-3xl text-zinc-100'><CiUser className='text-gray-500'/></span> 
//                              <span><h4> Beneficiary Details</h4></span>
//                         </div>

//                         <div>
//                           <InputLabel htmlFor="ben-name" sx={{ fontSize: '0.775rem' }}>Sender's Name</InputLabel>    
//                           <Controller
//                             name="beneficiaryName"
//                             control={control}
//                             defaultValue=""
//                             rules={{
//                               required: 'Email is required',
//                             }}
//                             render={({ field }) => (
//                             <FormControl fullWidth size="small"   sx={{
//                                   '& .MuiOutlinedInput-root': {
//                                     '&.Mui-focused fieldset': {
//                                       borderColor: 'black',
//                                     }
//                                   }
//                                 }} error={!!errors.beneficiaryName} >
//                                 <OutlinedInput
//                                   id="ben-name"
//                                   {...field}
//                                   // label="Email"
//                                   type="text"
//                                   startAdornment={
//                                     <InputAdornment position="start">
//                                       <CiUser />
//                                     </InputAdornment>
//                                   }
//                                 />
//                                 {errors.beneficiaryName && (
//                                 <FormHelperText>{errors.beneficiaryName.message}</FormHelperText>
//                                 )}
//                              </FormControl>
//                             )}
//                           />
//                        </div>

//                        <div>
//                           <InputLabel htmlFor="bank-name" sx={{ fontSize: '0.775rem' }}>Bank Account Number</InputLabel> 
//                            <Controller
//                               name="accountNumber"
//                               control={control}
//                               defaultValue=""
//                               rules={{
//                                 required: 'Email is required',
//                               }}
//                               render={({ field }) => (
//                               <FormControl fullWidth size="small"  sx={{
//                               '& .MuiOutlinedInput-root': {
//                                 '&.Mui-focused fieldset': {
//                                   borderColor: 'black',
//                                 }
//                               }
//                              }} 
//                              error={!!errors.accountNumber} >
  
//                              {/* <InputLabel>Email</InputLabel> */}
//                             <OutlinedInput
//                               id="bank-name"
//                                {...field}
//                                type="text"
//                               startAdornment={
//                               <InputAdornment position="start">
//                                    #
//                               </InputAdornment>
//                                 }
//                             />
//                               {errors.accountNumber && (
//                              <FormHelperText>{errors.accountNumber.message}</FormHelperText>
//                               )}
//                             </FormControl>
//                               )}
//                           />      
//                        </div>

//                        <div>
//                              <InputLabel htmlFor="acc-no" sx={{ fontSize: '0.775rem' }}>Bank Name</InputLabel> 
//                             <Controller     
//                                   name="bankName"
//                                   control={control}
//                                   defaultValue=""
//                                   rules={{
//                                     required: 'Email is required',
//                                   }}
//                                   render={({ field }) => (
//                                     <FormControl fullWidth size="small"   sx={{
//                                '& .MuiOutlinedInput-root': {
//                                 '&.Mui-focused fieldset': {
//                                   borderColor: 'black',
//                                 }
//                                }
//                               }} error={!!errors.bankName} >
                            
//                                       {/* <InputLabel>Email</InputLabel> */}
//                                       <OutlinedInput
//                                       id="acc-no"
//                                         {...field}
//                                         // label="Email"
//                                         type="text"
//                                         startAdornment={
//                                           <InputAdornment position="start">
//                                             <BsBuildingFillCheck />
//                                           </InputAdornment>
//                                         }
//                                       />
//                                       {errors.bankName && (
//                                         <FormHelperText>{errors.bankName.message}</FormHelperText>
//                                       )}
//                                     </FormControl>
//                                   )}
//                               />
//                        </div>

//                        <div>
//                             <InputLabel htmlFor="type" sx={{ fontSize: '0.775rem' }}>Transaction type</InputLabel> 
//                             <Controller
//                                   name="Transactiontype"
//                                   control={control}
//                                   rules={{ required: 'Category is required' }}
//                                   render={({ field }) => (
//                                     <FormControl fullWidth error={!!errors.Transactiontype} size="small">
//                                       {/* <InputLabel>Category</InputLabel> */}
//                                       <Select
//                                       id="type"
//                                         {...field}
//                                       //   label="Category"
//                                       >
//                                         <MenuItem value="Online banking Account">
//                                           <em>Online banking Account</em>
//                                         </MenuItem>
//                                         <MenuItem value="Credit">Credit</MenuItem>
//                                         <MenuItem value="Debit">Debit</MenuItem>
                                        
                                       
//                                       </Select>
//                                       {errors.Transactiontype && (
//                                         <FormHelperText>{errors.Transactiontype.message}</FormHelperText>
//                                       )}
//                                     </FormControl>
//                                   )}
//                                 />
//                         </div>

//                         <div className='flex flex-row items-center  gap-1'>
//                               <span className='text-current p-3 bg-gray-300 rounded-full shadow-3xl text-zinc-100'><FaCircleInfo /></span> 
//                               <span><h4>Additional Information</h4></span>
//                         </div>

//                         <div>
//                             <InputLabel htmlFor="des" sx={{ fontSize: '0.775rem' }}>Description/Memo</InputLabel> 
//                               <Controller
                            
//                               name="purposeOfTransfer"
//                               control={control}
//                               defaultValue=""
//                               rules={{ required: 'Notes are required' }}
//                               render={({ field }) => (
//                                 <FormControl fullWidth size="small"  error={!!errors.purposeOfTransfer}>
//                                   {/* <InputLabel>Notes</InputLabel> */}
//                                   <OutlinedInput
//                                   id="des"
//                                     {...field}
//                                   //   label="Notes"
//                                     multiline
//                                     rows={4}
//                                   />
//                                   {errors.purposeOfTransfer && (
//                                     <FormHelperText>{errors.purposeOfTransfer.message}</FormHelperText>
//                                   )}
//                                 </FormControl>
//                               )}
//                             />
//                          </div>
     
                
                           
                   
                      

//                         <button type="submit" className='w-full flex justify-center items-center rounded-md text-xs font-medium bg-[#5B0F12] text-slate-50 p-2 gap-1 mt-1 mb-3'>
//                            <IoIosSend /> <span>Proceed to Transfer</span>
//                         </button>

//                         <div className='flex justify-center items-center rounded-md text-xs font-medium border-2 border-stone-300 p-1 gap-1 mt-3 mb-3'>
//                           <IoMdArrowBack /> <span>Back to Dashboard</span>
//                         </div>
//                   </Stack>
//                  </form>
//                   <div className='flex flex-row items-center mb-1 mt-4 gap-3'>
//                       <RiSecurePaymentFill /> <p className="text-xs">Secure Deposit</p>
//                   </div>
//                   <p className='text-xs pb-10'>All deposits are processed through secure payment channels. Your financial information is never stored on our server.</p>
              
//        </div>
 
   

      

//   </>
//   )
// }

// export default CreditUser




import { IoIosSend, IoMdArrowBack } from "react-icons/io";
import { TbWallet } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { FaCircleInfo } from "react-icons/fa6";
import { BsBuildingFillCheck } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useForm, Controller } from "react-hook-form";
import { Stack } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const CreditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const usr = useStoreState((state) => state.usr);

  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      amountTransferred: "",
      beneficiaryName: "",
      accountNumber: "",
      bankName: "",
      type: "",
      purposeOfTransfer: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await axiosPrivate.post(`/Admin/credit/${id}`, data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      setSubmitError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const focusStyle = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": { borderColor: "black" },
    },
  };

  return (
    <div className="mx-3 pt-10 pb-56 bg-gray-200 lg:mx-10 xl:mx-28">
      <h1 className="text-lg font-bold">Credit User</h1>

      {/* Success Banner */}
      {submitSuccess && (
        <div className="my-3 px-4 py-3 rounded-md bg-green-100 border border-green-400 text-green-800 text-sm">
          ✅ Transfer submitted successfully.
        </div>
      )}

      {/* Error Banner */}
      {submitError && (
        <div className="my-3 px-4 py-3 rounded-md bg-red-100 border border-red-400 text-red-800 text-sm">
          ⚠️ {submitError}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col p-3 h-auto"
      >
        <Stack spacing={3}>
          {/* Transfer Amount */}
          <div>
            <InputLabel htmlFor="transfer-amount" sx={{ fontSize: "0.775rem" }}>
              Transfer Amount
            </InputLabel>
            <Controller
              name="amountTransferred"
              control={control}
              rules={{ required: "Enter an amount" }}
              render={({ field }) => (
                <FormControl
                  fullWidth
                  size="small"
                  sx={focusStyle}
                  error={!!errors.amountTransferred}
                >
                  <OutlinedInput
                    id="transfer-amount"
                    {...field}
                    type="text"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                  {errors.amountTransferred && (
                    <FormHelperText>
                      {errors.amountTransferred.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </div>

          {/* Beneficiary Section Header */}
          <div className="flex flex-row items-center gap-1">
            <span className="text-current p-3 bg-gray-300 rounded-full shadow-3xl text-zinc-100">
              <CiUser className="text-gray-500" />
            </span>
            <span>
              <h4>Beneficiary Details</h4>
            </span>
          </div>

          {/* Sender's Name */}
          <div>
            <InputLabel htmlFor="ben-name" sx={{ fontSize: "0.775rem" }}>
              Sender's Name
            </InputLabel>
            <Controller
              name="beneficiaryName"
              control={control}
              rules={{ required: "Sender's name is required" }}
              render={({ field }) => (
                <FormControl
                  fullWidth
                  size="small"
                  sx={focusStyle}
                  error={!!errors.beneficiaryName}
                >
                  <OutlinedInput
                    id="ben-name"
                    {...field}
                    type="text"
                    startAdornment={
                      <InputAdornment position="start">
                        <CiUser />
                      </InputAdornment>
                    }
                  />
                  {errors.beneficiaryName && (
                    <FormHelperText>
                      {errors.beneficiaryName.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </div>

          {/* Account Number */}
          <div>
            <InputLabel htmlFor="account-number" sx={{ fontSize: "0.775rem" }}>
              Bank Account Number
            </InputLabel>
            <Controller
              name="accountNumber"
              control={control}
              rules={{ required: "Account number is required" }}
              render={({ field }) => (
                <FormControl
                  fullWidth
                  size="small"
                  sx={focusStyle}
                  error={!!errors.accountNumber}
                >
                  <OutlinedInput
                    id="account-number"
                    {...field}
                    type="text"
                    startAdornment={
                      <InputAdornment position="start">#</InputAdornment>
                    }
                  />
                  {errors.accountNumber && (
                    <FormHelperText>{errors.accountNumber.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </div>

          {/* Bank Name */}
          <div>
            <InputLabel htmlFor="bank-name" sx={{ fontSize: "0.775rem" }}>
              Bank Name
            </InputLabel>
            <Controller
              name="bankName"
              control={control}
              rules={{ required: "Bank name is required" }}
              render={({ field }) => (
                <FormControl
                  fullWidth
                  size="small"
                  sx={focusStyle}
                  error={!!errors.bankName}
                >
                  <OutlinedInput
                    id="bank-name"
                    {...field}
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

          {/* Transaction Type */}
          <div>
            <InputLabel htmlFor="transaction-type" sx={{ fontSize: "0.775rem" }}>
              Transaction Type
            </InputLabel>
            <Controller
              name="type"
              control={control}
              rules={{ required: "Transaction type is required" }}
              render={({ field }) => (
                <FormControl
                  fullWidth
                  size="small"
                  error={!!errors.type}
                >
                  <Select id="transaction-type" {...field}>
                    <MenuItem value="Online banking Account">
                      <em>Online Banking Account</em>
                    </MenuItem>
                    <MenuItem value="Credit">Credit</MenuItem>
                    <MenuItem value="Debit">Debit</MenuItem>
                  </Select>
                  {errors.type && (
                    <FormHelperText>
                      {errors.type.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </div>

          {/* Additional Info Header */}
          <div className="flex flex-row items-center gap-1">
            <span className="text-current p-3 bg-gray-300 rounded-full shadow-3xl text-zinc-100">
              <FaCircleInfo />
            </span>
            <span>
              <h4>Additional Information</h4>
            </span>
          </div>

          {/* Description/Memo */}
          <div>
            <InputLabel htmlFor="description" sx={{ fontSize: "0.775rem" }}>
              Description / Memo
            </InputLabel>
            <Controller
              name="purposeOfTransfer"
              control={control}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <FormControl
                  fullWidth
                  size="small"
                  error={!!errors.purposeOfTransfer}
                >
                  <OutlinedInput
                    id="description"
                    {...field}
                    multiline
                    rows={4}
                  />
                  {errors.purposeOfTransfer && (
                    <FormHelperText>
                      {errors.purposeOfTransfer.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center rounded-md text-xs font-medium bg-[#5B0F12] text-slate-50 p-2 gap-2 mt-1 mb-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <CircularProgress size={14} color="inherit" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <IoIosSend />
                <span>Proceed to Transfer</span>
              </>
            )}
          </button>

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            disabled={isLoading}
            className="flex justify-center items-center rounded-md text-xs font-medium border-2 border-stone-300 p-1 gap-1 mt-3 mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IoMdArrowBack />
            <span>Back to Dashboard</span>
          </button>
        </Stack>
      </form>

      {/* Footer Note */}
      <div className="flex flex-row items-center mb-1 mt-4 gap-3">
        <RiSecurePaymentFill />
        <p className="text-xs">Secure Deposit</p>
      </div>
      <p className="text-xs pb-10">
        All deposits are processed through secure payment channels. Your
        financial information is never stored on our server.
      </p>
    </div>
  );
};

export default CreditUser;