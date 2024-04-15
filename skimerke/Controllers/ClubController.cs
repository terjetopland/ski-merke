using Microsoft.AspNetCore.Mvc;
using skimerke.Models;
using skimerke.Services;

namespace skimerke.Controllers;

public class ClubController(ClubService clubService)
{
    [HttpGet]
    public async Task<IEnumerable<Club>> GetAllClubs()
    {
        var clubs = await clubService.GetAllClubs();
        return clubs;
    }
}