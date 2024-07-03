// fetch("https://restcountries.com/v3.1/all")
// .then(res=>res.json())
// .then(data=>{
//   let countries = document.getElementById("tbl");
//   let tblBody = `<tr>
//                   <th>Name</th>
//                   <th>flag<th>
//                   </tr>`;
//   data.forEach(element => {
//     tblBody+=`<tr>
//     <td>${element.name.common}</td>
//     <th>${element.flag}<th>
//     </tr>`
//     console.log(element);
//   });
//   countries.innerHTML = tblBody;
// })

// let nameSearch = document.getElementById("suggestions");
// nameSearch.addEventListener('input', () => {
//   fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
//   .then(res => res.json())
//   .then(data => {
//   suggestionsContainer.innerHTML = '';
//   data.forEach(country => {
//     const suggestionItem = document.createElement('div');
//     suggestionItem.classList.add('suggestion-item');
//     suggestionItem.textContent = country.name.common;
//     suggestionItem.addEventListener('click', () => {
//       fillCountryData(country);
//       suggestionsContainer.innerHTML = '';
//       searchInput.value = country.name.common;
//     });
//   });
//   });
// });

function search(){
  let search = document.getElementById("textSearch").value;
  let name = document.getElementById("name");
  let img = document.getElementById("img");
  let officialName = document.getElementById("OfficialName");
  let type = document.getElementById("type");
  let Capital1 = document.getElementById("Capital");
  let Region = document.getElementById("Region");
  console.log(search);
  fetch(`https://restcountries.com/v3.1/name/${search}`).then(res=>res.json()).then(data=>{
    data.forEach(element => {

      name.innerText = element.name.common;
      officialName.innerText = element.name.official;
      img.innerHTML = `<img src="${element.flags.png}" alt"">`
      type.innerText = Object.keys(element.currencies)[0];
      Capital1.innerText = element.capital;
      Region.innerHTML = element.region;


    });
    
    console.log(data);

  });
};