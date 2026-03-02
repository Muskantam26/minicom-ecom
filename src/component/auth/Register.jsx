import React, { useState } from 'react';
import HeaderPage from '../headerPage';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderPage title={"Create Account"} />
      
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-[700px]">

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="FIRST NAME"
                className="w-full px-4 py-3.5 border border-outline focus:outline-none focus:border-brand transition-colors text-[12px] uppercase placeholder-[#b5b5b5] text-body"
                required
              />
            </div>
            
            <div>
              <input
                type="text"
                placeholder="LAST NAME"
                className="w-full px-4 py-3.5 border border-outline focus:outline-none focus:border-brand transition-colors text-[12px] uppercase placeholder-[#b5b5b5] text-body"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full px-4 py-3.5 border border-outline focus:outline-none focus:border-brand transition-colors text-[12px] uppercase placeholder-[#b5b5b5] text-body"
                required
              />
            </div>

            <div>
              <input
                 type="password"
                placeholder="PASSWORD"
                className="w-full px-4 py-3.5 border border-outline focus:outline-none focus:border-brand transition-colors text-[12px] uppercase placeholder-[#b5b5b5] text-body"
                required
              />
            </div>


            <div className="flex items-center gap-2 text-[14px]">
                 <input type="checkbox" id="newsletter" className="w-4 h-4 text-brand border-outline rounded focus:ring-brand cursor-pointer" />
                <label htmlFor="newsletter" className="text-body cursor-pointer">
                    Sign up for our newsletter
                 </label>
            </div>

            <div className="text-[14px] text-body mt-2 mb-6">
              If you have an account, please <span onClick={() => navigate("/login")} className="text-[#4285f4] hover:underline cursor-pointer">Login Here</span>
            </div>

            <button
              type="submit"
              className="w-full bg-brand hover:bg-brand-hover text-title hover:text-brand-text-hover font-bold py-4 px-8 uppercase transition-colors duration-300 text-[14px]"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;