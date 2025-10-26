import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import './SearchBar.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
}


  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius:24,
        border: '2px solid #812c2cff',
        pl:2,
        boxShadow: 'none',
        mr: { sm:5 }
      }}
      >
        <input 
        className='Search-bar'
        placeholder='Pesquise...'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
         />
            <IconButton type="submit"  sx={{ p:'10px', color:'black'}}>
                <Search />
            </IconButton>    
    </Paper>
  )
}

export default SearchBar