using System;
using System.Linq;
using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using skimerke.Models;

namespace skimerke.Data
{
    public static class ApplicationDbInitializer
    {
        public static void Initialize(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
                // Ensure that the database deleted on start
                context.Database.EnsureDeleted();
                
                // Ensure that the database is created
                context.Database.EnsureCreated();

                if (!userManager.Users.Any())
                {
                    
                    var user = new ApplicationUser
                        {
                            UserName = "test@test.com",
                            Email = "test@test.com",
                            EmailConfirmed = true,
                        };
                    
                    userManager.CreateAsync(user, "Test123.").Wait();
                    
                    // Create a new Person
                    var person = new Person
                    {
                        FirstName = "Test",
                        LastName = "Testesen",
                        DateOfBirth = new DateTime(1990, 1, 1),
                        Gender = PersonGender.Male.ToString(), 
                        ApplicationUserId = user.Id 
                    };

                    // Add the person to the context and save changes
                    context.Persons.Add(person);
                    context.SaveChanges();
                    
                }

                if (context.Requirements.Any()){return;}
                context.Requirements.AddRange(
                    
                    new Requirement { Minutes = 17, Gender = "Male", Distance = 2, LowerAge = 1, UpperAge = 10},
                    new Requirement { Minutes = 15, Gender = "Male", Distance = 2, LowerAge = 11, UpperAge = 12},
                    new Requirement { Minutes = 21, Gender = "Male", Distance = 3, LowerAge = 13, UpperAge = 14 },
                    new Requirement { Minutes = 29, Gender = "Male", Distance = 5, LowerAge = 15, UpperAge = 16},
                    new Requirement { Minutes = 54, Gender = "Male", Distance = 10, LowerAge = 17, UpperAge = 18},
                    new Requirement { Minutes = 48, Gender = "Male", Distance = 10, LowerAge = 19, UpperAge = 34},
                    new Requirement { Minutes = 55, Gender = "Male", Distance = 10, LowerAge = 35, UpperAge = 49 },
                    new Requirement { Minutes = 29, Gender = "Male", Distance = 5, LowerAge = 50, UpperAge = 59},
                    new Requirement { Minutes = 60, Gender = "Male", Distance = 10, LowerAge = 50, UpperAge = 59},
                    new Requirement { Minutes = 33, Gender = "Male", Distance = 5, LowerAge = 60, UpperAge = 64},
                    new Requirement { Minutes = 68, Gender = "Male", Distance = 10, LowerAge = 60, UpperAge = 64},
                    new Requirement { Minutes = 36, Gender = "Male", Distance = 5, LowerAge = 65, UpperAge = 69},
                    new Requirement { Minutes = 73, Gender = "Male", Distance = 10, LowerAge = 65, UpperAge = 69},
                    new Requirement { Minutes = 38, Gender = "Male", Distance = 5, LowerAge = 70, UpperAge = 74},
                    new Requirement { Minutes = 78, Gender = "Male", Distance = 10, LowerAge = 70, UpperAge = 74},
                    new Requirement { Minutes = 41, Gender = "Male", Distance = 5, LowerAge = 75, UpperAge = 200},
                    new Requirement { Minutes = 83, Gender = "Male", Distance = 10, LowerAge = 75, UpperAge = 200},
                    
                    new Requirement { Minutes = 17, Gender = "Female", Distance = 2, LowerAge = 1, UpperAge = 10},
                    new Requirement { Minutes = 15, Gender = "Female", Distance = 2, LowerAge = 11, UpperAge = 12},
                    new Requirement { Minutes = 21, Gender = "Female", Distance = 3, LowerAge = 13, UpperAge = 14 },
                    new Requirement { Minutes = 35, Gender = "Female", Distance = 5, LowerAge = 15, UpperAge = 16},
                    new Requirement { Minutes = 34, Gender = "Female", Distance = 10, LowerAge = 17, UpperAge = 18},
                    new Requirement { Minutes = 33, Gender = "Female", Distance = 5, LowerAge = 19, UpperAge = 34},
                    new Requirement { Minutes = 38, Gender = "Female", Distance = 5, LowerAge = 35, UpperAge = 49 },
                    new Requirement { Minutes = 21, Gender = "Female", Distance = 2.5F, LowerAge = 50, UpperAge = 59},
                    new Requirement { Minutes = 43, Gender = "Female", Distance = 5, LowerAge = 50, UpperAge = 59},
                    new Requirement { Minutes = 25, Gender = "Female", Distance = 2.5F, LowerAge = 60, UpperAge = 64},
                    new Requirement { Minutes = 51, Gender = "Female", Distance = 5, LowerAge = 60, UpperAge = 64},
                    new Requirement { Minutes = 27, Gender = "Female", Distance = 2.5F, LowerAge = 65, UpperAge = 69},
                    new Requirement { Minutes = 56, Gender = "Female", Distance = 5, LowerAge = 65, UpperAge = 69},
                    new Requirement { Minutes = 29, Gender = "Female", Distance = 2.5F, LowerAge = 70, UpperAge = 74},
                    new Requirement { Minutes = 61, Gender = "Female", Distance = 5, LowerAge = 70, UpperAge = 74},
                    new Requirement { Minutes = 32, Gender = "Female", Distance = 2.5F, LowerAge = 75, UpperAge = 200},
                    new Requirement { Minutes = 66, Gender = "Female", Distance = 5, LowerAge = 75, UpperAge = 200}
                    
                );

                // Save changes to the database
                context.SaveChanges();
            
        }
    }
}