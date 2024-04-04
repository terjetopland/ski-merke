using skimerke.Models;

namespace skimerke.Services;

public interface IPersonService
{
    Task<Person> AddPerson(string userId, string firstName, string lastName, PersonGender gender, DateTime dateOfBirth);
    public ICollection<Person> GetPersons();
}