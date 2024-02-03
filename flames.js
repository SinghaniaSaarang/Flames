const submitbtn=document.getElementById('submitbtn');
const output=document.getElementById('output');


submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    output.innerHTML=`<img src="./loading.gif">`;
    console.log("button clicked");

    let name1 = document.getElementById('name1').value.toLowerCase().replace(/\s/g, '');
    let name2 = document.getElementById('name2').value.toLowerCase().replace(/\s/g, '');

    console.log(name1);
    console.log(name2);

    setTimeout(()=>{
        flames(name1,name2);
    },1000);

    
});

function flames(name1,name2){

        let remaining = getCommonLetters(name1, name2);
        let relationships = ["Friends", "Lovers", "Angry", "Marriage", "Enemies", "Siblings"];

        for(let i=0;i<5;i++){
            let status=remaining%relationships.length;
            relationships.splice(status-1,1);
        }


        output.innerHTML=`<h1>${relationships[0]}</h1>`;


}

function getCommonLetters(str1, str2) {

    let arr1=str1.split('');
    let arr2=str2.split('');
    let commonletters=[];
    for(let i=0;i<arr1.length;i++){
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