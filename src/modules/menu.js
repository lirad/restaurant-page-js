const menu = () => {

    let menu = [
        { name: '8-bit Burger', price: '$ 9.80', description: 'Lorem ipsum dolor est quest', picture: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg' },
        { name: '8-bit Burger', price: '$ 9.80', description: 'Lorem ipsum dolor est quest', picture: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg' },
        { name: '8-bit Burger', price: '$ 9.80', description: 'Lorem ipsum dolor est quest', picture: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg' },
        { name: '8-bit Burger', price: '$ 9.80', description: 'Lorem ipsum dolor est quest', picture: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg' },
        { name: '8-bit Burger', price: '$ 9.80', description: 'Lorem ipsum dolor est quest', picture: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg' }
    ]

    let itemHtml = [];
    let item =
        menu.forEach((item) => (
            itemHtml.push(
                `<div class="col-span-full w-10/12 md:col-span-6 mx-auto  lg:col-span-4 ">
                    <div class="shadow-lg bg-white rounded-lg w-full">
                        <div class="heading rounded-t-lg">
                            <img src=${item.picture} class="object-contain rounded-t-lg"/>
                        </div>
                        <div class="card-body bg-white shadow-lg rounded-b-lg p-3">
                            <div class="flex justify-between align-middle items-baseline">
                                <div>
                                    <h2 class="text-mono text-2xl">${item.name}</h2>
                                </div>
                                <div>
                                    <span>${item.price}</span>
                                </div>
                            </div>
                            <div class="mt-3"> 
                                <p>
                                    ${item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>    
                `
            )
        ))


    let html = `
        <div id="menu" class="h-autoflex justify-center items-center align-middle relative" >
            
            <div class="container">
                
                <div class="grid grid-cols-12  justify-center gap-5 mt-20">
                    ${itemHtml.join(' ')}
                    </div>
                </div>
            </div>
        </div>
    `
    console.log('test')
    return html
}

export { menu }