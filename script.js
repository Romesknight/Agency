console.log("Site loaded.");
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleTable");
  const basicTable = document.getElementById("basicTable");
  const detailedTable = document.getElementById("detailedTable");

  let showingDetailed = false;

  toggleButton.addEventListener("click", () => {
    showingDetailed = !showingDetailed;

    if (showingDetailed) {
      basicTable.style.display = "none";
      detailedTable.style.display = "block";
      toggleButton.textContent = "Show Less";
    } else {
      basicTable.style.display = "block";
      detailedTable.style.display = "none";
      toggleButton.textContent = "More Details";
    }
  });
});
