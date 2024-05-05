using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace skimerke.Data.Migrations
{
    /// <inheritdoc />
    public partial class dateofbirth_dateonly : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Upper_age",
                table: "Requirements",
                newName: "UpperAge");

            migrationBuilder.RenameColumn(
                name: "Lower_age",
                table: "Requirements",
                newName: "LowerAge");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpperAge",
                table: "Requirements",
                newName: "Upper_age");

            migrationBuilder.RenameColumn(
                name: "LowerAge",
                table: "Requirements",
                newName: "Lower_age");
        }
    }
}
