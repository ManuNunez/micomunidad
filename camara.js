const startButton = document.getElementById('startButton');
const captureButton = document.getElementById('captureButton');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');

// Acceder a la cámara y mostrar el video en el elemento <video>
startButton.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();
        startButton.style.display = 'none';
        captureButton.style.display = 'block';
    } catch (error) {
        console.error('Error al acceder a la cámara:', error);
    }
});

// Capturar una foto del video y mostrarla en un elemento <canvas>
captureButton.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const capturedImageURL = canvas.toDataURL('image/png'); // Obtener la imagen como URL base64
    const capturedImage = new Image();
    capturedImage.src = capturedImageURL;
    document.body.appendChild(capturedImage); // Mostrar la imagen capturada en la página
});