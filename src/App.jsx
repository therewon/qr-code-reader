import { useState,useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import './App.css'

function App() {
  const [scanResult,setScanResult] = useState(null)


  useEffect(()=>{
    const scanner = new Html5QrcodeScanner('reader',{
    qrbox:{
      width: 250,
      height: 250
    },
    fps: 5
  })

  scanner.render(success,error)

  function success(result){
    scanner.clear()
    setScanResult(result)
  }

  function error(err){
    console.warn(err); 
  }

  },[])

  

  return (
    <>
      <h1>QR Code Reader</h1>
      {
        scanResult ? <div>Success: <a href={'https://' + scanResult} target='_blank'>{scanResult}</a></div>
        :<div id='reader'></div>
      }
    </>
  )
}

export default App
