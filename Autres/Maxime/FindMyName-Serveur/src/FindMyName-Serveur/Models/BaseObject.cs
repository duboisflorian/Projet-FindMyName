using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class BaseObject
    {
        public int id { get; set; }

        public override int GetHashCode()
        {
            int hash = 37;
            hash = hash * 23 + base.GetHashCode();
            hash = hash * 23 + id.GetHashCode();
            return hash;
        }

        public override bool Equals(object obj)
        {
            if (obj == null)
                return false;

            return this.GetHashCode() == obj.GetHashCode();
        }
    }
}
