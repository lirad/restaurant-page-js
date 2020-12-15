const tabs = () => {
  const nav = [
    { label: 'Home', nav: '#home' },
    { label: 'Menu', nav: '#menu' },
    { label: 'Contact', nav: '#contact' },
  ];

  const navHtml = [];

  nav.forEach((item) => (
    navHtml.push(
      `<li class="p-5 nav text-lg md:text-2xl">
                <a href=${item.nav} class="font-mono hover:underline ${window.location.hash === item.nav ? 'text-green-400 underline' : null}" > ${item.label} </a>
            </li>`,
    )
  ));


  const html = `
    <div class="w-11/12 mx-auto text-white  top-0">
        <ul class="flex justify-center">
            ${navHtml.join('')}
        </ul>
    </div>
    `;

  return html;
};

export default tabs;