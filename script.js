//your JS code here. If required.
 let angle = 0;
        const rotateLine = () => {
            angle = (angle + 2) % 360; // Increment the angle by 2 degrees and ensure it stays within 0-359
            document.getElementById('line').style.transform = `rotate(${angle}deg)`;
        };

        setInterval(rotateLine, 20);