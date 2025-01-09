document.getElementById("calculateSum").onclick = async () => {
  const a = document.getElementById("numA").value;
  const b = document.getElementById("numB").value;
  const res = await fetch(`http://localhost:3000/api/sum?a=${a}&b=${b}`);
  const data = await res.json();
  document.getElementById("sumResult").innerText = `Sum: ${data.sum}`;
};
