function findevenodd() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let evenList = [];
    let oddList = [];

    for (let i = num1; i <= num2; i++) {
        // console.log(i);
        if (i % 2 === 0) {
            // console.log("even",i)
            evenList.push(i);

        } else {
            // console.log("odd",i)
            oddList.push(i);

        }

    }
    let evenItemTable = document.getElementById("evenItem");
    // for (let i = 0; i < evenList.length; i++) {
    //     console.log(evenList[i])

    //     let tr = evenItemTable.insertRow();
    //     let td = tr.insertCell(0);
    //     td.innerHTML = evenList[i];

    // }
    let oddItemTable = document.getElementById("oddItem");
    // for (let i = 0; i < oddList.length; i++) {
    //     console.log(oddList[i])

    //     let tr = oddItemTable.insertRow();
    //     let td = tr.insertCell(0);
    //     td.innerHTML = oddList[i];

    // }

    dataableRenderer(evenItemTable, evenList);
    dataableRenderer(oddItemTable, oddList);
}
function dataableRenderer(table, list){
    for (let i = 0; i < list.length; i++) {
        console.log(list[i])

        let tr = table.insertRow();
        let td = tr.insertCell(0);
        td.innerHTML = list[i];

    }
}