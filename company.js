const marketingShare = {
    version: "v1.0",
    publish: "2021/12/31",
    titles: ["排名", "公司名稱", "國別", "市佔率"],
    data: [
        { Ranking: 1, Name: "台積電", Country: "台灣", Ratio: 53.1 },
        { Ranking: 2, Name: "三星電子", Country: "韓國", Ratio: 17.3 },
        { Ranking: 3, Name: "聯電", Country: "台灣", Ratio: 7.2 },
        { Ranking: 4, Name: "格羅方德", Country: "美國", Ratio: 6.1 },
        { Ranking: 5, Name: "中芯國際", Country: "中國", Ratio: 5.3 },
        { Ranking: 6, Name: "華虹半導體", Country: "中國", Ratio: 2.6 },
        { Ranking: 7, Name: "力積電", Country: "台灣", Ratio: 1.8 },
        { Ranking: 8, Name: "世界先進", Country: "台灣", Ratio: 1.4 },
        { Ranking: 9, Name: "高塔半導體", Country: "以色列", Ratio: 1.4 },
        { Ranking: 10, Name: "東部高科", Country: "南韓", Ratio: 1 }
    ]
};


window.onload = function () {
    let companins = [], Data = [];
    let body = document.querySelector('body');
    let table = document.createElement('table');
    table.setAttribute("class", "table table-bordered table-striped table-dark");
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let theadTR = document.createElement('tr');
    marketingShare.titles.forEach(function (item){
        let td = document.createElement('td');
        td.innerText = item;
        theadTR.append(td);
    });
    thead.append(theadTR);
    marketingShare.data.forEach(item => {
        let tbodyTR = document.createElement('tr');
        let values = Object.values(item);
        values.forEach(function(i){
            let tbodyTD = document.createElement('td');
            tbodyTD.innerText = i;
            tbodyTR.append(tbodyTD);
        });
        tbody.append(tbodyTR);
    });
    table.append(thead, tbody);
    body.append(table);
    marketingShare.data.forEach(company => {
        companins.push(company.Name);
        Data.push(company.Ratio);
    });

    drawPieChart(companins, Data);
    marketingShare.titles.forEach(item => {

    });
}