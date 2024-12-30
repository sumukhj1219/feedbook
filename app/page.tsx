import { auth } from '@/auth';
import Header from '@/components/Header';
import InputComponent from '@/components/InputComponent';
import LoginComponent from '@/components/LoginComponent';
import Messages from '@/components/Messages';
import NameComponent from '@/components/NameComponent';
import React from 'react';
import UpvoteComponent from '@/components/UpvoteComponent';
import { CreateNewWorkspace } from '@/components/createNewWorkspace';

const page = async () => {
  const session = await auth().catch(() => null);

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/tree-forest.jpg)"
      // }}
    >
      <div className="flex w-full">
        <div className="w-1/12 bg-transparent flex items-center justify-center">
          <NameComponent name={session?.user?.name ?? "Guest"} />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-center p-2">
            <LoginComponent />
            <Header />
          </div>

          <div className="p-2">
          <CreateNewWorkspace />
            <InputComponent />
          </div>
          <Messages />
        </div>
        <UpvoteComponent />
      </div>
    </div>
  );
};

export default page;
