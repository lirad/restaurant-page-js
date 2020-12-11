const hero = () => {
    let html = `
    <div id="hero" class="h-screen bg-gray-500 flex justify-center items-center align-middle relative">
        <div class="container">
            <div class="flex flex-col p-5 justify-center">
                <div>
                    <h1 class="text-2xl text-gray-400 font-mono mx-1">The bit burger.</h1>
                </div>
                <div>
                    <h1 class="text-2xl font-mono text-white">A bit delicious.</h1>
                </div>
            </div>
        </div>
    </div>`
    console.log('test')
    return html
}

export { hero }