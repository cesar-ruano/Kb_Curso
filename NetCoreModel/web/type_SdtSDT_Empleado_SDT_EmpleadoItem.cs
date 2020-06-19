/*
				   File: type_SdtSDT_Empleado_SDT_EmpleadoItem
			Description: SDT_Empleado
				 Author: Nemo 🐠 for C# (.NET Core) version 16.0.2.131213
		   Program type: Callable routine
			  Main DBMS: SQL Server
*/
using System;
using System.Collections;
using GeneXus.Utils;
using GeneXus.Resources;
using GeneXus.Application;
using GeneXus.Metadata;
using GeneXus.Cryptography;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using GeneXus.Http.Server;
using System.Reflection;
using System.Xml.Serialization;
using System.Runtime.Serialization;


namespace GeneXus.Programs
{
	[XmlRoot(ElementName="SDT_EmpleadoItem")]
	[XmlType(TypeName="SDT_EmpleadoItem" , Namespace="Curso2" )]
	[Serializable]
	public class SdtSDT_Empleado_SDT_EmpleadoItem : GxUserType
	{
		public SdtSDT_Empleado_SDT_EmpleadoItem( )
		{
			/* Constructor for serialization */
			gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadonombre = "";

		}

		public SdtSDT_Empleado_SDT_EmpleadoItem(IGxContext context)
		{
			this.context = context;
			initialize();
		}

		#region Json
		private static Hashtable mapper;
		public override String JsonMap(String value)
		{
			if (mapper == null)
			{
				mapper = new Hashtable();
			}
			return (String)mapper[value]; ;
		}

		public override void ToJSON()
		{
			ToJSON(true) ;
			return;
		}

		public override void ToJSON(bool includeState)
		{
			AddObjectProperty("EmpleadoId", gxTpr_Empleadoid, false);


			AddObjectProperty("EmpleadoNombre", gxTpr_Empleadonombre, false);


			sDateCnv = "";
			sNumToPad = StringUtil.Trim(StringUtil.Str((decimal)(DateTimeUtil.Year(gxTpr_Empleadofechanacimiento)), 10, 0));
			sDateCnv = sDateCnv + StringUtil.Substring("0000", 1, 4-StringUtil.Len(sNumToPad)) + sNumToPad;
			sDateCnv = sDateCnv + "-";
			sNumToPad = StringUtil.Trim(StringUtil.Str((decimal)(DateTimeUtil.Month(gxTpr_Empleadofechanacimiento)), 10, 0));
			sDateCnv = sDateCnv + StringUtil.Substring("00", 1, 2-StringUtil.Len(sNumToPad)) + sNumToPad;
			sDateCnv = sDateCnv + "-";
			sNumToPad = StringUtil.Trim(StringUtil.Str((decimal)(DateTimeUtil.Day(gxTpr_Empleadofechanacimiento)), 10, 0));
			sDateCnv = sDateCnv + StringUtil.Substring("00", 1, 2-StringUtil.Len(sNumToPad)) + sNumToPad;
			AddObjectProperty("EmpleadoFechaNacimiento", sDateCnv, false);


			AddObjectProperty("PuestoId", gxTpr_Puestoid, false);

			return;
		}
		#endregion

		#region Properties

		[SoapElement(ElementName="EmpleadoId")]
		[XmlElement(ElementName="EmpleadoId")]
		public short gxTpr_Empleadoid
		{
			get { 
				return gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadoid; 
			}
			set { 
				gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadoid = value;
				SetDirty("Empleadoid");
			}
		}




		[SoapElement(ElementName="EmpleadoNombre")]
		[XmlElement(ElementName="EmpleadoNombre")]
		public String gxTpr_Empleadonombre
		{
			get { 
				return gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadonombre; 
			}
			set { 
				gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadonombre = value;
				SetDirty("Empleadonombre");
			}
		}



