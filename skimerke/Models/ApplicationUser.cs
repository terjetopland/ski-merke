using Microsoft.AspNetCore.Identity;

namespace skimerke.Models;

public class ApplicationUser : IdentityUser
{
    public Person? Person { get; set; }
}

