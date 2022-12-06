export default function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Search...."
      className="px-4 py-2 border-black ml-4 border-2 rounded-md m-4 w-[calc(100vw-160px)]"
      type="search"
      onInput={(e) => setSearchValue(e.target.value)}
    />
  );
}
