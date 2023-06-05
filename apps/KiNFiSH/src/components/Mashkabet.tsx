import Explore from "./Explore"

const Mashkabet = () => {
    return (
        <div className="w-1/2 mx-auto">
            <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                <div
                className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
                id="headerTerminal"
                >
                <div
                    className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
                    id="closebtn"
                ></div>
                <div
                    className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
                    id="minbtn"
                ></div>
                <div
                    className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
                    id="maxbtn"
                ></div>
                <div className="mx-auto pr-16" id="terminaltitle">
                    <p className="text-center text-sm">Terminal</p>
                </div>
                </div>
                <div
                className="pl-1 pt-1 h-auto  text-sky-800 font-mono text-xs bg-black"
                id="console"
                >
                <p className="pb-1">Last login: online</p>
                <p className="pb-1">kinfish@kinfish: e projects.tsx </p>
                </div>
                </div>

           
        </div>


    )
}
export default Mashkabet