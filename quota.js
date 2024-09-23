document.getElementById('quota-donation-button').addEventListener('click', function(event){
      const inputNFlied = getInputElementById('input-q-flied')
      const NDonation = getTotalDonationElementById('total-q-donation')
      if(inputNFlied >= 0 && !isNaN(inputNFlied)){
            const TotalDonationAmount = getAllTotalDonationAmountById('total-donation')
            const totalNDonation = NDonation + inputNFlied
            document.getElementById('total-q-donation').innerText = totalNDonation
            const donationTotalAmount = TotalDonationAmount - inputNFlied
            document.getElementById('total-donation').innerText = donationTotalAmount
      }else{
            alert('Invalid Donation Amount')
      }    
})
