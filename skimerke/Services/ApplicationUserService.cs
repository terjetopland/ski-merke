using Microsoft.AspNetCore.Identity;
using skimerke.Data;
using skimerke.Models;

namespace skimerke.Services;

public class ApplicationUserService(ApplicationDbContext applicationDbContext, UserManager<ApplicationUser> userManager) : IApplicationUserService
{
    public async Task<ApplicationUser> UploadProfileImage(ApplicationUser applicationUser, IFormFile imageFile)
    {
        // Check if image file is not null and size is greater than 0
        if (imageFile != null && imageFile.Length > 0)
        {
            // Generate unique file name
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);

            // Path to save the image
            var imagePath = Path.Combine("wwwroot", "images", "profile", fileName);

            // Save image to wwwroot/images/profile directory
            using (var stream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(stream);
            }

            // Update the user's profile image property
            applicationUser.ProfileImage = fileName;

            // Update user in database
            await userManager.UpdateAsync(applicationUser);

            return applicationUser;
        }

        return null; // If no image is uploaded
    }

}