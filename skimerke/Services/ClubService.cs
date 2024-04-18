using Microsoft.EntityFrameworkCore;
using skimerke.Data;
using skimerke.Models;

namespace skimerke.Services;

public class ClubService(ApplicationDbContext context) : IClubService
{
    public async Task<IEnumerable<Club>> GetAllClubs()
    {
        var clubs =  await context.Clubs.ToListAsync();
        return clubs;
    }

    public async Task<Club?> GetClubById(int id)
    {
        var club = await context.Clubs.FirstOrDefaultAsync(club => club.Id == id);
        return club;
    }
}