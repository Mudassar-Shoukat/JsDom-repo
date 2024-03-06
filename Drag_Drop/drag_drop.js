var Container_A = document.getElementById("drag_container");
var Container_B = document.getElementById("drop_container");

// This code is used for drag from Container_A to Container_B
Container_A.addEventListener("dragstart", function (event) {
  dragged = event.target;
  update_total();
});
Container_A.addEventListener("drop", function (event) {
  if (event.target.id === "drag_container") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    update_total();
  }
});
Container_A.addEventListener("dragover", function (event) {
  event.preventDefault();
});

// This code is used for drag from Container_B to  Container_A

Container_B.addEventListener("dragstart", function (event) {
  dragged = event.target;
  update_total();
});
Container_B.addEventListener("dragover", function (event) {
  event.preventDefault();
});

Container_B.addEventListener("drop", function (event) {
  if (event.target.id === "drop_container") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    update_total();
  }
});

function update_total() {
  var dragCount = Container_A.querySelectorAll(".box").length;
  var dropCount = Container_B.querySelectorAll(".box").length;
  document.getElementById("drag_result").innerHTML = `${dragCount}`;
  document.getElementById("drop_result").innerHTML = `${dropCount}`;
}
