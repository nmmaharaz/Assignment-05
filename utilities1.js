function getInputElementById (id){
      const inputFlied = document.getElementById(id).value
      const inputAmount = parseFloat(inputFlied)
      return inputAmount
      // console.log(inputAmount)
}

function getTotalDonationElementById (id){
      const totalAmount = document.getElementById(id).innerText
      const totalDonation = parseFloat(totalAmount)
      return totalDonation
      // console.log(totalDonation)
}

function getAllTotalDonationAmountById (id){
      const allTotalDonation = document.getElementById(id).innerText
      const allTotalDon = parseFloat(allTotalDonation)
      return allTotalDon
      // console.log(allTotalDon)
}