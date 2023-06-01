const input_msg = document.getElementById("input_msg");
const btn_send = document.getElementById("btn_send");

btn_send.addEventListener("click", async (e) => {
  e.preventDefault();

  const msg = input_msg.value;

  const data = {
    payload: msg,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const req = await fetch("/DB", options);
  const res = await req.json();

  console.log(res);

  window.location.href = "/";
});
