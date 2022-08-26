<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <title>Shiftplan</title>

    <script src="variables.js" defer></script>
    <script src="dates.js" defer></script>
    <script src="operators.js" defer></script>
    <script src="grid.js" defer></script>
    <script src="maingrid.js" defer></script>
    <script src="hoversystem.js" defer></script>
    <script src="summaryGrid.js" defer></script>
    <script src="savingSystem.js" defer></script>
</head>
<body>
    <div id="title">
        <h1 id="shiftplan-title">Shiftplan - <span id="currentMonth"></span></h1>
    </div>

    <div class="operators-grid-container">
        <div class="tableCorner">BIOC</div>
        <div class="tableCorner">Operators</div>
    </div>

    <div class="mainGrid"></div>
    

        <div class="summaryLeftPanel">
            <div class="dayShiftSummary">D - Operators</div>
            <div class="dayShiftSummary">D - SL </div>
            <div class="nightShiftSummary">N - Operators</div>
            <div class="nightShiftSummary">N - SL </div>
        </div>
        <div class="summaryGridContainer"></div>
    
    <footer class="controlPanel">
        <button id="dayshift" onclick="setup(this.id)">Dayshift - D</button>
        <button id="nightshift" onclick="setup(this.id)">Nightshift - N</button>
        <button id="vacation" onclick="setup(this.id)">Vacation - V</button>
        <button id="paragraf" onclick="setup(this.id)">Paragraf - P</button>
        <button id="freeshift" onclick="setup(this.id)">Free shift - F</button>
        <button id="remove" onclick="setup(this.id)">Remove - SPACE</button>
        <button id="reset" onclick="resetLocalStorage()">Reset shiftplan</button>
    </footer>

</body>
</html>