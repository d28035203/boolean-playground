/**
 * logic.js — 2-input gate truth tables (digital lab nostalgia)
 */
(function () {
 function evalGate(g, a, b) {
 switch (g) {
 case "AND": return a && b;
 case "OR": return a || b;
 case "XOR": return a !== b;
 case "NAND": return !(a && b);
 case "NOR": return !(a || b);
 default: return false;
 }
 }

 function render() {
 var g = document.getElementById("gate").value;
 var tbody = document.getElementById("rows");
 tbody.innerHTML = "";
 var combos = [[0, 0], [0, 1], [1, 0], [1, 1]];
 combos.forEach(function (ab) {
 var a = !!ab[0], b = !!ab[1];
 var tr = document.createElement("tr");
 tr.innerHTML =
 "<td>" + (a ? 1 : 0) + "</td>" +
 "<td>" + (b ? 1 : 0) + "</td>" +
 "<td><strong>" + (evalGate(g, a, b) ? 1 : 0) + "</strong></td>";
 tbody.appendChild(tr);
 });
 }

 document.getElementById("gate").addEventListener("change", render);
 render();
})();
