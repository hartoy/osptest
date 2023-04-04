import React from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

const SELECT_TYPE_SELECT = 'select'
const SELECT_TYPE_CREATABLE = 'creatable'

const SelectDropwDown = ({
  options,
  isMulti,
  getOptionLabel,
  getOptionValue,
  onChange,
  isSercheable,
  isClearable,
  escapeClearsValue,
  noOptionsMessage,
  value,
  style,
  placeholder,
  selectType,
  onCreateOption,
  isLoading,
}) => {
  const SelectComponent = selectType === SELECT_TYPE_SELECT ? Select : CreatableSelect
  const selectProps = {
    options: options,
    isMulti: isMulti,
    getOptionLabel: getOptionLabel,
    getOptionValue: getOptionValue,
    onChange: onChange,
    isLoading: isLoading,
    onCreateOption: onCreateOption,
    isSearchable: isSercheable,
    isClearable: isClearable,
    escapeClearsValue: escapeClearsValue,
    noOptionsMessage: noOptionsMessage,
    value: value,
    styles: style,
    placeholder: placeholder,
  }

  if (selectType === SELECT_TYPE_CREATABLE) {
    selectProps.components = {
      DropdownIndicator: () => null,
    }
  }

  return <SelectComponent {...selectProps} />
}

export default SelectDropwDown
