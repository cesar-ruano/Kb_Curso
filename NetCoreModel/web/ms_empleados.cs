/*
               File: MS_Empleados
        Description: MS_Empleados
             Author: GeneXus .NET Core Generator version 16_0_2-131213
       Generated on: 6/19/2020 10:23:24.34
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
using System.Data;
using GeneXus.Data;
using com.genexus;
using GeneXus.Data.ADO;
using GeneXus.Data.NTier;
using GeneXus.Data.NTier.ADO;
using GeneXus.WebControls;
using GeneXus.Http;
using GeneXus.Procedure;
using GeneXus.XML;
using GeneXus.Search;
using GeneXus.Encryption;
using GeneXus.Http.Client;
using System.Threading;
using System.Xml.Serialization;
using System.Runtime.Serialization;
namespace GeneXus.Programs {
   public class ms_empleados : GXProcedure
   {
      public ms_empleados( )
      {
         context = new GxContext(  );
         DataStoreUtil.LoadDataStores( context);
         dsDefault = context.GetDataStore("Default");
         IsMain = true;
         context.SetDefaultTheme("Carmine");
      }

      public ms_empleados( IGxContext context )
      {
         this.context = context;
         IsMain = false;
         dsDefault = context.GetDataStore("Default");
      }

      public void release( )
      {
      }

      public void execute( out String aP0_EmpleadoJSON )
      {
         this.AV10EmpleadoJSON = "" ;
         initialize();
         executePrivate();
         aP0_EmpleadoJSON=this.AV10EmpleadoJSON;
      }

      public String executeUdp( )
      {
         this.AV10EmpleadoJSON = "" ;
         initialize();
         executePrivate();
         aP0_EmpleadoJSON=this.AV10EmpleadoJSON;
         return AV10EmpleadoJSON ;
      }

      public void executeSubmit( out String aP0_EmpleadoJSON )
      {
         ms_empleados objms_empleados;
         objms_empleados = new ms_empleados();
         objms_empleados.AV10EmpleadoJSON = "" ;
         objms_empleados.context.SetSubmitInitialConfig(context);
         objms_empleados.initialize();
         ThreadPool.QueueUserWorkItem( PropagateCulture(new WaitCallback( executePrivateCatch )),objms_empleados);
         aP0_EmpleadoJSON=this.AV10EmpleadoJSON;
      }

      void executePrivateCatch( object stateInfo )
      {
         try
         {
            ((ms_empleados)stateInfo).executePrivate();
         }
         catch ( Exception e )
         {
            GXUtil.SaveToEventLog( "Design", e);
            throw e ;
         }
      }

      void executePrivate( )
      {
         /* GeneXus formulas */
         /* Output device settings */
         /* Using cursor P000B2 */
         pr_default.execute(0);
         while ( (pr_default.getStatus(0) != 101) )
         {
            A1EmpleadoId = P000B2_A1EmpleadoId[0];
            A2EmpleadoNombre = P000B2_A2EmpleadoNombre[0];
            A3EmpleadoFechaNacimiento = P000B2_A3EmpleadoFechaNacimiento[0];
            A4PuestoId = P000B2_A4PuestoId[0];
            AV9sdtEMpleadosItem = new SdtSDT_Empleado_SDT_EmpleadoItem(context);
            AV9sdtEMpleadosItem.gxTpr_Empleadoid = A1EmpleadoId;
            AV9sdtEMpleadosItem.gxTpr_Empleadonombre = A2EmpleadoNombre;
            AV9sdtEMpleadosItem.gxTpr_Empleadofechanacimiento = A3EmpleadoFechaNacimiento;
            AV9sdtEMpleadosItem.gxTpr_Puestoid = A4PuestoId;
            AV8sdtEMpleados.Add(AV9sdtEMpleadosItem, 0);
            pr_default.readNext(0);
         }
         pr_default.close(0);
         AV10EmpleadoJSON = AV8sdtEMpleados.ToJSonString(false);
         this.cleanup();
      }

      public override void cleanup( )
      {
         CloseOpenCursors();
         if ( IsMain )
         {
            context.CloseConnections() ;
         }
         exitApplication();
      }

      protected void CloseOpenCursors( )
      {
      }

      public override void initialize( )
      {
         scmdbuf = "";
         P000B2_A1EmpleadoId = new short[1] ;
         P000B2_A2EmpleadoNombre = new String[] {""} ;
         P000B2_A3EmpleadoFechaNacimiento = new DateTime[] {DateTime.MinValue} ;
         P000B2_A4PuestoId = new short[1] ;
         A2EmpleadoNombre = "";
         A3EmpleadoFechaNacimiento = DateTime.MinValue;
         AV9sdtEMpleadosItem = new SdtSDT_Empleado_SDT_EmpleadoItem(context);
         AV8sdtEMpleados = new GXBaseCollection<SdtSDT_Empleado_SDT_EmpleadoItem>( context, "SDT_EmpleadoItem", "Curso2");
         pr_default = new DataStoreProvider(context, new GeneXus.Programs.ms_empleados__default(),
            new Object[][] {
                new Object[] {
               P000B2_A1EmpleadoId, P000B2_A2EmpleadoNombre, P000B2_A3EmpleadoFechaNacimiento, P000B2_A4PuestoId
               }
            }
         );
         /* GeneXus formulas. */
         context.Gx_err = 0;
      }

      private short A1EmpleadoId ;
      private short A4PuestoId ;
      private String scmdbuf ;
      private DateTime A3EmpleadoFechaNacimiento ;
      private String AV10EmpleadoJSON ;
      private String A2EmpleadoNombre ;
      private IGxDataStore dsDefault ;
      private IDataStoreProvider pr_default ;
      private short[] P000B2_A1EmpleadoId ;
      private String[] P000B2_A2EmpleadoNombre ;
      private DateTime[] P000B2_A3EmpleadoFechaNacimiento ;
      private short[] P000B2_A4PuestoId ;
      private String aP0_EmpleadoJSON ;
      private GXBaseCollection<SdtSDT_Empleado_SDT_EmpleadoItem> AV8sdtEMpleados ;
      private SdtSDT_Empleado_SDT_EmpleadoItem AV9sdtEMpleadosItem ;
   }

   public class ms_empleados__default : DataStoreHelperBase, IDataStoreHelper
   {
      public ICursor[] getCursors( )
      {
         cursorDefinitions();
         return new Cursor[] {
          new ForEachCursor(def[0])
       };
    }

    private static CursorDef[] def;
    private void cursorDefinitions( )
    {
       if ( def == null )
       {
          Object[] prmP000B2 ;
          prmP000B2 = new Object[] {
          } ;
          def= new CursorDef[] {
              new CursorDef("P000B2", "SELECT [EmpleadoId], [EmpleadoNombre], [EmpleadoFechaNacimiento], [PuestoId] FROM [TEmpleado] ORDER BY [EmpleadoId] ",false, GxErrorMask.GX_NOMASK | GxErrorMask.GX_MASKLOOPLOCK, false, this,prmP000B2,100, GxCacheFrequency.OFF ,false,false )
          };
       }
    }

    public void getResults( int cursor ,
                            IFieldGetter rslt ,
                            Object[] buf )
    {
       switch ( cursor )
       {
             case 0 :
                ((short[]) buf[0])[0] = rslt.getShort(1) ;
                ((String[]) buf[1])[0] = rslt.getVarchar(2) ;
                ((DateTime[]) buf[2])[0] = rslt.getGXDate(3) ;
                ((short[]) buf[3])[0] = rslt.getShort(4) ;
                return;
       }
    }

    public void setParameters( int cursor ,
                               IFieldSetter stmt ,
                               Object[] parms )
    {
       switch ( cursor )
       {
       }
    }

 }

}
