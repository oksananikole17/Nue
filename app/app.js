// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  $('#workout-home').hide()
  $('#find-modal').hide()
  $('#workout-display').hide()
  $('#show-all').hide()
  $('#sign-out').hide()
  $('#second').hide()
  $('#password').hide()
  $('#show-workout-form').hide()
  $('#all-workouts').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})
