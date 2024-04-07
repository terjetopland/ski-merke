using Microsoft.AspNetCore.Identity;
using skimerke.Data;
using skimerke.Models;

namespace skimerke.Services;

public class PersonService(ApplicationDbContext context) : IPersonService
{
    public async Task<Person> AddPerson(Person addedPerson)
    {
        // var user = await context.Users.FindAsync(userId);

        // if (user != null)
        // {
            var person = new Person
            {
                FirstName = addedPerson.FirstName,
                LastName = addedPerson.LastName,
                Gender = addedPerson.Gender,
                DateOfBirth = addedPerson.DateOfBirth,
                // ApplicationUserId = userId,
                // ApplicationUser = user
            };

            context.Persons.Add(person);
            await context.SaveChangesAsync();

            return person;
        }

    public ICollection<Person> GetPersons()
    {
        throw new NotImplementedException();
    }
}