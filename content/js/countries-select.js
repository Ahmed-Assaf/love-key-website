$(() => {
  const data = [];
  const options = document.querySelectorAll(".country-code option");
  const countryOptions = options.forEach((element) => {
    data.push({
      id: element.value,
      flag: element.getAttribute("data-flag"),
      selected: element.hasAttribute("selected"),
    });
  });

  console.log(data);

  // select2 country code
  $(".country-code").select2({
    data: data,
    results: data,
    minimumInputLength: 0,
    minimumResultsForSearch: 2,
    templateResult: formatCountries,
    templateSelection: formatCountriesSelection,
    selectionCssClass: ":all:",
  });

  function formatCountries(country) {
    if (country.loading) {
      return country.code;
    }

    var $container = $(
      `
            <div class='select2-result'>
              <div class='select2-result-flag image-wrap'>
                <img src='${country.flag}' />
              </div>

              <div class='select2-result-code'>
                ${country.id}
              </div>
            </div>
            `
    );
    return $container;
  }

  function formatCountriesSelection(country) {
    if (country.id) {
      var container = $(
        `
              <div class='select2-result'>
                <div class='select2-result-flag image-wrap'>
                  <img src='${country.flag}' />
                </div>

                <div class='select2-result-code'>
                  ${country.id}
                </div>
              </div>
              `
      );
      return container;
    } else {
      return country.text;
    }
  }
});
