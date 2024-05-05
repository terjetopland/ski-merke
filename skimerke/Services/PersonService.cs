using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using skimerke.Data;
using skimerke.Models;

namespace skimerke.Services;

public class PersonService(ApplicationDbContext context) : IPersonService
{
    public async Task<Person> AddPerson(string userId, Person addedPerson)
    {
        var user = await context.Users.FindAsync(userId);

        if (user != null)
        {
            var person = new Person
            {
                FirstName = addedPerson.FirstName,
                LastName = addedPerson.LastName,
                Gender = addedPerson.Gender,
                DateOfBirth = addedPerson.DateOfBirth,
                ApplicationUserId = userId,
                ApplicationUser = user
            };

            context.Persons.Add(person);
            await context.SaveChangesAsync();

            return person;
        }

        return null;
    }

    public ICollection<Person> GetPersons()
    {
        throw new NotImplementedException();
    }

    public async Task<DateOnly?> GetPersonDateOfBirth(string userId)
    {
        var user = await context.Users
            .Include(u => u.Person)
            .FirstOrDefaultAsync(u => u.Id == userId);

        return user?.Person?.DateOfBirth;
    }

}