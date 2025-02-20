const monthYear = document.getElementById("month-year");
const calendarDays = document.getElementById("calendar-days");

let currentDate = new Date();

function renderCalendar() {
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    monthYear.textContent = new Date(year, month).toLocaleString("default", {
        month: "long",
        year: "numeric",
    });

    calendarDays.innerHTML = "";

    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        let emptyCell = document.createElement("div");
        emptyCell.classList.add("empty");
        calendarDays.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDate; day++) {
        let dayCell = document.createElement("div");
        dayCell.textContent = day;

        if (
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        ) {
            dayCell.classList.add("today");
        }

        calendarDays.appendChild(dayCell);
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

renderCalendar();
