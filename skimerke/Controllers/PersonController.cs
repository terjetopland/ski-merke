using System.Security.Claims;
using Duende.IdentityServer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using skimerke.Models;
using skimerke.Services;


namespace skimerke.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonController(IPersonService personService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> AddPerson(
        Person person)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest("Not valid model");
        }
        
        // Retrieve the current user's ID
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        
        if (userId == null) return BadRequest("No user Id found");
        
        var addPerson = await personService.AddPerson(userId, person);
        if (addPerson == null)
        {
            return BadRequest("failed to add person");
        }
        
        return Ok(addPerson);

    }
}