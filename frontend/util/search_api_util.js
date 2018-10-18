export const search = (search) => (
  $.ajax({
    method: 'GET',
    url: 'api/search',
    data: { search }
  })
) 

// export const userProjectSearch = (userId) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/user/${userId}`,
//     data: { userId }
//   })
// )
