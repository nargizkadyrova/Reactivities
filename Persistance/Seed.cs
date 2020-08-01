using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Domain;
using Activity = Domain.Activity;

namespace Persistance
{
    public class Seed
    {
        public static void SeedData(DataContext dataContext)
        {
            if (!dataContext.Activities.Any())
            {
                var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "Jazz workshop and jam session",
                        Date = DateTime.Now.AddMonths(-2),
                        Description = "Students and music lovers! February 28 20:00, meeting place - \"Muzkafe\". We are waiting for you for a master class and jam session! Come with your instrument or just have a delicious dinner. Share this great news with the creative intelligentsia!",
                        Category = "music",
                        City = "Almaty",
                        Venue = "Muzcafe, Abai Ave. 117",
                    },
                    new Activity
                    {
                        Title = "Presentation of the book",
                        Date = DateTime.Now.AddMonths(-1),
                        Description = "The program includes a presentation of a book, tasting of Chilean wines and a conversation about one's own and another's in poetry.",
                        Category = "culture",
                        City = "Almaty",
                        Venue = "Bar \"Bottle\", st. Furmanova 130",
                    },
                    new Activity
                    {
                        Title = "Creative evening ART rabble on Broadway",
                        Date = DateTime.Now.AddMonths(1),
                        Description = "For five hours, participants will create illustrations in front of the guests of the event and will give you the opportunity to create your own masterpiece together with the artists",
                        Category = "culture",
                        City = "Almaty",
                        Venue = "TimeCafe on Mira, st. Zheltoksan 144",
                    },
                    new Activity
                    {
                        Title = "Master class on making pizza and milkshake",
                        Date = DateTime.Now.AddMonths(2),
                        Description = "Price: 2500 tenge. You and your kids will definitely have fun! Come!",
                        Category = "food",
                        City = "Almaty",
                        Venue = "Hi Pizza",
                    },
                    new Activity
                    {
                        Title = "Drink with me",
                        Date = DateTime.Now.AddMonths(3),
                        Description = "Hi there!",
                        Category = "drinks",
                        City = "Nur-Sultan",
                        Venue = "Another pub",
                    },
                    new Activity
                    {
                        Title = "Pub Quiz in the Bochonok restaurant chain",
                        Date = DateTime.Now.AddMonths(4),
                        Description = "We invite you to take part in our team PUB QUIZ or \"Beer Quiz\" at the Bochonok restaurant!",
                        Category = "drinks",
                        City = "Nur-Sulten",
                        Venue = "Restaurant Bochonok",
                    },
                    new Activity
                    {
                        Title = "Street Dinner",
                        Date = DateTime.Now.AddMonths(5),
                        Description = @"Day 1. Ticket price:
                                        - one ticket for 7,000 tenge;
                                        - two tickets for 10,000 tenge.",
                        Category = "food",
                        City = "Almaty",
                        Venue = "Park named after 28 Panfilovs",
                    },
                    new Activity
                    {
                        Title = "Street Dinner",
                        Date = DateTime.Now.AddMonths(6),
                        Description = @"Day 2. Ticket price:
                                        - one ticket for 7,000 tenge;
                                        - two tickets for 10,000 tenge.",
                        Category = "food",
                        City = "Almaty",
                        Venue = "Park named after 28 Panfilovs",
                    },
                    new Activity
                    {
                        Title = "Chamberlain Equestrian Club Tour and Rapid Painting Masterclass",
                        Date = DateTime.Now.AddMonths(7),
                        Description = "From 11.00 on the territory of the equestrian club we paint pictures, at 13.00 afternoon tea, at 14.00 excursion, at 15.00 horseback riding will begin.",
                        Category = "travel",
                        City = "Almaty",
                        Venue = "Chamberlain Equestrian Club",
                    },
                    new Activity
                    {
                        Title = "Food Photo Party",
                        Date = DateTime.Now.AddMonths(8),
                        Description = @"Waiting for you:
                        - Introductory word from Mira Panov - an expert in health, proper nutrition, detox and rejuvenation, a doctor of the highest category, a candidate of medical sciences.
                        - an interactive hands-on master class on cooking five lively versatile dishes from the Vitamin Cafe chef Vladimir Stukotin.",
                        Category = "food",
                        City = "Almaty",
                        Venue = "Vitamin Raw Cafe",
                    }
                };

                dataContext.Activities.AddRange(activities);
                dataContext.SaveChanges();
            }
        }
    }
}