using Microsoft.AspNetCore.Mvc;

namespace exam_react_net.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventController : ControllerBase
{   

    [HttpPost]
    public IActionResult Post([FromBody] Object newEvent)
    {
        // deserialise the object and print it to the console
        Console.WriteLine(newEvent);
        return Ok();
    }

}