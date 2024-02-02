const submitbtn=document.getElementById('submitbtn');
const output=document.getElementById('output');


submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    output.innerHTML=`<img src="./loading.gif">`;
    console.log("button clicked");

    // let name1 = document.getElementById('name1');
    // let name2 = document.getElementById('name2');
    let name1 = document.getElementById('name1').value.toLowerCase().replace(/\s/g, '');
    let name2 = document.getElementById('name2').value.toLowerCase().replace(/\s/g, '');

    console.log(name1);
    console.log(name2);

    setTimeout(()=>{
        flames(name1,name2);
    },2500);

    // output.innerHTML=`${getCommonLetters(name1,name2)}`;

    
});

function flames(name1,name2){

        let remaining = getCommonLetters(name1, name2);
        let relationships = ["Friends", "Lovers", "Angry", "Marriage", "Enemies", "Siblings"];

        for(let i=0;i<5;i++){
            let status=remaining%relationships.length;
            relationships.slice(status,1);
        }


        output.innerHTML=`${relationships[0]}`;


}

function getCommonLetters(str1, str2) {
    // let commonLetters = [];
    // for (let i = 0; i < str1.length; i++) {
    //     if (str2.indexOf(str1[i]) !== -1) {
    //         commonLetters.push(str1[i]);
    //     }
    // }

    let arr1=str1.split('');
    let arr2=str2.split('');
    let commonletters=[];
    for(let i=0;i<arr1.length;i++){
        let matching=0;
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                commonletters.push(arr1[i]);
                arr2.splice(j,1);
                j--;
            }

            }

        if(commonletters.includes(arr1[i])){
            arr1.splice(i,1);
            i--;
        }
        }

        return (arr1.length+arr2.length);

}