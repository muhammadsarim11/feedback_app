document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  await fetch("/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message }),
  });
  loadFeedbacks();
  e.target.reset();
});
async function loadFeedbacks() {
  const res = await fetch("/feedbacks");
  const data = await res.json();
  const list = document.getElementById("list");
  list.innerHTML = "";
  data.forEach((fb) => {
    list.innerHTML += `<li><b>${fb.name}</b>: ${fb.message}</li>`;
  });
}
