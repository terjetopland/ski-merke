using Microsoft.AspNetCore.Identity;
using skimerke.Data;
using skimerke.Models;

namespace skimerke.Services;

public class PersonService(ApplicationDbContext context) : IPersonService
{
    public async Task<Person> AddPerson(string userId, string firstName, string lastName, PersonGender gender, DateTime dateOfBirth)
    {
        var user = await context.Users.FindAsync(userId);

        if (user != null)
        {
            var person = new Person
            {
                FirstName = firstName,
                LastName = lastName,
                Gender = gender.ToString(),
                DateOfBirth = dateOfBirth,
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
}