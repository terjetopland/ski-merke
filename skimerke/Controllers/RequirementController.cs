using Microsoft.AspNetCore.Mvc;
using skimerke.Models;
using skimerke.Services;

namespace skimerke.Controllers;

[ApiController]
[Route("[controller]")]
public class RequirementController(IRequirementService service) : ControllerBase
{
    [HttpGet]
    public async Task<IEnumerable<Requirement>> Get()
    {
        // Call the repository method to retrieve requirements
        var data = await service.GetAll();
        return data;
    }
}