let obj = {};

let data = [];



document.getElementById("button").addEventListener("click", () => {
    formValidations();
})

function formValidations() {

    if (checkFname()) {
        if (checkLname()) {
            if (checkAddress()) {
                if (checkPincode()) {
                    if (checkGender()) {
                        if (checkFood()) {
                            if (checkState()) {
                                if (checkCountry()) {
                                    addRecord();
                                }
                            }
                        }
                    }

                }

            }

        }
    }


}

let lettersOnly = /^[A-Za-z]+$/;

// Funtion to validate First_Name,Last_Name,State,Country
function checkName(name, min, letters) {

    if (name.value.length > min) {
        if (name.value.match(letters)) {
            return true;
        } else {
            alert(`${name.name} should contain only Alphabets.`);
            name.focus();
        }

    } else {
        alert(`${name.name} should contain minimum ${min+1} letters.`);
        name.focus();
    }
}


//Validation Funtions

function checkFname() {
    let fname = document.registration.First_Name;
    return checkName(fname, 2, lettersOnly);
}

function checkLname() {

    let lname = document.registration.Last_Name;
    return checkName(lname, 2, lettersOnly);

}

function checkState() {

    let state = document.registration.State;
    return checkName(state, 3, lettersOnly);
}

function checkCountry() {

    let country = document.registration.Country;
    return checkName(country, 3, lettersOnly);
}

function checkAddress() {

    let addr = document.registration.Address;

    let letter = /^[, 0-9A-Za-z]+$/;

    if (addr.value.length > 5) {
        if (addr.value.match(letter)) {
            return true;
        } else {
            alert("Address contain only alphanumeric characters.");
        }

    } else {
        alert("Address should contain minimum 6 letters.");
        addr.focus();
    }
}

function checkPincode() {

    let pincode = document.registration.Pincode;
    if (pincode.value.length > 5) {
        if (isNaN(pincode.value)) {
            alert("Please Enter a Valid Pincode");
            pincode.focus();

        } else
            return true;
    } else {
        alert("Please Enter a Valid Pincode");
        pincode.focus();
    }
}

function checkGender() {

    let gender = document.getElementsByName("Gender");

    let count = 0;

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            count++;
            break;
        }
    }

    if (count == 0)
        alert("Gender is not Selected");
    else
        return true;
}

function checkFood() {

    let items = document.querySelectorAll(".food");
    let count = 0;
    items.forEach(i => {
        if (i.checked)
            count++;
    })

    if (count > 1)
        return true;
    else
        alert("Please select atleast 2 Food items.")

}


// Function to add the records

function addRecord() {

    obj["First_Name"] = document.querySelector("#fname").value;
    obj["Last_Name"] = document.getElementById("lname").value;
    obj["Address"] = document.getElementById("addr").value;
    obj["Pincode"] = document.getElementById("pc").value;

    let gender = getGender();
    obj["Gender"] = gender;
    obj["Food"] = getFood();
    obj["State"] = document.getElementById("state").value;
    obj["Country"] = document.getElementById("country").value;
    let row = document.createElement("tr");

    for (const i in obj) {
        let cell = document.createElement("td");
        cell.innerText = obj[i];
        row.appendChild(cell);
    }

    document.getElementById("tb").appendChild(row);

    document.getElementById("myForm").reset();

}



//Function to get Gender Value from radio button

function getGender() {
    let gender = document.getElementsByName("Gender");

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value;
        }
    }

}

//Function to get food item from checkboxes

function getFood() {
    let items = document.querySelectorAll(".food");
    let food = [];

    for (let i = 0; i < items.length; i++) {
        if (items[i].checked)
            food.push(items[i].value);
    }

    return food;

}