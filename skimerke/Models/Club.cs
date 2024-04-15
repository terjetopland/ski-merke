using System.ComponentModel.DataAnnotations;

namespace skimerke.Models;

public class Club
{
    public int Id { get; set; }
    
    [StringLength(150, ErrorMessage = "Cannot have more than 150 chars")]
    [Display(Name = "Club name")]
    [Required]
    public string ClubName { get; set; } = string.Empty;
    
    [StringLength(100, ErrorMessage = "Cannot have more than 100 chars")]
    [Display(Name = "Address")]
    [Required]
    public string Address { get; set; } = string.Empty;
    
    [Range(0, 9999)]
    [Required]
    public int PostalCode { get; set; }
    
    [StringLength(100, ErrorMessage = "Cannot have more than 100 chars")]
    [Display(Name = "Address")]
    [Required]
    public string City { get; set; } = string.Empty;
    
    [StringLength(14, MinimumLength = 9)]
    [Required]
    public string OrganizationNumberId { get; set; } = string.Empty;
    
    [DataType(DataType.EmailAddress, ErrorMessage = "Not valid email format")]
    [StringLength(100, ErrorMessage = "Cannot have more than 100 chars")]
    [Required]
    public string EMail { get; set; } = string.Empty;


    public ICollection<ApplicationUser>? ApplicationUsers { get; set; } = new List<ApplicationUser>();
}