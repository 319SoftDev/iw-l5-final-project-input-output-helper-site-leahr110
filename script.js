
function toggleDropdown(id) {
    document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu.id !== id) menu.classList.remove('show'); // Close others
    });
    document.getElementById(id).classList.toggle('show');
  }

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
         document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.classList.remove('show');
        });
    }
  }

  const SubmitButton = document.querySelector("#submit");
  const outputBoxCashier = document.querySelector("#outputBoxCashier");
  const outputBoxSales = document.querySelector("#outputBoxSales");
  const outputBoxBarista = document.querySelector("#outputBoxBarista");
  const outputBoxTeacher = document.querySelector("#outputBoxTeacher"); 
  const outputBoxEmpty = document.querySelector("#outputBoxEmpty");
  const search = document.querySelector("#search");

  const JobPopup = (e) => {
    const name = e.target.value.toLowerCase(); 
    
    if(name == "cashier") {
        outputBoxCashier.classList.remove("hidden") 
    } else {
        outputBoxCashier.classList.add("hidden")
    }
    if(name == "sales associate") {
        outputBoxSales.classList.remove("hidden")
    } else {
        outputBoxSales.classList.add("hidden")
    }
    if(name == "barista") {
        outputBoxBarista.classList.remove("hidden")
    }else {
        outputBoxBarista.classList.add("hidden")
    }
    if(name == "teacher") {
        outputBoxTeacher.classList.remove("hidden")
    }else {
        outputBoxTeacher.classList.add("hidden")
    }
    if (name !== "cashier" && name !== "sales associate" && name !== "barista" && name !== "teacher") {
        outputBoxEmpty.classList.remove("hidden")
    }else {
        outputBoxEmpty.classList.add("hidden")
    }
    if(name == "") {
        outputBoxBarista.classList.add("hidden")
        outputBoxCashier.classList.add("hidden")
        outputBoxSales.classList.add("hidden")
        outputBoxEmpty.classList.add("hidden")
        outputBoxTeacher.classList.add("hidden")
    }  

  }

search.addEventListener('change' , JobPopup); 


