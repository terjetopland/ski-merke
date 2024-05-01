using Microsoft.EntityFrameworkCore;
using skimerke.Data;
using skimerke.Models;

namespace skimerke.Services;

public class RequirementService(ApplicationDbContext context) : IRequirementService
{
    public async Task<IEnumerable<Requirement>> GetAll()
    {
        var result = await context.Requirements.ToListAsync();
        return result;
    }
}