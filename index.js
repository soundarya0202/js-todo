var arr=[];
const name=document.getElementById('name');
const email=document.getElementById('email');
const output=document.getElementById('cu-action');
var table = document.getElementById('table');
let curval=null;
let id=1;
function addinfo()
{
    if(curval)
    {
        arr=arr.map(arr=>{

            if(curval===arr.id)
            {
               // console.log(curval);
                arr.name=name.value;
                arr.email=email.value;
                //console.log("edittt");
            }
            return arr;
        });
         updationval(null,"add");   
            
    }
    else
    {
        object={};
        object.id=id++;
        object.name=name.value;
        object.email=email.value;
        arr.push(object);
      
       // console.log('hi');
    }
    build();
}
function build()
{
    object={};
    let rows='';
    arr.forEach(object=>{
    const tr=`<tr>
    <td>${object.id}</td>
    <td>${object.name}</td>
    <td>${object.email}</td>
    <td><button id="edit" class="btn btn-primary btn-md px-4" onclick="update(${object.id})">Edit</button>
    <button id="delete"  class="btn btn-primary btn-md px-4" onclick="del(${object.id})">Delete</button></td>
    </tr>`;
    rows+=tr;
});
document.getElementById("todo-body").innerHTML=rows;
}
function reset()
{
    object.name='';
    object.email='';
}
function updationval(id,text){
    curval=id;
    // console.log(id+"hi");
    output.innerHTML=text;
}
function update(num)
{
   // console.log(num);
    arr1=arr.find(arr=>arr.id==num)
    if(arr1){ 
        name.value=arr1.name;
        email.value=arr1.email;
        updationval(num,'update');}
   
    // console.log(arr1.id);
    
}
function del(x)
{
    rows="";
    arr=arr.filter(arr=>arr.id!=x)
    build();
}
output.addEventListener("click",addinfo);
 
// edit.addEventListener("click",update(object.name,object.email))