const phoneInput = document.querySelector('.phone-input')
const privacyPolicyCheckbox = document.querySelector('.privacy-policy-checkbox')
const makeOrderButton = document.querySelector('.make-order-button')

makeOrderButton.addEventListener('click', () => {
  if (privacyPolicyCheckbox.checked) {
    phoneInput.value
      ? alert(`Наш оператор позвонит на номер ${phoneInput.value} в течении 30 минут`)
      : alert('Пожалуйста, введите номер телефона')
  } else {
    alert('Пожалуйста, согласитесь с  условиями обработки персональных данных')
  }
})
