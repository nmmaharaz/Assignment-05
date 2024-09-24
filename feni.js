const feniDonationFiled = document.getElementById('f-donation-button').addEventListener('click', function(event){
      const inputNFlied = getInputElementById('input-f-filed')
      console.log(inputNFlied)
      const NDonation = getTotalDonationElementById('f-donation')
      if(inputNFlied >= 0 && !isNaN(inputNFlied)){
            getCongratesElementById('f-congrates')
            document.getElementById('close-f-congrates').addEventListener('click', function(event){
                  document.getElementById('f-congrates').classList.add('opacity-0', 'pointer-events-auto')
            })
            const TotalDonationAmount = getAllTotalDonationAmountById('total-donation')
            const totalNDonation = NDonation + inputNFlied
            document.getElementById('f-donation').innerText = totalNDonation
            const donationTotalAmount = TotalDonationAmount - inputNFlied
            document.getElementById('total-donation').innerText = donationTotalAmount
      }else{
            alert('Invalid Donation Amount')
      }       
})


