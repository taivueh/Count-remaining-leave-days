const hoursPerDay = 8;
const totalLeaveDays = parseInt(
  prompt(
    "Enter your total leave days(Not sure? Check the Leave Policy on Confluence):"
  ),
  10
);
const totalLeaveHours = totalLeaveDays * hoursPerDay;

const currentYear = new Date().getFullYear();
const rows = document.querySelectorAll("tbody tr");

let usedLeaveHours = 0;

rows.forEach((row) => {
  const startDateCell = row.querySelector("td:nth-child(2) div");
  const endDateCell = row.querySelector("td:nth-child(3) div");
  const durationCell = row.querySelector("td:nth-child(5) div span");
  const statusCell = row.querySelector("td:nth-child(7) div span");

  if (startDateCell && endDateCell && durationCell && statusCell) {
    const startDate = startDateCell.textContent.trim();
    const endDate = endDateCell.textContent.trim();
    const status = statusCell.textContent.trim();

    const [startDay, startMonth, startYear] = startDate.split("/").map(Number);
    const [endDay, endMonth, endYear] = endDate.split("/").map(Number);

    if (
      (startYear === currentYear || endYear === currentYear) &&
      status === "APPROVED"
    ) {
      const durationText = durationCell.textContent.trim();
      const durationHours = parseFloat(durationText);
      usedLeaveHours += durationHours;
    }
  }
});

const remainingLeaveHours = totalLeaveHours - usedLeaveHours;
const remainingLeaveDays = remainingLeaveHours / hoursPerDay;

alert(`You have ${remainingLeaveDays.toFixed(2)} leave days remaining.`);

console.log(`You have ${remainingLeaveDays.toFixed(2)} leave days remaining.`);
console.log(
  `You have ${remainingLeaveHours.toFixed(2)} leave hours remaining.`
);
