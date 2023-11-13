// Source: https://gist.github.com/Davidblkx/e12ab0bb2aff7fd8072632b396538560
namespace exam_react_net.utils
{
    public class StringSimilarity
    {
        public static IEnumerable<T> Search<T>(IEnumerable<T> list, string query, string propertyName) where T : class
        {
            var levenshtein = new Levenshtein(query.ToLower());
            return list.Where(item => levenshtein.Distance(GetPropertyValue(item, propertyName)) < 8);
        }


        private class Levenshtein
        {
            private readonly string _query;
            private readonly int[,] _distance;

            public Levenshtein(string query)
            {
                _query = query;
                _distance = new int[query.Length + 1, 3];
                for (var i = 0; i <= query.Length; i++)
                {
                    _distance[i, 0] = i;
                }
            }

            public int Distance(string target)
            {   
                target = target.ToLower();
                var queryLength = _query.Length;
                var targetLength = target.Length;

                if (queryLength == 0)
                {
                    return targetLength;
                }

                if (targetLength == 0)
                {
                    return queryLength;
                }

                var v0 = new int[targetLength + 1];
                var v1 = new int[targetLength + 1];
                var v2 = new int[targetLength + 1];

                for (var i = 0; i < targetLength + 1; i++)
                {
                    v0[i] = i;
                }

                for (var i = 0; i < queryLength; i++)
                {
                    v1[0] = i + 1;

                    for (var j = 0; j < targetLength; j++)
                    {
                        var cost = (_query[i] == target[j]) ? 0 : 1;
                        v1[j + 1] = Math.Min(Math.Min(v1[j] + 1, v0[j + 1] + 1), v0[j] + cost);
                    }

                    for (var j = 0; j < targetLength + 1; j++)
                    {
                        v0[j] = v1[j];
                        v2[j] = v1[j] = 0;
                    }
                }

                return v0[targetLength];
            
            }
        }

        private static string GetPropertyValue<T>(T item, string propertyName) where T : class
        {
            var property = item.GetType().GetProperty(propertyName);
            return property?.GetValue(item, null)?.ToString() ?? "";
        }

    }

}
