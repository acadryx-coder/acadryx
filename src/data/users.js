// DATA: users.js
// Supabase swap: replace getUserByCode body with
// const { data } = await supabase.from('users').select('*').eq('school_code', schoolCode).eq('access_code', accessCode).single()

const USERS = {
  KIS001: [
    { accessCode: "ADM001", name: "Mrs. Adeyemi J.", initials: "AJ", role: "admin" },
    { accessCode: "TCH001", name: "Mr. Babatunde O.", initials: "BO", role: "teacher" },
    { accessCode: "TCH002", name: "Ms. Ngozi C.", initials: "NC", role: "teacher" },
    { accessCode: "STU001", name: "Chukwuemeka Obi", initials: "CO", role: "student" },
    { accessCode: "STU002", name: "Fatima Musa", initials: "FM", role: "student" },
    { accessCode: "STU003", name: "Taiwo Adamu", initials: "TA", role: "student" },
    { accessCode: "PAR001", name: "Mr. Obi Sr.", initials: "OS", role: "parent" },
    { accessCode: "ALM001", name: "Chidi Eze", initials: "CE", role: "alumni" },
  ],
  DEMO001: [
    { accessCode: "ADM001", name: "Principal Harris", initials: "PH", role: "admin" },
    { accessCode: "TCH001", name: "Mr. Johnson D.", initials: "JD", role: "teacher" },
    { accessCode: "STU001", name: "Emily Carter", initials: "EC", role: "student" },
    { accessCode: "STU002", name: "Marcus Lee", initials: "ML", role: "student" },
    { accessCode: "PAR001", name: "Mrs. Carter", initials: "MC", role: "parent" },
  ],
  RHS001: [
    { accessCode: "ADM001", name: "Dr. Abubakar S.", initials: "AS", role: "admin" },
    { accessCode: "STU001", name: "Amara Diallo", initials: "AD", role: "student" },
    { accessCode: "TCH001", name: "Mrs. Okonkwo P.", initials: "OP", role: "teacher" },
  ],
};

export function getUserByCode(schoolCode, accessCode) {
  if (!schoolCode || !accessCode) return null;
  const schoolUsers = USERS[schoolCode.toUpperCase()] || [];
  return schoolUsers.find(u => u.accessCode === accessCode.trim().toUpperCase()) || null;
}
