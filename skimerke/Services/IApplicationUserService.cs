using skimerke.Models;

namespace skimerke.Services;

public interface IApplicationUserService
{
    Task<ApplicationUser> UploadProfileImage(ApplicationUser applicationUser, IFormFile imageFile);
}