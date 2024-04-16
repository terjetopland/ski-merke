using Microsoft.AspNetCore.Mvc;
using skimerke.Models;
using skimerke.Services;

namespace skimerke.Controllers;

[ApiController]
[Route("[controller]")]
public class ClubController(IClubService clubService) : ControllerBase
{
    [HttpGet]
    public async Task<IEnumerable<Club>> GetAllClubs()
    {
        var clubs = await clubService.GetAllClubs();
        return clubs;
    }
}