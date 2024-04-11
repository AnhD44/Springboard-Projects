// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
  const NUM_CATEGORIES = 6;

  const res = await axios.get(
    "https://rithm-jeopardy.herokuapp.com/api/categories?count=100"
  );
  const data = res.data;

  const randomCategories = _.shuffle(data);

  const categoryIds = randomCategories
    .slice(0, NUM_CATEGORIES)
    .map((category) => category.id);

  return categoryIds;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
  const res = await axios.get(
    `https://rithm-jeopardy.herokuapp.com/api/category?id=${catId}`
  );
  const data = res.data;

  const category = {
    title: data.title,
    clues: data.clues.map((clue) => ({
      question: clue.question,
      answer: clue.answer,
      showing: null,
    })),
  };

  return category;
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
  const categoryIds = await getCategoryIds();

  for (let catId of categoryIds) {
    const category = await getCategory(catId);
    categories.push(category);
  }

  const dataTable = document.querySelector("#data-table");
  const headerRow = document.createElement("tr");

  categories.forEach((category) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = category.title;
    headerRow.appendChild(headerCell);
  });
  dataTable.querySelector("thead").appendChild(headerRow);

  for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");
    categories.forEach((category) => {
      const cell = document.createElement("td");
      cell.textContent = "?";
      cell.addEventListener("click", handleClick);
      row.appendChild(cell);
    });
    dataTable.querySelector("tbody").appendChild(row);
  }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */
function handleClick(evt) {
  const cell = evt.target;
  const categoryId = cell.cellIndex;
  const clue = categories[categoryId].clues[evt.target.parentNode.rowIndex];

  if (!clue.showing) {
    cell.textContent = clue.question;
    clue.showing = "question";
  } else if (clue.showing === "question") {
    cell.textContent = clue.answer;
    clue.showing = "answer";
  }
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */
function showLoadingView() {
  /*const resetBoard = document.querySelector("#data-table");
  resetBoard.innerHTML = "";*/

  const loadingText = document.querySelector("#loading");
  loadingText.innerHTML = "<p>Loading...</p>";
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
  const loadingText = document.querySelector("#loading");
  loadingText.innerHTML = "";

  const startRestartButton = document.querySelector("#start-restart-button");
  startRestartButton.innerHTML = "Restart!";
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */
async function setupAndStart() {
  console.log("Setting up and starting...");
  showLoadingView();

  try {
    await fillTable(); // Ensure fillTable() is implemented correctly
    hideLoadingView();
    console.log("Setup complete.");
  } catch (error) {
    console.error("Error during setup:", error);
  }
}

/** On click of start / restart button, set up game. */
// TODO
document.addEventListener("DOMContentLoaded", () => {
  const startRestartButton = document.querySelector("#start-restart-button");
  startRestartButton.addEventListener("click", function () {
    setupAndStart();
  });
});

/** On page load, add event handler for clicking clues */
// TODO
document.addEventListener("DOMContentLoaded", () => {
  // Add event handler for clicking clues on game board
  const dataTable = document.querySelector("#table-data");
  dataTable.addEventListener("click", (evt) => {
    if (evt.target.tagName === "TD") {
      handleClick(evt);
    }
  });
});
