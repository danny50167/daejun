const div_msgs = document.getElementById("div_msgs");

window.addEventListener("load", async (e) => {
  e.preventDefault();

  const res = await fetch("/DB");
  const DB = await res.json();

  Array.from(DB).forEach((msg) => {
    var div_msg = document.createElement("div");
    div_msg.className = "div_msg";
    var p_msg = document.createElement("p");
    p_msg.innerText = msg;
    p_msg.className = "msg";
    div_msg.appendChild(p_msg);
    div_msgs.appendChild(div_msg);
  });
});
