using System.Security.Claims;
using Duende.IdentityServer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using skimerke.Models;
using skimerke.Services;


namespace skimerke.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class PersonController(IPersonService personService, UserManager<ApplicationUser> userManager) : ControllerBase
{
   
    [HttpPost]
    public async Task<IActionResult> AddPerson(
        Person person)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest("Not valid model");
        }
        
        // Retrieve the current user with the token sent.
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null) return BadRequest("No user Id found");
        
        var addPerson = await personService.AddPerson(userId, person);
        if (addPerson == null)
        {
            return BadRequest("failed to add person");
        }
        
        return Ok(addPerson);

    }

    [HttpGet("dateOfBirth/")]
    public async Task<IActionResult> GetPersonDateOfBirth()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null)
            return BadRequest("No user Id found");

        var dateOfBirth = await personService.GetPersonDateOfBirth(userId);
        if (dateOfBirth == null)
            return NotFound("Date of birth not found");

        return Ok(dateOfBirth);
    }
}