import Cross from "@icons/cross.svg";
import axios from "axios";
import { useState } from "react";

interface ModalProps {
  show: boolean;
  setShow: (param: boolean) => void;
}

const JoinGame = ({ show, setShow }: ModalProps) => {
  const [pin, setPin] = useState<string>();

  const handlePin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 6) setPin(e.target.value);
  };

  const submit = () => {
    if (!pin) return;
    console.log("submit");
    axios
      .get("/api/game/join", {
        params: { id: pin },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    show && (
      <div className="fixed inset-0 bg-shfl-bg bg-opacity-100 overflow-y-auto h-full w-full flex items-center justify-center p-5">
        <div className="p-8 w-full max-w-lg h-full bg-inherit">
          <div className="flex flex-row justify-between items-center px-10 top-0 sticky">
            <div className="w-5"></div>
            <h3 className="text-xl font-bold text-shfl-white">Join Game</h3>
            <a
              onClick={() => setShow(false)}
              className="hover:bg-shfl-gray cursor-pointer p-1 rounded-md"
            >
              <Cross />
            </a>
          </div>
          <div className="flex flex-col gap-20 justify-center items-center px-5 py-10 h-5/6 overflow-y-scroll mt-5">
            <input
              placeholder={"PIN"}
              onChange={handlePin}
              value={pin}
              maxLength={6}
              type="number"
              className="bg-inherit placeholder-shfl-lightgray text-shfl-pink text-4xl font-bold focus:border-shfl-lightgray block w-full text-center p-2.5 mt-10"
            />

            <div className="w-full flex justify-center items-center">
              <p className="p-2.5 text-xl font-bold text-shfl-white">
                Enter pin
              </p>
            </div>
            <div className="w-full flex items-center justify-center mb-16">
              <div
                onClick={submit}
                className="px-10 py-2 my-2 bg-shfl-red text-shfl-white text-lg font-bold rounded-xl shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                {" "}
                Join
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default JoinGame;
