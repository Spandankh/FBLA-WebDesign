import { IoSearch } from "react-icons/io5";
const SearchBar = () => {
    return(
        <div className="w-full py-2.5 flex justify-center h-full">
            <div className="max-w-[1240px]">
                <div class="flex justify-between items-center pr-80 pl-1 py-3rounded-lg border-2 border-black gap-4">
                    <IoSearch className=""/>
                    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Input Job"/>
                    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-mg border-4 text-white py-1 px-2 rounded" type="button"> Search</button>
                    </div>
            </div>
        </div>
    )
}

export default SearchBar