window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('#mainNavbar .nav-link:not(.dropdown-toggle), #mainNavbar .dropdown-item, #mainNavbar .btn-brand').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('mainNavbar');
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse && navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  });
});

const form = document.getElementById("bookingForm");
const phoneInput = document.getElementById("phone");
const pickupDateTime = document.getElementById("pickupDateTime");
const dropDateTime = document.getElementById("dropDateTime");
const adultsCount = document.getElementById("adultsCount");
const childrenCount = document.getElementById("childrenCount");
const accommodationDetails = document.getElementById("accommodationDetails");
const childrenAgesWrapper = document.getElementById("childrenAgesWrapper");
const childrenAgesContainer = document.getElementById("childrenAgesContainer");

function getLocalDateTimeMin() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

function setMinimumDates() {
  const nowMin = getLocalDateTimeMin();
  pickupDateTime.min = nowMin;
  dropDateTime.min = pickupDateTime.value || nowMin;
}

function formatDateTime(value) {
  if (!value) return "";
  return new Date(value).toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}

function getAccommodationValue() {
  return document.querySelector('input[name="accommodation"]:checked')?.value || "No";
}

function toggleAccommodationFields() {
  if (getAccommodationValue() === "Yes") {
    accommodationDetails.style.display = "block";
  } else {
    accommodationDetails.style.display = "none";
    adultsCount.value = "";
    childrenCount.value = "";
    childrenAgesContainer.innerHTML = "";
    childrenAgesWrapper.style.display = "none";
  }
}

function renderChildrenAgeInputs() {
  const count = Number(childrenCount.value);
  childrenAgesContainer.innerHTML = "";

  if (!count || count <= 0) {
    childrenAgesWrapper.style.display = "none";
    return;
  }

  childrenAgesWrapper.style.display = "block";

  for (let i = 1; i <= count; i++) {
    const div = document.createElement("div");
    div.className = "col-md-4";
    div.innerHTML = `<input type="number" class="form-control child-age-input" placeholder="Child ${i} age" min="0" max="17">`;
    childrenAgesContainer.appendChild(div);
  }
}

setMinimumDates();

pickupDateTime.addEventListener("change", function () {
  if (pickupDateTime.value) {
    dropDateTime.min = pickupDateTime.value;
    if (dropDateTime.value && dropDateTime.value < pickupDateTime.value) {
      dropDateTime.value = pickupDateTime.value;
    }
  } else {
    setMinimumDates();
  }
});

phoneInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "").slice(0, 10);
});

document.querySelectorAll('input[name="accommodation"]').forEach(radio => {
  radio.addEventListener("change", toggleAccommodationFields);
});

childrenCount.addEventListener("input", renderChildrenAgeInputs);

form.addEventListener("reset", function () {
  setTimeout(() => {
    accommodationDetails.style.display = "none";
    childrenAgesWrapper.style.display = "none";
    childrenAgesContainer.innerHTML = "";
    setMinimumDates();
  }, 0);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pickupLocation = document.getElementById("pickupLocation").value.trim();
  const intermediateLocation = document.getElementById("intermediateLocation").value.trim();
  const dropLocation = document.getElementById("dropLocation").value.trim();
  const pickup = pickupDateTime.value;
  const drop = dropDateTime.value;
  const vehicle = document.getElementById("vehicle").value;
  const accommodation = getAccommodationValue();

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    phoneInput.focus();
    return;
  }

  if (!pickupLocation) {
    alert("Please enter pickup location.");
    return;
  }

  if (!dropLocation) {
    alert("Please enter drop location.");
    return;
  }

  if (!pickup) {
    alert("Please select pickup date and time.");
    return;
  }

  if (!drop) {
    alert("Please select drop date and time.");
    return;
  }

  if (drop < pickup) {
    alert("Drop date and time cannot be earlier than pickup date and time.");
    dropDateTime.focus();
    return;
  }

  if (!vehicle) {
    alert("Please select a vehicle.");
    return;
  }

  let accommodationText = "No";

  if (accommodation === "Yes") {
    const adults = adultsCount.value.trim();
    const children = childrenCount.value.trim() === "" ? "0" : childrenCount.value.trim();

    if (!adults || Number(adults) < 1) {
      alert("Please enter adults count.");
      adultsCount.focus();
      return;
    }

    const childCountNum = Number(children);

    if (childCountNum < 0) {
      alert("Children count cannot be negative.");
      childrenCount.focus();
      return;
    }

    let childrenAgesText = "None";

    if (childCountNum > 0) {
      const ageInputs = document.querySelectorAll(".child-age-input");
      const ages = [];

      for (const input of ageInputs) {
        const value = input.value.trim();
        if (value === "") {
          alert("Please enter all children ages.");
          input.focus();
          return;
        }
        ages.push(value);
      }

      childrenAgesText = ages.join(", ");
    }

    accommodationText = `Yes
Adults: ${adults}
Children: ${children}
Children Ages: ${childrenAgesText}`;
  }

  const message = `*New Enquiry – Bharathiyar Tours & Travels*

*Name:* ${name}
*Phone:* ${phone}
*Pickup:* ${pickupLocation}
*Intermediate:* ${intermediateLocation || "Not Mentioned"}
*Drop:* ${dropLocation}
*Pickup Date & Time:* ${formatDateTime(pickup)}
*Drop Date & Time:* ${formatDateTime(drop)}
*Vehicle:* ${vehicle}
*Accommodation:* ${accommodationText}

Kindly share fare and availability.`;

  window.open(`https://wa.me/919629808833?text=${encodeURIComponent(message)}`, "_blank");
});
