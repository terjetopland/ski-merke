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
    
    public IEnumerable<Requirement> GetAll()
    {
        var result = _context.Requirements.ToList();
        return result;
    }
}