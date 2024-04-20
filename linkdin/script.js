const bannerInput = document.getElementById('banner-input')
const banner = document.getElementById('banner');

bannerInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            banner.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


//avatar picture code

const avatarInput = document.getElementById('avatar')
const avatar = document.getElementById('pic');
avatarInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            avatar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

//popup code

const popup = document.querySelector('.popup');
const circle = document.querySelector('.circle');
let flag = false;
circle.addEventListener('click', () => {
    if (flag == false) {
        popup.style.display = 'block';
        flag = true;
    } else {
        popup.style.display = 'none';
        flag = false;
    }
})

//camera code


//get permission access


const videoElement = document.getElementById("video-preview");
const canvasElement = document.getElementById("canvas-preview");
const captureButton = document.getElementById("capture-btn");
const switchOnCameraButton = document.querySelector('.switch-on-camera-btn')
const capturedImageElement = document.getElementById("captured-image");
const box = document.querySelector('#circlee');
let pic = document.querySelector('#pic');
let isCameraOn = false;
let stream = null;
let cameraOption = document.querySelector('.camera-option')

// Function to access the camera
function accessCamera() {
    if (!isCameraOn) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (videoStream) {
                stream = videoStream;
                videoElement.srcObject = stream;
                videoElement.style.display = "block";
                captureButton.style.display = "block";
                cameraOption.style.display='block'
                isCameraOn = true;
                
                switchOnCameraButton.innerHTML = `<img id="img" src="https://t4.ftcdn.net/jpg/04/96/47/13/240_F_496471319_DbtjoUvKqyy2e9OfgBnK5mm2AXhKpa9m.jpg" alt="">`;
                // captureButton.style.display = 'none';
            })
            .catch(function (error) {
                console.error("Error accessing the camera:", error);
            });
    } else {
        stream.getTracks().forEach((track) => {
            track.stop();
        });
        videoElement.srcObject = null;
        videoElement.style.display = "none";
        captureButton.style.display = "none";
        
        isCameraOn = false;
        popup.style.display = 'none';
        switchOnCameraButton.innerHTML = `<img id="img" src="https://t4.ftcdn.net/jpg/04/96/47/13/240_F_496471319_DbtjoUvKqyy2e9OfgBnK5mm2AXhKpa9m.jpg" alt="">`;
    }
}

switchOnCameraButton.addEventListener("click", accessCamera);

// Capture button click event
captureButton.addEventListener("click", function () {
    const context = canvasElement.getContext("2d");
    // Set canvas size to match video
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    // Draw video frame onto canvas
    context.drawImage(
        videoElement,
        0,
        0,
        canvasElement.width,
        canvasElement.height
    );
    // Convert canvas to image data URL
    canvasElement.style.display = "none"
    captureButton.style.display = 'none'
    stream.getTracks().forEach((track) => {
        track.stop();
    });
    cameraOption.style.display='none';
    popup.style.display='none';
    isCameraOn = true;
    const imageDataUrl = canvasElement.toDataURL("image/png");
    console.log(imageDataUrl);
    box.innerHTML = `<img src="${imageDataUrl}"
    alt="" id="pic">`;
    
    videoElement.style.display = "none";

    // Show input field for image name
    imageNameInput.style.display = "block";
    
});



