    using UnityEngine;

    public class MovimientoObjeto : MonoBehaviour
    {
        public float tiempoEntreMovimientos = 2f; //timeout movimiento
        public float distanciaMovimiento = 1f;    //distancia de desplazamiento
        public float velocidadRotacion = 50f;

        private float tiempoRestante;             //timer

        void Start()
        {
            tiempoRestante = tiempoEntreMovimientos;
        }

        void Update()
        {
            // --- Rotación constante ---
            transform.Rotate(Vector3.up * velocidadRotacion * Time.deltaTime); //Vector3(0,1,0) * velocidad * frameCorrection

            // --- Escalado oscilante ---
            float escala = 1f + Mathf.Sin(Time.time) * 0.3f;                   //1 + función de seno en el tiempo
            transform.localScale = new Vector3(escala, escala, escala);        //Resize en todos los tamaños, manteniendo el cubo

            // --- Traslación aleatoria cada ciertos segundos ---
            tiempoRestante -= Time.deltaTime;
            if (tiempoRestante <= 0f)
            {
                Vector3 direccion = Random.value > 0.5f ? Vector3.right : Vector3.up; //movimiento en cuadrado

                if (Random.value > 0.5f) direccion *= -1;

                transform.Translate(direccion * distanciaMovimiento, Space.World);

                tiempoRestante = tiempoEntreMovimientos;
            }
        }
    }
