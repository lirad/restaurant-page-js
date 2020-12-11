const tabs = () => {

    let nav = [
        { label: 'Home', nav: '#home' },
        { label: 'Menu', nav: '#menu' },
        { label: 'Contact', nav: '#contact' }
    ]

    let navHtml = [];

    nav.forEach((item) => (
        navHtml.push(
            `<li class="p-5 nav">
                <a href=${item.nav} class="font-mono hover:underline underline" name="nav"> ${item.label} </a>
            </li>`)
    ))

    let html =
    `
    <div class="w-11/12 mx-auto text-white top-0">
        <ul class="text-white flex justify-center">
            ${navHtml.join('')}
        </ul>
    </div>
    `

    return html
}

export { tabs }