export const fetchAllSteps = () => (
  $.ajax({
    method: 'GET',
    url: 'api/steps'
  })
)
export const createStep = (step) => (
  $.ajax({
    method: 'POST',
    url: 'api/steps',
    data: step ,
    contentType: false,
    processData: false,
  })
)
export const deleteStep = (stepId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/steps/${stepId}`
  })
)
export const updateStep = (step) => (
  $.ajax({
    method: 'PATCH', 
    url: `api/steps/${step.id}`,
    data: step,
    contentType: false,
    processData: false,
  })
)