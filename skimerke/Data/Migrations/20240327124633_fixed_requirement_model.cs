using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace skimerke.Data.Migrations
{
    /// <inheritdoc />
    public partial class fixed_requirement_model : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Requirements");

            migrationBuilder.DropColumn(
                name: "test",
                table: "Requirements");

            migrationBuilder.AddColumn<int>(
                name: "Lower_age",
                table: "Requirements",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Upper_age",
                table: "Requirements",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Lower_age",
                table: "Requirements");

            migrationBuilder.DropColumn(
                name: "Upper_age",
                table: "Requirements");

            migrationBuilder.AddColumn<string>(
                name: "Age",
                table: "Requirements",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "test",
                table: "Requirements",
                type: "TEXT",
                nullable: true);
        }
    }
}
