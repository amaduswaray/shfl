import Cross from "@icons/cross.svg";

interface ModalProps {
  show: boolean;
  setShow: (param: boolean) => void;
}

const Download = ({ show, setShow }: ModalProps) => {
  return (
    show && (
      <div className="fixed inset-0 bg-shfl-bg bg-opacity-100 overflow-y-auto h-full w-full flex items-center justify-center p-5">
        <div className="p-8 w-full max-w-lg h-full bg-inherit">
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
          <div className="flex flex-col gap-2 justify-between items-center p-5 h-5/6 overflow-y-scroll mt-5">
            <h1 className="text-center font-bold text-shfl-red text-3xl my-5">
              Progressive Web App (PWA)
            </h1>

            <p className="text-shfl-white font-semibold text-lg">
              Experience <span className="text-shfl-red">SHFL</span> like never
              before with our fully responsive progressive web app. Enjoy the
              fun game on any device, anytime, anywhere. Read on how you can add
              a shortcut to yout home screen on iOS and Android for quick access
              to the SHFL PWA!
            </p>

            <div className="w-full flex flex-col my-5">
              <h2 className="text-shfl-pink text-xl font-bold my-2">
                Advantages of using the SHFL PWA
              </h2>
              <ul className="list-disc ml-6">
                <li className="text-shfl-white font-semibold text-lg my-1">
                  Cross-platform compatibility: You can use{" "}
                  <span className="text-shfl-red">SHFL</span> on any device with
                  a web browser, including desktops, laptops, smartphones, and
                  tablets.
                </li>
                <li className="text-shfl-white font-semibold text-lg my-1">
                  App-like experience: The{" "}
                  <span className="text-shfl-red">SHFL</span> PWA provides an
                  app-like experience with a responsive design, smooth
                  performance, and easy navigation, making it convenient and
                  user-friendly.
                </li>
                <li className="text-shfl-white font-semibold text-lg my-q">
                  Easy installation: Adding the{" "}
                  <span className="text-shfl-red">SHFL</span> PWA to your home
                  screen on iOS and Android is quick and simple, providing you
                  with one-tap access to your developer news.
                </li>
                <li className="text-shfl-white font-semibold text-lg my-1">
                  Regular updates: As a PWA,{" "}
                  <span className="text-shfl-red">SHFL</span> is continuously
                  updated with new features and improvements, ensuring you have
                  the latest and greatest experience every time you use it.
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-col my-5">
              <h2 className="text-shfl-pink text-xl font-bold my-2">
                Adding <span className="text-shfl-red">SHFL</span> to your home
                screen on iPhone, iPad and Mac
              </h2>
              <p className="text-shfl-white font-semibold text-lg">
                To add a shortcut to the{" "}
                <span className="text-shfl-red">SHFL</span> PWA on iOS, iPadOS
                or MacOS:
              </p>
              <ul className="list-decimal ml-6">
                <li className="text-shfl-white font-semibold text-lg my-2">
                  Open the <span className="text-shfl-red">SHFL</span> web app
                  on Safari browser.
                </li>
                <li className="text-shfl-white font-semibold text-lg my-2">
                  Tap the Share button, then select "Add to Home Screen".
                </li>
                <li className="text-shfl-white font-semibold text-lg my-2">
                  Follow the prompts to add the shortcut to your device's Home
                  screen for quick access.
                </li>
              </ul>
              <p className="text-shfl-white font-semibold text-lg my-5">
                For more information read the{" "}
                <a
                  href="https://support.apple.com/en-il/guide/iphone/iph42ab2f3a7/ios"
                  className="text-blue-600 hover:underline"
                >
                  official guide
                </a>{" "}
                by Apple
              </p>
            </div>

            <div className="w-full flex flex-col my-5">
              <h2 className="text-shfl-pink text-xl font-bold my-2">
                How can I add <span className="text-shfl-red">SHFL</span> to my
                home screen on Android?
              </h2>
              <p className="text-shfl-white font-semibold text-lg">
                Manually add <span className="text-shfl-red">SHFL</span> to the
                mobile home page following the
                <a className="text-blue-600 hover:underline"> guide</a> provided
                by Google.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Download;
