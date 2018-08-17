export const search = (keywords) => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
    data: keywords
  })
) 