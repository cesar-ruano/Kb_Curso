/*!   GeneXus .NET Core 16_0_9-140712 on 6/19/2020 8:28:1.96
*/
gx.evt.autoSkip=!1;gx.define("gx0010",!1,function(){var n,t;this.ServerClass="gx0010";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV9pEmpleadoId=gx.fn.getIntegerValue("vPEMPLEADOID",".")};this.Validv_Cempleadofechanacimiento=function(){return this.validCliEvt("Validv_Cempleadofechanacimiento",0,function(){try{var n=gx.util.balloon.getNew("vCEMPLEADOFECHANACIMIENTO");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV8cEmpleadoFechaNacimiento)===0||new gx.date.gxdate(this.AV8cEmpleadoFechaNacimiento).compare(gx.date.ymdtod(1753,1,1))>=0))try{n.setError("Campo Empleado Fecha Nacimiento fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e14071_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]),gx.$.Deferred().resolve()};this.e11071_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("EMPLEADOIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("EMPLEADOIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCEMPLEADOID","Visible",!0)):(gx.fn.setCtrlProperty("EMPLEADOIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCEMPLEADOID","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("EMPLEADOIDFILTERCONTAINER","Class")',ctrl:"EMPLEADOIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCEMPLEADOID","Visible")',ctrl:"vCEMPLEADOID",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e12071_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("EMPLEADONOMBREFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("EMPLEADONOMBREFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCEMPLEADONOMBRE","Visible",!0)):(gx.fn.setCtrlProperty("EMPLEADONOMBREFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCEMPLEADONOMBRE","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("EMPLEADONOMBREFILTERCONTAINER","Class")',ctrl:"EMPLEADONOMBREFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCEMPLEADONOMBRE","Visible")',ctrl:"vCEMPLEADONOMBRE",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e13071_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("EMPLEADOFECHANACIMIENTOFILTERCONTAINER","Class")=="AdvancedContainerItem"?gx.fn.setCtrlProperty("EMPLEADOFECHANACIMIENTOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"):gx.fn.setCtrlProperty("EMPLEADOFECHANACIMIENTOFILTERCONTAINER","Class","AdvancedContainerItem"),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("EMPLEADOFECHANACIMIENTOFILTERCONTAINER","Class")',ctrl:"EMPLEADOFECHANACIMIENTOFILTERCONTAINER",prop:"Class"}]),gx.$.Deferred().resolve()};this.e17072_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e18071_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51];this.GXLastCtrlId=51;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",44,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0010",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",45,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(1,46,"EMPLEADOID","Id","","EmpleadoId","int",0,"px",4,4,"right",null,[],1,"EmpleadoId",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(2,47,"EMPLEADONOMBRE","Nombre","","EmpleadoNombre","svchar",0,"px",30,30,"left",null,[],2,"EmpleadoNombre",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addSingleLineEdit(3,48,"EMPLEADOFECHANACIMIENTO","Fecha Nacimiento","","EmpleadoFechaNacimiento","date",0,"px",8,8,"right",null,[],3,"EmpleadoFechaNacimiento",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");this.Grid1Container.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"ADVANCEDCONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"EMPLEADOIDFILTERCONTAINER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"LBLEMPLEADOIDFILTER",format:1,grid:0,evt:"e11071_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCEMPLEADOID",gxz:"ZV6cEmpleadoId",gxold:"OV6cEmpleadoId",gxvar:"AV6cEmpleadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6cEmpleadoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6cEmpleadoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCEMPLEADOID",gx.O.AV6cEmpleadoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6cEmpleadoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCEMPLEADOID",".")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"EMPLEADONOMBREFILTERCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"LBLEMPLEADONOMBREFILTER",format:1,grid:0,evt:"e12071_client"};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCEMPLEADONOMBRE",gxz:"ZV7cEmpleadoNombre",gxold:"OV7cEmpleadoNombre",gxvar:"AV7cEmpleadoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7cEmpleadoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV7cEmpleadoNombre=n)},v2c:function(){gx.fn.setControlValue("vCEMPLEADONOMBRE",gx.O.AV7cEmpleadoNombre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7cEmpleadoNombre=this.val())},val:function(){return gx.fn.getControlValue("vCEMPLEADONOMBRE")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"EMPLEADOFECHANACIMIENTOFILTERCONTAINER",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"LBLEMPLEADOFECHANACIMIENTOFILTER",format:1,grid:0,evt:"e13071_client"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cempleadofechanacimiento,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCEMPLEADOFECHANACIMIENTO",gxz:"ZV8cEmpleadoFechaNacimiento",gxold:"OV8cEmpleadoFechaNacimiento",gxvar:"AV8cEmpleadoFechaNacimiento",dp:{f:-1,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[36],ip:[36],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8cEmpleadoFechaNacimiento=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8cEmpleadoFechaNacimiento=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vCEMPLEADOFECHANACIMIENTO",gx.O.AV8cEmpleadoFechaNacimiento,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8cEmpleadoFechaNacimiento=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vCEMPLEADOFECHANACIMIENTO")},nac:gx.falseFn};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"GRIDTABLE",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"BTNTOGGLE",grid:0,evt:"e14071_client"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[45]={id:45,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV5LinkSelection=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5LinkSelection=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(n){gx.O.AV13Linkselection_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV5LinkSelection=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(44))},gxvar_GXI:"AV13Linkselection_GXI",nac:gx.falseFn};n[46]={id:46,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLEADOID",gxz:"Z1EmpleadoId",gxold:"O1EmpleadoId",gxvar:"A1EmpleadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A1EmpleadoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z1EmpleadoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("EMPLEADOID",n||gx.fn.currentGridRowImpl(44),gx.O.A1EmpleadoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A1EmpleadoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("EMPLEADOID",n||gx.fn.currentGridRowImpl(44),".")},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"svchar",len:30,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLEADONOMBRE",gxz:"Z2EmpleadoNombre",gxold:"O2EmpleadoNombre",gxvar:"A2EmpleadoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A2EmpleadoNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z2EmpleadoNombre=n)},v2c:function(n){gx.fn.setGridControlValue("EMPLEADONOMBRE",n||gx.fn.currentGridRowImpl(44),gx.O.A2EmpleadoNombre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A2EmpleadoNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("EMPLEADONOMBRE",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[48]={id:48,lvl:2,type:"date",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"EMPLEADOFECHANACIMIENTO",gxz:"Z3EmpleadoFechaNacimiento",gxold:"O3EmpleadoFechaNacimiento",gxvar:"A3EmpleadoFechaNacimiento",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A3EmpleadoFechaNacimiento=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z3EmpleadoFechaNacimiento=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("EMPLEADOFECHANACIMIENTO",n||gx.fn.currentGridRowImpl(44),gx.O.A3EmpleadoFechaNacimiento,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A3EmpleadoFechaNacimiento=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("EMPLEADOFECHANACIMIENTO",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"BTN_CANCEL",grid:0,evt:"e18071_client"};this.AV6cEmpleadoId=0;this.ZV6cEmpleadoId=0;this.OV6cEmpleadoId=0;this.AV7cEmpleadoNombre="";this.ZV7cEmpleadoNombre="";this.OV7cEmpleadoNombre="";this.AV8cEmpleadoFechaNacimiento=gx.date.nullDate();this.ZV8cEmpleadoFechaNacimiento=gx.date.nullDate();this.OV8cEmpleadoFechaNacimiento=gx.date.nullDate();this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z1EmpleadoId=0;this.O1EmpleadoId=0;this.Z2EmpleadoNombre="";this.O2EmpleadoNombre="";this.Z3EmpleadoFechaNacimiento=gx.date.nullDate();this.O3EmpleadoFechaNacimiento=gx.date.nullDate();this.AV6cEmpleadoId=0;this.AV7cEmpleadoNombre="";this.AV8cEmpleadoFechaNacimiento=gx.date.nullDate();this.AV9pEmpleadoId=0;this.AV5LinkSelection="";this.A1EmpleadoId=0;this.A2EmpleadoNombre="";this.A3EmpleadoFechaNacimiento=gx.date.nullDate();this.Events={e17072_client:["ENTER",!0],e18071_client:["CANCEL",!0],e14071_client:["'TOGGLE'",!1],e11071_client:["LBLEMPLEADOIDFILTER.CLICK",!1],e12071_client:["LBLEMPLEADONOMBREFILTER.CLICK",!1],e13071_client:["LBLEMPLEADOFECHANACIMIENTOFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cEmpleadoId",fld:"vCEMPLEADOID",pic:"ZZZ9"},{av:"AV7cEmpleadoNombre",fld:"vCEMPLEADONOMBRE",pic:""},{av:"AV8cEmpleadoFechaNacimiento",fld:"vCEMPLEADOFECHANACIMIENTO",pic:""}],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLEMPLEADOIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("EMPLEADOIDFILTERCONTAINER","Class")',ctrl:"EMPLEADOIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("EMPLEADOIDFILTERCONTAINER","Class")',ctrl:"EMPLEADOIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCEMPLEADOID","Visible")',ctrl:"vCEMPLEADOID",prop:"Visible"}]];this.EvtParms["LBLEMPLEADONOMBREFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("EMPLEADONOMBREFILTERCONTAINER","Class")',ctrl:"EMPLEADONOMBREFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("EMPLEADONOMBREFILTERCONTAINER","Class")',ctrl:"EMPLEADONOMBREFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCEMPLEADONOMBRE","Visible")',ctrl:"vCEMPLEADONOMBRE",prop:"Visible"}]];this.EvtParms["LBLEMPLEADOFECHANACIMIENTOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("EMPLEADOFECHANACIMIENTOFILTERCONTAINER","Class")',ctrl:"EMPLEADOFECHANACIMIENTOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("EMPLEADOFECHANACIMIENTOFILTERCONTAINER","Class")',ctrl:"EMPLEADOFECHANACIMIENTOFILTERCONTAINER",prop:"Class"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION",pic:""}]];this.EvtParms.ENTER=[[{av:"A1EmpleadoId",fld:"EMPLEADOID",pic:"ZZZ9",hsh:!0}],[{av:"AV9pEmpleadoId",fld:"vPEMPLEADOID",pic:"ZZZ9"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cEmpleadoId",fld:"vCEMPLEADOID",pic:"ZZZ9"},{av:"AV7cEmpleadoNombre",fld:"vCEMPLEADONOMBRE",pic:""},{av:"AV8cEmpleadoFechaNacimiento",fld:"vCEMPLEADOFECHANACIMIENTO",pic:""}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cEmpleadoId",fld:"vCEMPLEADOID",pic:"ZZZ9"},{av:"AV7cEmpleadoNombre",fld:"vCEMPLEADONOMBRE",pic:""},{av:"AV8cEmpleadoFechaNacimiento",fld:"vCEMPLEADOFECHANACIMIENTO",pic:""}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cEmpleadoId",fld:"vCEMPLEADOID",pic:"ZZZ9"},{av:"AV7cEmpleadoNombre",fld:"vCEMPLEADONOMBRE",pic:""},{av:"AV8cEmpleadoFechaNacimiento",fld:"vCEMPLEADOFECHANACIMIENTO",pic:""}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cEmpleadoId",fld:"vCEMPLEADOID",pic:"ZZZ9"},{av:"AV7cEmpleadoNombre",fld:"vCEMPLEADONOMBRE",pic:""},{av:"AV8cEmpleadoFechaNacimiento",fld:"vCEMPLEADOFECHANACIMIENTO",pic:""}],[]];this.EvtParms.VALIDV_CEMPLEADOFECHANACIMIENTO=[[],[]];this.setVCMap("AV9pEmpleadoId","vPEMPLEADOID",0,"int",4,0);t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingParm(this.GXValidFnc[16]);t.addRefreshingParm(this.GXValidFnc[26]);t.addRefreshingParm(this.GXValidFnc[36]);this.Initialize()});gx.wi(function(){gx.createParentObj(gx0010)})