// DATA: magazine.js
// Supabase swap: supabase.from('articles').select('*').eq('school_code', schoolCode).order('date', { ascending: false })

const MAGAZINES = {
  KIS001: {
    title: "The Kogbodi Times",
    volume: "Vol XIV · Issue 2 · 2024/25",
    readers: 1247,
    savedPrint: 490000,
    currency: "₦",
    articles: [
      { cat: "Achievement", title: "We Won the National Science Olympiad",   author: "Chidi Eze",    date: "Jan 14", icon: "🏆" },
      { cat: "Culture",     title: "Art Exhibition 2025: Colours of Tomorrow", author: "Amaka Obi",  date: "Jan 10", icon: "🎨" },
      { cat: "Science",     title: "A Tour of Our New Chemistry Lab",        author: "Staff",        date: "Jan 8",  icon: "🔬" },
      { cat: "Poem",        title: "The River Knows My Name",                author: "Fatima Musa",  date: "Jan 6",  icon: "✏️" },
      { cat: "Sports",      title: "Football Season Recap: A Historic Year", author: "Taiwo Adamu",  date: "Jan 5",  icon: "⚽" },
    ],
    pending: [
      "Science fair write-up — Chidi Eze",
      "New poem submission — Fatima Musa",
      "Sports article — Taiwo Adamu",
    ],
  },
  DEMO001: {
    title: "The Greenfield Gazette",
    volume: "Vol III · Issue 1 · 2024/25",
    readers: 430,
    savedPrint: 1290,
    currency: "$",
    articles: [
      { cat: "Science", title: "Our Trip to the Science Museum", author: "Emily Carter", date: "Sep 12", icon: "🔬" },
      { cat: "Sports",  title: "Fall Soccer Season Highlights",  author: "Marcus Lee",   date: "Sep 8",  icon: "⚽" },
    ],
    pending: ["Student council update — Emily Carter"],
  },
  RHS001: {
    title: "The Royal Herald",
    volume: "Vol VII · Issue 3 · 2024/25",
    readers: 890,
    savedPrint: 350000,
    currency: "₦",
    articles: [
      { cat: "Achievement", title: "RHS Wins Regional Debate Championship", author: "Amara Diallo", date: "Oct 3", icon: "🏆" },
    ],
    pending: [],
  },
};

export function getMagazine(schoolCode) {
  return MAGAZINES[schoolCode] || null;
}


// DATA: students.js
// Supabase swap: supabase.from('students').select('*').eq('school_code', schoolCode)

const STUDENTS = {
  KIS001: [
    { name: "Adeyemi, Blessing",    admNo: "STU-01230", class: "SSS 2A", year: 2022, initials: "AB" },
    { name: "Chukwuemeka, Obi",     admNo: "STU-01234", class: "SSS 2A", year: 2022, initials: "CO" },
    { name: "Dankwa, Emeka",        admNo: "STU-01238", class: "SSS 2A", year: 2022, initials: "DE" },
    { name: "Fagbemi, Ife",         admNo: "STU-01242", class: "JSS 3B", year: 2021, initials: "FI" },
    { name: "Garba, Aminu",         admNo: "STU-01246", class: "JSS 1A", year: 2023, initials: "GA" },
    { name: "Musa, Fatima",         admNo: "STU-01250", class: "SSS 2A", year: 2022, initials: "MF" },
  ],
  DEMO001: [
    { name: "Carter, Emily",  admNo: "STU-00101", class: "Grade 10A", year: 2022, initials: "CE" },
    { name: "Lee, Marcus",    admNo: "STU-00102", class: "Grade 10A", year: 2022, initials: "LM" },
    { name: "Smith, Jordan",  admNo: "STU-00103", class: "Grade 9B",  year: 2023, initials: "SJ" },
  ],
};

export function getStudents(schoolCode) {
  return STUDENTS[schoolCode] || [];
}
