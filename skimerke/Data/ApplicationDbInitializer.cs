using System;
using System.Linq;
using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using skimerke.Models;

namespace skimerke.Data
{
    public static class ApplicationDbContextInitializer
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicationDbContext(
                       serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>(),
                       serviceProvider.GetRequiredService<IOptions<OperationalStoreOptions>>()))
            {
                
                // Ensure that the database deleted on start
                context.Database.EnsureDeleted();
                
                // Ensure that the database is created
                context.Database.EnsureCreated();

                // Check if there is already data in the Requirements table
                if (context.Requirements.Any())
                {
                    // If there is already data, do nothing
                    return;
                }

                // Add some sample data to the Requirements table
                context.Requirements.AddRange(
                    
                    new Requirement { Minutes = 21, Gender = "Male", Distance = 3, Age = "13-14" },
                    new Requirement { Minutes = 29, Gender = "Male", Distance = 5, Age = "15-16" },
                    new Requirement { Minutes = 48, Gender = "Male", Distance = 10, Age = "19-34" },
                    new Requirement { Minutes = 55, Gender = "Male", Distance = 10, Age = "35-49" },
                    new Requirement { Minutes = 21, Gender = "Female", Distance = 3, Age = "13-14" },
                    new Requirement { Minutes = 35, Gender = "Female", Distance = 5, Age = "15-16" },
                    new Requirement { Minutes = 33, Gender = "Female", Distance = 5, Age = "19-34" },
                    new Requirement { Minutes = 38, Gender = "Female", Distance = 5, Age = "35-49" }
                );

                // Save changes to the database
                context.SaveChanges();
            }
        }
    }
}