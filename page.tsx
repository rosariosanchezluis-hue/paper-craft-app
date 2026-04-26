import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-8">
        <h1 className="font-serif text-6xl text-slate-900">
          Transformando Papel en Experiencias
        </h1>
        <p className="text-xl text-slate-600 font-light">
          Herramienta profesional de cotizaciones para Paper Craft PR
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/auth/register"
            className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-light"
          >
            Registrarse como Event Planner
          </Link>
          <Link
            href="/auth/login"
            className="px-8 py-4 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 font-light"
          >
            Iniciar Sesión
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-serif text-xl mb-2">Cotizaciones Profesionales</h3>
            <p className="text-slate-600 font-light text-sm">
              Genera cotizaciones en minutos con nuestra herramienta intuitiva.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-serif text-xl mb-2">Dashboard Completo</h3>
            <p className="text-slate-600 font-light text-sm">
              Accede a tu historial de cotizaciones y seguimiento.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-serif text-xl mb-2">Integración Directa</h3>
            <p className="text-slate-600 font-light text-sm">
              Tus cotizaciones llegan directamente a nuestro equipo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
