using skimerke.Models;

namespace skimerke.Services;

public interface IPersonService
{
    Task<Person> AddPerson(Person addedPerson);
    public ICollection<Person> GetPersons();
}