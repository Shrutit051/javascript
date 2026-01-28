
        let intervalId = null; // Declare in outer scope
        
        function randomColor() {
            const hex = '0123456789ABCDEF';
            let color = '#';
            for(let i = 0; i < 6; i++) {
                color += hex[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Test the function
        console.log("Random color:", randomColor());

        document.querySelector('#start').addEventListener('click', function() {
            // Prevent multiple intervals
            if (intervalId) {
                clearInterval(intervalId);
            }
            
            // Change color immediately
            document.body.style.backgroundColor = randomColor();
            
            // Then start interval
            intervalId = setInterval(() => {
                document.body.style.backgroundColor = randomColor();
                console.log("Color changed to:", document.body.style.backgroundColor);
            }, 1000);
            
            console.log("Color changing started");
        });

        document.querySelector('#stop').addEventListener('click', function() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
                console.log("Color changing stopped");
            } else {
                console.log("No active interval to stop");
            }
        });
