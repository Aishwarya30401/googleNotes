
// save notes

let addbutton = document.getElementById("save");
addbutton.addEventListener("click", function(e) {

  let addtitle = document.getElementById("title");
  let addtext = document.getElementById("text");
   
  let notes = localStorage.getItem("notes");
    {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addtitle.value,
    text: addtext.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
      addtext.value = "";
       addtitle.value = "";
   console.log(notesObj);
  showNotes();
});

//  localStorage

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
   else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
        <div class="note"> 
            <h3 class="title"> ${element.title} </h3>
            <p class="text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
            <button id="${index}"onclick="editNote(this.id)" class="edit-btn">Edit Note</button>
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

function editNote(index) {
    let notes = localStorage.getItem("notes");
    let addtitle = document.getElementById("title");
    let addtext = document.getElementById("text");
    if (addtitle.value !== "" || addtext.value !== "") {
      return 
    } 
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.stringify(notes);
    }
    console.log(notesObj);
    notesObj.findIndex((element, index) => {
      addtitle.value = element.title;
      addtext.value = element.text;
    })
    notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
}


showNotes(); 


// color change


