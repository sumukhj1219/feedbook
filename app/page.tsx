import { auth } from '@/auth'
import Header from '@/components/Header'
import InputComponent from '@/components/InputComponent'
import LoginComponent from '@/components/LoginComponent'
import Messages from '@/components/Messages'
import NameComponent from '@/components/NameComponent'
import React from 'react'
import Image from 'next/image'
import UpvoteComponent from '@/components/UpvoteComponent'

const page = async () => {
  const session = await auth().catch(() => null);

  return (
    <div className="flex">
      <div className="w-1/12 bg-gray-100 flex items-center justify-center">
        <NameComponent name={session?.user?.name ?? "Guest"} />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-center p-2">
          <LoginComponent />
          <Header />
        </div>
        
        <div className="p-2">
          <InputComponent />
        </div>
        <Messages />
      </div>
      <UpvoteComponent />
    </div>
  );
}

export default page;
