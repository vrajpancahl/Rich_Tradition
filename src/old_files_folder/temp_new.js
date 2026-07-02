import { Slide_img1, Slide_img2, Slide_img3 } from "../pages/image_import";


function Temp_new(){
//     let index = 0;
//   const slider = document.getElementById('slider');
//   const totalSlides = slider.children.length;

//   function updateSlide() {
//     slider.scrollTo({
//       left: slider.clientWidth * index,
//       behavior: 'smooth'
//     });
//   }

//   function nextSlide() {
//     index = (index + 1) % totalSlides;
//     updateSlide();
//   }

//   function prevSlide() {
//     index = (index - 1 + totalSlides) % totalSlides;
//     updateSlide();
//   }

  // Ensure correct positioning if window is resized
//   window.addEventListener('resize', updateSlide);
return (
  
      <div class="container-sm text-center">
  <div class="slider-container" id="slider">
    <img src={Slide_img1} class="img-fluid" alt="" />
    <img src={Slide_img2} class="img-fluid" alt="" />
    <img src={Slide_img3} class="img-fluid" alt="" />
  </div>

  <div class="mt-3">
    <button class="btn btn-primary me-2"  >Prev</button>
    <button class="btn btn-primary" >Next</button>
  </div>
</div>

)
}

export default Temp_new;


   
