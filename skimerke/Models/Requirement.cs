using System.ComponentModel.DataAnnotations;

namespace skimerke.Models;

public class Requirement
{
    public int Id { get; set; }
    public int Minutes { get; set; }
    [StringLength(15)]
    public required string Gender { get; set; }
    public float Distance { get; set; }
    public int LowerAge { get; set; }
    public int UpperAge { get; set; }
}