using System.Security.Claims;
using Duende.IdentityServer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using skimerke.Models;
using skimerke.Services;


namespace skimerke.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonController(IPersonService personService, UserManager<ApplicationUser> userManager) : ControllerBase
{
    [Authorize]
    [HttpPost]
    public async Task<IActionResult> AddPerson(
        Person person)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest("Not valid model");
        }
        
        // Retrieve the current user
        // var user = await userManager.GetUserAsync(HttpContext.User);
        // if (user == null) return BadRequest("No user found");
        
        // var userId = user?.Id;
        // if (userId == null) return BadRequest("No user Id found");
        
        var addPerson = await personService.AddPerson(person);
        if (addPerson == null)
        {
            return BadRequest("failed to add person");
        }
        
        return Ok(addPerson);

    }
}