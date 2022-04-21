
let data = [
    { Ranking: 1, Name: "台積電", Country: "台灣", Ratio: 53.1 },
    { Ranking: 2, Name: "三星電子", Country: "韓國", Ratio: 17.3 },
    { Ranking: 3, Name: "聯電", Country: "台灣", Ratio: 7.2 },
    { Ranking: 4, Name: "格羅方德", Country: "美國", Ratio: 6.1 },
    { Ranking: 5, Name: "中芯國際", Country: "中國", Ratio: 5.3 },
    { Ranking: 6, Name: "華虹半導體", Country: "中國", Ratio: 2.6 },
    { Ranking: 7, Name: "力積電", Country: "台灣", Ratio: 1.8 },
    { Ranking: 8, Name: "世界先進", Country: "台灣", Ratio: 1.4 },
    { Ranking: 9, Name: "高塔半導體", Country: "以色列", Ratio: 1.4 },
    { Ranking: 10, Name: "東部高科", Country: "南韓", Ratio: 1 },
]


buildTable(data)

function buildTable(data) {
    let table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++) {
        let row = ` <tr>
                        <td>${data[i].Ranking}</td>
                        <td>${data[i].Name}</td>
                        <td>${data[i].Country}</td>
                        <td>${data[i].Ratio}</td>

                    </tr>`
        table.innerHTML += row


    }
}