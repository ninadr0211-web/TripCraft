const destinations = [
  { id: 1, name: "Bali", country: "Indonesia", category: "Beaches", cost: 45000, color: "teal", emoji: "🌴",
    description: "Tropical beaches, temples and unforgettable island experiences.",
    activities: [
      { id: "bali-beach", name: "Beach Day", cost: 2500, duration: "4 hrs" },
      { id: "bali-temple", name: "Temple Tour", cost: 1800, duration: "3 hrs" },
      { id: "bali-cruise", name: "Sunset Cruise", cost: 3200, duration: "2 hrs" }
    ] },
  { id: 2, name: "Manali", country: "India", category: "Mountains", cost: 32000, color: "green", emoji: "🏔️",
    description: "Snowy peaks, scenic valleys and mountain adventures.",
    activities: [
      { id: "manali-snow", name: "Snow Point", cost: 2200, duration: "5 hrs" },
      { id: "manali-river", name: "River Adventure", cost: 1800, duration: "3 hrs" },
      { id: "manali-walk", name: "Old Manali Walk", cost: 700, duration: "2 hrs" }
    ] },
  { id: 3, name: "Rome", country: "Italy", category: "Historical", cost: 85000, color: "pink", emoji: "🏛️",
    description: "Ancient landmarks, art, food and timeless European streets.",
    activities: [
      { id: "rome-colosseum", name: "Colosseum Tour", cost: 4200, duration: "3 hrs" },
      { id: "rome-vatican", name: "Vatican Visit", cost: 3800, duration: "4 hrs" },
      { id: "rome-food", name: "Italian Food Tour", cost: 2600, duration: "3 hrs" }
    ] },
  { id: 4, name: "Dubai", country: "UAE", category: "Cities", cost: 70000, color: "orange", emoji: "🏙️",
    description: "Iconic skyline, desert adventures and modern city experiences.",
    activities: [
      { id: "dubai-burj", name: "Burj Khalifa", cost: 5200, duration: "2 hrs" },
      { id: "dubai-desert", name: "Desert Safari", cost: 4500, duration: "6 hrs" },
      { id: "dubai-marina", name: "Marina Cruise", cost: 3000, duration: "2 hrs" }
    ] },
  { id: 5, name: "Singapore", country: "Singapore", category: "Adventure", cost: 60000, color: "yellow", emoji: "🌇",
    description: "A clean, vibrant city filled with food, gardens and attractions.",
    activities: [
      { id: "sing-gardens", name: "Gardens by the Bay", cost: 2400, duration: "3 hrs" },
      { id: "sing-sentosa", name: "Sentosa Adventure", cost: 3600, duration: "5 hrs" },
      { id: "sing-food", name: "Hawker Food Tour", cost: 1500, duration: "2 hrs" }
    ] }
];

export default destinations;