import{o as e,c as t,a as n,w as a,b as i,v as s,d as o}from"./vendor.6bc003c6.js";const l={data:()=>({dni:""}),mounted(){setTimeout((()=>{this.$refs.txtDni.focus()}),100)},methods:{async setConstulta(){if(0===this.dni.length)return void alert("Ingrese su número de Dni porfavor!");let e="https://da20221.appadmision-unapiquitos.com/api/v1/";try{const t=await fetch(`${e}reportes/get-consulta-ubicacion/?dni=${this.dni}`),n=(await t.json()).file;fetch(`${e}countDownload/?dni=${this.dni}`);let a=document.createElement("a");a.href=`https://da20221.appadmision-unapiquitos.com/${n}`,a.target="_blank",a.click(),this.dni=""}catch(t){alert("El postulante no tiene el registro validado, porfavor comuniquese con la oficina central de admisión.")}}}},r={class:"flex flex-col w-full h-screen"},d={class:"m-auto shadow p-10 rounded-2xl text-center"},c=n("div",{class:"flex items-center justify-center my-5"},[n("img",{src:"/assets/unap.48d1e424.jpg",width:"50",alt:"logounap"})],-1),u=n("div",{class:"font-medium"},[n("h1",{class:"text-lg"},"Universidad Nacional de la Amazonía Peruana"),n("span",{class:"text-gray-500"},"Oficina Central de Admisión")],-1),m=n("div",null,[n("label",{for:"txtDni"},"Dni:"),n("span",{class:"ml-2 text-xs font-medium text-blue-500"},"Ingrese su número de dni para saber su ubicación.")],-1);l.render=function(o,l,p,f,h,x){return e(),t("div",r,[n("div",d,[c,u,n("form",{onSubmit:l[3]||(l[3]=a((()=>{}),["prevent"])),class:"flex flex-col text-left mt-10 text-sm"},[m,i(n("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>h.dni=e),ref:"txtDni",type:"text",id:"txtDni",class:"p-2 rounded-md border bg-blue-50 focus:outline-none",placeholder:"Número de dni."},null,512),[[s,h.dni]]),n("input",{type:"submit",class:"mt-5 p-2 bg-green-500 text-white rounded-xl cursor-pointer transition duration-500 ease-in-out hover:bg-red-500 hover:text-white transform hover:-translate-y-1 focus:outline-none hover:scale-100",value:"Enviar",onClick:l[2]||(l[2]=e=>x.setConstulta())})],32)])])};o(l).mount("#app");
