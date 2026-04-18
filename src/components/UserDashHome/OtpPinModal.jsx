


// OtpPinModal.jsx — Two-step: OTP verification → PIN verification → Transfer

import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { MdTask } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi';
import { TbCancel } from 'react-icons/tb';
import { IoWarning } from 'react-icons/io5';
import { IoIosSend } from 'react-icons/io';
import { RiLockPasswordLine } from 'react-icons/ri';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

/**
 * Steps:
 *  idle       → user sees "Send OTP" screen
 *  sending    → OTP email in-flight
 *  otp        → 4-digit OTP entry
 *  verifying  → OTP verification in-flight (POST /debit/verify-otp)
 *  pin        → 4-digit PIN entry
 *  submitting → transfer in-flight (POST /debit)
 *  success    → done
 */

const STEPS = {
  IDLE: 'idle',
  SENDING: 'sending',
  OTP: 'otp',
  VERIFYING: 'verifying',
  PIN: 'pin',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
};

/* ── Reusable 4-box digit input ───────────────────────────────────────────── */
const DigitInput = ({ value, onChange, onKeyDown, inputRef, disabled, filled }) => (
  <input
    ref={inputRef}
    type="text"
    inputMode="numeric"
    maxLength={1}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    disabled={disabled}
    className={`
      w-14 h-16 text-center text-2xl font-bold rounded-lg border-2 outline-none
      bg-white transition-all select-none
      ${filled ? 'border-slate-700' : 'border-zinc-300'}
      focus:border-slate-950 focus:ring-2 focus:ring-slate-200
      disabled:opacity-50
    `}
  />
);

/* ── Error banner ─────────────────────────────────────────────────────────── */
const ErrorBanner = ({ message }) =>
  message ? (
    <div className="flex items-start gap-2 text-xs text-red-600 border border-red-200 bg-red-50 rounded-lg p-3 mb-4">
      <IoWarning className="mt-0.5 shrink-0" />
      <span>{message}</span>
    </div>
  ) : null;

