using System.Text.Json;

namespace exam_react_net.utils
{
    public class ReadJSON
    {
        public static T? ReadJSONFile<T>(string path) where T : class
        {
            try
            {
                var jsonString = File.ReadAllText(path);
                return JsonSerializer.Deserialize<T>(jsonString, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}