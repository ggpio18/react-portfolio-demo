import React, { useState } from 'react'
// import { SpotifyEmbed } from 'spotify-embed'

const Terminal = () => {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState([]);
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleEnterPress = (e) => {
      if (e.key === 'Enter') {
        setOutput((prevOutput) => [...prevOutput, { type: 'input', text: inputValue }]);
        // Here you can process the input, execute commands, etc.
        // For now, let's just simulate a success prompt.
        setOutput((prevOutput) => [...prevOutput, { type: 'output', text: 'Success!' }]);
        setInputValue('');
      }
    };

  return (
    <>
      {/* Terminal */}
    <div className="mt-5">
      <div className="terminal__ctn text-center" data-aos="fade-down">
        <h2 className='text-primary text-3xl mb-1'>Try My design Terminal</h2>
        <p className='text-primary mb-4'>Type anything and it will return a success prompt</p>
      </div>
    
    {/* try */}
    <div className="px-[30%] mb-5" data-aos="flip-up">
    <div className="bg-black text-white p-4 rounded-lg">
      <div className="flex items-center">
        <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
      </div>
      <div className="mt-2">
        <p className="text-green-400">$</p>
        <p className="text-white ml-2">ls</p>
      </div>
      <div className="ml-6">
        <p className="text-green-400">file1.txt  file2.txt  folder1</p>
      </div>
      <div className="mt-2">
        <p className="text-green-400">$</p>
        <p className="text-white ml-2">cd folder1</p>
      </div>
      <div className="ml-6">
        <p className="text-green-400">Entering folder1...</p>
      </div>
      <div className="mt-2">
        <p className="text-green-400">$</p>
        <p className="text-white ml-2">cat readme.txt</p>
      </div>
      <div className="ml-6">
        <p className="text-white">This is the content of readme.txt...</p>
      </div>
      {output.map((item, index) => (
        <div key={index} className={item.type === 'input' ? 'mt-2' : 'ml-6'}>
          <p className={item.type === 'input' ? 'text-green-400' : 'text-white'}>$</p>
          <p className={item.type === 'input' ? 'text-haccent ml-2' : ''}>{item.text}</p>
        </div>
      ))}
      <div className="mt-2">
        <p className="text-green-400">$</p>
        <input
          type="text"
          className="text-haccent ml-2 bg-transparent outline-none border-none focus:outline-none"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
        />
      </div>
    </div>
    </div>

    {/* <div className="playlist flex justify-center items-center">
          <SpotifyEmbed src="https://open.spotify.com/track/0xqYLCBpCNqPDTsuwPPkfq?si=41e33bc027ca4c88" />
        </div> */}
    </div>

    </>
  )
}

export default Terminal
