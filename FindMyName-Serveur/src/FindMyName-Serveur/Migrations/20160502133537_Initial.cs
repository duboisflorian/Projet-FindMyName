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
                name: "ListeContact",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ListeContact", x => x.id);
                });
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
                name: "Contact",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    ListeContactid = table.Column<int>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    photo = table.Column<string>(nullable: true),
                    @type = table.Column<string>(name: "type", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contact", x => x.id);
                    table.ForeignKey(
                        name: "FK_Contact_ListeContact_ListeContactid",
                        column: x => x.ListeContactid,
                        principalTable: "ListeContact",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable("Contact");
            migrationBuilder.DropTable("Theme");
            migrationBuilder.DropTable("Utilisateur");
            migrationBuilder.DropTable("ListeContact");
        }
    }
}
