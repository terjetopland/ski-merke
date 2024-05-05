using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using skimerke.Dtos;
using skimerke.Services;

namespace skimerke.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class UserInformationController(IUserInformationService userInformationService) : ControllerBase
{
   
    [HttpGet]
    public async Task<ActionResult<UserDetailsDto>> GetUserInformation()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var userDetails = await  userInformationService.GetUserDetails(userId);
        return Ok(userDetails);
    }

    [HttpPut]
    public async Task<IActionResult> PutUserInformation([FromBody] UserDetailsDto userDetails)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier)!;
        await userInformationService.UpdateUserDetails(userId, userDetails);

        return Ok();
    }
}