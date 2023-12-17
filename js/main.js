var bookMarkNameInput = document.getElementById("bookMarkName");
var bookMarkUrlInput = document.getElementById("bookMarkUrl");

var bookMarkList = [];
if (localStorage.getItem("bookMarks") != null) {
  bookMarkList = JSON.parse(localStorage.getItem("bookMarks"));
  displayBookMark();
}

function addBookMark() {
  var bookMark = {
    name: bookMarkNameInput.value,
    url: bookMarkUrlInput.value,
  };

  bookMarkList.push(bookMark);
  localStorage.setItem("bookMarks", JSON.stringify(bookMarkList));
  displayBookMark();
  clearForm();
}

function displayBookMark() {
  var cartoona = "";
  for (var i = 0; i < bookMarkList.length; i++) {
    cartoona += `
    <tr>
    <td>${i + 1}</td>
    <td>${bookMarkList[i].name}</td>
    <td>
      <button onclick="visitSite()" class="btn btn-visit">
        <i class="fa-solid fa-eye pe-2"></i>Visit
      </button>
    </td>
    <td>
      <button onclick="deleteBookMark(${i})" class="btn btn-delete">
        <i class="fa-solid fa-trash-can"></i> Delete
      </button>
    </td>
  </tr>
    `;
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}

function clearForm() {
  bookMarkNameInput.value = "";
  bookMarkUrlInput.value = "";
}

function deleteBookMark(bookMarkIndex) {
  bookMarkList.splice(bookMarkIndex, 1);
  localStorage.setItem("bookMarks", JSON.stringify(bookMarkList));
  displayBookMark(bookMarkList);
}
