import React, { useRef, useState } from 'react';

function TestComponent() {
  const [qrData, setQrData] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isCameraPermissionGranted, setIsCameraPermissionGranted] = useState(false);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: {
          facingMode: 'environment' // Utilizar la cámara trasera
        }
      });

      if (stream) {
        setIsCameraPermissionGranted(true);
        mediaStreamRef.current = stream;
        videoRef.current.srcObject = stream;
        setIsCameraOpen(true);
      } else {
        console.error('No se pudo acceder a la cámara trasera.');
      }
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
    }
  };

  const closeCamera = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    setIsCameraOpen(false);
  };

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUri = canvas.toDataURL('image/jpeg');
      console.log('Fotografía tomada:', dataUri);
      closeCamera();
      // Aquí puedes manejar la foto tomada, por ejemplo, enviarla a un servidor o procesarla.
    }
  };

  return (
    <div>
      {isCameraOpen && isCameraPermissionGranted ? (
        <div>
          <h1>Cámara Trasera</h1>
          <video ref={videoRef} autoPlay />
          <button onClick={takePhoto}>Tomar Foto</button>
          <button onClick={closeCamera}>Cerrar Cámara</button>
        </div>
      ) : (
        <div>
          <h1>Lector de Códigos QR para INE</h1>
          <button onClick={openCamera}>Abrir Cámara Trasera</button>
          <br />
          {qrData && (
            <div>
              <h2>Información del Código QR:</h2>
              <p>{qrData}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TestComponent;
