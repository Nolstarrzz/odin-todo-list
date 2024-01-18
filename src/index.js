
//sidebar -->
let controlSidebar = false; 
document.getElementById('toggle-menu').addEventListener('click', () => {
    let sidebar = document.getElementById('sidebar');
    let body = document.body;

    if(controlSidebar === false)
    {
        body.classList.add('sidebar-visible');
        sidebar.style.display = 'flex';
        controlSidebar = true;
    }
    else if(controlSidebar === true)
    {
        body.classList.remove('sidebar-visible');
        sidebar.style.display = 'none';
        controlSidebar = false;
    }
});
//<--

// get values-->
let overlay = document.getElementById('overlay');


function getValues(event) {
    event.preventDefault();
  
    let title, form, description;
    form = document.getElementById("info-selector");
    title = document.getElementById("title").value;
    description = document.getElementById("description").value;
    
    if (!title || !description) {
      alert("Please fill out all required fields.");
      return;
    }
    
    addFolder(title, description)
    loopFolders()
    //method to make a folder call(title, description);
    form.style.display = 'none';
    cancelForm() 
}

function loopFolders() {
    resetFolders()
    for (const folder of folders) {
      makeFolder(folder)
    }
}

function removeFolder(folderIndex)
{
    if(folders.length === 1)
    {
        alert("there is only one folder")
        console.log(folders.length)
        console.log(folders)
        return
    }
    else if(folderIndex !== -1){
        folders.splice(folderIndex, 1);
    }
}

function resetFolders() 
{
    let folderArea = document.getElementById('folders')
    folderArea.innerHTML = '';
}

function addFolder(title, description) {
    const newFolder = new folder(title, description)
    folders.push(newFolder)
}

function cancelForm() {
    let form = document.getElementById("info-selector");
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    form.style.display = 'none';
    overlay.style.display = 'none';
}

document.getElementById('submitBtn').addEventListener('click', getValues);
document.getElementById('cancelBtn').addEventListener('click', cancelForm);

document.getElementById('sidebar-title').addEventListener('click', () => {
    let form = document.getElementById("info-selector");
    form.style.display = 'flex';
    overlay.style.display = 'block';
});

//<--

// Make the folders/todos--> 
let folders = [];

function makeFolder(folder) {
    let folderArea = document.getElementById('folders')
    const project = document.createElement('div')
    project.classList.add('folder')
    const title = document.createElement('p')
    title.textContent = folder.title;
    const trashButton = document.createElement('img')
    trashButton.src = '../img/deleteButton.png';
    
    trashButton.addEventListener('click', () => {
        removeFolder(folders.indexOf(folder));
        loopFolders()
    });

    project.addEventListener('click', () => {
        //changePage(idk not made)
    });

    //get an icon, append stuff, this only works for the sidebar stuff, if using
    //description, need to change in some way
    folderArea.appendChild(project)
    project.appendChild(title)
    project.appendChild(trashButton)
}

class folder {
    constructor(title, description) {
      this.title = title;
      this.description = description;
    }
    info() {
      return `${this.title}, ${this.description}`;
    }
}


//<--


//--> Changes the main page

function changePage(folder) {

}

//<--
