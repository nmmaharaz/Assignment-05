function getInputElementById (id){
      const inputFlied = document.getElementById(id).value
      const inputAmount = parseFloat(inputFlied)
      return inputAmount
}

function getTotalDonationElementById (id){
      const totalAmount = document.getElementById(id).innerText
      const totalDonation = parseFloat(totalAmount)
      return totalDonation
}

function getAllTotalDonationAmountById (id){
      const allTotalDonation = document.getElementById(id).innerText
      const allTotalDon = parseFloat(allTotalDonation)
      return allTotalDon
}