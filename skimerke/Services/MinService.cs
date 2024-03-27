using Microsoft.EntityFrameworkCore;
using skimerke.Data;
using skimerke.Models;

namespace skimerke.Services;
public interface IMinService
{
    string GetMe();
    Task<int> GetNumberOfExampleEntities();
    Task<ExampleEntity> AddExampleEntity(ExampleEntity exampleEntity);
}

public sealed class MinService(ApplicationDbContext applicationDbContext) : IMinService
{
    // tjenestene leverer det andre deler av applikasjonen trenger
    public string GetMe()
    {
        return "Hei fra MinService!";
    }
    
    public async Task<int> GetNumberOfExampleEntities()
    {
        return await applicationDbContext.ExampleEntities.CountAsync();
    }

    public async Task<ExampleEntity> AddExampleEntity(ExampleEntity exampleEntity)
    {
        await applicationDbContext.ExampleEntities.AddAsync(exampleEntity);
        await applicationDbContext.SaveChangesAsync();
        return exampleEntity;
    }
}