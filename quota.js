document.getElementById('quota-donation-button').addEventListener('click', function(event){
      const inputNFlied = getInputElementById('input-q-flied')
      const NDonation = getTotalDonationElementById('total-q-donation')
      if(inputNFlied >= 0 && !isNaN(inputNFlied)){
            document.getElementById('my_modal_3').showModal()
            const TotalDonationAmount = getAllTotalDonationAmountById('total-donation')
            const totalNDonation = NDonation + inputNFlied
            document.getElementById('total-q-donation').innerText = totalNDonation
            const donationTotalAmount = TotalDonationAmount - inputNFlied
            document.getElementById('total-donation').innerText = donationTotalAmount

            const time = new Date();
            const historyFlied = document.getElementById('quota-donation-button').click=time

            const div = document.createElement('div');
            div.classList.add('p-5', 'my-4','mx-[20px]','sm:mx-[30px]' , 'lg:mx-[150px]', 'rounded-xl', 'border-solid', 'border', 'border-gray-400');
            div.innerHTML = `
            <h4 class="text-2xl font-bold pb-4">${totalNDonation} Taka is Donated for Flood Relief in Feni,Bangladesh </h4>  
            <p>${historyFlied}</p>
            `
            document.getElementById('history').appendChild(div)
      }else{
            alert('Invalid Donation Amount')
      }    
})
