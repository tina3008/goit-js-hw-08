const txtInput = document.querySelector("#name-input");
const txtOutput = document.querySelector("#name-output");

txtInput.addEventListener("input", (event) => {
    const txtCont = event.currentTarget.value.trim()

    txtCont.length > 0 ? txtOutput.textContent = txtCont : txtOutput.textContent = "Anonymous";
  });


