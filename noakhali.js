document.getElementById('n-donate-now').addEventListener('click', function(event){
      const inputNFlied = getInputElementById('input-n-flied')
      const NDonation = getTotalDonationElementById('total-n-amount')
      if(inputNFlied >= 0){
            const TotalDonationAmount = getAllTotalDonationAmountById('total-donation')
            const totalNDonation = NDonation + inputNFlied
            document.getElementById('total-n-amount').innerText = totalNDonation
            const donationTotalAmount = TotalDonationAmount - inputNFlied
            document.getElementById('total-donation').innerText = donationTotalAmount
      }    
})
