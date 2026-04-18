


// import { SlSupport } from "react-icons/sl";
// import { CiCircleInfo } from "react-icons/ci";
// import { IoIosSend } from "react-icons/io";
// import { MdOutlineEdit } from "react-icons/md";
// import { useForm, Controller } from "react-hook-form";
// import { Stack, MenuItem, Select, FormControl, FormHelperText, OutlinedInput, InputAdornment } from "@mui/material";
// import useAxiosPrivate from '../../hooks/useAxiosPrivate';



// const CATEGORIES = [
//   { value: "online", label: "Online banking account" },
//   { value: "joint", label: "Joint banking account" },
//   { value: "checking", label: "Checking account" },
//   { value: "savings", label: "Savings account" },
//   { value: "transfer", label: "Transfers & payments" },
//   { value: "other", label: "Other" },
// ];

// const PRIORITIES = [
//   { value: "low", label: "Low", style: "bg-green-50 text-green-800 border-green-300" },
//   { value: "medium", label: "Medium", style: "bg-amber-50 text-amber-800 border-amber-300" },
//   { value: "high", label: "High", style: "bg-red-50 text-red-800 border-red-300" },
// ];

// const inputSx = {
//   "& .MuiOutlinedInput-root": {
//     fontSize: "0.8125rem",
//     "&.Mui-focused fieldset": { borderColor: "#5B0F12", borderWidth: "1px" },
//     "&:hover fieldset": { borderColor: "#5B0F12" },
//   },
// };

// const Support = () => {
//   const {
//     handleSubmit,
//     control,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       title: "",
//       category: "",
//       priority: "low",
//       description: "",
//     },
//   });

//   const selectedPriority = watch("priority");

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="pt-16 pb-56 px-3 lg:px-20 xl:px-24">
//       <div className="max-w-2xl mx-auto flex flex-col gap-5">

//         {/* Page header */}
//         <div>
//           <h1 className="text-lg font-semibold text-gray-900">Support center</h1>
//           <p className="text-xs text-gray-500 mt-0.5">
//             Submit a ticket and our team will get back to you within 24 hours
//           </p>
//         </div>

//         {/* Form card */}
//         <div className="bg-white rounded-2xl border border-gray-200 p-6">

//           {/* Card header */}
//           <div className="flex items-center gap-3 mb-5">
//             <div className="w-10 h-10 rounded-xl bg-[#5B0F12] flex items-center justify-center text-white flex-shrink-0">
//               <SlSupport className="text-base" />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-gray-900">Submit a support ticket</p>
//               <p className="text-xs text-gray-500 mt-0.5">Tell us about your issue and we'll find a solution</p>
//             </div>
//           </div>

//           <hr className="border-gray-100 mb-5" />

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <Stack spacing={2.5}>

//               {/* Ticket title */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-medium text-gray-500">Ticket title</label>
//                 <Controller
//                   name="title"
//                   control={control}
//                   rules={{ required: "Title is required" }}
//                   render={({ field }) => (
//                     <FormControl fullWidth size="small" sx={inputSx} error={!!errors.title}>
//                       <OutlinedInput
//                         {...field}
//                         placeholder="Brief summary of your issue"
//                         startAdornment={
//                           <InputAdornment position="start">
//                             <MdOutlineEdit className="text-gray-400 text-sm" />
//                           </InputAdornment>
//                         }
//                       />
//                       {errors.title && <FormHelperText>{errors.title.message}</FormHelperText>}
//                     </FormControl>
//                   )}
//                 />
//               </div>

//               {/* Category + Priority row */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//                 {/* Category */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-medium text-gray-500">Category</label>
//                   <Controller
//                     name="category"
//                     control={control}
//                     rules={{ required: "Category is required" }}
//                     render={({ field }) => (
//                       <FormControl fullWidth size="small" sx={inputSx} error={!!errors.category}>
//                         <Select {...field} displayEmpty>
//                           <MenuItem value="" disabled>
//                             <span className="text-gray-400 text-sm">Select a category</span>
//                           </MenuItem>
//                           {CATEGORIES.map((c) => (
//                             <MenuItem key={c.value} value={c.value} sx={{ fontSize: "0.8125rem" }}>
//                               {c.label}
//                             </MenuItem>
//                           ))}
//                         </Select>
//                         {errors.category && <FormHelperText>{errors.category.message}</FormHelperText>}
//                       </FormControl>
//                     )}
//                   />
//                 </div>

//                 {/* Priority */}
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-xs font-medium text-gray-500">Priority level</label>
//                   <div className="flex gap-2 mt-1">
//                     {PRIORITIES.map((p) => (
//                       <button
//                         key={p.value}
//                         type="button"
//                         onClick={() => setValue("priority", p.value)}
//                         className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
//                           selectedPriority === p.value
//                             ? p.style
//                             : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
//                         }`}
//                       >
//                         {p.label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//               </div>

//               {/* Description */}
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-medium text-gray-500">Describe your issue</label>
//                 <Controller
//                   name="description"
//                   control={control}
//                   rules={{ required: "Description is required" }}
//                   render={({ field }) => (
//                     <FormControl fullWidth size="small" sx={inputSx} error={!!errors.description}>
//                       <OutlinedInput
//                         {...field}
//                         multiline
//                         rows={5}
//                         placeholder="Provide all relevant details — error messages, steps to reproduce, or any account information that may help."
//                       />
//                       {errors.description && <FormHelperText>{errors.description.message}</FormHelperText>}
//                     </FormControl>
//                   )}
//                 />
//               </div>

