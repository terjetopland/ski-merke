using skimerke.Models;

namespace skimerke.Services;

public interface IClubService
{
    Task<IEnumerable<Club>> GetAllClubs();
}