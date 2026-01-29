const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) =>{

    if(insert.innerHTML == ''){
        insert.innerHTML += `
        <div>
            <table>
                <tr>
                    <th>Key</th>
                    <th> Key code</th>
                    <th> Digit </th>
                </tr>

                <tr>
                    <td>${e.key === ' ' ? 'space' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${ e.code}</td>
                </tr>
            </table>
        </div>`
    }
    else{
        insert.innerHTML += `
        <div>
            <table>
            

                <tr>
                    <td>${e.key === ' ' ? 'space' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${ e.code}</td>
                </tr>
            </table>
        </div>`
    }
    
})