using skimerke.Models;

namespace skimerke.Services;

public interface IRequirementService
{
    Task<IEnumerable<Requirement>> GetAll();
}