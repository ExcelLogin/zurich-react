import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../api/axios';

export default function MultiStepRegistration() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm({
    mode: 'onChange'
  });

  const password = watch('password');

  const nextStep = async () => {
    let fieldsToValidate = [];
    
    if (step === 1) {
      fieldsToValidate = ['firstname', 'lastname', 'middlename', 'dateofbirth', 'email', 'phonenumber'];
    } else if (step === 2) {
      fieldsToValidate = ['address', 'houseaddress', 'city', 'state', 'country', 'zipcode'];
    } else if (step === 3) {
      fieldsToValidate = ['occupation', 'annualincome', 'ssn'];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data) => {
    // console.log('Form submitted:', data);
    // alert('Registration successful! Check console for data.');

    try {
            const response = await axios.post('/register',
                JSON.stringify(data),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
           
            alert(JSON.stringify(response?.data));
        
        } catch (err) {
          console.log('Registration failed: ' + (err.response?.data?.message || err.message));
        }




  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Account Registration</h2>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= num ? 'bg-slate-900 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {num}
                </div>
                <span className="text-xs mt-1 text-slate-900">
                  {num === 1 && 'Personal'}
                  {num === 2 && 'Address'}
                  {num === 3 && 'Employment'}
                  {num === 4 && 'Account'}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div 
              className="bg-slate-900 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div>
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    {...register('firstname', { required: 'First name is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    {...register('lastname', { required: 'Last name is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
                <input
                  {...register('middlename')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  {...register('dateofbirth', { required: 'Date of birth is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.dateofbirth && <p className="text-red-500 text-sm mt-1">{errors.dateofbirth.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  {...register('phonenumber', { required: 'Phone number is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.phonenumber && <p className="text-red-500 text-sm mt-1">{errors.phonenumber.message}</p>}
              </div>
            </div>
          )}

          {/* Step 2: Address Information */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Address Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input
                  {...register('address', { required: 'Address is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">House Address</label>
                <input
                  {...register('houseaddress', { required: 'House address is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.houseaddress && <p className="text-red-500 text-sm mt-1">{errors.houseaddress.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    {...register('city', { required: 'City is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    {...register('state', { required: 'State is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input
                    {...register('country', { required: 'Country is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  <input
                    {...register('zipcode', { required: 'Zip code is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode.message}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Employment Information */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Employment Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                <input
                  {...register('occupation', { required: 'Occupation is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Annual Income</label>
                <input
                  {...register('annualincome', { required: 'Annual income is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.annualincome && <p className="text-red-500 text-sm mt-1">{errors.annualincome.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SSN</label>
                <input
                  type="password"
                  {...register('ssn', { required: 'SSN is required' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.ssn && <p className="text-red-500 text-sm mt-1">{errors.ssn.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passport Number</label>
                <input
                  {...register('passport')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Step 4: Account Setup */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Account Setup</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                  <select
                    {...register('accounttype', { required: 'Account type is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="check">Checking</option>
                    <option value="savings">Savings</option>
                  </select>
                  {errors.accounttype && <p className="text-red-500 text-sm mt-1">{errors.accounttype.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                  <select
                    {...register('currency', { required: 'Currency is required' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select currency</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                  </select>
                  {errors.currency && <p className="text-red-500 text-sm mt-1">{errors.currency.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PIN (4 digits)</label>
                <input
                  type="password"
                  maxLength="4"
                  {...register('pin', { 
                    required: 'PIN is required',
                    pattern: {
                      value: /^\d{4}$/,
                      message: 'PIN must be 4 digits'
                    }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.pin && <p className="text-red-500 text-sm mt-1">{errors.pin.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                <div className="mt-2 text-sm text-gray-600">
                  <p className="font-medium mb-1">Password must contain:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>At least 8 characters long</li>
                    <li>Contains at least one uppercase letter (A-Z)</li>
                    <li>Contains at least one lowercase letter (a-z)</li>
                    <li>Includes at least one number (0-9)</li>
                    <li>Has at least one special character (e.g., !@#$%^&*)</li>
                  </ul>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  {...register('confirmpassword', { 
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.confirmpassword && <p className="text-red-500 text-sm mt-1">{errors.confirmpassword.message}</p>}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Previous
              </button>
            )}
            
            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-700 transition-colors ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors ml-auto"
              >
                Submit Registration
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}