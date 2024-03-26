using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using skimerke.Services;

namespace skimerke.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class WeatherForecastController(
    ILogger<WeatherForecastController> logger,
    IMinService minService
    ) : ControllerBase
{

    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    // private readonly ILogger<WeatherForecastController> _logger = logger;

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        var forecast =  Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToList();
        forecast.Add(new WeatherForecast
        {
            Date = new DateOnly(),
            Summary = minService.GetMe(),
            TemperatureC = -20
        });
        return forecast;
    }
}

