const form = document.createElement("form");

const labels = [
  "Name", "Age", "Roll No", "Email",
  "Year", "Department", "Father Name","Subject"
];

labels.forEach(text => {
  const label = document.createElement("label");
  label.textContent = text;

  const input = document.createElement("input");
  input.type = "text";

  form.appendChild(label);
  form.appendChild(input);
});

const btn = document.createElement("button");
btn.textContent = "Submit";
btn.type = "button";

btn.onclick = () => {
  alert("Form submitted!");
  form.reset();
};

form.appendChild(btn);
document.body.appendChild(form);

