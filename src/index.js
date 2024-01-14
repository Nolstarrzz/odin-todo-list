
//sidebar -->
let controlSidebar = false; 
document.getElementById('toggle-menu').addEventListener('click', () => {
    let sidebar = document.getElementById('sidebar');
    if(controlSidebar === false)
    {
        sidebar.style.display = 'flex';
        controlSidebar = true;
    }
    else if(controlSidebar === true)
    {
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
  
    //method to make a folder call(title, description);
    form.style.display = 'none';
    cancelForm() 
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

//make a way to turn the form on, then so it cancels any other clicks on the page
//<--

