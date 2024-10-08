import Cross from "@icons/cross.svg";

interface ModalProps {
  show: boolean;
  setShow: (param: boolean) => void;
}

const HostGame = ({ show, setShow }: ModalProps) => {
  return (
    show && (
      <div className="fixed inset-0 bg-shfl-bg bg-opacity-100 overflow-y-auto h-full w-full flex items-center justify-center p-5">
        <div className="p-8 w-full max-w-lg h-full bg-inherit">
          <div className="flex flex-row justify-between items-center px-10 top-0 sticky">
            <div className="w-5"></div>
            <h3 className="text-3xl font-bold">
              <span className="text-shfl-white">Create</span>{" "}
              <span className="text-shfl-red">SHFL</span>
            </h3>
            <a
              onClick={() => setShow(false)}
              className="hover:bg-shfl-gray cursor-pointer p-1 rounded-md"
            >
              <Cross />
            </a>
          </div>
          <div className="flex flex-col gap-5 justify-between items-center p-5 h-5/6 overflow-y-scroll mt-5">
            <div className="w-full h-fit py-5 flex flex-col gap-5">
              <div>
                <p className="p-2.5 text-md md:text-lg font-bold text-shfl-white">
                  Title
                </p>
                <input
                  placeholder="Enter Title"
                  className="bg-shfl-gray placeholder-shfl-pink border border-gray-800 text-shfl-red text-sm md:text-md font-semibold rounded-md focus:border-shfl-red block w-full p-2.5"
                />
              </div>
              <div className="flex flex-row justify-between items-center gap-10">
                <div>
                  <p className="p-2.5 text-md md:text-lg font-bold text-shfl-white">
                    Song period
                  </p>
                  <input
                    placeholder="Enter Title"
                    className="bg-shfl-gray placeholder-shfl-pink border border-gray-800 text-shfl-red text-sm md:text-md font-semibold rounded-md focus:border-shfl-red block w-full p-2.5"
                  />
                </div>
                <div>
                  <p className="p-2.5 text-md md:text-sm font-bold text-shfl-white">
                    Songs / Person
                  </p>
                  <input
                    placeholder="Enter Title"
                    className="bg-shfl-gray placeholder-shfl-pink border border-gray-800 text-shfl-red text-sm md:text-md font-semibold rounded-md focus:border-shfl-red block w-full p-2.5"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center mb-16">
              <div className="px-6 py-2 my-2 bg-shfl-red text-shfl-white text-lg font-bold rounded-xl shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
                {" "}
                Complete
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default HostGame;

/* <input
              type="tel"
              id="phone-input"
              aria-describedby="helper-text-explanation"
              className="bg-white border border-gray-800 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-600 block w-full ps-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+47 123 45 678"
              pattern="[0-9\-\+\(\)\s]+"
              minLength={10}
              maxLength={16}
              value={phoneNumber}
              onChange={handlePhoneNumber}
              required
            />
*/
