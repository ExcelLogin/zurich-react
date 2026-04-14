


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
  type: "Credit",       
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
         {/* Transaction Type - hidden, defaults to Credit */}
<div className='hidden'>
  <Controller
    name="type"
    control={control}
    defaultValue="Credit"
    rules={{ required: "Transaction type is required" }}
    render={({ field }) => (
      <FormControl fullWidth size="small" error={!!errors.type}>
        <Select id="transaction-type" {...field}>
          <MenuItem value="Online banking Account">
            <em>Online Banking Account</em>
          </MenuItem>
          <MenuItem value="Credit">Credit</MenuItem>
          <MenuItem value="Debit">Debit</MenuItem>
        </Select>
        {errors.type && (
          <FormHelperText>{errors.type.message}</FormHelperText>
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