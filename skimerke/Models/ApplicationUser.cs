using Microsoft.AspNetCore.Identity;

namespace skimerke.Models;

public class ApplicationUser : IdentityUser
{
    public Person? Person { get; set; }
    
    public int? ClubId { get; set; }
    public Club?  Club { get; set; }
}

