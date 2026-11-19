const DAY = 86_400_000;

// Percent change between the last 7 days and the 7 days before that.
export function weeklyChange(applications, now = new Date()) {
  const t = now.getTime();

  const thisWeek = applications.filter((a) => t - a.appliedAt.getTime() < 7 * DAY).length;
  const lastWeek = applications.filter((a) => {
    const age = t - a.appliedAt.getTime();
    return age >= 7 * DAY && age < 14 * DAY;
  }).length;

  if (lastWeek === 0) return thisWeek > 0 ? 100 : 0; // avoids dividing by zero
  return Math.round(((thisWeek - lastWeek) / lastWeek) * 100);
}

// Turns the raw lists into the numbers the dashboard shows.
export function computeStats(applications, interviews, now = new Date()) {
  const responded = applications.filter((a) => a.status !== "applied").length;

  return {
    applications: applications.length,
    weeklyChange: weeklyChange(applications, now),
    interviews: interviews.length,
    upcoming: interviews.filter((i) => i.at > now).length,
    offers: applications.filter((a) => a.status === "offer").length,
    responseRate: applications.length ? Math.round((responded / applications.length) * 100) : 0,
  };
}