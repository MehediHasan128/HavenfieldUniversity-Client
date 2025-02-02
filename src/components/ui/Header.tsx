import { Layout } from "antd";
import logo from '../../assets/images/logo-blue.png';

const { Header } = Layout;


const HeaderComponent = () => {
    return (
        <Header
        style={{ padding: 0, backgroundColor: "#cfcfcf"}}
        className="shadow-xl"
      >
        <div className="flex justify-between items-center h-full px-5 md:px-10">
          <div className="flex justify-center items-center gap-2">
            <img className="size-10 lg:size-12" src={logo} alt="" />
            <h1 className="text-sm lg:text-xl font-bold leading-4 lg:leading-5">
              <span className="text-[#4f80fa]">Havenfield</span>
              <br />
              University
            </h1>
          </div>
          <div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-5">
            <div className="bg-gray-100 size-8 md:size-9 lg:size-11 rounded-full flex justify-center items-center overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 lg:size-6 text-[#4f80fa]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </div>
            <div className="bg-gray-100 size-8  md:size-9 lg:size-11 rounded-full flex justify-center items-center overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 lg:size-6 text-[#4f80fa]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
            </div>
            <div className="bg-gray-100 size-8  md:size-9 lg:size-11 rounded-full flex justify-center items-center overflow-hidden">
              <img className="w-full" src="https://tinyurl.com/475849hm" alt="" />
            </div>
          </div>
        </div>
      </Header>
    );
};

export default HeaderComponent;