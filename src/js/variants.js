const init = () => {

    const block = document.querySelector('.-variants-block-')

    if (block) {

        const items = block.querySelectorAll('.-variants-item-')
        const elems = block.querySelectorAll('.-variants-elem-')
        const anim = block.querySelector('.-variants-anim-')
        const currentItem = block.getElementsByClassName('variants__item--active')

        let removeTimeout

        items.forEach(item => {

            item.addEventListener('click', () => {

                if (item.classList.contains('variants__item--small')) {

                    if (removeTimeout) clearTimeout(removeTimeout)

                    anim.classList.add('variants__elems--open')

                    removeTimeout = setTimeout(() => anim.classList.remove('variants__elems--open'), 550)

                    currentItem[0].className = currentItem[0].className.replace('variants__item--active', '')
                    item.className += ' variants__item--active'

                    elems.forEach(elem => {

                        const name = elem.querySelector('.-variants-name-')
                        const price = elem.querySelector('.-variants-price-')
                        const title = elem.querySelector('.-variants-title-')
                        const text = elem.querySelector('.-variants-text-')

                        if (name) if (name.dataset.nameSmall) name.textContent = name.dataset.nameSmall
                        if (price) if (price.dataset.priceSmall) price.textContent = price.dataset.priceSmall
                        if (title) if (title.dataset.titleSmall) title.textContent = title.dataset.titleSmall
                        if (text) if (text.dataset.textSmall) text.textContent = text.dataset.textSmall

                    })

                }

                if (item.classList.contains('variants__item--middle')) {

                    if (removeTimeout) clearTimeout(removeTimeout)

                    anim.classList.add('variants__elems--open')

                    removeTimeout = setTimeout(() => anim.classList.remove('variants__elems--open'), 550)

                    currentItem[0].className = currentItem[0].className.replace('variants__item--active', '')
                    item.className += ' variants__item--active'

                    elems.forEach(elem => {

                        const name = elem.querySelector('.-variants-name-')
                        const price = elem.querySelector('.-variants-price-')
                        const title = elem.querySelector('.-variants-title-')
                        const text = elem.querySelector('.-variants-text-')

                        if (name) if (name.dataset.nameMiddle) name.textContent = name.dataset.nameMiddle
                        if (price) if (price.dataset.priceMiddle) price.textContent = price.dataset.priceMiddle
                        if (title) if (title.dataset.titleMiddle) title.textContent = title.dataset.titleMiddle
                        if (text) if (text.dataset.textMiddle) text.textContent = text.dataset.textMiddle

                    })

                }

            })

        })

    }

}

export default { init }