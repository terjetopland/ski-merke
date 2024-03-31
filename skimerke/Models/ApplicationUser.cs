using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace skimerke.Models;

public class ApplicationUser : IdentityUser
{
    [StringLength(maximumLength: 100)] public string ProfileImage { get; set; } = string.Empty;
}

