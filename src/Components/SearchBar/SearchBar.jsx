import React from "react";

const SearchBar = () => {
 const [searchTerm, setSearchTerm] = React.useState('');

 const handleChange = e => {
   setSearchTerm(e.target.value);
 };

 return (
   <div>
     <input
       onChange={handleChange}
       type="search"
       placeholder="Search for a game..."
       value={searchTerm}
     />
   </div>
 );
};

export default SearchBar