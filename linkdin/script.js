const bannerInput = document.getElementById('banner-input')
const banner = document.getElementById('banner');

const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('preview');

bannerInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            banner.src = e.target.result;
            setTimeout(() => {
                progressBar.style.width = '0%'
            }, 2000)
        };
        reader.readAsDataURL(file);
    }
});


const popup = document.querySelector('.popup');
const circle = document.querySelector('.circle');

circle.addEventListener('click', () => {
    popup.style.opacity = 1;
})

