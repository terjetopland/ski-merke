using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using skimerke.Models;
using skimerke.Services;

namespace skimerke.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonController(IPersonService personService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> AddPerson(
        string firstName, string lastName, PersonGender gender, DateTime dateOfBirth)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        
        // Retrieve the current user's ID
        var userId = User.FindFirst("sub")?.Value;

        if (userId != null)
        {
            var result = await personService.AddPerson(userId, firstName, lastName, gender, dateOfBirth);

            return Ok(result);
        }

        return BadRequest();

    }
}