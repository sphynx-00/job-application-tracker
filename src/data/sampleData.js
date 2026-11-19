/*
  Sample data so the dashboard has something to show.

  An application looks like:
    { id, title, company, status, appliedAt (Date), salaryMin?, salaryMax? }
    status is one of: "applied" | "interview" | "offer" | "rejected"

  An interview looks like:
    { id, applicationId, title, company, at (Date), mode }
    mode is one of: "online" | "onsite" | "phone"
*/

const DAY = 86_400_000; // milliseconds in a day

const daysAgo = (n) => new Date(Date.now() - n * DAY);

function daysFromNow(n, hour = 12) {
  const date = new Date(Date.now() + n * DAY);
  date.setHours(hour, 0, 0, 0);
  return date;
}

export const sampleApplications = [
  {
    id: "a1",
    title: "Senior Software Developer",
    company: "Xpertise Recruitment",
    status: "interview",
    appliedAt: daysAgo(2),
    salaryMin: 57000,
    salaryMax: 57000,
  },
  {
    id: "a2",
    title: "Lead Developer",
    company: "Google",
    status: "rejected",
    appliedAt: daysAgo(92),
  },
  {
    id: "a3",
    title: "Staff Engineer",
    company: "Monzo",
    status: "interview",
    appliedAt: daysAgo(4),
    salaryMin: 85000,
    salaryMax: 105000,
  },
];

export const sampleInterviews = [
  {
    id: "i1",
    applicationId: "a1",
    title: "Senior Software Developer",
    company: "Xpertise Recruitment",
    at: daysFromNow(24),
    mode: "online",
  },
  {
    id: "i2",
    applicationId: "a3",
    title: "Staff Engineer",
    company: "Monzo",
    at: daysAgo(3),
    mode: "onsite",
  },
];