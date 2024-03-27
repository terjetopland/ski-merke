using Microsoft.EntityFrameworkCore;
using skimerke.Data;
using skimerke.Models;
namespace skimerke.Services;



public class RequirementService : IRequirementService
{
    private readonly ApplicationDbContext _context;

    public RequirementService(ApplicationDbContext context)
    {
        _context = context; 
    }
    
    public async Task<IEnumerable<Requirement>> GetAll()
    {
        var result = await _context.Requirements.ToListAsync();
        return result;
    }
}