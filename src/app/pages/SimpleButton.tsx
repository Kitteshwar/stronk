'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
interface ButtonProps {
    content: string;
    address: string;
  }
function Button({ content ,address}:ButtonProps){
    return(
        <div className=" max-w-64 m-1 flex-auto bg-indigo-500 rounded-full">
        <Link href={address}>
            {/* /startWorkout */}
          <button className=''>{content}</button>
        </Link>
        </div>);
}
export default Button;