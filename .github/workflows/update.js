const fs = require("fs");

// ⚠️ TEMPORAIRE (on va remplacer par Myfxbook API ensuite)
const data = {
    week: "1.12%",
    month: "2.96%",
    year: "18.40%"
};

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

console.log("data.json updated");
