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
}