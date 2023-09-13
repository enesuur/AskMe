import React, { useState } from 'react';
import SearchItem from '../components/SearchItem';
import './ProfileModal.css';
export default function ProfileModal({ isModalOpen, setIsModalOpen, isFollowers }) {
  const [searchTerm, setSearchTerm] = useState('');


  function handleSearchChange(event) {
    const value = event.target.value;
    setSearchTerm(value);
  }

  const handleModalClick = (event) => {
    setIsModalOpen(false);
  };

  return (
    <> 
    {isModalOpen && (
      <div className='modal-overlay' onClick={handleModalClick} >
        <div className='modal-content' onClick={ (e) => e.stopPropagation() } >
          <div className='modal-header'>
          {!isFollowers && (
            <h2>
              Followings
            </h2>)}
          {isFollowers && (
            <h2>Followers</h2>
          )}
          <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>

          </div>
          <input type='text' placeholder='Search...' onChange={handleSearchChange} />
          <div className='users'>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>

          </div>
        </div>
      </div>
    )}
    </>

  );
}
