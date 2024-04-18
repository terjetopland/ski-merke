using Microsoft.AspNetCore.Http.HttpResults;
using skimerke.Data;
using skimerke.Models;

namespace skimerke.Services;

public class ApplicationUserService(ApplicationDbContext context) : IApplicationUserService
{
    public async Task<bool> AddClub(string userId, int clubId)
    {
        var user = await context.Users.FindAsync(userId);
        var club = await context.Clubs.FindAsync(clubId);

        if (user == null) throw new ArgumentException("User not found.", nameof(userId));;
        if (club == null) throw new ArgumentException("no club with this id was found", nameof(clubId));
        
        user.Club = club;
        user.ClubId = club.Id;
        await context.SaveChangesAsync();

        return true;

    }
}