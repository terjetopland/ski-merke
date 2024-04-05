using skimerke.Models;

namespace skimerke.Services;

public interface IPersonService
{
    Task<Person> AddPerson(string userId, Person addedPerson);
    public ICollection<Person> GetPersons();
}