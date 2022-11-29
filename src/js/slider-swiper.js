const checkQuizSlide = (slide) => {

    const quiz = slide.closest('[data-quiz]')
    const inputs = [...slide.querySelectorAll('input'), ...slide.querySelectorAll('select')]
    let isEmpty = true

    for (const i in inputs) {

        if (!Object.hasOwnProperty.call(inputs, i)) continue

        if (inputs[i].type == 'checkbox' || inputs[i].type == 'radio') {

            if (inputs[i].checked != false) {

                isEmpty = false
                break

            }

        } else if (inputs[i].value != '') {

            isEmpty = false
            break

        }

    }

    isEmpty ? quiz.classList.add('quiz-slider--stop') : quiz.classList.remove('quiz-slider--stop')

}

const init = () => {


    const quizImageSlider = new Swiper('.quiz-image-slider .swiper', {

        allowTouchMove: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        effect: 'cube'

    })

    const quizSlider = new Swiper('.quiz-slider .swiper', {

        navigation: {

            nextEl: '.quiz-slider .swiper-button-next'

        },

        pagination: {

            el: '.quiz-slider .swiper-pagination',
            type: 'custom',

            renderCustom: function (swiper, current, total) {

                return total - current
                
            }
            
        },

        allowTouchMove: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        watchSlidesProgress: true,
        type: 'fraction',

        on: {

            slideChange: (swiper) => {

                quizImageSlider.slideTo(swiper.activeIndex)

                checkQuizSlide(swiper.visibleSlides[0])

                if (swiper.visibleSlides[0] == swiper.slides[swiper.slides.length - 1]) {

                    swiper.el.closest('[data-quiz]').classList.add('quiz-slider--end')

                } else {

                    swiper.el.closest('[data-quiz]').classList.remove('quiz-slider--end')

                }

            }

        }

    })

    document.addEventListener('input', (event) => {

        if (event.target.closest('[data-quiz-slide]')) checkQuizSlide(event.target.closest('[data-quiz-slide]'))

    })

}

export default { init }