import{p as t,a as s,o as e,c as a,b as n,w as i,d as o,v as l,t as c,e as u,f as d,g as r}from"./vendor.fa96e789.js";const m={data:()=>({dni:"",showStatus:!1,statusSuccess:!1}),mounted(){setTimeout((()=>{this.$refs.txtDni.focus()}),100)},computed:{base_url:()=>"https://da20231.appadmision-unapiquitos.com/api/v1/",base_url_media:()=>"https://da20231.appadmision-unapiquitos.com/"},methods:{async get_status_postulante_requisito(){try{const t=await fetch(`${this.base_url}get_status_postulante_requisito/?dni=${this.dni}`),s=await t.json(),{status:e,message:a,success:n}=s;if(200!==e)return void alert(a);this.showStatus=!0,this.statusSuccess=n}catch(t){const s=t.json();alert(s.message)}},async setConstulta(){if(0===this.dni.length)return void alert("Ingrese su número de Dni porfavor!");let t=this.base_url,s=this.base_url_media;const e=await fetch(`${t}reportes/get-consulta-ubicacion/?dni=${this.dni}`),a=(await e.json()).file;fetch(`${t}countDownload/?dni=${this.dni}`);let n=document.createElement("a");n.href=`${s}${a}`,n.target="_blank",n.click(),this.dni=""}}},p=d();t("data-v-4ca11fcc");const f={class:"flex flex-col w-full h-screen"},h={class:"m-auto shadow p-10 rounded-2xl text-center"},x=n("div",{class:"flex items-center justify-center my-5"},[n("img",{src:"/assets/unap.48d1e424.jpg",width:"50",alt:"logounap"})],-1),g=n("div",{class:"font-medium"},[n("h1",{class:"text-lg"},"Universidad Nacional de la Amazonía Peruana"),n("span",{class:"text-gray-500"},"Oficina Central de Admisión")],-1),v=n("div",null,[n("label",{for:"txtDni"},"Dni:"),n("span",{class:"ml-2 text-xs font-medium text-blue-500"},"Ingrese su número de dni para realizar su consulta.")],-1),b=n("span",null,"Estado de Validación de documentos:",-1),_={class:"ml-2 text-2xl mt-1"};s();const w=p(((t,s,d,r,m,p)=>(e(),a("div",f,[n("div",h,[x,g,n("form",{onSubmit:s[3]||(s[3]=i((()=>{}),["prevent"])),class:"flex flex-col text-left mt-10 text-sm"},[v,o(n("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>m.dni=t),ref:"txtDni",type:"text",id:"txtDni",class:"p-2 rounded-md border bg-blue-50 focus:outline-none",placeholder:"Número de dni."},null,512),[[l,m.dni]]),n("input",{type:"submit",class:"mt-5 p-2 bg-green-500 text-white rounded-xl cursor-pointer transition duration-500 ease-in-out hover:bg-red-500 hover:text-white transform hover:-translate-y-1 focus:outline-none hover:scale-100",value:"Enviar",onClick:s[2]||(s[2]=t=>p.get_status_postulante_requisito())}),m.showStatus?(e(),a("div",{key:0,class:["text-xs flex flex-col items-center p-3 rounded-lg mt-3",m.statusSuccess?"bg-success":"bg-warn"]},[b,n("b",_,c(m.statusSuccess?"Documentos Validados":"En proceso de validación"),1)],2)):u("",!0)],32)])]))));m.render=w,m.__scopeId="data-v-4ca11fcc";r(m).mount("#app");
