import { signIn } from "next-auth/react";
import Link from "next/link";

type LoginProps = {
  show: boolean;
};

const LoginModal = ({ show }: LoginProps) => {
  return (
    show && (
      <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="p-8 border border-shfl-bg w-96 shadow-lg rounded-xl bg-shfl-bg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-shfl-white">SHFL</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-lg text-shfl-white">A party game</p>
            </div>
            <div className="flex justify-center mt-4">
              {/* Navigates back to the base URL - closing the modal */}
              <div
                onClick={() => signIn("spotify")}
                className="px-4 py-2 bg-shfl-red text-shfl-white text-base font-medium rounded-lg shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
