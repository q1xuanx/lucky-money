import React, { useState } from "react";
import "./App.css";

function App() {
  const greetings = [
    "Chúc Mừng Năm Mới! 🎉",
    "An Khang Thịnh Vượng! 💰",
    "Sức Khỏe Dồi Dào! ❤️",
    "Năm Mới Thành Công! 🚀",
    "Hạnh Phúc Tràn Đầy! 🍀",
    "Phát Tài Phát Lộc! 🌟",
  ];

  const amounts = [50, 100, 150, 250, 300, 500];
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [fireworks, setFireworks] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
    setSelectedAmount(randomAmount);
    setFireworks(true);
    setShowResult(true);

    // Tắt pháo hoa và khung kết quả sau 5 giây
    setTimeout(() => {
      setFireworks(false);
      setShowResult(false);
    }, 5000);
  };

  return (
    <div className="App">
      <h1 className="title">Chọn Bao Lì Xì May Mắn</h1>
      <div className="envelopes-container">
        {greetings.map((greeting, index) => (
          <div key={index} className="envelope" onClick={handleClick}>
            <p className="envelope-text">{greeting}</p>
          </div>
        ))}
      </div>
      {showResult && (
        <div className="result blink">
          <h2>
            Chúc mừng! Bạn nhận được <span>{selectedAmount}.000 đ</span>! 🎉
          </h2>
        </div>
      )}
      {fireworks && <div className="fireworks" />}
    </div>
  );
}

export default App;
