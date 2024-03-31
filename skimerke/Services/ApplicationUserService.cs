using Microsoft.AspNetCore.Identity;
using skimerke.Data;
using skimerke.Models;

namespace skimerke.Services;

public class ApplicationUserService(ApplicationDbContext applicationDbContext, UserManager<ApplicationUser> userManager) : IApplicationUserService
{
    // public async Task<ApplicationUser> UploadProfileImage(ApplicationUser applicationUser, IFormFile imageFile)
    // {
    //     if (imageFile != null && imageFile.Length > 0)
    //     {
    //         var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
    //     }
    //     
    //     return null;
    // }
    public Task<ApplicationUser> UploadProfileImage(ApplicationUser applicationUser, IFormFile imageFile)
    {
        throw new NotImplementedException();
    }
}