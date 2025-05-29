import React from "react";
interface SearchProps {
  handleSearch:(event:React.ChangeEvent<HTMLInputElement> )=>any
}
function Search({ handleSearch }: SearchProps) {
  console.log("Search Rendering");
  return (
    <div>
      <input type="text" name="" id="" onChange={handleSearch} />
    </div>
  )
}

export default React.memo(Search) 

