using skimerke.Models;

namespace skimerke.Services;

public interface IClubService
{
    Task<Club> AddClub(Club addedClub);
    Task<IEnumerable<Club>> GetAllClubs();
    Task<Club?> GetClubById(int id);


}