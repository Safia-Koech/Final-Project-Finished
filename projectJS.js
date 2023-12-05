let form = document.getElementById('myForm');
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // Check if the input value matches the pattern
      document.getElementById("myButton").addEventListener('click', function(event) {
        if (!regex.test(email.value)) {
          alert('Invalid email! Email is required, and must be alphanumeric input.');
          event.preventDefault();
          //Stops Fly window from popping up if email is invalid
          throw new Error("Invalid Email");
        }
        
        document.getElementById("myButton").addEventListener('click',myWindow)
        function myWindow()
        {
            visitorName = document.getElementById("name").value;
            breakfast = document.getElementById("breakfast").value;
            let snack = document.getElementById("snack").value;
            let lunch = document.getElementById("lunch").value;
            let snack2 = document.getElementById("snack2").value;
            let dinner = document.getElementById("dinner").value;
            let goal = document.getElementById("goal").value;
            //Meal Plan display
            myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
            myText += ("\nHello " + visitorName + "! You entered that your goal for the week is " + goal +". Here is your meal plan for the week!");
            myText += ('<h1>Meal Plan</h1>');
            myText += ('</body></html>');
            myText += ('<h2>MONDAY:</h2>'); 
            myText += ('<h3>Breakfast:</h3>' + breakfast);
            myText += ('<h3>Snack:</h3>' + snack);
            myText += ('<h3>Lunch:</h3>' + lunch);
            myText += ('<h3>Snack:</h3>' + snack2);
            myText += ('<h3>Dinner:</h3>' + dinner);
            myText += ('<h2>TUESDAY:</h2>');
            myText += ('<h3>Breakfast:</h3>' + breakfast);
            myText += ('<h3>Snack:</h3>' + snack);
            myText += ('<h3>Lunch:</h3>' + lunch);
            myText += ('<h3>Snack:</h3>' + snack2);
            myText += ('<h3>Dinner:</h3>' + dinner);
            myText += ('<h2>WEDNESDAY:</h2>');
            myText += ('<h3>Breakfast:</h3>' + breakfast);
            myText += ('<h3>Snack:</h3>' + snack);
            myText += ('<h3>Lunch:</h3>' + lunch);
            myText += ('<h3>Snack:</h3>' + snack2);
            myText += ('<h3>Dinner:</h3>' + dinner);
            myText += ('<h2>THURSDAY:</h2>');
            myText += ('<h3>Breakfast:</h3>' + breakfast);
            myText += ('<h3>Snack:</h3>' + snack);
            myText += ('<h3>Lunch:</h3>' + lunch);
            myText += ('<h3>Snack:</h3>' + snack2);
            myText += ('<h3>Dinner:</h3>' + dinner);
            myText += ('<h2>FRIDAY:</h2>');
            myText += ('<h3>Breakfast:</h3>' + breakfast);
            myText += ('<h3>Snack:</h3>' + snack);
            myText += ('<h3>Lunch:</h3>' + lunch);
            myText += ('<h3>Snack:</h3>' + snack2);
            myText += ('<h3>Dinner:</h3>' + dinner);  
            myText += ('<h2>SATURDAY:</h2>');
            myText += ('<h3>Breakfast:</h3>' + breakfast);
            myText += ('<h3>Snack:</h3>' + snack);
            myText += ('<h3>Lunch:</h3>' + lunch);
            myText += ('<h3>Snack:</h3>' + snack2);
            myText += ('<h3>Dinner:</h3>' + dinner);
            myText += ('<h2>SUNDAY:</h2>');
            myText += ('<h3>Breakfast:</h3>' + breakfast);
            myText += ('<h3>Snack:</h3>' + snack);
            myText += ('<h3>Lunch:</h3>' + lunch);
            myText += ('<h3>Snack:</h3>' + snack2);
            myText += ('<h3>Dinner:</h3>' + dinner);
            myText += ('<br></br>')
            myText += ('<button onclick="downloadContent()">Download Meal Plan</button>');
            myText += ('<button onclick="clearContent()">Clear Content</button>');
            myText += ('</body></html>');
        
            flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
            // Populate the newly generated webpage
            flyWindow.document.write(myText);
            
        };
        flyWindow.document.close();
      });

        function downloadContent() {
          let flyWindow = document.getElementById('myWindow');
          let content = flyWindow.innerHTML;
      
          // Create a Blob with the content
          let blob = new Blob([content], { type: 'text/html' });
      
          // Create a temporary download link
          let downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(blob);
          downloadLink.download = 'fly-window-meal-plan.html';
      
          // Trigger the click event to start the download
          downloadLink.click();
      
          // Remove the temporary download link
          document.body.removeChild(downloadLink);

        };
        
        function clearContent() {
          flyWindow.innerHTML = '';
        }

        // Close the document to finalize changes 
        
      