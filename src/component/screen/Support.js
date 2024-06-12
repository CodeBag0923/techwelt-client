import React, { useState, useEffect, useRef } from "react";
import "./Support.css";
const Support = () => {
  const States = [
    {
      name: "Ahmad",
    },
    {
      name: "Ahad",
    },
    {
      name: "Zahid",
    },
  ];
  const [users, setUsers] = useState([]);
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    setUsers(States);
    const onClick = (e) => {
      if (e.target !== dropdownRef.current) {
        setIsDropdownDisplayed(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [States]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tewmpUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tewmpUser);
    } else {
      let tewmpUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tewmpUser);
    }
  };
  return (
    <>
      <div className="main">
        <button
          className="state-dropdown"
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownDisplayed((prevState) => !prevState);
          }}
        >
          --Select Your States--
        </button>
        {isDropdownDisplayed && (
          <div
            className="panel"
            onClick={(e) => {
              e.stopPropagation();
            }}
            ref={dropdownRef}
          >
            <div className="fieldAll">
              <input
                type="checkbox"
                onChange={handleChange}
                name="allSelect"
                checked={
                  users.filter((user) => user?.isChecked !== true).length < 1
                }
              />
              <span>All</span>
            </div>
            {users.map((user) => (
              <div className="field">
                <input
                  type="checkbox"
                  name={user.name}
                  onChange={handleChange}
                  checked={user?.isChecked || false}
                />
                <label>{user.name}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <Multiselect style={{width:"2rem"}}
  displayValue="key"
  hideSelectedList
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  options={[
    {
      cat: 'Group 1',
      key: 'Option 1'
    },
    {
      cat: 'Group 1',
      key: 'Option 2'
    },
    {
      cat: 'Group 1',
      key: 'Option 3'
    },
    {
      cat: 'Group 2',
      key: 'Option 4'
    },
    {
      cat: 'Group 2',
      key: 'Option 5'
    },
    {
      cat: 'Group 2',
      key: 'Option 6'
    },
    {
      cat: 'Group 2',
      key: 'Option 7'
    }
  ]}
  showCheckbox
/> */}
    </>
  );
};

export default Support;