/* ── Main component ───────────────────────────────────────────────────────── */
const OtpPinModal = ({ open, onClose, transferData, onSuccess }) => {
  const [step, setStep] = useState(STEPS.IDLE);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [transferToken, setTransferToken] = useState(null); // issued after OTP ok

  const otpRefs = useRef([]);
  const pinRefs = useRef([]);
  const axiosPrivate = useAxiosPrivate();

  // Reset every time the modal opens fresh
  useEffect(() => {
    if (open) {
      setStep(STEPS.IDLE);
      setOtp(['', '', '', '']);
      setPin(['', '', '', '']);
      setError('');
      setTransferToken(null);
    }
  }, [open]);

  /* ── Step 1: email the OTP ──────────────────────────────────────────────── */
  const handleSendOtp = async () => {
    setStep(STEPS.SENDING);
    setError('');
    try {
      await axiosPrivate.post('/history/debit/initiate');
      setStep(STEPS.OTP);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to send OTP. Try again.');
      setStep(STEPS.IDLE);
    }
  };

  /* ── Step 2: verify OTP → receive transferToken ─────────────────────────── */
  const handleVerifyOtp = async () => {
    const otpStr = otp.join('');
    if (otpStr.length !== 4) return;

    setStep(STEPS.VERIFYING);
    setError('');
    try {
      const { data } = await axiosPrivate.post('/history/debit/verify-otp', { otp: otpStr });
      setTransferToken(data.transferToken);
      setOtp(['', '', '', '']);
      setStep(STEPS.PIN);
      setTimeout(() => pinRefs.current[0]?.focus(), 100);
    } catch (err) {
      setError(err?.response?.data?.message || 'OTP verification failed.');
      setStep(STEPS.OTP);
      setOtp(['', '', '', '']);
      otpRefs.current[0]?.focus();
    }
  };

  /* ── Step 3: submit transfer with PIN + transferToken ───────────────────── */
  const handleConfirmTransfer = async () => {
    const pinStr = pin.join('');
    if (pinStr.length !== 4) return;

    setStep(STEPS.SUBMITTING);
    setError('');
    try {
      const { data } = await axiosPrivate.post('/history/debit', {
        pin: Number(pinStr),
        transferToken,
        beneficiaryName: transferData.beneficiaryName,
        accountNumber: transferData.accountNumber,
        bankName: transferData.bankName,
        amountTransferred: transferData.amountTransferred,
        purposeOfTransfer: transferData.purposeOfTransfer,
        type: transferData.Transactiontype,
      });

      setStep(STEPS.SUCCESS);
      onSuccess?.(data);
    } catch (err) {
      const msg = err?.response?.data?.message || 'Transfer failed. Please try again.';
      // If the transfer token expired, send them back to OTP step
      if (err?.response?.status === 401 && msg.toLowerCase().includes('session')) {
        setError(msg + ' Please re-verify your OTP.');
        setTransferToken(null);
        setPin(['', '', '', '']);
        setStep(STEPS.IDLE);
      } else {
        setError(msg);
        setStep(STEPS.PIN);
        setPin(['', '', '', '']);
        pinRefs.current[0]?.focus();
      }
    }
  };

  /* ── Generic digit-box helpers ──────────────────────────────────────────── */
  const makeHandleChange = (state, setState, refs) => (value, idx) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...state];
    next[idx] = value;
    setState(next);
    if (value && idx < 3) refs.current[idx + 1]?.focus();
  };

  const makeHandleKeyDown = (state, refs) => (e, idx) => {
    if (e.key === 'Backspace' && !state[idx] && idx > 0) {
      refs.current[idx - 1]?.focus();
    }
  };

  const handleOtpChange = makeHandleChange(otp, setOtp, otpRefs);
  const handleOtpKeyDown = makeHandleKeyDown(otp, otpRefs);
  const handlePinChange = makeHandleChange(pin, setPin, pinRefs);
  const handlePinKeyDown = makeHandleKeyDown(pin, pinRefs);

  const otpComplete = otp.every(d => d !== '');
  const pinComplete = pin.every(d => d !== '');

  // Prevent accidental close while requests are in-flight
  const isBusy = [STEPS.SENDING, STEPS.VERIFYING, STEPS.SUBMITTING].includes(step);

  /* ── Progress indicator ─────────────────────────────────────────────────── */
  const progressStep = step === STEPS.SUCCESS ? 3
    : [STEPS.PIN, STEPS.SUBMITTING].includes(step) ? 2
    : [STEPS.OTP, STEPS.VERIFYING].includes(step) ? 1
    : 0;

  /* ── Render ─────────────────────────────────────────────────────────────── */
  return (
    <Modal open={open} onClose={isBusy ? undefined : onClose}>
      <Box className="flex flex-col w-11/12 max-w-md h-auto absolute rounded-xl bg-zinc-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl">

        {/* ── Header ── */}
        <div className="flex flex-row justify-between items-center px-6 pt-6 pb-4 border-b border-zinc-200">
          <div className="flex items-center gap-2 font-bold text-base">
            <MdTask />
            <span>Secure Transfer Verification</span>
          </div>
          {!isBusy && step !== STEPS.SUCCESS && (
            <button
              onClick={onClose}
              className="text-xl leading-none text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              &times;
            </button>
          )}
        </div>

        {/* ── Step progress bar ── */}
        {step !== STEPS.SUCCESS && (
          <div className="flex items-center gap-0 px-6 pt-4 pb-0">
            {['Send OTP', 'Enter OTP', 'Enter OTTC'].map((label, i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all
                      ${i < progressStep ? 'bg-green-600 text-white'
                        : i === progressStep ? 'bg-slate-900 text-white'
                        : 'bg-zinc-300 text-zinc-500'}`}
                  >
                    {i < progressStep ? '✓' : i + 1}
                  </div>
                  <span className={`text-[10px] mt-1 whitespace-nowrap ${i === progressStep ? 'font-semibold text-slate-900' : 'text-zinc-400'}`}>
                    {label}
                  </span>
                </div>
                {i < 2 && (
                  <div className={`flex-1 h-0.5 mx-1 mb-4 transition-all ${i < progressStep ? 'bg-green-600' : 'bg-zinc-300'}`} />
                )}
              </div>
            ))}
          </div>
        )}

        <div className="px-6 py-5">

          {/* ─────────────── STEP: idle / sending ─────────────── */}
          {(step === STEPS.IDLE || step === STEPS.SENDING) && (
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

              <ErrorBanner message={error} />

              <button
                onClick={handleSendOtp}
                disabled={step === STEPS.SENDING}
                className="w-full flex justify-center items-center gap-2 bg-slate-950 text-slate-50 rounded-md py-2.5 text-sm font-medium disabled:opacity-50"
              >
                {step === STEPS.SENDING ? (
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
                disabled={step === STEPS.SENDING}
                className="w-full flex justify-center items-center gap-1 border-2 border-stone-300 rounded-md py-2 text-xs font-medium mt-3 disabled:opacity-50"
              >
                <TbCancel /> Cancel
              </button>
            </>
          )}

          {/* ─────────────── STEP: otp / verifying ─────────────── */}
          {(step === STEPS.OTP || step === STEPS.VERIFYING) && (
            <>
              <div className="flex flex-col items-center text-center gap-1 py-3">
                <h3 className="font-bold text-sm">Enter your OTP</h3>
                <p className="text-xs text-zinc-500">Enter the 4-digit code sent to your email</p>
              </div>

              <div className="flex justify-center gap-3 my-5">
                {otp.map((digit, idx) => (
                  <DigitInput
                    key={idx}
                    inputRef={el => (otpRefs.current[idx] = el)}
                    value={digit}
                    filled={!!digit}
                    disabled={step === STEPS.VERIFYING}
                    onChange={e => handleOtpChange(e.target.value, idx)}
                    onKeyDown={e => handleOtpKeyDown(e, idx)}
                  />
                ))}
              </div>

              <ErrorBanner message={error} />

              <button
                onClick={handleVerifyOtp}
                disabled={!otpComplete || step === STEPS.VERIFYING}
                className="w-full flex justify-center items-center gap-2 bg-slate-950 text-slate-50 rounded-md py-2.5 text-sm font-medium disabled:opacity-40"
              >
                {step === STEPS.VERIFYING ? (
                  <>
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4" />
                    Verifying OTP…
                  </>
                ) : (
                  <><GiConfirmed /> Verify OTP</>
                )}
              </button>

              <button
                onClick={onClose}
                disabled={step === STEPS.VERIFYING}
                className="w-full flex justify-center items-center gap-1 border-2 border-stone-300 rounded-md py-2 text-xs font-medium mt-3 disabled:opacity-50"
              >
                <TbCancel /> Cancel
              </button>

              <p className="text-center text-xs text-zinc-400 mt-4">
                Didn't receive it?{' '}
                <button onClick={handleSendOtp} disabled={step === STEPS.VERIFYING} className="text-slate-800 font-semibold underline disabled:opacity-40">
                  Resend OTP
                </button>
              </p>
            </>
          )}

          {/* ─────────────── STEP: pin / submitting ─────────────── */}
          {(step === STEPS.PIN || step === STEPS.SUBMITTING) && (
            <>
              <div className="flex flex-col items-center text-center gap-2 py-3">
                <div className="p-3 bg-slate-900 rounded-full text-white text-2xl mb-1">
                  <RiLockPasswordLine />
                </div>
                <h3 className="font-bold text-sm">Enter your OTTC PIN</h3>
                <p className="text-xs text-zinc-500 max-w-xs">
                  Enter your 4-digit account PIN to complete this transfer
                </p>
              </div>

              <div className="flex justify-center gap-3 my-5">
                {pin.map((digit, idx) => (
                  <DigitInput
                    key={idx}
                    inputRef={el => (pinRefs.current[idx] = el)}
                    value={digit}
                    filled={!!digit}
                    disabled={step === STEPS.SUBMITTING}
                    onChange={e => handlePinChange(e.target.value, idx)}
                    onKeyDown={e => handlePinKeyDown(e, idx)}
                  />
                ))}
              </div>

              <ErrorBanner message={error} />

              {/* Mini transfer summary */}
              <div className="bg-zinc-200 rounded-lg p-3 mb-4 text-xs text-zinc-600">
                <div className="flex justify-between py-1 border-b border-zinc-300">
                  <span>Recipient</span>
                  <span className="font-medium text-zinc-800">{transferData?.beneficiaryName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-300">
                  <span>Bank</span>
                  <span className="font-medium text-zinc-800">{transferData?.bankName}</span>
                </div>
                 <div className="flex justify-between py-1 border-b border-zinc-300">
                  <span>Fee</span>
                  <span className="font-medium text-zinc-800">0.00</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Amount</span>
                  <span className="font-bold text-slate-900">${Number(transferData?.amountTransferred || 0).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleConfirmTransfer}
                disabled={!pinComplete || step === STEPS.SUBMITTING}
                className="w-full flex justify-center items-center gap-2 bg-slate-950 text-slate-50 rounded-md py-2.5 text-sm font-medium disabled:opacity-40"
              >
                {step === STEPS.SUBMITTING ? (
                  <>
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4" />
                    Processing transfer…
                  </>
                ) : (
                  <><GiConfirmed /> Confirm Transfer</>
                )}
              </button>

              <button
                onClick={onClose}
                disabled={step === STEPS.SUBMITTING}
                className="w-full flex justify-center items-center gap-1 border-2 border-stone-300 rounded-md py-2 text-xs font-medium mt-3 disabled:opacity-50"
              >
                <TbCancel /> Cancel
              </button>
                
                   <p className="text-center text-xs text-zinc-400 mt-4">
                Don't have your OTTC code?{' '}
                <Link
                  to="/Userdashboard/support"
                  className="text-slate-800 font-semibold underline hover:text-slate-600 transition-colors"
                >
                  Contact support
                </Link>
              </p>
              
            </>
          )}

          {/* ─────────────── STEP: success ─────────────── */}
          {step === STEPS.SUCCESS && (
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