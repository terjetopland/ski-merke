using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using skimerke.Models;
using skimerke.Services;

namespace skimerke.Controllers;

[ApiController]
[Route("[controller]")]
public class ClubController(IClubService clubService) : ControllerBase
{

    [HttpPost]
    public async Task<IActionResult> AddClub()
    {
        return null;
    }
    [HttpGet]
    public async Task<ActionResult<List<Club>>> GetAllClubs()
    {
        var clubs = await clubService.GetAllClubs();
        return Ok(clubs);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Club>> GetClubById(int id)
    {
        var club = await clubService.GetClubById(id);
        if (club == null) return BadRequest("No club with the id was found");
        
        return Ok(club);
    }
}