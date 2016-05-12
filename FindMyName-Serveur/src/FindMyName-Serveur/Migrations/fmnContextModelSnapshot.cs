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
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("id_contact");

                    b.Property<string>("type");

                    b.Property<int?>("userid");

                    b.HasKey("id");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Manche", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("Partieid");

                    b.Property<int>("s1");

                    b.Property<int>("s2");

                    b.Property<int?>("themeid");

                    b.HasKey("id");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Mot", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("Reponseid");

                    b.Property<string>("text");

                    b.HasKey("id");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Partie", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("j1id");

                    b.Property<int?>("j2id");

                    b.Property<int>("player");

                    b.Property<int>("s1");

                    b.Property<int>("s2");

                    b.HasKey("id");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Reponse", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("Themeid");

                    b.Property<bool>("done");

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
                    b.HasOne("FindMyName_Serveur.Models.Utilisateur")
                        .WithMany()
                        .HasForeignKey("userid");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Manche", b =>
                {
                    b.HasOne("FindMyName_Serveur.Models.Partie")
                        .WithMany()
                        .HasForeignKey("Partieid");

                    b.HasOne("FindMyName_Serveur.Models.Theme")
                        .WithMany()
                        .HasForeignKey("themeid");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Mot", b =>
                {
                    b.HasOne("FindMyName_Serveur.Models.Reponse")
                        .WithMany()
                        .HasForeignKey("Reponseid");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Partie", b =>
                {
                    b.HasOne("FindMyName_Serveur.Models.Utilisateur")
                        .WithMany()
                        .HasForeignKey("j1id");

                    b.HasOne("FindMyName_Serveur.Models.Utilisateur")
                        .WithMany()
                        .HasForeignKey("j2id");
                });

            modelBuilder.Entity("FindMyName_Serveur.Models.Reponse", b =>
                {
                    b.HasOne("FindMyName_Serveur.Models.Theme")
                        .WithMany()
                        .HasForeignKey("Themeid");
                });
        }
    }
}
