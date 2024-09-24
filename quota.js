document.getElementById('quota-donation-button').addEventListener('click', function(event){
      const inputNFlied = getInputElementById('input-q-flied')
      const NDonation = getTotalDonationElementById('total-q-donation')
      if(inputNFlied >= 0 && !isNaN(inputNFlied)){
            const openQueCongrates = getCongratesElementById('q-congrates')
            document.getElementById('close-q-congrates').addEventListener('click', function(event){
                  document.getElementById('q-congrates').classList.add('opacity-0', 'pointer-events-auto')
            })
            const TotalDonationAmount = getAllTotalDonationAmountById('total-donation')
            const totalNDonation = NDonation + inputNFlied
            document.getElementById('total-q-donation').innerText = totalNDonation
            const donationTotalAmount = TotalDonationAmount - inputNFlied
            document.getElementById('total-donation').innerText = donationTotalAmount
      }else{
            alert('Invalid Donation Amount')
      }    
})
