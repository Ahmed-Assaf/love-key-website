const inputElements = [...document.querySelectorAll("input.code-input")];
      inputElements.forEach((ele, index) => {
        ele.addEventListener("keydown", (e) => {
          if (e.keyCode === 8 && e.target.value === "") {
            inputElements[Math.max(0, index - 1)].focus();
          }
          e.target.style.backgroundColor = "#f5f5f5";
        });
        ele.addEventListener("input", (e) => {
          const [first, ...rest] = e.target.value;
          e.target.value = first ?? "";
          if (index !== inputElements.length - 1 && first !== undefined) {
            inputElements[index + 1].focus();
            inputElements[index + 1].value = rest.join("");
            inputElements[index + 1].dispatchEvent(new Event("input"));
          }
        });

        $(function () {
          $("#verifyCode input.code-input:first-of-type").focus();
        });
      });

      let codeInput = document.querySelectorAll(".code-input");
      $("#codeForm").submit(function (e) {
        var codeVal = $(codeInput)
          .map(function () {
            return this.value;
          })
          .get()
          .join("");
        $("#resultInput").val(codeVal);
      });