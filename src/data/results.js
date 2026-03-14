// DATA: results.js
// Supabase swap: replace getResults body with
// const { data } = await supabase.from('results').select('*, subjects(*)').eq('school_code', schoolCode).eq('student_code', accessCode)

const RESULTS = {
  KIS001: {
    STU001: {
      position: "3rd",
      outOf: 42,
      average: 78.4,
      teacherComment: "Chukwuemeka has demonstrated consistent effort throughout the term. His performance in Mathematics is commendable.",
      teacher: "Mrs. Adeyemi J.",
      subjects: [
        { name: "Mathematics",      icon: "➕", score: 88, grade: "A" },
        { name: "English Language", icon: "📖", score: 84, grade: "A" },
        { name: "Chemistry",        icon: "⚗️", score: 79, grade: "B" },
        { name: "Physics",          icon: "🔭", score: 76, grade: "B" },
        { name: "Economics",        icon: "📊", score: 72, grade: "C" },
        { name: "Data Processing",  icon: "💻", score: 82, grade: "A" },
      ],
    },
    STU002: {
      position: "1st",
      outOf: 42,
      average: 91.2,
      teacherComment: "Fatima is an exceptional student. Her dedication is unmatched in the class.",
      teacher: "Mrs. Adeyemi J.",
      subjects: [
        { name: "Mathematics",      icon: "➕", score: 95, grade: "A" },
        { name: "English Language", icon: "📖", score: 91, grade: "A" },
        { name: "Chemistry",        icon: "⚗️", score: 89, grade: "A" },
        { name: "Physics",          icon: "🔭", score: 93, grade: "A" },
        { name: "Economics",        icon: "📊", score: 88, grade: "A" },
        { name: "Data Processing",  icon: "💻", score: 90, grade: "A" },
      ],
    },
    STU003: {
      position: "7th",
      outOf: 42,
      average: 71.0,
      teacherComment: "Taiwo shows great potential in sports and team leadership. Academics need more focus.",
      teacher: "Mrs. Adeyemi J.",
      subjects: [
        { name: "Mathematics",      icon: "➕", score: 68, grade: "C" },
        { name: "English Language", icon: "📖", score: 75, grade: "B" },
        { name: "Chemistry",        icon: "⚗️", score: 70, grade: "C" },
        { name: "Physics",          icon: "🔭", score: 72, grade: "C" },
        { name: "Economics",        icon: "📊", score: 69, grade: "C" },
        { name: "Data Processing",  icon: "💻", score: 71, grade: "C" },
      ],
    },
  },
  DEMO001: {
    STU001: {
      position: "2nd",
      outOf: 28,
      average: 85.5,
      teacherComment: "Emily is a diligent and focused student. Keep up the great work.",
      teacher: "Mr. Johnson D.",
      subjects: [
        { name: "Mathematics", icon: "➕", score: 90, grade: "A" },
        { name: "English",     icon: "📖", score: 85, grade: "A" },
        { name: "Biology",     icon: "🌿", score: 82, grade: "A" },
        { name: "History",     icon: "📜", score: 84, grade: "A" },
      ],
    },
  },
};

export function getResults(schoolCode, accessCode) {
  return RESULTS[schoolCode]?.[accessCode] || null;
}
