import React, { useState } from 'react'
import { DropdownContainer, DropdownHeader, DropBody, DropItem, DropSpan } from './dropdown-styles'
import { useAuthContext } from '../../authContext'

const data = [
  { id: 0, label: 'Raw' },
  { id: 1, label: 'Normalized' },
]

export default function Dropdown() {
  const [isOpen, setOpen] = useState(false)
  const [items, setItem] = useState(data)
  const [selectedItem, setSelectedItem] = useState(data[0].label)
  const { normalized, setNormalized } = useAuthContext()

  const toggleDropdown = () => {
    setOpen(!isOpen)
    console.log('dropdown button clicked', isOpen)
  }

  const handleItemClick = (id) => {
    setSelectedItem(data[id].label)
    setOpen(false)
    if (data[id].label === 'Normalized') {
      setNormalized(true)
      console.log('valor normalized en button', normalized)
    } else {
      setNormalized(false)
    }
  }

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>{selectedItem}</DropdownHeader>
      {!isOpen ? (
        ''
      ) : (
        <DropBody>
          {items.map((item) => (
            <DropItem onClick={(e) => handleItemClick(e.target.id)} id={item.id}>
              {item.label}
            </DropItem>
          ))}
        </DropBody>
      )}
    </DropdownContainer>
  )
}
