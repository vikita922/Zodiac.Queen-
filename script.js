document.addEventListener("DOMContentLoaded", () => {
  const zodiac = document.getElementById("zodiac");
  const seeMirror = document.getElementById("seeMirror");
  const mirrorText = document.getElementById("mirrorText");
  const shareBtn = document.getElementById("shareBtn");

  const poeticLines = {
    aries: "🔥 Aries burns with fearless passion, a star born to blaze trails.",
    taurus: "🌿 Taurus blooms like earth’s secret garden, calm and unshakable.",
    gemini: "💨 Gemini hums in twin tones, carried by winds of curiosity.",
    cancer: "🌊 Cancer moves like moonlit tides, tender yet powerful.",
    leo: "🔥 Leo roars in golden light, a soul ablaze with courage.",
    virgo: "🌾 Virgo aligns stars with grace, whispering order in chaos.",
    libra: "⚖️ Libra balances stardust and heartstrings in perfect harmony.",
    scorpio: "🦂 Scorpio dives where others won’t, fierce and mysterious as the void.",
    sagittarius: "🏹 Sagittarius leaps with flame-tipped arrows across galaxies of dreams.",
    capricorn: "⛰️ Capricorn climbs with silent strength, building castles from stars.",
    aquarius: "🌬️ Aquarius breathes tomorrow, wrapped in revolutionary sparkles.",
    pisces: "🌌 Pisces dreams aloud, weaving galaxies with liquid light."
  };

  const funnyLines = {
    aries: "🐏 Aries: Ready to fight a tree just because it looked funny.",
    taurus: "🍰 Taurus: Would trade stardust for snacks. Every. Single. Time.",
    gemini: "🗣️ Gemini: Probably arguing with themselves… and winning.",
    cancer: "🦀 Cancer: Soft shell, salty energy, cries at ads.",
    leo: "🦁 Leo: Sun-powered drama machine. Applause not optional.",
    virgo: "📋 Virgo: Corrected the universe’s grammar. Twice.",
    libra: "💅 Libra: Took 3 hours to pick a font. It was worth it.",
    scorpio: "🕶️ Scorpio: Has 12 secrets. Just told you 0.",
    sagittarius: "🚀 Sagittarius: Would rather teleport than explain feelings.",
    capricorn: "📈 Capricorn: Built a business plan for their star sign.",
    aquarius: "👽 Aquarius: Invented a new zodiac sign yesterday.",
    pisces: "🎨 Pisces: Feels deeply. Then paints about it. Then cries."
  };

  seeMirror.addEventListener("click", () => {
    const sign = zodiac.value;
    const mode = document.querySelector('input[name="mode"]:checked').value;

    if (!sign) {
      mirrorText.innerHTML = "🌙 Please select your sign first!";
      return;
    }

    const text =
      mode === "poetic"
        ? poeticLines[sign]
        : funnyLines[sign];

    mirrorText.innerHTML = text;
  });

  shareBtn.addEventListener("click", async () => {
    const text = mirrorText.textContent;
    if (navigator.share && text) {
      try {
        await navigator.share({
          title: "My Horoscope Mirror Message",
          text,
          url: window.location.href
        });
      } catch (err) {
        alert("Sharing canceled.");
      }
    } else {
      alert("Sharing not supported. You can copy the message manually.");
    }
  });
});
