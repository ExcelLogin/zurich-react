// OtpPinModal.jsx  — drop this alongside LocalTransfer or inline it

import { useState, useRef, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { MdTask } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi';
import { TbCancel } from 'react-icons/tb';
import { IoWarning } from 'react-icons/io5';
import { IoIosSend } from 'react-icons/io';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";





const OtpPinModal = ({ open, onClose, transferData, onSuccess }) => {
  const [step, setStep] = useState('idle'); // 'idle' | 'sending' | 'otp' | 'verifying' | 'success'
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);
 const axiosPrivate = useAxiosPrivate();



  // Reset state every time modal opens
  useEffect(() => {
    if (open) {
      setStep('idle');
      setPin(['', '', '', '']);
      setError('');
    }
  }, [open]);

  // ── Step 1: hit /debit/initiate to email the OTP ──────────────────────────
  const handleSendOtp = async () => {
    setStep('sending');
    setError('');
    try {
      await axiosPrivate.post('/history/debit/initiate'); // token attached via interceptor
      setStep('otp');
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to send OTP. Try again.');
      setStep('idle');
    }
  };

  // ── Step 2: hit /debit with otp + transfer body ───────────────────────────
  const handleConfirm = async () => {
    const otp = pin.join('');
    if (otp.length !== 4) return;

    setStep('verifying');
    setError('');
    try {
      const { data } = await axiosPrivate.post('/history/debit', {
        otp,
        beneficiaryName:     transferData.beneficiaryName,
        accountNumber:       transferData.accountNumber,
        bankName:            transferData.bankName,
        amountTransferred:   transferData.amountTransferred,
        purposeOfTransfer:   transferData.purposeOfTransfer,
        type:                transferData.Transactiontype,
      });

      setStep('success');
      onSuccess?.(data); // pass newBalance etc. back up
    } catch (err) {
      setError(err?.response?.data?.message || 'OTP verification failed.');
      setStep('otp');
      setPin(['', '', '', '']);
      inputRefs.current[0]?.focus();
    }
  };

  // ── PIN input helpers ─────────────────────────────────────────────────────
  const handlePinChange = (value, idx) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...pin];
    next[idx] = value;
    setPin(next);
    if (value && idx < 3) inputRefs.current[idx + 1]?.focus();
  };

  const handlePinKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !pin[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const pinComplete = pin.every(d => d !== '');

  // ── Shared modal wrapper ──────────────────────────────────────────────────
  return (
    <Modal open={open} onClose={step === 'verifying' || step === 'sending' ? undefined : onClose}>
      <Box className="flex flex-col w-11/12 max-w-md h-auto absolute rounded-xl bg-zinc-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">

        {/* ── Header ── */}
        <div className="flex flex-row justify-between items-center px-6 pt-6 pb-4 border-b border-zinc-200">
          <div className="flex items-center gap-2 font-bold text-base">
            <MdTask />
            <span>Secure Transfer PIN</span>
          </div>
          {step !== 'verifying' && step !== 'sending' && (
            <button onClick={onClose} className="text-xl text-zinc-400 hover:text-zinc-700">&times;</button>
          )}
        </div>

        <div className="px-6 py-5">

          {/* ─────────────── STEP: idle / sending ─────────────── */}
          {(step === 'idle' || step === 'sending') && (
            <>
              <div className="flex flex-col items-center text-center gap-2 py-4">
                <div className="p-3 bg-slate-900 rounded-full text-white text-2xl mb-1">
                  <IoIosSend />
                </div>
                <h3 className="font-bold text-sm">Verify your identity</h3>
                <p className="text-xs text-zinc-500 max-w-xs">
                  A 4-digit OTP will be sent to your registered email address to authorise this transfer.
                </p>
              </div>

              {error && (
                <div className="flex items-start gap-2 text-xs text-red-600 border border-red-200 bg-red-50 rounded-lg p-3 mb-4">
                  <IoWarning className="mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                onClick={handleSendOtp}
                disabled={step === 'sending'}
                className="w-full flex justify-center items-center gap-2 bg-slate-950 text-slate-50 rounded-md py-2.5 text-sm font-medium disabled:opacity-50"
              >
                {step === 'sending' ? (
                  <>
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4" />
                    Sending OTP…
                  </>
                ) : (
                  'Send OTP to my email'
                )}
              </button>

              <button
                onClick={onClose}
                disabled={step === 'sending'}
                className="w-full flex justify-center items-center gap-1 border-2 border-stone-300 rounded-md py-2 text-xs font-medium mt-3"
              >
                <TbCancel /> Cancel
              </button>
            </>
          )}

          {/* ─────────────── STEP: otp / verifying ─────────────── */}
          {(step === 'otp' || step === 'verifying') && (
            <>
              <div className="flex flex-col items-center text-center gap-1 py-3">
                <h3 className="font-bold text-sm">Enter your OTP</h3>
                <p className="text-xs text-zinc-500">Enter the 4-digit code sent to your email</p>
              </div>

              {/* PIN boxes */}
              <div className="flex justify-center gap-3 my-5">
                {pin.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={el => inputRefs.current[idx] = el}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={e => handlePinChange(e.target.value, idx)}
                    onKeyDown={e => handlePinKeyDown(e, idx)}
                    disabled={step === 'verifying'}
                    className={`
                      w-14 h-16 text-center text-2xl font-bold rounded-lg border-2 outline-none
                      bg-white transition-all
                      ${digit ? 'border-slate-700' : 'border-zinc-300'}
                      focus:border-slate-950 focus:ring-2 focus:ring-slate-200
                      disabled:opacity-50
                    `}
                  />
                ))}
              </div>

              {error && (
                <div className="flex items-start gap-2 text-xs text-red-600 border border-red-200 bg-red-50 rounded-lg p-3 mb-4">
                  <IoWarning className="mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                onClick={handleConfirm}
                disabled={!pinComplete || step === 'verifying'}
                className="w-full flex justify-center items-center gap-2 bg-red-950 text-slate-50 rounded-md py-2.5 text-sm font-medium disabled:opacity-40"
              >
                {step === 'verifying' ? (
                  <>
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4" />
                    Verifying…
                  </>
                ) : (
                  <><GiConfirmed /> Confirm Transfer</>
                )}
              </button>

              <button
                onClick={onClose}
                disabled={step === 'verifying'}
                className="w-full flex justify-center items-center gap-1 border-2 border-stone-300 rounded-md py-2 text-xs font-medium mt-3"
              >
                <TbCancel /> Cancel
              </button>

              <p className="text-center text-xs text-zinc-400 mt-4">
                Didn't receive it?{' '}
                <button onClick={handleSendOtp} className="text-slate-800 font-semibold underline">
                  Resend OTP
                </button>
              </p>
            </>
          )}

          {/* ─────────────── STEP: success ─────────────── */}
          {step === 'success' && (
            <div className="flex flex-col items-center text-center py-6 gap-3">
              <div className="text-5xl">✅</div>
              <h3 className="font-bold text-base">Transfer Successful!</h3>
              <p className="text-xs text-zinc-500">
                Your transfer has been processed and your balance has been updated.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-slate-950 text-slate-50 rounded-md py-2.5 px-8 text-sm font-medium"
              >
                Done
              </button>
            </div>
          )}

        </div>
      </Box>
    </Modal>
  );
};

export default OtpPinModal;




