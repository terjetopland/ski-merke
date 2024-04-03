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
                    context.SaveChanges();
                    
                }

                if (context.Requirements.Any()){return;}
                context.Requirements.AddRange(
                    
                    new Requirement { Minutes = 17, Gender = "Male", Distance = 2, Lower_age = 1, Upper_age = 10},
                    new Requirement { Minutes = 15, Gender = "Male", Distance = 2, Lower_age = 11, Upper_age = 12},
                    new Requirement { Minutes = 21, Gender = "Male", Distance = 3, Lower_age = 13, Upper_age = 14 },
                    new Requirement { Minutes = 29, Gender = "Male", Distance = 5, Lower_age = 15, Upper_age = 16},
                    new Requirement { Minutes = 54, Gender = "Male", Distance = 10, Lower_age = 17, Upper_age = 18},
                    new Requirement { Minutes = 48, Gender = "Male", Distance = 10, Lower_age = 19, Upper_age = 34},
                    new Requirement { Minutes = 55, Gender = "Male", Distance = 10, Lower_age = 35, Upper_age = 49 },
                    new Requirement { Minutes = 29, Gender = "Male", Distance = 5, Lower_age = 50, Upper_age = 59},
                    new Requirement { Minutes = 60, Gender = "Male", Distance = 10, Lower_age = 50, Upper_age = 59},
                    new Requirement { Minutes = 33, Gender = "Male", Distance = 5, Lower_age = 60, Upper_age = 64},
                    new Requirement { Minutes = 68, Gender = "Male", Distance = 10, Lower_age = 60, Upper_age = 64},
                    new Requirement { Minutes = 36, Gender = "Male", Distance = 5, Lower_age = 65, Upper_age = 69},
                    new Requirement { Minutes = 73, Gender = "Male", Distance = 10, Lower_age = 65, Upper_age = 69},
                    new Requirement { Minutes = 38, Gender = "Male", Distance = 5, Lower_age = 70, Upper_age = 74},
                    new Requirement { Minutes = 78, Gender = "Male", Distance = 10, Lower_age = 70, Upper_age = 74},
                    new Requirement { Minutes = 41, Gender = "Male", Distance = 5, Lower_age = 75, Upper_age = 200},
                    new Requirement { Minutes = 83, Gender = "Male", Distance = 10, Lower_age = 75, Upper_age = 200},
                    
                    new Requirement { Minutes = 17, Gender = "Female", Distance = 2, Lower_age = 1, Upper_age = 10},
                    new Requirement { Minutes = 15, Gender = "Female", Distance = 2, Lower_age = 11, Upper_age = 12},
                    new Requirement { Minutes = 21, Gender = "Female", Distance = 3, Lower_age = 13, Upper_age = 14 },
                    new Requirement { Minutes = 35, Gender = "Female", Distance = 5, Lower_age = 15, Upper_age = 16},
                    new Requirement { Minutes = 34, Gender = "Female", Distance = 10, Lower_age = 17, Upper_age = 18},
                    new Requirement { Minutes = 33, Gender = "Female", Distance = 5, Lower_age = 19, Upper_age = 34},
                    new Requirement { Minutes = 38, Gender = "Female", Distance = 5, Lower_age = 35, Upper_age = 49 },
                    new Requirement { Minutes = 21, Gender = "Female", Distance = 2.5F, Lower_age = 50, Upper_age = 59},
                    new Requirement { Minutes = 43, Gender = "Female", Distance = 5, Lower_age = 50, Upper_age = 59},
                    new Requirement { Minutes = 25, Gender = "Female", Distance = 2.5F, Lower_age = 60, Upper_age = 64},
                    new Requirement { Minutes = 51, Gender = "Female", Distance = 5, Lower_age = 60, Upper_age = 64},
                    new Requirement { Minutes = 27, Gender = "Female", Distance = 2.5F, Lower_age = 65, Upper_age = 69},
                    new Requirement { Minutes = 56, Gender = "Female", Distance = 5, Lower_age = 65, Upper_age = 69},
                    new Requirement { Minutes = 29, Gender = "Female", Distance = 2.5F, Lower_age = 70, Upper_age = 74},
                    new Requirement { Minutes = 61, Gender = "Female", Distance = 5, Lower_age = 70, Upper_age = 74},
                    new Requirement { Minutes = 32, Gender = "Female", Distance = 2.5F, Lower_age = 75, Upper_age = 200},
                    new Requirement { Minutes = 66, Gender = "Female", Distance = 5, Lower_age = 75, Upper_age = 200}
                    
                );

                // Save changes to the database
                context.SaveChanges();
            
        }
    }
}