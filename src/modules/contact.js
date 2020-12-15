const contact = () => {
  const html = `
        <div id="menu" class="h-autoflex justify-center items-center align-middle relative" >
            
            <div class="container mx-auto">
                <h2 class="text-white text-xl text-center mt-12">Contact us</h2>
                <div class="flex flex-col">
                    <form class="w-8/12 mx-auto mt-2 flex flex-col justify-between">
                        <div>
                            <label class="leading-3 text-white text-xl">
                                Name
                            </label>
                            <input placeholder="Your name" class="h-16 w-full border-gray-600 border-2 rounded-lg"/>
                        </div>
                        <div class="my-4">
                            <label class="leading-3 text-white text-xl">
                                Telephone
                            </label>
                            <input placeholder="Your e-mail" class="h-16 w-full border-gray-600 border-2 rounded-lg"/>
                        </div>
                        <div>
                            <label class="leading-3 text-white text-xl">
                               E-mail
                            </label>
                            <input placeholder="Your phone" class="h-16 w-full border-gray-600 border-2 rounded-lg"/>
                        </div>
                        <div class="my-4">
                            <label class="leading-3 text-white text-xl">
                               Message
                            </label>
                            <textarea rows="4" placeholder="Your phone" class="h-16 w-full border-gray-600 border-2 rounded-lg"></textarea>
                        </div>
                        <div>
                            <button placeholder="Your phone" class="px-2 py-4 bg-green-700 text-white w-full rounded-lg">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

  return html;
};

export default contact;