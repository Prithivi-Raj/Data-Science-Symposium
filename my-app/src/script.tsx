export const script = () => {
    document.title = "Data Science Symposium"
    document.addEventListener("scroll", () => {
        var header: HTMLElement = document.querySelector("header")!;
        var height = window.innerHeight;
        if(window.scrollY >= 0.5* height)
        {
            header.classList.add('sticky')
            header.hidden = false
        }
        else
        {
            header.hidden = true
            header.classList.remove('sticky')
        }
    })
}