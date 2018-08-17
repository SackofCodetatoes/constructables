export const search = (search) => (
  $.ajax({
    method: 'GET',
    url: 'api/search',
    data: { search }
  })
) 