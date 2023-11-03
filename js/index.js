const form = document.getElementById('form_add');

let all_lines = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
    realoadTable();
})

function addLine(){
    const input_name = document.getElementById('name_contact');
    const input_number = document.getElementById('number_contact');

    let line = '<tr>';
    line += `<td>${input_name.value}</td>`;
    line += `<td>${input_number.value}</td>`;
    line += `</tr>`;

    all_lines += line;

    input_name.value = '';
    input_number.value = '';
}

function realoadTable(){
    const bodytabel = document.querySelector('tbody');
    bodytabel.innerHTML = all_lines;
}