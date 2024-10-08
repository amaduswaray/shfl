import { Term } from "@/interfaces/spotify";
import Cross from "@icons/cross.svg";
import Dropdown from "@icons/dropdown.svg";
import Dropup from "@icons/dropup.svg";
import { useState } from "react";

interface ModalProps {
  show: boolean;
  setShow: (param: boolean) => void;
}

interface Option {
  value: Term;
  label: string;
}
const options: Option[] = [
  { value: "short_term", label: "4 Weeks" },
  { value: "medium_term", label: "1 Year" },
  { value: "long_term", label: "10 Years" },
];

const maxSongs: number[] = Array.from({ length: 3 }, (_, index) => index + 1);

const HostGame = ({ show, setShow }: ModalProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [songOpen, setSongOpen] = useState<boolean>(false);
  const [songAmount, setSongAmount] = useState<number>(2);
  const [selected, setSelected] = useState<Option>(options[0]);
  const [positions, setPositions] = useState<number[]>([1, 2]);
  console.log(positions);

  const handleTerm = (option: Option) => {
    setSelected(option);
    setOpen(false);
  };

  const handleSongAmount = (value: number) => {
    if (value) {
      setSongAmount(value);
      const newPositions = Array.from(
        { length: value },
        (_, index) => index + 1,
      );
      setPositions(newPositions);
      setSongOpen(false);
    }
  };

  const handlePositions = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (parseInt(e.target.value) > 15) {
      const newPositions = [...positions];
      newPositions[index] = 15;
      setPositions(newPositions);
      return;
    }
    if (isNaN(parseInt(e.target.value))) {
      const newPositions = [...positions];
      newPositions[index] = 0;
      setPositions(newPositions);
      return;
    }
    const newPositions = [...positions];
    const numericValue = parseInt(e.target.value, 10);
    const newValue = Math.min(15, Math.max(1, numericValue));
    newPositions[index] = newValue;
    setPositions(newPositions);
  };

  const submit = () => {
    console.log("submit");
  };

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
              <div className="flex flex-row justify-between items-center">
                <div className="w-2/5">
                  <p className="p-2.5 text-md md:text-lg font-bold text-shfl-white">
                    Song period
                  </p>
                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() => setOpen(!open)}
                      className="bg-shfl-gray placeholder-shfl-pink border border-gray-800 text-shfl-pink text-sm md:text-md font-semibold rounded-md focus:border-shfl-red block w-full p-2.5 hover:bg-gray-600"
                      aria-haspopup="listbox"
                      aria-expanded={open}
                      aria-labelledby="listbox-label"
                    >
                      <span className="flex items-center">
                        <span className=" block truncate">
                          {selected.label}
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 items-center pr-2 hidden sm395:flex">
                        {open ? <Dropup /> : <Dropdown />}
                      </span>
                    </button>

                    {open && (
                      <ul
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-shfl-gray py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        tabIndex={-1}
                        role="listbox"
                        aria-labelledby="listbox-label"
                      >
                        {options.map((option) => (
                          <li
                            key={option.value}
                            className={`relative cursor-pointer select-none py-2 pl-3 pr-9 text-shfl-white hover:bg-gray-600 
                ${selected.value === option.value ? "bg-shfl-red text-shfl-pink" : ""}
              `}
                            id={`listbox-option-${option.value}`}
                            role="option"
                            onClick={() => handleTerm(option)}
                          >
                            <div className="flex items-center">
                              <span
                                className={`ml-3 block truncate ${selected.value === option.value ? "font-medium" : "font-normal"}`}
                              >
                                {option.label}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="w-2/5">
                  <p className="p-2.5 text-md md:text-sm font-bold text-shfl-white">
                    Songs / Person
                  </p>
                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() => setSongOpen(!songOpen)}
                      className="bg-shfl-gray placeholder-shfl-pink border border-gray-800 text-shfl-pink text-sm md:text-md font-semibold rounded-md focus:border-shfl-red block w-full p-2.5 hover:bg-gray-600"
                      aria-haspopup="listbox"
                      aria-expanded={songOpen}
                      aria-labelledby="listbox-label"
                    >
                      <span className="flex items-center justify-center">
                        <span className=" block truncate">{songAmount}</span>
                      </span>
                    </button>

                    {songOpen && (
                      <ul
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-shfl-gray py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        tabIndex={-1}
                        role="listbox"
                        aria-labelledby="listbox-label"
                      >
                        {maxSongs.map((value, index) => (
                          <li
                            key={index}
                            className={`relative cursor-pointer select-none py-2 pl-3 pr-9 text-shfl-white hover:bg-gray-600 
                ${songAmount === value ? "bg-shfl-red text-shfl-pink" : ""}
              `}
                            id={`listbox-option-${index}`}
                            role="option"
                            onClick={() => handleSongAmount(value)}
                          >
                            <div className="flex items-center justify-center">
                              <span
                                className={`ml-3 block truncate ${songAmount === value ? "font-medium" : "font-normal"}`}
                              >
                                {value}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <p className="p-2.5 text-md md:text-sm font-bold text-shfl-white">
                Top Song Selection
              </p>
              <div className="flex-row flex justify-between items-center w-full p-2.5 gap-10">
                {positions.map((value, index) => (
                  <input
                    placeholder={String(value)}
                    key={index}
                    defaultValue={index + 1}
                    onChange={(event) => handlePositions(event, index)}
                    value={value}
                    maxLength={2}
                    type="number"
                    min={1}
                    max={15}
                    className="bg-shfl-gray placeholder-shfl-bg border border-gray-800 text-shfl-pink text-sm md:text-md font-semibold rounded-md focus:border-shfl-red block w-full text-center p-2.5"
                  />
                ))}
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
