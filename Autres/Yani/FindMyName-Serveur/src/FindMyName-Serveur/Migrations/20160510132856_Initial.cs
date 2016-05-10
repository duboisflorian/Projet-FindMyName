using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;
using Microsoft.Data.Entity.Metadata;

namespace FindMyNameServeur.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Theme",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    done = table.Column<bool>(nullable: false),
                    photo = table.Column<string>(nullable: true),
                    text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Theme", x => x.id);
                });
            migrationBuilder.CreateTable(
                name: "Utilisateur",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    mail = table.Column<string>(nullable: true),
                    meilleurScore = table.Column<int>(nullable: false),
                    name = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true),
                    pays = table.Column<string>(nullable: true),
                    photo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Utilisateur", x => x.id);
                });
            migrationBuilder.CreateTable(
                name: "Reponse",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Themeid = table.Column<int>(nullable: true),
                    done = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reponse", x => x.id);
                    table.ForeignKey(
                        name: "FK_Reponse_Theme_Themeid",
                        column: x => x.Themeid,
                        principalTable: "Theme",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });
            migrationBuilder.CreateTable(
                name: "Contact",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    id_contact = table.Column<int>(nullable: false),
                    @type = table.Column<string>(name: "type", nullable: true),
                    userid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contact", x => x.id);
                    table.ForeignKey(
                        name: "FK_Contact_Utilisateur_userid",
                        column: x => x.userid,
                        principalTable: "Utilisateur",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });
            migrationBuilder.CreateTable(
                name: "Partie",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    j1id = table.Column<int>(nullable: true),
                    j2id = table.Column<int>(nullable: true),
                    player = table.Column<int>(nullable: false),
                    s1 = table.Column<int>(nullable: false),
                    s2 = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Partie", x => x.id);
                    table.ForeignKey(
                        name: "FK_Partie_Utilisateur_j1id",
                        column: x => x.j1id,
                        principalTable: "Utilisateur",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Partie_Utilisateur_j2id",
                        column: x => x.j2id,
                        principalTable: "Utilisateur",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });
            migrationBuilder.CreateTable(
                name: "Mot",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Reponseid = table.Column<int>(nullable: true),
                    text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mot", x => x.id);
                    table.ForeignKey(
                        name: "FK_Mot_Reponse_Reponseid",
                        column: x => x.Reponseid,
                        principalTable: "Reponse",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });
            migrationBuilder.CreateTable(
                name: "Manche",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Partieid = table.Column<int>(nullable: true),
                    s1 = table.Column<int>(nullable: false),
                    s2 = table.Column<int>(nullable: false),
                    themeid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Manche", x => x.id);
                    table.ForeignKey(
                        name: "FK_Manche_Partie_Partieid",
                        column: x => x.Partieid,
                        principalTable: "Partie",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Manche_Theme_themeid",
                        column: x => x.themeid,
                        principalTable: "Theme",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable("Contact");
            migrationBuilder.DropTable("Manche");
            migrationBuilder.DropTable("Mot");
            migrationBuilder.DropTable("Partie");
            migrationBuilder.DropTable("Reponse");
            migrationBuilder.DropTable("Utilisateur");
            migrationBuilder.DropTable("Theme");
        }
    }
}
