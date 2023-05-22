import { FC, useState } from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({
  value,
  size = "medium",
  onSearchChange,
  disabled = false,
  iconOnRight = false,
  placeholder = "Search",
  sx,
  characterLimit = 45,
}) => {
  const [query, setQuery] = useState(value || "");
  const onChangeHandler = (e) => {
    onSearchChange(e.target.value.substring(0, characterLimit));
    setQuery(e.target.value.substring(0, characterLimit));
  };

  return (
    <OutlinedInput
      size={size}
      sx={sx}
      value={value !== undefined ? value : query}
      onChange={onChangeHandler}
      disabled={disabled}
      placeholder={placeholder}
      startAdornment={
        !iconOnRight && (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }
      endAdornment={
        iconOnRight && (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        )
      }
    />
  );
};

export default SearchField;
