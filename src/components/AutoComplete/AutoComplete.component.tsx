import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLOR_VARIABLES } from '../../constant';
import { Container, DropdownBox, DropDownItem, IconBox, InputBox, Wrapper } from './AutoComplete.style';
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io';
import { debounce } from 'lodash';

type OPTIONS_ITEM = {
  label: string;
  value: string;
  id: string;
};

type AutoCompleteComponentProps = {
  options: OPTIONS_ITEM[];
  width?: number;
  placeHolder?: string;
};

const WIDTH = 180;

function AutoCompleteComponent({ options, width, placeHolder }: AutoCompleteComponentProps) {
  const [showDropDown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filterData, setFilterData] = useState(options)

  const DisplayDropdown = () => {
    const handleSelectedItem = (value: string) => {
      setSelectedValue(value);

    };

    return filterData.map((item: OPTIONS_ITEM) => {
      return (
        <DropDownItem
          onClick={(e) => {
            e.preventDefault();
            handleSelectedItem(item.label);
          }}
          key={item.id}
          aria-selected={item.label === selectedValue}
        >
          {item.label}
        </DropDownItem>
      );
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    console.log("handlclick-container",  )
    setShowDropdown((prevShowDropDown) => !prevShowDropDown);
    setIsSearchOn((prevIsSearchOn) => !prevIsSearchOn);
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);    
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFilterData = debounce(()=>{
    const data = options.filter((option)=>{
      return option.value.includes(searchText)
    })

    setFilterData(data)
  })

  useEffect(() => {  
     inputRef.current?.focus();
  }, []);

  useEffect(()=>{
   if(searchText.length > 0)
   {
      // !showDropDown && handleFilterData()
     !showDropDown  && setShowDropdown(true)
     !isSearchOn && setIsSearchOn(true)
   } else {
    selectedValue && setSelectedValue('')
   }
  }, [searchText])


  useEffect(()=>{
    if(selectedValue) {
      //console.log("testing-selected-value", selectedValue)
      showDropDown &&  setShowDropdown(false);
      isSearchOn &&  setIsSearchOn(false);
      searchText &&  setSearchText('');
    }

  },[selectedValue])

  return (
    <Wrapper>
      <Container 
        onClick={handleClick} 
        tabIndex={0}>
        <InputBox
          placeholder={placeHolder || 'Select or Search'}
          ref={inputRef}
          onChange={handleChangeText}
          value={searchText || selectedValue}
        ></InputBox>
        <IconBox>{!isSearchOn ? <IoIosArrowDown size={16} /> : <IoIosSearch size={16} />}</IconBox>
      </Container>

      {showDropDown && (
        <DropdownBox>
          {DisplayDropdown()}
        </DropdownBox>
      )}
    </Wrapper>
  );
}

export default AutoCompleteComponent;
