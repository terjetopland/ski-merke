using skimerke.Models;
namespace skimerke.Data;

public class ApplicationDbInitializer
{
    public static void Initialize(ApplicationDbContext db)
    {
        db.Database.EnsureDeleted();
        db.Database.EnsureCreated();

         var exampleEntity = new[]
       {
           // new ExampleEntity("Yeah!", "THis is how it could be done"),
           // new ExampleEntity("Yeah2!", "THis is how it could be done 2")
           new ExampleEntity
           {
               Name = "hello 1",
               Description = "descript 1"
           },
           new ExampleEntity
           {
               Name = "hello 2",
               Description = "descript 2"
           },
           
        };
         db.ExampleEntities.AddRange(exampleEntity);
        

        db.SaveChanges();
    }
}






    
    
