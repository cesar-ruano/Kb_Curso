/*!   GeneXus .NET Core 16_0_9-140712 on 6/19/2020 9:8:48.62
*/
gx.evt.autoSkip=!1;gx.define("gx0020",!1,function(){var n,t;this.ServerClass="gx0020";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV8pPuestoId=gx.fn.getIntegerValue("vPPUESTOID",".")};this.e13081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]),gx.$.Deferred().resolve()};this.e11081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("PUESTOIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PUESTOIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPUESTOID","Visible",!0)):(gx.fn.setCtrlProperty("PUESTOIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPUESTOID","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PUESTOIDFILTERCONTAINER","Class")',ctrl:"PUESTOIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPUESTOID","Visible")',ctrl:"vCPUESTOID",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e12081_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("PUESTODSCFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("PUESTODSCFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCPUESTODSC","Visible",!0)):(gx.fn.setCtrlProperty("PUESTODSCFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCPUESTODSC","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("PUESTODSCFILTERCONTAINER","Class")',ctrl:"PUESTODSCFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPUESTODSC","Visible")',ctrl:"vCPUESTODSC",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e16082_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e17081_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40];this.GXLastCtrlId=40;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",34,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0020",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",35,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(4,36,"PUESTOID","Id","","PuestoId","int",0,"px",4,4,"right",null,[],4,"PuestoId",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(5,37,"PUESTODSC","Puesto","","PuestoDsc","svchar",0,"px",40,40,"left",null,[],5,"PuestoDsc",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");this.Grid1Container.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"ADVANCEDCONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"PUESTOIDFILTERCONTAINER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"LBLPUESTOIDFILTER",format:1,grid:0,evt:"e11081_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCPUESTOID",gxz:"ZV6cPuestoId",gxold:"OV6cPuestoId",gxvar:"AV6cPuestoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6cPuestoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6cPuestoId=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCPUESTOID",gx.O.AV6cPuestoId,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6cPuestoId=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCPUESTOID",".")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"PUESTODSCFILTERCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"LBLPUESTODSCFILTER",format:1,grid:0,evt:"e12081_client"};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCPUESTODSC",gxz:"ZV7cPuestoDsc",gxold:"OV7cPuestoDsc",gxvar:"AV7cPuestoDsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7cPuestoDsc=n)},v2z:function(n){n!==undefined&&(gx.O.ZV7cPuestoDsc=n)},v2c:function(){gx.fn.setControlValue("vCPUESTODSC",gx.O.AV7cPuestoDsc,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7cPuestoDsc=this.val())},val:function(){return gx.fn.getControlValue("vCPUESTODSC")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"GRIDTABLE",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"BTNTOGGLE",grid:0,evt:"e13081_client"};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV5LinkSelection=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5LinkSelection=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(34),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(n){gx.O.AV12Linkselection_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV5LinkSelection=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV12Linkselection_GXI",nac:gx.falseFn};n[36]={id:36,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PUESTOID",gxz:"Z4PuestoId",gxold:"O4PuestoId",gxvar:"A4PuestoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A4PuestoId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z4PuestoId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("PUESTOID",n||gx.fn.currentGridRowImpl(34),gx.O.A4PuestoId,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A4PuestoId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("PUESTOID",n||gx.fn.currentGridRowImpl(34),".")},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PUESTODSC",gxz:"Z5PuestoDsc",gxold:"O5PuestoDsc",gxvar:"A5PuestoDsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A5PuestoDsc=n)},v2z:function(n){n!==undefined&&(gx.O.Z5PuestoDsc=n)},v2c:function(n){gx.fn.setGridControlValue("PUESTODSC",n||gx.fn.currentGridRowImpl(34),gx.O.A5PuestoDsc,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A5PuestoDsc=this.val(n))},val:function(n){return gx.fn.getGridControlValue("PUESTODSC",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"BTN_CANCEL",grid:0,evt:"e17081_client"};this.AV6cPuestoId=0;this.ZV6cPuestoId=0;this.OV6cPuestoId=0;this.AV7cPuestoDsc="";this.ZV7cPuestoDsc="";this.OV7cPuestoDsc="";this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z4PuestoId=0;this.O4PuestoId=0;this.Z5PuestoDsc="";this.O5PuestoDsc="";this.AV6cPuestoId=0;this.AV7cPuestoDsc="";this.AV8pPuestoId=0;this.AV5LinkSelection="";this.A4PuestoId=0;this.A5PuestoDsc="";this.Events={e16082_client:["ENTER",!0],e17081_client:["CANCEL",!0],e13081_client:["'TOGGLE'",!1],e11081_client:["LBLPUESTOIDFILTER.CLICK",!1],e12081_client:["LBLPUESTODSCFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cPuestoId",fld:"vCPUESTOID",pic:"ZZZ9"},{av:"AV7cPuestoDsc",fld:"vCPUESTODSC",pic:""}],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLPUESTOIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PUESTOIDFILTERCONTAINER","Class")',ctrl:"PUESTOIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PUESTOIDFILTERCONTAINER","Class")',ctrl:"PUESTOIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPUESTOID","Visible")',ctrl:"vCPUESTOID",prop:"Visible"}]];this.EvtParms["LBLPUESTODSCFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("PUESTODSCFILTERCONTAINER","Class")',ctrl:"PUESTODSCFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("PUESTODSCFILTERCONTAINER","Class")',ctrl:"PUESTODSCFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCPUESTODSC","Visible")',ctrl:"vCPUESTODSC",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION",pic:""}]];this.EvtParms.ENTER=[[{av:"A4PuestoId",fld:"PUESTOID",pic:"ZZZ9",hsh:!0}],[{av:"AV8pPuestoId",fld:"vPPUESTOID",pic:"ZZZ9"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cPuestoId",fld:"vCPUESTOID",pic:"ZZZ9"},{av:"AV7cPuestoDsc",fld:"vCPUESTODSC",pic:""}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cPuestoId",fld:"vCPUESTOID",pic:"ZZZ9"},{av:"AV7cPuestoDsc",fld:"vCPUESTODSC",pic:""}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cPuestoId",fld:"vCPUESTOID",pic:"ZZZ9"},{av:"AV7cPuestoDsc",fld:"vCPUESTODSC",pic:""}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cPuestoId",fld:"vCPUESTOID",pic:"ZZZ9"},{av:"AV7cPuestoDsc",fld:"vCPUESTODSC",pic:""}],[]];this.setVCMap("AV8pPuestoId","vPPUESTOID",0,"int",4,0);t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingParm(this.GXValidFnc[16]);t.addRefreshingParm(this.GXValidFnc[26]);this.Initialize()});gx.wi(function(){gx.createParentObj(gx0020)})