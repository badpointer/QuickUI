import React, { useEffect } from "react";
import "./styles.css";
import Arrow from "./icons/Arrow.svg";
import CheckBoxOutline from "./icons/check-box-outline-blank.svg";
import CheckBoxed from "./icons/check-box.svg";

function SearchItem(props) {
  const [checked, setChecked] = React.useState(false);
  const toggleCheckBoxed = () => {
    if (props.selectedItem) props.selectedItem(props.text);
    setChecked(!checked);
  };

  return (
    <li className="pillItems" onClick={toggleCheckBoxed}>
      {checked ? (
        <img src={CheckBoxed} className="pill-item-checkbox" alt="" />
      ) : (
        <img src={CheckBoxOutline} className="pill-item-checkbox" alt="" />
      )}
      <label className="item-label" htmlFor="scales">
        {props.text}
      </label>
    </li>
  );
}

function SearchDropDown(props) {
  function onChangeText(event) {
    if (props.search) props.search(event.target.value);
  }
  return (
    <div className="pillDropDown">
      <input
        type="text"
        name="search"
        className="search-bar"
        autoComplete="off"
        placeholder="Search"
        onChange={onChangeText}
      />
      <div className={`search-result`}>
        <ul className="pill-items-list">{props.children}</ul>
      </div>
    </div>
  );
}

function SearchPill(props) {
  const [open, setOpen] = React.useState(false);

  const onPress = (event) => {
    setOpen(!open);
  };

  return (
    <>
      <div className="searchPill" onClick={onPress}>
        <label className="pillLabel">Club Number</label>
        <img src={Arrow} className="pillIcon" alt="" />
      </div>
      {open && props.children}
    </>
  );
}

const clubNums = ["2564", "6694", "4665", "9679", "2236"];

export default function App() {
  const [clubSearch, setClubSearch] = React.useState("");
  const [searchResult, setSearchResult] = React.useState(clubNums);
  const selectedItem = (value) => {
    console.log("what was selected", value);
  };
  const _search = (val) => {
    setClubSearch(val);
  };

  React.useEffect(() => {
    const result = clubNums.filter((num) => num.includes(clubSearch));
    if (result.length === 0) setSearchResult(clubNums);
    else setSearchResult(result);
  }, [clubSearch]);

  return (
    <>
      <SearchPill>
        <SearchDropDown search={_search}>
          {searchResult.map((val, index) => (
            <SearchItem selectedItem={selectedItem} key={val} text={val} />
          ))}
        </SearchDropDown>
      </SearchPill>
    </>
  );
}
