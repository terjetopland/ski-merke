using Microsoft.EntityFrameworkCore;
using skimerke.Data;
using skimerke.Dtos;
using skimerke.Models;

namespace skimerke.Services;

public interface IUserInformationService
{
    Task<UserDetailsDto> GetUserDetails(string? userId);
    Task UpdateUserDetails(string userId, UserDetailsDto updatedUserDetails);
}

public class UserInformationService(ApplicationDbContext context) : IUserInformationService
{
    public async Task<UserDetailsDto> GetUserDetails(string? userId)
    {
        var user = await context.ApplicationUsers
            .Include(a => a.Person)
            .FirstOrDefaultAsync(a => a.Id == userId);

        if (user is null)
        {
            throw new Exception("User not found.");
        }
        return user.ToUserDetailsDto();
    }

    public async Task UpdateUserDetails(string userId, UserDetailsDto updatedUserDetails)
    {
        var updatedUser = updatedUserDetails.ToApplicationUser();
        if (updatedUser.Person is null) // Nothing to update
        {
            return;
        }
        
        var user = await context.ApplicationUsers
            .Include(a => a.Person)
            .FirstOrDefaultAsync(a => a.Id == userId);
        
        if (user is null)
        {
            throw new Exception("User not found.");
        }

        if (user.Person is null) // user details does not exists
        {
           await context.Persons.AddAsync(updatedUser.Person);
        }
        else
        {
           context.Persons.Update(updatedUser.Person);
        }

        await context.SaveChangesAsync();
    }
}

// Mapping extension
public static class ApplicationUserExtension
{    
     public static UserDetailsDto ToUserDetailsDto(this ApplicationUser user)
     {
        return new UserDetailsDto
        (
            UserId: user.Id,
            FirstName: user.Person?.FirstName,
            LastName: user.Person?.LastName,
            Email: user.Email,
            DateOfBirth: user.Person?.DateOfBirth,
            Gender: user.Person?.Gender
        );
     }
     
     public static ApplicationUser ToApplicationUser(this UserDetailsDto dto)
     {
         return new ApplicationUser
         {
             Id = dto.UserId ?? string.Empty,
             Email = dto.Email,
             Person = new Person
             {
                 FirstName = dto.FirstName,
                 LastName = dto.LastName,
                 DateOfBirth = dto.DateOfBirth,
                 Gender = dto.Gender
             }
         };
     }
}