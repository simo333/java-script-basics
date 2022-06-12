/*
  Poniżej napisz kod rozwiązujący zadania
 */
let exerciseLis = document.querySelectorAll(".exercise li");

for (let i = 0; i < exerciseLis.length; i++) {
    exerciseLis[i].setAttribute("data-id", (i + 1).toString());
}