using skimerke.Models;

namespace skimerke.Services;

public interface IRequirementService
{
    IEnumerable<Requirement> GetAll();
}