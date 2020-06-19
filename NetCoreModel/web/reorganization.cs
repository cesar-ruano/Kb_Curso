/*
               File: reorganization
        Description: No description for object
             Author: GeneXus .NET Core Generator version 16_0_9-140712
       Generated on: 6/19/2020 9:8:6.96
       Program type: Callable routine
          Main DBMS: SQL Server
*/
namespace GeneXus.Programs {
   using System;
   using System.Collections;
   using GeneXus.Utils;
   using GeneXus.Resources;
   using GeneXus.Application;
   using GeneXus.Metadata;
   using GeneXus.Cryptography;
   using GeneXus.Reorg;
   using System.Threading;
   using GeneXus.Programs;
   using System.Data;
   using GeneXus.Data;
   using GeneXus.Data.ADO;
   using GeneXus.Data.NTier;
   using GeneXus.Data.NTier.ADO;
   using GeneXus.XML;
   using GeneXus.Search;
   using GeneXus.Encryption;
   using GeneXus.Http.Client;
   using System.Xml.Serialization;
   public class reorganization : GXReorganization
   {
      public static void Main( )
      {
         new reorganization().execute();
      }

      public ArrayList execute( )
      {
         if ( GeneXus.Configuration.Config.ConfigFileName.Length == 0)
         GeneXus.Configuration.Config.ConfigFileName = "client.exe.config" ;
         try
         {
            new reorg().execute();
            GXReorganization.NotifyEnd();
         }
         catch ( Exception ex )
         {
            if ( IsBadImageFormatException(ex) )
            {
               throw ex ;
            }
            else
            {
               GXReorganization.NotifyError();
               GeneXus.Reorg.GXReorganization.AddMsg( ex.Message , null);
            }
         }
         return GXReorganization.ReorgLog;
      }

      public override void ExecForm( )
      {
         execute();
      }

   }

}
