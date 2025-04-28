// Symptomen genereren
 const symptomsList = document.getElementById('symptomsList');
 symptomenLijst.forEach(symptoom => {
   const uitleg = uitlegData[symptoom] ? ` <a href="#" onclick="alert('${uitlegData[symptoom]}'); return false;">[uitleg]</a>` : '';
   const label = document.createElement('label');
   label.innerHTML = `<input type="checkbox" name="symptoms" value="${symptoom}"> ${symptoom}${uitleg}<br>`;
   symptomsList.appendChild(label);
 });
 
 // Middel links genereren
 const middelLinksDiv = document.getElementById('middelLinks');
 middelenData.forEach(middel => {
   const link = document.createElement('a');
   link.href = `middel.html?middel=${encodeURIComponent(middel.naam)}`;
   link.textContent = middel.naam;
   link.style.display = 'block';
   middelLinksDiv.appendChild(link);
 });
 
 // Form afhandeling
 document.getElementById('symptomForm').addEventListener('submit', function(event) {
   event.preventDefault();
 
   const selected = Array.from(document.querySelectorAll('input[name="symptoms"]:checked'))
                         .map(el => el.value);
 
   const mogelijkeMiddelen = middelenData.filter(middel =>
     middel.symptomen.some(s => selected.includes(s.symptoom))
   );
 
   const resultsDiv = document.getElementById('results');
   resultsDiv.innerHTML = "<h2>Mogelijke middelen:</h2>";
 
   mogelijkeMiddelen.forEach(middel => {
     const div = document.createElement('div');
     div.className = 'middel';
     div.textContent = middel.naam;
     div.addEventListener('click', () => {
       window.location.href = `middel.html?middel=${encodeURIComponent(middel.naam)}`;
     });
     resultsDiv.appendChild(div);
   });
 
   if (mogelijkeMiddelen.length === 0) {
     resultsDiv.innerHTML += "<p>Geen matchende middelen gevonden.</p>";
   }
 });
