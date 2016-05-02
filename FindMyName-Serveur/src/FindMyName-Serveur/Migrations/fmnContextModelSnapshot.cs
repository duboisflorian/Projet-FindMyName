using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using FindMyName_Serveur.Models;

namespace FindMyNameServeur.Migrations
{
    [DbContext(typeof(fmnContext))]
    partial class fmnContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FindMyName_Serveur.Models.Contact", b =>
                {
                    b.Property<int>("id");

                    b.Property<int?>("ListeContactid");

                    b.Property<string>("name");

                    b.Property<string>("photo");

                    b.Property<string>("type");

                    b.HasKey("id");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.ListeContact", b =>
                {
                    b.Property<int>("id");

                    b.HasKey("id");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Theme", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("done");

                    b.Property<string>("photo");

                    b.Property<string>("text");

                    b.HasKey("id");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Utilisateur", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("mail");

                    b.Property<int>("meilleurScore");

                    b.Property<string>("name");

                    b.Property<string>("password");

                    b.Property<string>("pays");

                    b.Property<string>("photo");

                    b.HasKey("id");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Contact", b =>
                {
                    b.HasOne("FindMyName_Serveur.Models.ListeContact")
                        .WithMany()
                        .HasForeignKey("ListeContactid");
                });
        }
    }
}
