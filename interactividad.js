
function limpiarform (){
document.getElementById('fis').reset();
}
var fi=function(n1, n2){
	tie=parseFloat(document.getElementById("tie").value);
	dis=parseFloat(document.getElementById("dis").value);
	var i= dis/tie
	return i
	alert("El resultado es: *" +i+ "*"+ "Metros/segundos")
}
var y=function(n1){
	velo=parseFloat(document.getElementById("velo").value);
	if (velo>1235.52)
{
	alert("*"+velo+"*"+ "Es velocidad SUPERSONICA");
}
else
{
	
	alert("*"+velo+"* Km/h"+ "NO es velocidad SUPERSONICA");

}
}
function rd(x)
         {  return Math.round(1000*x)/1000   }
       function computar()       
         {    var xa=eval(document.funcion.a.value) , fx=document.funcion.f.value,
                   dfx=document.funcion.df.value,             dx=Number(document.funcion.dx.value);
                   x=xa ;  fa=eval(fx)  ;  dfa=eval(dfx)  ;  ix=dx/10;
           for(i=0 ; i <10; i++)
            { 
               x=rd(xa-dx+ix*i) ;xi=x;fi=rd(eval(fx));
               x=rd(xa+dx-ix*i) ;xd=x;fd=rd(eval(fx));
             tvmi=rd((fa-fi)/(xa-xi));tvmd=rd((fd-fa)/(xd-xa));
               document.funcion[3*i+5].value=rd(dx-ix*i);  
               document.funcion[3*i+6].value=tvmi;
               document.funcion[3*i+7].value=tvmd;
              } 
             document.funcion.dfa.value=dfa 
         }