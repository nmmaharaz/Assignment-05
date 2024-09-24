function getDHElementByID (id){
      document.getElementById('donation').classList.add('hidden')
      document.getElementById('history').classList.add('hidden')
      document.getElementById(id).classList.remove('hidden')
}

function getDHActiveElementById (id){
      document.getElementById('main-donation-button').classList.remove('bg-[#aaed6d]')
      document.getElementById('main-donation-button').classList.add('border-solid', 'border', 'border-gray-400')
      document.getElementById('main-history-button').classList.remove('bg-[#aaed6d]')
      document.getElementById('main-history-button').classList.add('border-solid', 'border', 'border-gray-400')
      document.getElementById(id).classList.add('bg-[#aaed6d]')
      document.getElementById(id).classList.remove('border-solid', 'border', 'border-gray-400')
   
}