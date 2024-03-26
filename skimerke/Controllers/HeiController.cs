using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using skimerke.Models;
using skimerke.Services;

namespace skimerke.Controllers;

// [Authorize] dersom endepunktet krever innlogging
[ApiController]
[Route("[controller]")]
public class HeiController( IMinService minService ) : ControllerBase
{
    [HttpGet("number-of-rows")] // Endepunktet blir /hei/number-of-rows
    public async Task<NumberOfRowsResponse> GetNumberOfRows()
    {
        return new NumberOfRowsResponse
        {
            NumberOfRows = await minService.GetNumberOfExampleEntities()
        };
    }
    
    [HttpGet]
    public string GetMe()
    {
        return "Hei fra HeiController!";
    }
    
    [HttpPost] 
    public async Task<ActionResult> PostExampleEntity(ExampleEntity exampleEntity)
    {
        await minService.AddExampleEntity(exampleEntity);
        return Ok();
    }
    
    
}

// Dette er en klasse som brukes for å sende antall rader i databasen som svar på en forespørsel
// Burde vært i en egen fil
public record NumberOfRowsResponse
{
    public int NumberOfRows { get; set; } = -1;
}