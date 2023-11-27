

const SearchBar = () => {
    return(
        <div className="w-full py-2.5 flex justify-center h-full">
            <div className="max-w-[1240px] flex justify-between">
                <div class="flex justify-between items-center px=10 py-3rounded-lg border-2 border-black gap-4 rounded-3xl">
                    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none " type="text" placeholder="Input Job Name"/>
                </div>
                <button class="flex-shrink-0 bg-gray-500  border-black ml-3 text-sm border-2 text-white py-1 px-3 rounded-2xl hover:bg-gray-700" type="button">Search</button>
            </div>
        </div>
    )
}

export default SearchBar