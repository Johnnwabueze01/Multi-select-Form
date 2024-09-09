const cards = document.querySelectorAll('.card');
const switchElement = document.getElementById('switch');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');


    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      });
    });
    
let currentStep = 1;

    function updateStepCounter(step) {
        // Remove 'active' class from all steps
        document.querySelectorAll('.step').forEach(function(stepElem) {
            stepElem.classList.remove('active');
        });

        // Add 'active' class to the current step
        document.getElementById(`step${step}`).classList.add('active');
    }

    function nextPage(currentPage) {
        const current = document.getElementById(`page${currentPage}`);
        const inputs = current.querySelectorAll('input, select, textarea');
        let valid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('error');
                valid = false;
            } else {
                input.classList.remove('error');
            }
        });

        if (valid) {
            if (currentPage === 6) {
                // Display selected options on the fourth page
                document.getElementById('displayName').innerText = document.getElementById('card1').value;
                document.getElementById('displayEmail').innerText = document.getElementById('email').value;
              //
                document.getElementById('displayGender').innerText = document.getElementById('gender').value;
            }

            document.getElementById(`page${currentPage}`).classList.remove('active');
            document.getElementById(`page${currentPage + 1}`).classList.add('active');
            currentStep++;
            updateStepCounter(currentStep);
        }
    }

    function prevPage(currentPage) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        document.getElementById(`page${currentPage - 1}`).classList.add('active');
        currentStep--;
        updateStepCounter(currentStep);
    }



    document.getElementById('multiPageForm').addEventListener('submit', function(event) {
        alert('Form submitted successfully!');
        event.preventDefault(); // Remove this line to actually submit the form
    });


    function togglePage() {
        const page1 = document.getElementById('page_1');
        const page2 = document.getElementById('page_2');
        const toggleSwitch = document.getElementById('toggleSwitch');

        page1.classList.toggle('active');
        page2.classList.toggle('active');
        toggleSwitch.classList.toggle('active');
    }


    

    switchElement.addEventListener('change', () => {
      if (switchElement.checked) {
        section1.classList.remove('active');
        section2.classList.add('active');
      } else {
        section1.classList.add('active');
        section2.classList.remove('active');
      }
    });

    cards.forEach(card => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      card.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
        card.classList.toggle('checked', checkbox.checked);
      });
    });