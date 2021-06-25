export const getPageWiseData = (pageNumber, fullData, dataPerPage) => {                // Here value 5 is dataPerPage
    if (!pageNumber) {
      pageNumber = 1
    }
    if (pageNumber && fullData && fullData.length > 0) {
      const pagedData = fullData.filter((data, i) => (data) && (i < (dataPerPage ? dataPerPage * pageNumber : 3 * pageNumber)) && (i >= (dataPerPage ? dataPerPage * (pageNumber - 1) : 3 * (pageNumber - 1))))
      return pagedData
    } else {
      return []
    }
  }
  

  export const landingPage = (pageNumber, fullData, dataPerPage) => {    
    if (!pageNumber) {
      pageNumber = 1
    }
    if (pageNumber && fullData && fullData.length > 0) {
      const pagedData = fullData.filter((data, i) => (data) && (i < (dataPerPage ? dataPerPage * pageNumber : 3 * pageNumber)) && (i >= (dataPerPage ? dataPerPage * (pageNumber - 1) : 3 * (pageNumber - 1))))
      return pagedData
    } else {
      return []
    }
  }
  