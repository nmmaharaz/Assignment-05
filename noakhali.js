document.getElementById('n-donate-now').addEventListener('click', function(event){
      const inputNFlied = getInputElementById('input-n-flied')
      const NDonation = getTotalDonationElementById('total-n-amount')
      if(inputNFlied >= 0 && !isNaN(inputNFlied)){
            const openNCongrates = getCongratesElementById('n-congrates')
            document.getElementById('close-n-congrates').addEventListener('click', function(event){
                  document.getElementById('n-congrates').classList.add('opacity-0', 'pointer-events-auto')
            })
            const TotalDonationAmount = getAllTotalDonationAmountById('total-donation')
            const totalNDonation = NDonation + inputNFlied
            document.getElementById('total-n-amount').innerText = totalNDonation
            const donationTotalAmount = TotalDonationAmount - inputNFlied
            document.getElementById('total-donation').innerText = donationTotalAmount
      }else{
            alert('Invalid Donation Amount')
      }       
})
