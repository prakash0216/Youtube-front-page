import { SearchBar } from "./SearchBar";

export function AppBar() {
  return (
    <div className="flex justify-between">
      <div className="text-md inline-flex items-center pl-3">YouTube</div>
      <div>
        <SearchBar />
      </div>
      <div className="text-md inline-flex items-center pr-3">Sign in</div>
    </div>
  );
}
