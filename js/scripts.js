/*
 * CSCI 1170: Introduction to Web Design and Development
 * Winter 2021 (Online edition)
 * Author: Jacob Domingo (B00 859343)
 *
 * This file contains the main JS file for the timetable page on this website.
 * 
 */

let jedi = JSON.parse(jsonDataUni)

let jediKeys = Object.keys(jedi)

let timetableData = document.getElementById("timetable-data-container")

for (let index = 0; index < jediKeys.length; index++){
    timetableData.innerHTML += "<h3>" + jedi[index].courseCode + " " + jedi[index].courseName + "</h3>"
    timetableData.innerHTML += "<p>Course Instructor: <strong>" + jedi[index].instructor + "</strong></p>"
    timetableData.innerHTML += "<p>Location: " + jedi[index].location + "</p>"
    timetableData.innerHTML += "<p>Schedule: " + jedi[index].scheduleDays + " " + jedi[index].scheduleTime + "</p>"
    timetableData.innerHTML += "<p>Enrollment(max): <strong>" + jedi[index].enrollmentMax + "</strong></p>"
    timetableData.innerHTML += "<p>Enrollment(current): <strong>" + jedi[index].enrollmentCurrent + "</strong></p>"
    timetableData.innerHTML += "<p>Enrollment(availability): <strong>" + jedi[index].enrollmentAvailability + "</strong></p>"
}

