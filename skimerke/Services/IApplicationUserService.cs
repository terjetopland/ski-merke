using skimerke.Models;

namespace skimerke.Services;

public interface IApplicationUserService
{
    Task<bool> AddClub(string userId, int clubId);
}