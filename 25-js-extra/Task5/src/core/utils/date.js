import moment from 'moment'

export const getCurrentDateFormat = date => {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}
