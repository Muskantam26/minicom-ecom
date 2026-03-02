import React, { useState } from 'react';
import HeaderPage from '../headerPage';
import { useNavigate } from 'react-router-dom';
import { FaRegEnvelope, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <HeaderPage title={"Account"} />
      
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-[700px]">
          <h2 className="text-[24px] font-bold mb-2 uppercase text-title">Sign In</h2>
          <p className="text-body mb-8 text-[14px]">Insert your account information:</p>

          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full px-4 py-3.5 border border-outline focus:outline-none focus:border-brand transition-colors text-[12px] uppercase placeholder-[#b5b5b5] text-body"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="PASSWORD"
                className="w-full px-4 py-3.5 border border-outline focus:outline-none focus:border-brand transition-colors text-[12px] uppercase placeholder-[#b5b5b5] text-body pr-12"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-body hover:text-brand focus:outline-none transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye size={16} /> : <FaRegEyeSlash size={16} />}
              </button>
            </div>

            <div className="flex items-center gap-2 text-[14px] text-body">
              <span className="text-brand"><FaRegEnvelope size={16} /></span>
              <span>Forgot your </span>
              <span onClick={() => navigate("/forgot-password")} className="font-bold text-title hover:text-brand transition-colors cursor-pointer">Password ?</span>
            </div>

            <div className="text-[14px] text-body mt-2 mb-6">
              If you don't have an account, please <span onClick={() => navigate("/register")} className="text-[#4285f4] hover:underline cursor-pointer">Register Here</span>
            </div>

            <button
              type="submit"
              className="w-full bg-brand hover:bg-brand-hover text-title hover:text-brand-text-hover font-bold py-4 px-8 uppercase transition-colors duration-300 text-[14px]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;