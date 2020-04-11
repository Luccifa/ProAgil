using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    public class RedeSocialDto
    {
        public int id { get; set; }
         [Required (ErrorMessage="O campo {0} é obrigatorio")]
        public string Nome { get; set; }
        [Required (ErrorMessage="O campo {0} é obrigatorio")]
        public string URL { get; set; }
    }
}