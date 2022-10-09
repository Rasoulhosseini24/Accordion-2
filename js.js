let accardion = document.querySelector(".acc");

Array.from(accardion.children).forEach(wrapper => {
    if (wrapper.classList.contains("show")) {
        wrapper.querySelector('div').style.maxHeight = wrapper.querySelector('div').scrollHeight + 15 + "px"

    }
    wrapper.querySelector("span").addEventListener("click", e => {
        let span = e.target
        let wrapper = span.parentElement
        let div = span.nextElementSibling
        wrapper.classList.toggle("show");
        if (wrapper.classList.contains("show")) {
            div.style.maxHeight = div.scrollHeight + 25 + "px"
        } else {
            div.style.maxHeight = null
        }

        Array.from(accardion.children).forEach(w => {
            if (w != wrapper) {
                w.classList.remove("show")
                w.querySelector('div').style.maxHeight = null
            }


        })

    })


})