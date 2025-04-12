
    const electrodeData = [
      const electrodeData = [
  {
    reaction: "F₂ + 2e⁻ → 2F⁻",
    potential: 2.87,
    explanation: "Fluorine is the ultimate electron grabber, making it the strongest oxidizing agent among the halogens. It eagerly snatches electrons, leaving a trail of highly reactive fluoride ions in its wake. This makes fluorine an absolute powerhouse in chemistry!",
    uses: [
      "Fluorine plays a starring role in the creation of Teflon, the non-stick coating that revolutionized cooking.",
      "In the nuclear industry, fluorine helps create uranium hexafluoride, which is crucial for enriching uranium for nuclear power."
    ]
  },
  {
    reaction: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
    potential: 1.51,
    explanation: "The mighty permanganate ion is a formidable oxidizer, especially in acidic solutions. With its deep purple hue, it's like the superhero of redox reactions, effortlessly transforming into a less powerful Mn²⁺ ion while leaving behind a trail of water molecules.",
    uses: [
      "Potassium permanganate is a hero in water treatment, used to remove contaminants and disinfect water.",
      "It also shines as an oxidizing agent in organic chemistry, helping synthesize complex compounds."
    ]
  },
  {
    reaction: "Cl₂ + 2e⁻ → 2Cl⁻",
    potential: 1.36,
    explanation: "Chlorine gas is a strong electron thief, ripping electrons away from other molecules with ease. It’s like the villain in the halogen family, always looking for a chance to steal electrons and turn into chloride ions.",
    uses: [
      "Chlorine is indispensable in disinfectants and bleach, keeping our water clean and our homes germ-free.",
      "In the industrial world, chlorine is crucial in making PVC, the plastic that’s used in everything from pipes to clothing."
    ]
  },
  {
    reaction: "O₂ + 4H⁺ + 4e⁻ → 2H₂O",
    potential: 1.23,
    explanation: "Oxygen is the lifeblood of aerobic organisms, accepting electrons and turning into water in a reaction that powers everything from respiration to combustion. This iconic process is the heart of energy generation in electrochemical cells.",
    uses: [
      "Oxygen is vital for respiration in humans and animals, sustaining life itself.",
      "In industry, oxygen is essential for cutting and welding metals, thanks to its ability to support high-temperature flames."
    ]
  },
  {
    reaction: "Br₂ + 2e⁻ → 2Br⁻",
    potential: 1.07,
    explanation: "Bromine, the cool and collected halogen, is a strong oxidizer but just a bit less aggressive than its chlorine cousin. When it accepts electrons, it transforms into bromide, ready to join the ranks of the halogens in its ionic form.",
    uses: [
      "Bromine is used in flame retardants, making materials safer by reducing their flammability.",
      "It also plays a role in medicine, used in certain sedatives and antiseptics."
    ]
  },
  {
    reaction: "I₂ + 2e⁻ → 2I⁻",
    potential: 0.54,
    explanation: "Iodine is the least aggressive of the halogens, but that doesn’t mean it’s any less valuable. As it gains electrons, it transforms from a molecular iodine gas into iodide ions, bringing essential balance to chemical reactions.",
    uses: [
      "Iodine is a crucial element in medical antiseptics, helping to kill harmful bacteria.",
      "It’s also used in X-ray imaging as a contrast agent, allowing doctors to better visualize internal structures."
    ]
  },
  {
    reaction: "Ag⁺ + e⁻ → Ag",
    potential: 0.80,
    explanation: "Silver ions are ready to be reduced to shiny, metallic silver, making it a go-to material for electroplating. Silver’s lustrous finish is both beautiful and highly conductive, making it perfect for a variety of applications.",
    uses: [
      "Silver is widely used in jewelry and coins, prized for its aesthetic appeal and conductivity.",
      "In electronics, silver is used in connectors and switches due to its superior electrical conductivity."
    ]
  },
  {
    reaction: "Fe³⁺ + e⁻ → Fe²⁺",
    potential: 0.77,
    explanation: "Iron’s transition from ferric (Fe³⁺) to ferrous (Fe²⁺) is a key step in redox chemistry, especially in titrations. It’s the metal that’s always ready to interact, making it a cornerstone of electrochemical processes.",
    uses: [
      "Iron is a fundamental material in construction, especially in the production of steel.",
      "Iron also plays a key role in the environment, being an essential nutrient in many biological processes."
    ]
  },
  {
    reaction: "Cu²⁺ + 2e⁻ → Cu",
    potential: 0.34,
    explanation: "Copper ions readily accept electrons to form metallic copper, making copper one of the most commonly used metals in electrochemical cells. It’s the metal that keeps on giving, from conductivity to corrosion resistance.",
    uses: [
      "Copper is used in electrical wiring and circuits due to its excellent conductivity.",
      "It’s also used in plumbing, as copper pipes are resistant to corrosion and are long-lasting."
    ]
  },
  {
    reaction: "2H⁺ + 2e⁻ → H₂",
    potential: 0.00,
    explanation: "The standard hydrogen electrode is the reference point for all electrochemical reactions. It's the universal baseline, where hydrogen ions gain electrons to form hydrogen gas, making it an essential part of electrochemical theory.",
    uses: [
      "Hydrogen gas is used in fuel cells to produce electricity in a clean, efficient way.",
      "It is also a key ingredient in the Haber process for ammonia synthesis, crucial for fertilizers."
    ]
  },
  {
    reaction: "Pb²⁺ + 2e⁻ → Pb",
    potential: -0.13,
    explanation: "Lead, with its ability to be reduced to metallic form, is less eager to accept electrons compared to other metals. But when it does, it’s often used in applications that require heavy-duty corrosion resistance, like batteries.",
    uses: [
      "Lead is a primary component in lead-acid batteries, commonly used in cars.",
      "It’s also used in shielding for radiation, protecting us from harmful ionizing radiation."
    ]
  },
  {
    reaction: "Fe²⁺ + 2e⁻ → Fe",
    potential: -0.44,
    explanation: "Ferrous iron is easily reduced to its metallic form, but it has a tendency to oxidize again. This makes it a great participant in redox reactions, but one that requires careful control.",
    uses: [
      "Iron is indispensable in construction, especially in the form of steel for buildings and bridges.",
      "Ferrous ions are also used in wastewater treatment to precipitate out harmful phosphates."
    ]
  },
  {
    reaction: "Zn²⁺ + 2e⁻ → Zn",
    potential: -0.76,
    explanation: "Zinc is highly reactive and ready to give up its electrons, making it ideal for use as an anode in galvanic cells. It’s the workhorse of electrochemistry, driving important reactions across industries.",
    uses: [
      "Zinc is used to galvanize steel, providing corrosion resistance to structures like bridges and buildings.",
      "Zinc is a key component of batteries, including zinc-carbon and alkaline types."
    ]
  },
  {
    reaction: "Cr³⁺ + 3e⁻ → Cr",
    potential: -0.74,
    explanation: "Chromium takes electrons to transform into its metallic state, often used for its durability and resistance to corrosion. It’s like the shield in the world of electrochemistry, offering protection and strength.",
    uses: [
      "Chromium is used in the production of stainless steel, making it resistant to rust and corrosion.",
      "Chromium compounds are also used in pigments, like chromium oxide, which gives a green color."
    ]
  },
  {
    reaction: "Al³⁺ + 3e⁻ → Al",
    potential: -1.66,
    explanation: "Aluminum is tough to reduce, requiring a significant amount of energy, but once it's reduced, it becomes one of the lightest and most versatile metals. Its high resistance to corrosion makes it ideal for many applications.",
    uses: [
      "Aluminum is used extensively in the aerospace and transportation industries due to its light weight and strength.",
      "It is also widely used in packaging, especially as aluminum foil and cans."
    ]
  },
  {
    reaction: "Mg²⁺ + 2e⁻ → Mg",
    potential: -2.37,
    explanation: "Magnesium is highly reactive, readily donating electrons to become metallic magnesium. It’s a powerful reducing agent and a vital part of many industrial processes.",
    uses: [
      "Magnesium is used in lightweight alloys for automotive and aerospace industries.",
      "It’s also used in fireworks to

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
