
// save notes

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function(e) {

  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");

    if (addTitle.value == "" || addTxt.value == "") {
       
    }

  let notes = localStorage.getItem("notes");
    {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
 console.log(notesObj);
  showNotes();
});

//  localStorage

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
        <div class="note" style="color:black">
           
            <h3 class="note-title"> ${element.title} </h3>
            <p class="note-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
            <button id="${index}"onclick="editNote(this.id)" class="note-btn edit-btn">Edit Note</button>
        </div>
            `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } 
  
}

//  delete notes
function deleteNote(index) {
        let notes = localStorage.getItem("notes");
          {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
       showNotes();
    }

// }

// // Edit Notes

// function editNote(index) {
//     let notes = localStorage.getItem("notes");
//     let addTitle = document.getElementById("note-title");
//     let addTxt = document.getElementById("note-text");
//     if (addTitle.value !== "" || addTxt.value !== "") {
//       return 
//     } 
//     if (notes == null) {
//       notesObj = [];
//     } else {
//       notesObj = JSON.stringify(notes);
//     }
//     console.log(notesObj);
//     notesObj.findIndex((element, index) => {
//       addTitle.value = element.title;
//       addTxt.value = element.text;
//     })
//     notesObj.splice(index, 1);
//         localStorage.setItem("notes", JSON.stringify(notesObj));
//         showNotes();
// }


showNotes(); 

