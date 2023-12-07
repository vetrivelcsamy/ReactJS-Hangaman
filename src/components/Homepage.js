import React, { useState } from 'react';
import Hangman from './Hangman';




export default function Homepage() {
  const [showHangman, setShowHangman] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [category, setCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState('');


  const startHangman = (level) => {
    setDifficultyLevel(level);
    setShowHangman(true);
  };

  const selectCat = (Category) =>{
    setCategory(Category);
  };

  const selectImg = (image) =>{
    setSelectedImage(image);
  }

  function dropdownlistza() {
    var x = document.getElementById("picture animated-picture").value;
    selectImg(x);
}
 
  
  return (


    <div className="Hangman">

      {/* อย่าลืมใส่ !showHangman ถ้าลืมจะติดหน้าเล่นเกม */}
        {!showHangman }

        

       
        {!showHangman && (
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
              zIndex: 5
            }}
          >
            <a href="/">
            <h1>Hangman. <small>Do (or) 💀</small></h1>
          </a>
          </div>
        )}

{!showHangman && (
            <div
            style={{
              padding: 30,
              marginTop: 30 ,
              display: 'flex' ,
              gap: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            

          >
              <h2 for="textpic">Choose a picture:</h2>
        <select onChange={() => dropdownlistza()} className="picture animated-picture" id="picture animated-picture" name="picture animated-picture">
          <option value="">Select picture to play</option>
          <option value="pic1">new pic from paseenza</option>
          <option value="pic2">old pic</option>
        </select>
    
            </div>
              
          )}         

{!showHangman && selectedImage !== "" &&(
            <div
            style={{
              marginTop: 50 ,
              display: 'flex' ,
              gap: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            

          >
            <>
            <button
              id='Easy'
              className="Hangman-reset3 mx-2 animated-button"
              onClick={() => selectCat('Animal')}>
              Animal🐻
            </button>
            <button
              id='Medium'
              className="Hangman-reset2 mx-2 animated-button"
              onClick={() => selectCat('Programming')}>
              Computer Lang👨🏿‍💻
            </button>
            <button
              id='Hard'
              className="Hangman-reset3 mx-2 animated-button"
              onClick={() => selectCat('Country')}>
              Country🌎
            </button>
            </>
                
            </div>
              
          )}

{!showHangman && category !== "" && selectedImage !== "" &&(
            <div
            style={{
              display: 'flex' ,
              gap: 50,
              justifyContent: "center",
              alignItems: "center",
            }}

            
          >
            <>
            <button
              id='Easy'
              className="Hangman-reset mx-2 animated-button"
              onClick={() => startHangman('Easy')}>
              Ez😀
            </button>
            <button
              id='Medium'
              className="Hangman-reset mx-2 animated-button"
              onClick={() => startHangman('Medium')}>
              Mid🤔
            </button>
            <button
              id='Hard'
              className="Hangman-reset mx-2 animated-button"
              onClick={() => startHangman('Hard')}>
              Hard🥵
            </button>
            </>
                
            </div>
              
          )}


          {!showHangman && (
            <ul className="circles" style={{zIndex:1}}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
          )}
        {showHangman && <Hangman difficultyLevel={difficultyLevel} category ={category} selectedImage={selectedImage}/>}
    </div>
  );
  
}

