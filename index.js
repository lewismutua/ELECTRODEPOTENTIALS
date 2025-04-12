
    const electrodeData = [
      { reaction: "F₂ + 2e⁻ → 2F⁻", potential: 2.87, explanation: "<p>"Fluorine is the strongest oxidizing agent among halogens because it easily gains electrons.</p><p><h2>Uses in Electrochemistry</h2></p><p>Production of Fluorine Gas: Fluorine gas is produced through the electrolysis of hydrofluoric acid (HF), where fluoride ions (F⁻) are oxidized at the anode to form fluorine gas (F₂).</p> <p>Fluorination Reactions: Electrochemical fluorination is used in organic synthesis to introduce fluorine atoms into organic compounds, which is important in pharmaceuticals, agrochemicals, and the production of fluoropolymers like Teflon"</p>." },
      { reaction: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", potential: 1.51, explanation: "p><h2>Uses in Electrochemistry</h2></p><p>xidizing Agent: MnO₄⁻ acts as a strong oxidizing agent in electrochemical reactions, often in redox processes where it is reduced to Mn²⁺ or MnO₂. It’s widely used in electrochemical sensors for detecting reducing agents.</p><p>Electrolytic Deposition: MnO₄⁻ can be used in the electroplating of manganese or in electrochemical synthesis of manganese-based materials, such as in batteries or catalytic applications.</p>." },
      { reaction: "Cl₂ + 2e⁻ → 2Cl⁻", potential: 1.36, explanation: "<p>Uses in Electrochemistry:</p><p>Chlor-alkali Process: Chlorine is produced by the electrolysis of brine in the chlor-alkali process, which also produces sodium hydroxide and hydrogen gas.</p><p>Water Disinfection: Chlorine is used in electrochemical disinfection processes, such as in water treatment plants to kill bacteria.</p>" },
      { reaction: "O₂ + 4H⁺ + 4e⁻ → 2H₂O", potential: 1.23, explanation: "p><h2>Uses in Electrochemistry</h2></p><p>Oxygen Reduction Reaction (ORR): In fuel cells, especially hydrogen fuel cells, O₂ is reduced at the cathode to form water (H₂O) by gaining electrons. This reaction is central to the generation of electricity in fuel cells.</p><p>Electrolysis of Water: O₂ is produced during the electrolysis of water, where water is split into hydrogen and oxygen gases. Oxygen is released at the anode in this process, which is key in hydrogen production for energy storage and fuel applications</p>." },
      { reaction: "Br₂ + 2e⁻ → 2Br⁻", potential: 1.07, explanation: "Bromine is a halogen like chlorine but a weaker oxidizing agent.<p><h2>Uses in Electrochemistry</h2></p><p>Bromine Production: Bromine gas (Br₂) is produced by the electrolysis of sodium bromide (NaBr) or other bromine-containing salts, where bromide ions (Br⁻) are oxidized at the anode to form bromine gas.</p><p>Electrochemical Synthesis: Bromine is used in electrochemical processes for organic synthesis, particularly in the bromination of organic compounds. It also finds use in bromine-based batteries (e.g., bromine flow batteries) for energy storage</p>." },
      { reaction: "I₂ + 2e⁻ → 2I⁻", potential: 0.54, explanation: "Iodine is the weakest oxidizing agent among the halogens listed here.<h2>Uses in Electrochemistry</h2></p>pIodine Production: Iodine gas (I₂) is produced by the electrolysis of potassium iodide (KI) or other iodine-containing salts, where iodide ions (I⁻) are oxidized at the anode to form iodine gas.</p><p>Electrochemical Synthesis: Iodine is used in the electrochemical synthesis of iodine-based compounds, and also in iodine-based batteries like iodine-sulfur batteries for energy storage, leveraging iodine's redox properties.</p." },
      { reaction: "Ag⁺ + e⁻ → Ag", potential: 0.80, explanation: "h2><p>Uses in Electrochemistry:</p><h2><p>Electroplating: Silver is used in electroplating for high-quality coatings, often in jewelry, silverware, and electronics.</p><p>Photographic Processes: In traditional photography, silver halides are used in silver-based electrochemical reactions to develop images.</p>." },
      { reaction: "Fe³⁺ + e⁻ → Fe²⁺", potential: 0.77, explanation: "Ferric ion is reduced to ferrous ion, common in redox titrations.<p>Uses in Electrochemistry:</p><p>Corrosion: Iron is used in electrochemical studies of corrosion, specifically the oxidation of iron in the presence of oxygen and water.</p><p>Batteries: Iron is used in some iron-air batteries, where iron is oxidized and reduced during the charge/discharge cycle.</p>." },
      { reaction: "Cu²⁺ + 2e⁻ → Cu", potential: 0.34, explanation: "<h3><p>Uses in Electrochemistry:</p><h3><p>Electroplating: Copper is widely used in electroplating to deposit a layer of copper onto another metal, often for electronics and jewelry.</p>"<p>Electrorefining: Copper is refined using electrolysis, where impure copper is the anode and pure copper is deposited at the cathode.</p>." },
      { reaction: "2H⁺ + 2e⁻ → H₂", potential: 0.00, explanation: "It is the Standard Reference Electrode.The Standard Hydrogen Electrode (SHE) is a reference electrode in electrochemistry, arbitrarily assigned a potential of 0.00 volts, and used to measure the electrode potentials of other half-cells.It is also used as a fuel in hydrogen fuel cells, where it reacts with oxygen to produce electricity, water, and heat.." },
      { reaction: "Pb²⁺ + 2e⁻ → Pb", potential: -0.13, explanation: "Lead ions are reduced to lead metal. It's less likely to gain electrons.<p><h2>Uses in Electrochemistry</h2></p><p>Lead-Acid Batteries: Pb²⁺ ions are involved in the charge and discharge reactions of lead-acid batteries. During discharge, lead (Pb) reacts with sulfuric acid (H₂SO₄) to form lead sulfate (PbSO₄) and release electrical energy. During charging, lead sulfate is converted back to lead and lead dioxide (PbO₂), and Pb²⁺ ions are involved in these redox reactions.</p><p>Electrorefining: Pb²⁺ ions are used in the electrorefining of lead, where impure lead is electrolytically refined to produce high-purity lead metal.</p." },
      { reaction: "Fe²⁺ + 2e⁻ → Fe", potential: -0.44, explanation: "Fe²⁺ is valuable due to its ability to undergo oxidation and reduction, making it useful in energy storage and metal coating processes.<p><h2>Uses in Electrochemistry</h2></p><p>Electroplating: Fe²⁺ is used in iron electroplating, where it is reduced to form a layer of iron on a substrate. This process is used to improve the corrosion resistance and durability of metal parts.</p><p>Redox Reactions in Batteries: Fe²⁺ is involved in redox reactions in some types of batteries (e.g., iron-air batteries), where it alternates between Fe²⁺ and Fe³⁺ (iron(III)) during the charge and discharge cycles to store and release energy." },
      { reaction: "Zn²⁺ + 2e⁻ → Zn", potential: -0.76, explanation: "<p>Uses in Electrochemistry:</p> <p>Galvanic Cells: Zinc is used as the anode in galvanic cells (e.g., Zn-Cu battery) due to its ability to easily lose electrons (oxidation).</p><p>Corrosion Protection: Zinc is used in galvanization to coat iron or steel, providing corrosion resistance.</p>." },
      { reaction: "Cr³⁺ + 3e⁻ → Cr", potential: -0.74, explanation: "<p>Uses in Electrochemistry:</p><p>Chromium Electroplating: Cr³⁺ is used in chromium electroplating, where it is reduced to form a chromium metal coating on surfaces, providing hardness, corrosion resistance, and an attractive finish.</p><p>Electrochemical Synthesis: Cr³⁺ is used in electrochemical synthesis to produce chromium compounds, which are important in the manufacturing of pigments, dyes, and materials with specific electrochemical properties</p>." },
      { reaction: "Al³⁺ + 3e⁻ → Al", potential: -1.66, explanation: "<p>Uses in Electrochemistry:</p><p>Aluminum Production: Al³⁺ is involved in the Hall-Héroult process for producing aluminum metal. In this process, Al³⁺ ions from aluminum oxide (Al₂O₃) are reduced at the cathode during electrolysis to form aluminum metal.</p><p>Aluminum-Air Batteries: Al³⁺ ions play a role in aluminum-air batteries, where aluminum metal undergoes oxidation to release energy, offering a high energy density for potential use in electric vehicles and other applications.</p>." },
      { reaction: "Mg²⁺ + 2e⁻ → Mg", potential: -2.37, explanation: "Magnesium is very reactive and acts as a strong reducing agent.<p>Uses in Electrochemistry:</p><p>Magnesium-Ion Batteries: Mg²⁺ ions are fundamental to the operation of magnesium-ion batteries, which are being developed as potential alternatives to lithium-ion batteries. These batteries utilize the reversible intercalation and deintercalation of Mg²⁺ ions between electrodes to store and release energy.</p>." },
      { reaction: "Ca²⁺ + 2e⁻ → Ca", potential: -2.87, explanation: "Calcium is very reactive and not found in nature in pure form.<p>Uses in Electrochemistry:</p><p>Electroplating;Calcium chloride is used in electroplating to modify surface properties of metals." },
      { reaction: "Na⁺ + e⁻ → Na", potential: -2.71, explanation: "Sodium metal is highly reactive and rarely found in nature uncombined.<p>Uses in Electrochemistry:</p>Salt bridges;Na+ ions are used in the saltbridge which helps mantain electrical neutrality and balancing charges  between the half-cells." },
      { reaction: "K⁺ + e⁻ → K", potential: -2.93, explanation: "<p>Uses in Electrochemistry:</p><p>Used in making Salt bridges where it maintain ionic balance between halfcell.</p>" },
      { reaction: "Li⁺ + e⁻ → Li", potential: -3.04, explanation: "Lithium has the lowest standard electrode potential, very strong reducing agent.<p>Uses in Electrochemistry:</p><p>Lithium-Ion Batteries: Lithium is the core material used in lithium-ion batteries, which are widely used in mobile phones, laptops, and electric vehicles.</p><p>Electroplating: Lithium is used in electroplating for producing thin films and coatings, particularly in high-performance applications.</p>." }
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
