let slider = $(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

const ageOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ageTwo = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const age = ageOne.const(ageTwo);
const age = [...ageOne, ...ageTwo];
console.log(age);