		[SoapElement(ElementName="EmpleadoFechaNacimiento")]
		[XmlElement(ElementName="EmpleadoFechaNacimiento" , IsNullable=true)]
		public string gxTpr_Empleadofechanacimiento_Nullable
		{
			get {
				if ( gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadofechanacimiento == DateTime.MinValue)
					return null;
				return new GxDateString(gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadofechanacimiento).value ;
			}
			set {
				gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadofechanacimiento = DateTimeUtil.CToD2(value);
			}
		}

		[XmlIgnore]
		public DateTime gxTpr_Empleadofechanacimiento
		{
			get { 
				return gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadofechanacimiento; 
			}
			set { 
				gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadofechanacimiento = value;
				SetDirty("Empleadofechanacimiento");
			}
		}



		[SoapElement(ElementName="PuestoId")]
		[XmlElement(ElementName="PuestoId")]
		public short gxTpr_Puestoid
		{
			get { 
				return gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Puestoid; 
			}
			set { 
				gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Puestoid = value;
				SetDirty("Puestoid");
			}
		}




		#endregion

		#region Initialization

		public void initialize( )
		{
			gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadonombre = "";


			sDateCnv = "";
			sNumToPad = "";
			return  ;
		}



		#endregion

		#region Declaration

		protected String sDateCnv ;
		protected String sNumToPad ;
		protected short gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadoid;
		 

		protected String gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadonombre;
		 

		protected DateTime gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Empleadofechanacimiento;
		 

		protected short gxTv_SdtSDT_Empleado_SDT_EmpleadoItem_Puestoid;
		 


		#endregion
	}
	#region Rest interface
	[DataContract(Name=@"SDT_EmpleadoItem", Namespace="Curso2")]
	public class SdtSDT_Empleado_SDT_EmpleadoItem_RESTInterface : GxGenericCollectionItem<SdtSDT_Empleado_SDT_EmpleadoItem>, System.Web.SessionState.IRequiresSessionState
	{
		public SdtSDT_Empleado_SDT_EmpleadoItem_RESTInterface( ) : base()
		{
		}

		public SdtSDT_Empleado_SDT_EmpleadoItem_RESTInterface( SdtSDT_Empleado_SDT_EmpleadoItem psdt ) : base(psdt)
		{
		}

		#region Rest Properties
		[DataMember(Name="EmpleadoId", Order=0)]
		public short gxTpr_Empleadoid
		{
			get { 
				return sdt.gxTpr_Empleadoid;

			}
			set { 
				sdt.gxTpr_Empleadoid = value;
			}
		}

		[DataMember(Name="EmpleadoNombre", Order=1)]
		public  String gxTpr_Empleadonombre
		{
			get { 
				return sdt.gxTpr_Empleadonombre;

			}
			set { 
				 sdt.gxTpr_Empleadonombre = value ;
			}
		}

		[DataMember(Name="EmpleadoFechaNacimiento", Order=2)]
		public  String gxTpr_Empleadofechanacimiento
		{
			get { 
				return DateTimeUtil.DToC2( sdt.gxTpr_Empleadofechanacimiento);

			}
			set { 
				sdt.gxTpr_Empleadofechanacimiento = DateTimeUtil.CToD2(value);
			}
		}

		[DataMember(Name="PuestoId", Order=3)]
		public short gxTpr_Puestoid
		{
			get { 
				return sdt.gxTpr_Puestoid;

			}
			set { 
				sdt.gxTpr_Puestoid = value;
			}
		}


		#endregion

		public SdtSDT_Empleado_SDT_EmpleadoItem sdt
		{
			get { 
				return (SdtSDT_Empleado_SDT_EmpleadoItem)Sdt;
			}
			set { 
				Sdt = value;
			}
		}

		[OnDeserializing]
		void checkSdt( StreamingContext ctx )
		{
			if ( sdt == null )
			{
				sdt = new SdtSDT_Empleado_SDT_EmpleadoItem() ;
			}
		}
	}
	#endregion
}