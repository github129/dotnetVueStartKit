using System.Collections.Generic;
using DotNetVueStartkit.Models;

namespace DotNetVueStartkit.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
