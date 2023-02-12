function getDataUser() {
  const userName = document.getElementById('name').value;
  const userSurname = document.getElementById('surname').value;
  const userArea = document.getElementById('area').value;

  const userData = {
    name: `${userName}`,
    surname: `${userSurname}`,
    area: `${userArea}`

}
return userData
}

const TARGET_BTN = document.getElementById('sub');
TARGET_BTN.addEventListener('click', (e) => {
  e.preventDefault()
  const DATA = getDataUser();
  console.log(DATA)
})