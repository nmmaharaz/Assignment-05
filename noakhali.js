document.getElementById('n-donate-now').addEventListener('click', function(event){
      const inputNFlied = getInputElementById('input-n-flied')
      const NDonation = getTotalDonationElementById('total-n-amount')
      if(inputNFlied >= 0 && !isNaN(inputNFlied)){
            document.getElementById('my_modal_1').showModal()
            const TotalDonationAmount = getAllTotalDonationAmountById('total-donation')
            const totalNDonation = NDonation + inputNFlied
            document.getElementById('total-n-amount').innerText = totalNDonation
            const donationTotalAmount = TotalDonationAmount - inputNFlied
            document.getElementById('total-donation').innerText = donationTotalAmount

            const time = new Date();
            const historyNFlied = document.getElementById('n-donate-now').click=time

            const div = document.createElement('div');
            div.classList.add('p-5', 'my-4','mx-[20px]','sm:mx-[30px]' , 'lg:mx-[150px]', 'rounded-xl', 'border-solid', 'border', 'border-gray-400');
            div.innerHTML = `
            <h4 class="text-2xl font-bold pb-4">${totalNDonation} Taka is Donated for Flood at Noakhali, Bangladesh </h4>  
            <p>${historyNFlied}</p>
            `

            document.getElementById('history').appendChild(div)
                  
      }else{
            alert('Invalid Donation Amount')
      }       
})
