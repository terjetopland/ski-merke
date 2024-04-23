using Microsoft.EntityFrameworkCore;
using skimerke.Data;
using skimerke.Models;

namespace skimerke.Services;

public class ClubService(ApplicationDbContext context) : IClubService
{
    public async Task<Club> AddClub(Club addedClub)
    {
        var clubExists = await context.Clubs.AnyAsync(c => c.OrganizationNumberId == addedClub.OrganizationNumberId);
        if (clubExists)
        {
            throw new ArgumentException($"Club with {addedClub.OrganizationNumberId} already exists");
        }

        var club = new Club
        {
            ClubName = addedClub.ClubName,
            Address = addedClub.Address,
            City = addedClub.City,
            PostalCode = addedClub.PostalCode,
            EMail = addedClub.EMail,
            OrganizationNumberId = addedClub.OrganizationNumberId
        };

        context.Clubs.Add(club);
        await context.SaveChangesAsync();

        return club;
    }

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