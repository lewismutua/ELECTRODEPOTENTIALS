
    const electrodeData = [
      { reaction: "F₂ + 2e⁻ → 2F⁻", potential: 2.87, explanation: "Fluorine is the strongest oxidizing agent among halogens. It easily gains electrons." },
      { reaction: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", potential: 1.51, explanation: "Permanganate ion in acidic solution is a powerful oxidizing agent." },
      { reaction: "Cl₂ + 2e⁻ → 2Cl⁻", potential: 1.36, explanation: "Chlorine gas acts as a strong oxidizing agent by accepting electrons." },
      { reaction: "O₂ + 4H⁺ + 4e⁻ → 2H₂O", potential: 1.23, explanation: "Oxygen in acidic medium gets reduced to water. It's a common cathode reaction." },
      { reaction: "Br₂ + 2e⁻ → 2Br⁻", potential: 1.07, explanation: "Bromine is a halogen like chlorine but a weaker oxidizing agent." },
      { reaction: "I₂ + 2e⁻ → 2I⁻", potential: 0.54, explanation: "Iodine is the weakest oxidizing agent among the halogens listed here." },
      { reaction: "Ag⁺ + e⁻ → Ag", potential: 0.80, explanation: "Silver ions are easily reduced to metallic silver, often used in electroplating." },
      { reaction: "Fe³⁺ + e⁻ → Fe²⁺", potential: 0.77, explanation: "Ferric ion is reduced to ferrous ion, common in redox titrations." },
      { reaction: "Cu²⁺ + 2e⁻ → Cu", potential: 0.34, explanation: "Copper(II) ions are reduced to metallic copper in electrochemical cells." },
      { reaction: "2H⁺ + 2e⁻ → H₂", potential: 0.00, explanation: "This is the standard hydrogen electrode, the reference point for all potentials." },
      { reaction: "Pb²⁺ + 2e⁻ → Pb", potential: -0.13, explanation: "Lead ions are reduced to lead metal. It's less likely to gain electrons." },
      { reaction: "Fe²⁺ + 2e⁻ → Fe", potential: -0.44, explanation: "Ferrous ions are reduced to iron metal, which readily oxidizes again." },
      { reaction: "Zn²⁺ + 2e⁻ → Zn", potential: -0.76, explanation: "Zinc is commonly used as an anode in galvanic cells due to its reactivity." },
      { reaction: "Cr³⁺ + 3e⁻ → Cr", potential: -0.74, explanation: "Chromium(III) is reduced to chromium metal." },
      { reaction: "Al³⁺ + 3e⁻ → Al", potential: -1.66, explanation: "Aluminum ions are hard to reduce, requiring significant energy input." },
      { reaction: "Mg²⁺ + 2e⁻ → Mg", potential: -2.37, explanation: "Magnesium is very reactive and acts as a strong reducing agent." },
      { reaction: "Ca²⁺ + 2e⁻ → Ca", potential: -2.87, explanation: "Calcium is very reactive and not found in nature in pure form." },
      { reaction: "Na⁺ + e⁻ → Na", potential: -2.71, explanation: "Sodium metal is highly reactive and rarely found in nature uncombined." },
      { reaction: "K⁺ + e⁻ → K", potential: -2.93, explanation: "Potassium is even more reactive than sodium and lithium." },
      { reaction: "Li⁺ + e⁻ → Li", potential: -3.04, explanation: "Lithium has the lowest standard electrode potential, very strong reducing agent." }
    ];

    const tbody = document.querySelector("#electrodeTable tbody");
    const oxidationSelect = document.getElementById("oxidation");
    const reductionSelect = document.getElementById("reduction");

    electrodeData.forEach((entry, index) => {
      const row = document.createElement("tr");
      row.onclick = () => showPopup(entry.reaction, entry.explanation);

      const reactionCell = document.createElement("td");
      const potentialCell = document.createElement("td");

      reactionCell.textContent = entry.reaction;
      potentialCell.textContent = entry.potential.toFixed(2);
      potentialCell.className = entry.potential >= 0 ? "positive" : "negative";

      row.appendChild(reactionCell);
      row.appendChild(potentialCell);
      tbody.appendChild(row);

      const option1 = document.createElement("option");
      option1.value = entry.potential;
      option1.textContent = entry.reaction;
      oxidationSelect.appendChild(option1);

      const option2 = document.createElement("option");
      option2.value = entry.potential;
      option2.textContent = entry.reaction;
      reductionSelect.appendChild(option2);
    });

    function simulateReaction() {
      const Eox = parseFloat(oxidationSelect.value);
      const Ered = parseFloat(reductionSelect.value);
      const Ecell = Ered - Eox;

      const result = document.getElementById("result");
      result.innerHTML = `E°cell = ${Ered.toFixed(2)} - (${Eox.toFixed(2)}) = <strong>${Ecell.toFixed(2)} V</strong><br>`;
      result.innerHTML += Ecell > 0 ? "✅ Spontaneous reaction" : "❌ Non-spontaneous reaction";
    }

    function showPopup(title, text) {
      document.getElementById("popupTitle").textContent = title;
      document.getElementById("popupText").textContent = text;
      document.getElementById("overlay").style.display = "block";
      document.getElementById("popup").style.display = "block";
    }

    function closePopup() {
      document.getElementById("popup").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }
