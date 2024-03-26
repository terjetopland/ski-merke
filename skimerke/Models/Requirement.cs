using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace skimerke.Models
{
    public class Requirement
    {
        public Requirement() {}
        
        public int Id { get; set; }
        public int Minutes { get; set; }
        [StringLength(15)]
        public string Gender { get; set; }
        public int Distance { get; set; }
        public string Age { get; set; }
    }
}