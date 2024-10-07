import Cross from "@icons/cross.svg";

interface ModalProps {
  show: boolean;
  setShow: (param: boolean) => void;
}

const Download = ({ show, setShow }: ModalProps) => {
  return (
    show && (
      <div className="fixed inset-0 bg-shfl-bg bg-opacity-100 overflow-y-auto h-full w-full flex items-center justify-center p-5">
        <div className="p-8 w-full max-w-lg shadow-lg h-full rounded-md bg-shfl-gray">
          <div className="flex flex-row justify-between items-center px-10 top-0 sticky">
            <div className="w-5"></div>
            <h3 className="text-3xl font-bold text-shfl-red">SHFL.</h3>
            <a
              onClick={() => setShow(false)}
              className="hover:bg-shfl-gray cursor-pointer p-1 rounded-md"
            >
              <Cross />
            </a>
          </div>
          <div className="text-center h-full overflow-y-scroll"></div>
        </div>
      </div>
    )
  );
};

export default Download;
