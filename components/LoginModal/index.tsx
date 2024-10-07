import { signIn } from "next-auth/react";

type LoginProps = {
  show: boolean;
};

const LoginModal = ({ show }: LoginProps) => {
  return (
    show && (
      <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="p-8 border border-shfl-bg w-full mx-5 shadow-lg rounded-xl bg-shfl-bg">
          <div className="text-center">
            <div className="flex justify-center">
              <div
                onClick={() => signIn("spotify")}
                className="px-6 py-2 my-2 bg-shfl-red text-shfl-white text-lg font-bold rounded-xl shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Login with spotify
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginModal;
