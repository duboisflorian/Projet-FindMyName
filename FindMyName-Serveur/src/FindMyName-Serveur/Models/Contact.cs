using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class Contact
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        public string name { get; set; }
        public string photo { get; set; }
        public string type { get; set; }

        public Contact(int id, string name, string photo, string type)
        {
            this.id = id;
            this.name = name;
            this.photo = photo;
            this.type = type;
        }

        public Contact()
        {
        }
    }
}
