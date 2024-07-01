import './App.css';
import { useState } from "react";

const menuItems = [
  "白頭翁的特性",
  "白頭翁的故事",
  "白頭翁的美照",
  "白頭翁的危機",
];

function App() {
  const [selected, setSelected] = useState(false);
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  const handleSelected = (i) => {
    setSelected(i);
  };

  const toggleMenu = () => {
    setIsHamMenuOpen(!isHamMenuOpen);
  };

  return (
    <div className="App">
      <div className="page" style={{ display: "flex" }}>
        <div className={`menu ${isHamMenuOpen ? 'open' : ''}`}>
        <div class={`hamburgerMenu ${isHamMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
          </div>
          <div className="birdContainer">
              <div className="bird">
                <div className="body"></div>
                <div className="wing"></div>
                <div className="pupil"></div>
                <div className="beak"></div>
              </div>
          </div>
          <div className='menuTextGroup'>
            <div className="menuTitle">白頭翁不吃小米</div>
          <div className={`menuItems ${isHamMenuOpen ? 'open' : ''}`}>
          {menuItems?.map((item, i) => (
            <span
              key={item}
              className={item === selected ? "selectedMenu" : ""}
              onClick={() => handleSelected(item)}
            >
              {item}
            </span>
          ))}
          </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="banner">
            <div className='bannerTextGroup'>
            <p className="bannerTitle">白頭翁 (Chinese bulbul)</p>
            <p>
              又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約
              8~10 年。
            </p>
            </div>
          </div>
          <div className="intro">
            <div className="introbox">
              <div className="title">
                <b>外觀</b>
                <div class="donut"></div>
              </div>
              <span className="text">
                白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。
              </span>
            </div>
            <div className="introbox">
              <span className="title">
                <b>棲地</b>
                <div class="donut"></div>
              </span>
              <span className="text">
                白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。
              </span>
            </div>
            <div className="introbox">
              <span className="title">
                <b>食性</b>
                <div class="donut"></div>
              </span>
              <span className="text">
                以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
