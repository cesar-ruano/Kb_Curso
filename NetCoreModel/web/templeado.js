/*!   GeneXus .NET Core 16_0_9-140712 on 6/19/2020 9:8:54.14
*/
gx.evt.autoSkip=!1;gx.define("templeado",!1,function(){this.ServerClass="templeado";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Valid_Empleadoid=function(){return this.validSrvEvt("Valid_Empleadoid",0).then(function(n){return n}.closure(this))};this.Valid_Empleadofechanacimiento=function(){return this.validCliEvt("Valid_Empleadofechanacimiento",0,function(){try{var n=gx.util.balloon.getNew("EMPLEADOFECHANACIMIENTO");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A3EmpleadoFechaNacimiento)==0||new gx.date.gxdate(this.A3EmpleadoFechaNacimiento).compare(gx.date.ymdtod(1753,1,1))>=0))try{n.setError("Campo Empleado Fecha Nacimiento fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Puestoid=function(){return this.validSrvEvt("Valid_Puestoid",0).then(function(n){return n}.closure(this))};this.e11011_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e12011_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];this.GXLastCtrlId=59;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLECONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TITLE",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"FORMCONTAINER",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"TOOLBARCELL",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"BTN_FIRST",grid:0,evt:"e13011_client",std:"FIRST"};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"BTN_PREVIOUS",grid:0,evt:"e14011_client",std:"PREVIOUS"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"BTN_NEXT",grid:0,evt:"e15011_client",std:"NEXT"};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"BTN_LAST",grid:0,evt:"e16011_client",std:"LAST"};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"BTN_SELECT",grid:0,evt:"e17011_client",std:"SELECT"};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empleadoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLEADOID",gxz:"Z1EmpleadoId",gxold:"O1EmpleadoId",gxvar:"A1EmpleadoId",ucs:[],op:[49,44,39],ip:[49,44,39,34],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A1EmpleadoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1EmpleadoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("EMPLEADOID",gx.O.A1EmpleadoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A1EmpleadoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("EMPLEADOID",".")},nac:gx.falseFn};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLEADONOMBRE",gxz:"Z2EmpleadoNombre",gxold:"O2EmpleadoNombre",gxvar:"A2EmpleadoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A2EmpleadoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2EmpleadoNombre=n)},v2c:function(){gx.fn.setControlValue("EMPLEADONOMBRE",gx.O.A2EmpleadoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.A2EmpleadoNombre=this.val())},val:function(){return gx.fn.getControlValue("EMPLEADONOMBRE")},nac:gx.falseFn};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empleadofechanacimiento,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLEADOFECHANACIMIENTO",gxz:"Z3EmpleadoFechaNacimiento",gxold:"O3EmpleadoFechaNacimiento",gxvar:"A3EmpleadoFechaNacimiento",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A3EmpleadoFechaNacimiento=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3EmpleadoFechaNacimiento=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("EMPLEADOFECHANACIMIENTO",gx.O.A3EmpleadoFechaNacimiento,0)},c2v:function(){this.val()!==undefined&&(gx.O.A3EmpleadoFechaNacimiento=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("EMPLEADOFECHANACIMIENTO")},nac:gx.falseFn};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Puestoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PUESTOID",gxz:"Z4PuestoId",gxold:"O4PuestoId",gxvar:"A4PuestoId",ucs:[],op:[],ip:[49],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A4PuestoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z4PuestoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("PUESTOID",gx.O.A4PuestoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.A4PuestoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("PUESTOID",".")},nac:gx.falseFn};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"BTN_ENTER",grid:0,evt:"e11011_client",std:"ENTER"};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"BTN_CANCEL",grid:0,evt:"e12011_client"};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"BTN_DELETE",grid:0,evt:"e18011_client",std:"DELETE"};n[59]={id:59,fld:"PROMPT_4",grid:0};this.A1EmpleadoId=0;this.Z1EmpleadoId=0;this.O1EmpleadoId=0;this.A2EmpleadoNombre="";this.Z2EmpleadoNombre="";this.O2EmpleadoNombre="";this.A3EmpleadoFechaNacimiento=gx.date.nullDate();this.Z3EmpleadoFechaNacimiento=gx.date.nullDate();this.O3EmpleadoFechaNacimiento=gx.date.nullDate();this.A4PuestoId=0;this.Z4PuestoId=0;this.O4PuestoId=0;this.A1EmpleadoId=0;this.A2EmpleadoNombre="";this.A3EmpleadoFechaNacimiento=gx.date.nullDate();this.A4PuestoId=0;this.Events={e11011_client:["ENTER",!0],e12011_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms.VALID_EMPLEADOID=[[{av:"A1EmpleadoId",fld:"EMPLEADOID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{av:"A2EmpleadoNombre",fld:"EMPLEADONOMBRE",pic:""},{av:"A3EmpleadoFechaNacimiento",fld:"EMPLEADOFECHANACIMIENTO",pic:""},{av:"A4PuestoId",fld:"PUESTOID",pic:"ZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"Z1EmpleadoId"},{av:"Z2EmpleadoNombre"},{av:"Z3EmpleadoFechaNacimiento"},{av:"Z4PuestoId"},{ctrl:"BTN_DELETE",prop:"Enabled"},{ctrl:"BTN_ENTER",prop:"Enabled"}]];this.EvtParms.VALID_EMPLEADOFECHANACIMIENTO=[[{av:"A3EmpleadoFechaNacimiento",fld:"EMPLEADOFECHANACIMIENTO",pic:""}],[{av:"A3EmpleadoFechaNacimiento",fld:"EMPLEADOFECHANACIMIENTO",pic:""}]];this.EvtParms.VALID_PUESTOID=[[{av:"A4PuestoId",fld:"PUESTOID",pic:"ZZZ9"}],[]];this.setPrompt("PROMPT_4",[49]);this.EnterCtrl=["BTN_ENTER"];this.Initialize()});gx.wi(function(){gx.createParentObj(templeado)})