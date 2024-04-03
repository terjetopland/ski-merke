using System.ComponentModel.DataAnnotations;

namespace skimerke.Models;

public enum PersonGender
{
    [Display(Name = "Male")]
    Male, 
    [Display(Name = "Female")]
    Female, 
    [Display(Name = "Other")]
    Other, 
    
}
public class Person
{
    public int Id { get; set; }

    [EnumDataType(typeof(PersonGender))] 
    [Display(Name = "Gender")]
    public string Gender { get; set; } = PersonGender.Other.ToString();

    [StringLength(100, ErrorMessage = "Cannot have more than 100 chars")]
    [Display(Name = "First name")]
    public string FirstName { get; set; } = string.Empty;

    [StringLength(100, ErrorMessage = "Cannot have more than 100 chars")]
    [Display(Name = "Last name")]
    public string LastName { get; set; } = string.Empty;
    
    [DataType(DataType.Date)]
    [Display(Name = "Date of birth")]
    public DateTime DateOfBirth { get; set; } = DateTime.Now.Date;
    
    // Foreign key to ApplicationUser
    public string? ApplicationUserId { get; set; }
    public ApplicationUser ApplicationUser { get; set; }
}
