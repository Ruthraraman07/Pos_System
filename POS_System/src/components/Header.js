import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome for icons
import { faBell, faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        // Main container for the header with flexbox for layout
        <div className="flex justify-between items-center bg-white p-4 ">
            <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md px-2 py-3 focus-within:ring-2 focus-within:ring-blue-500 space-x-2">
                    <svg
                        className="w-5 h-5 text-gray-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                        ></path>
                    </svg>
                        <input
                            type="text"
                            placeholder="Search Products"
                            className="outline-none w-[28rem]"
                        />
                </div>
                <div className="flex items-center space-x-4">  {/*Container for notification and user icon*/}
                    <div className="relative cursor-pointer text-gray-500">
                        <FontAwesomeIcon icon={faBell} size="2x" />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-600"></span>
                    </div>  {/*Notification icon*/}
                    <div className="cursor-pointer">
                        <FontAwesomeIcon icon={faUser} size="2x" />
                    </div> {/* User profile icon*/}
                </div>
                <h2 className="text-lg font-semibold flex items-center space-x-8 ml-10">
                    <FontAwesomeIcon icon={faChevronRight} className="text-2xl font-bold text-gray-500 relative -top-3 ml-6" />
                    <span className="text-2xl font-bold relative -top-3">Bill</span>
                </h2> {/*Title of the header*/}
            </div>

        </div>
    );
};

export default Header;