//               {/* Notice */}
//               <div className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
//                 <CiCircleInfo className="text-gray-400 mt-0.5 flex-shrink-0 text-base" />
//                 <div className="text-xs text-gray-500 leading-relaxed">
//                   <span className="font-medium text-gray-700 block mb-0.5">Support information</span>
//                   Our team typically responds within 24 hours. For urgent matters, select "High" priority and we'll assist you sooner.
//                 </div>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-sm font-medium rounded-lg transition-colors"
//               >
//                 <IoIosSend className="text-base" />
//                 Submit ticket
//               </button>

//             </Stack>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Support;




import { SlSupport } from "react-icons/sl";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import {
  Stack,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const CATEGORIES = [
  { value: "online", label: "Online banking account" },
  { value: "joint", label: "Joint banking account" },
  { value: "checking", label: "Checking account" },
  { value: "savings", label: "Savings account" },
  { value: "transfer", label: "Transfers & payments" },
  { value: "other", label: "Other" },
];

const PRIORITIES = [
  { value: "low", label: "Low", style: "bg-green-50 text-green-800 border-green-300" },
  { value: "medium", label: "Medium", style: "bg-amber-50 text-amber-800 border-amber-300" },
  { value: "high", label: "High", style: "bg-red-50 text-red-800 border-red-300" },
];

const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontSize: "0.8125rem",
    "&.Mui-focused fieldset": { borderColor: "#5B0F12", borderWidth: "1px" },
    "&:hover fieldset": { borderColor: "#5B0F12" },
  },
};

const Support = () => {
  const axiosPrivate = useAxiosPrivate();

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      priority: "low",
      description: "",
    },
  });

  const selectedPriority = watch("priority");

  const onSubmit = async (data) => {
    try {
      const res = await axiosPrivate.post("/support/ticket", data);

      console.log("Ticket submitted:", res.data);

      // reset form after success
      reset();
    } catch (error) {
      console.error(
        "Error submitting ticket:",
        error?.response?.data || error.message
      );
    }
  };

  return (
    <div className="pt-16 pb-56 px-3 lg:px-20 xl:px-24">
      <div className="max-w-2xl mx-auto flex flex-col gap-5">

        <div>
          <h1 className="text-lg font-semibold text-gray-900">Support center</h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Submit a ticket and our team will get back to you within 24 hours
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#5B0F12] flex items-center justify-center text-white flex-shrink-0">
              <SlSupport className="text-base" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Submit a support ticket</p>
              <p className="text-xs text-gray-500 mt-0.5">
                Tell us about your issue and we'll find a solution
              </p>
            </div>
          </div>

          <hr className="border-gray-100 mb-5" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2.5}>

              {/* Ticket title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-500">Ticket title</label>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: "Title is required" }}
                  render={({ field }) => (
                    <FormControl fullWidth size="small" sx={inputSx} error={!!errors.title}>
                      <OutlinedInput
                        {...field}
                        placeholder="Brief summary of your issue"
                        startAdornment={
                          <InputAdornment position="start">
                            <MdOutlineEdit className="text-gray-400 text-sm" />
                          </InputAdornment>
                        }
                      />
                      {errors.title && (
                        <FormHelperText>{errors.title.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                />
              </div>

              {/* Category + Priority */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500">Category</label>
                  <Controller
                    name="category"
                    control={control}
                    rules={{ required: "Category is required" }}
                    render={({ field }) => (
                      <FormControl fullWidth size="small" sx={inputSx} error={!!errors.category}>
                        <Select {...field} displayEmpty>
                          <MenuItem value="" disabled>
                            <span className="text-gray-400 text-sm">Select a category</span>
                          </MenuItem>
                          {CATEGORIES.map((c) => (
                            <MenuItem key={c.value} value={c.value} sx={{ fontSize: "0.8125rem" }}>
                              {c.label}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.category && (
                          <FormHelperText>{errors.category.message}</FormHelperText>
                        )}
                      </FormControl>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500">Priority level</label>
                  <div className="flex gap-2 mt-1">
                    {PRIORITIES.map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => setValue("priority", p.value)}
                        className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                          selectedPriority === p.value
                            ? p.style
                            : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-500">Describe your issue</label>
                <Controller
                  name="description"
                  control={control}
                  rules={{ required: "Description is required" }}
                  render={({ field }) => (
                    <FormControl fullWidth size="small" sx={inputSx} error={!!errors.description}>
                      <OutlinedInput
                        {...field}
                        multiline
                        rows={5}
                        placeholder="Provide all relevant details..."
                      />
                      {errors.description && (
                        <FormHelperText>{errors.description.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                />
              </div>

              {/* Notice */}
              <div className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                <CiCircleInfo className="text-gray-400 mt-0.5 flex-shrink-0 text-base" />
                <div className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-700 block mb-0.5">
                    Support information
                  </span>
                  Our team typically responds within 24 hours.
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#5B0F12] hover:bg-[#7a1519] text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-60"
              >
                <IoIosSend className="text-base" />
                {isSubmitting ? "Submitting..." : "Submit ticket"}
              </button>

            </Stack>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;