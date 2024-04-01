using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using skimerke.Models;
using skimerke.Services;

namespace skimerke.Controllers;

[ApiController]
[Route("[controller]")]
public class ApplicationUserController(IApplicationUserService applicationUserService,
    UserManager<ApplicationUser> userManager) : ControllerBase
{
    
    [HttpPost]
    public async Task<ActionResult> PostProfileImage([FromForm] IFormFile imageFile)
    {
        Console.WriteLine("controller first");
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return BadRequest("Failed to upload profile image.");
        
        
        var user = await userManager.FindByIdAsync(userId);

        if (user != null)
        {
            var updateUser = await applicationUserService.UploadProfileImage(user, imageFile);

            if (updateUser != null)
            {
                return Ok(updateUser);
            }
        }

        return BadRequest("Failed to upload profile image.");

    }
    
}