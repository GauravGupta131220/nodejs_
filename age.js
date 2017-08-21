var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'India2011.csv');

var myReadStream = fs.readFile(filePath, 'utf8', function(err, data) {

    //console.log(data);
    data = data.split("\n");

    var result = [];

    var headers = data[0].split(",");

    for (var i = 1; i < data.length; i++) {

        var obj = {};
        var currentline = data[i].split(",");

        for (var j = 0; j < headers.length; j++) {
             obj.state = currentline[3];
             obj.total = currentline[4];
             obj.age = currentline[5];
             obj.litterate = currentline[12];
        }

        result.push(obj);

    }


    //console.log(result); 



    // from age 7 to 19
    var i = 7;
    while (i <= 19) {

        var sum7to19 = result.reduce((c, ele) => {

            if ((ele.age == i) && (ele.total == 'Total'))
                c = c + parseInt(ele.litterate);
            return c;
        }, 0);


        i++;

    }

    //console.log(JSON.stringify(sum, null, 2));

    // from age 20 to 24
    var sum20to24 = result.reduce((c, ele) => {

        if ((ele.age == '20-24') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);


    // from age 25 to 29
    var sum25to29 = result.reduce((c, ele) => {

        if ((ele.age == '25-29') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);

    // from age 30 to 34
    var sum30to34 = result.reduce((c, ele) => {

        if ((ele.age == '30-34') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);


    // from age 35 to 39
    var sum35to39 = result.reduce((c, ele) => {

        if ((ele.age == '35-39') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);

    // from age 40 to 44
    var sum40to44 = result.reduce((c, ele) => {

        if ((ele.age == '40-44') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);


    // from age 45 to 49
    var sum45to49 = result.reduce((c, ele) => {

        if ((ele.age == '45-49') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);


    // from age 50 to 54
    var sum50to54 = result.reduce((c, ele) => {

        if ((ele.age == '50-54') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);

    // from age 55 to 59
    var sum55to59 = result.reduce((c, ele) => {

        if ((ele.age == '55-59') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);

    // from age 60 to 64
    var sum60to64 = result.reduce((c, ele) => {

        if ((ele.age == '60-64') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);



    // from age 65 to 69
    var sum65to69 = result.reduce((c, ele) => {

        if ((ele.age == '65-69') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);


    // from age 70 to 74
    var sum70to74 = result.reduce((c, ele) => {

        if ((ele.age == '70-74') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);


    // from age 75 to 79
    var sum75to79 = result.reduce((c, ele) => {

        if ((ele.age == '75-79') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);

    // age above 80
    var sum80plus = result.reduce((c, ele) => {

        if ((ele.age == '80+') && (ele.total == 'Total'))
            c = c + parseInt(ele.litterate);
        return c;
    }, 0);


    //to print key-value pair in console
    //console.log(result);

    

    //Create a javascript object with the  array named ageData  in it
    var myObj = {
        ageData: []
    };

    // adding data to it
    myObj.ageData.push({ age_7To19: sum7to19 });
    myObj.ageData.push({ age_20To24: sum20to24 });
    myObj.ageData.push({ age_25To29: sum25to29 });
    myObj.ageData.push({ age_30To34: sum30to34 });
    myObj.ageData.push({ age_35To39: sum35to39 });
    myObj.ageData.push({ age_40To44: sum40to44 });
    myObj.ageData.push({ age_45To49: sum45to49 });
    myObj.ageData.push({ age_50To54: sum50to54 });
    myObj.ageData.push({ age_55To59: sum55to59 });
    myObj.ageData.push({ age_60T064: sum60to64 });
    myObj.ageData.push({ age_65To69: sum65to69 });
    myObj.ageData.push({ age_70To74: sum70to74 });
    myObj.ageData.push({ age_75To79: sum75to79 });
    myObj.ageData.push({ age_80Plus: sum80plus });

    //Convert it from an object to string with stringify
    var age7To19 = JSON.stringify(myObj, null, 2);
    var age20To24 = JSON.stringify(myObj, null, 2);
    var age25To29 = JSON.stringify(myObj, null, 2);
    var age30To34 = JSON.stringify(myObj, null, 2);
    var age35To39 = JSON.stringify(myObj, null, 2);
    var age40To44 = JSON.stringify(myObj, null, 2);
    var age45To49 = JSON.stringify(myObj, null, 2);
    var age50To54 = JSON.stringify(myObj, null, 2);
    var age55To59 = JSON.stringify(myObj, null, 2);
    var age60To64 = JSON.stringify(myObj, null, 2);
    var age65To69 = JSON.stringify(myObj, null, 2);
    var age70To74 = JSON.stringify(myObj, null, 2);
    var age75To79 = JSON.stringify(myObj, null, 2);
    var age80Plus = JSON.stringify(myObj, null, 2);

    //use fs to write the file to disk
    fs.writeFile('age_literate.json', age7To19);
    fs.writeFile('age_literate.json', age20To24);
    fs.writeFile('age_literate.json', age25To29);
    fs.writeFile('age_literate.json', age30To34);
    fs.writeFile('age_literate.json', age35To39);
    fs.writeFile('age_literate.json', age40To44);
    fs.writeFile('age_literate.json', age45To49);
    fs.writeFile('age_literate.json', age50To54);
    fs.writeFile('age_literate.json', age55To59);
    fs.writeFile('age_literate.json', age60To64);
    fs.writeFile('age_literate.json', age65To69);
    fs.writeFile('age_literate.json', age70To74);
    fs.writeFile('age_literate.json', age75To79);
    fs.writeFile('age_literate.json', age80Plus);

});
