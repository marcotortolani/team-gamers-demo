import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '500', '600'],
  display: 'swap',
  fallback: ['sans-serif'],
})

export default async function Page() {
  return (
    <main
      className={`z-20 mt-28 md:mb-10 md:mt-32 w-screen max-w-screen-xl h-full min-h-screen px-6 py-20 bg-White text-Black flex flex-col items-center gap-4 md:rounded-xl`}
    >
      <div className=" w-full lg:max-w-4xl flex flex-col items-center gap-8">
        <section className="w-full flex flex-col gap-4">
          <TitleStyled>Términos y Condiciones</TitleStyled>
          <ParagraphStyled>
            En este documento se establecen los términos y condiciones que
            regulan el uso del servicio denominado “Team Gamers” (en adelante el
            “Servicio” o la “Opción de entretenimiento”) ofrecido por MOOB MEDIA
            BUSINESS, C.A (el “Prestador”), por medio de las cuales los usuarios
            de Telefónica Venezolana C.A. – (en adelante “Movistar” o la
            “Operadora”) podrán acceder desde su dispositivo móvil, Tablet,
            laptop o PC, a contenido dedicado al mundo Gamer, donde conseguirán
            novedades, videos, jugadas, trucos y tips de gamers profesionales.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>EL SERVICIO: TEAM GAMERS</Title2Styled>
          <ParagraphStyled>
            Team Gamers es un servicio de entretenimiento que permite acceder al
            cliente, a través de un celular, Tablet o computadora, a contenido
            ilimitado para gamers, donde podrá disfrutar de novedades, videos,
            jugadas, trucos y tips de gamers profesionales, en las condiciones
            que se detallan en estos Términos y Condiciones.
          </ParagraphStyled>
          <ParagraphStyled>
            En tal sentido, todos aquellos clientes Movistar que así lo deseen
            podrán suscribirse solicitando su alta en la opción de
            entretenimiento mediante el envío de un SMS con el comando que se
            considere como válido para tal acción al número 335 (el precio del
            mensaje es equivalente a un mensaje de texto por uso).
          </ParagraphStyled>
          <ParagraphStyled>
            Al enviar la palabra{' '}
            <span className=" font-semibold">
              ALTA, o el comando que se comunique para esta acción, al número
              335
            </span>
            , el cliente recibirá un SMS con el enlace e instrucciones de acceso
            al portal, precio del servicio, frecuencia de cobro y un pin para
            acceder a la opción de entretenimiento. Una vez que ingresa, podrá
            disfrutar sin límites de todo el contenido que ofrece Team Gamers.
            Los cargos por navegación y transmisión de datos no están incluidos
            en el servicio. Los usuarios también podrán suscribirse a través de
            la página web de Movistar, en la sección opciones de entretenimiento
            digital, seleccionando la opción de Team Gamers, a través del URL
            propio del servicio{' '}
            <Link
              className=" text-sky-600 "
              href="http://ve.movistar.teamgamers.club/"
              target="_blank"
            >
              http://ve.movistar.teamgamers.club/
            </Link>{' '}
            o desde cualquier otra sección que la operadora disponga para ello.
          </ParagraphStyled>
          <ParagraphStyled>
            El Servicio es prestado mediante la modalidad de suscripción de
            renovación diaria, es decir, en forma continua desde la activación
            del servicio por parte del usuario, y hasta el momento en el que
            este desea solicitar la desactivación del servicio. Para darse de
            baja el usuario debe enviar la palabra{' '}
            <span className=" font-semibold">BAJA al número 335</span> y este
            recibirá un mensaje de confirmación.
          </ParagraphStyled>
          <ParagraphStyled>
            Es requisito indispensable para la utilización de la suscripción que
            el usuario posea los servicios SMS y datos móviles o WiFi activados,
            un teléfono móvil compatible y correctamente configurado. Los
            usuarios deberán comprobar estos aspectos en forma previa a la
            solicitud del servicio.
          </ParagraphStyled>
          <ParagraphStyled>
            Team Gamers enviará desde el número 335 un mensaje de texto con la
            información de acceso al portal y el precio al menos una vez al mes.
            Adicionalmente, Team Gamers, enviará al usuario mensajes de texto
            con información relevante en los periodos donde se efectúen sorteos,
            premiaciones y/o actividades de interés para el segmento.
          </ParagraphStyled>
          <ParagraphStyled>
            El uso del Servicio estará sujeto a la aceptación y cumplimiento de
            los presentes Términos y Condiciones, que se da desde el momento que
            el cliente se suscribe al servicio. También resultarán aplicables
            todas aquellas condiciones particulares, avisos o instrucciones de
            funcionamiento que se pongan en conocimiento del usuario a través de
            la página web de Movistar o del Prestador, con relación al Servicio.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Alcance del servicio</Title2Styled>
          <ParagraphStyled>
            El Servicio está disponible en toda la República Bolivariana de
            Venezuela, para toda persona física capaz de contratar, cuya línea
            telefónica móvil se encuentre activa al momento de solicitud de ALTA
            al mismo.
          </ParagraphStyled>
          <ParagraphStyled>
            El contenido estará disponible para ser visualizado por el usuario,
            a partir del momento en que éste realice exitosamente su alta. El
            contenido podrá ser visualizado desde cualquier terminal compatible,
            requiriendo datos móviles o una conexión WiFi para ello.
          </ParagraphStyled>
          <ParagraphStyled>
            Todo Usuario que se suscriba al servicio y efectúe los pasos de
            autenticación necesarios, declara y garantiza dar pleno cumplimiento
            a los presentes Términos y Condiciones.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Condiciones de uso. Propiedad intelectual</Title2Styled>
          <ParagraphStyled>
            Los usuarios se obligan a realizar un uso lícito del Servicio y al
            contenido al que accedan como consecuencia de la Suscripción, de
            conformidad con la ley vigente aplicable y los presentes Términos y
            Condiciones. Corresponde a los Usuarios respetar las normas
            mencionadas, poniendo especial énfasis en los derechos de propiedad
            intelectual e industrial, y abstenerse de utilizar el Servicio con
            fines ilícitos o de tal forma que atenten o vulneren derechos de
            terceros o del Prestador. Los Usuarios serán exclusivos responsables
            de los daños o perjuicios de cualquier naturaleza que pudieren
            derivarse del uso incorrecto, ilegítimo o ilícito del Servicio.
          </ParagraphStyled>
          <ParagraphStyled>
            El Prestador es único titular del contenido, y/o ha recibido de los
            respectivos titulares de dicho contenido una licencia de uso. Todo
            el contenido que compone la Suscripción está protegido por derechos
            de autor en el marco de la normativa vigente. El contenido puede ser
            utilizado por los Usuarios sólo en la medida permitida por estos
            Términos y Condiciones y la legislación aplicable.
          </ParagraphStyled>
          <ParagraphStyled>
            A menos que se especifique expresamente lo contrario, el contenido
            no podrá ser descargado a los dispositivos de los usuarios.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Responsabilidad</Title2Styled>
          <ParagraphStyled>
            La responsabilidad y obligación de pago por el envío o recepción de
            mensajes de texto relacionados a la Suscripción será responsabilidad
            del titular del número móvil utilizado a tal fin, y no podrá
            oponerse por{' '}
            <span className=" font-semibold">
              pérdida, hurto, robo, extravío o avería de dicho equipo móvil
            </span>
            , salvo denuncia previa a cualquier envío o recepción de estos
            mensajes, efectuada a la Operadora través de los centros de atención
            de esta última.
          </ParagraphStyled>
          <ParagraphStyled>
            El Prestador y la Operadora no podrán ser considerados responsables
            por ningún daño o perjuicio ocasionado o que pudiera ocasionarse a
            los Usuarios o a terceros, en sus personas o bienes, por la
            contratación o utilización del Servicio. Tampoco serán responsables
            en caso de insatisfacción por el contenido del servicio. Para estos
            casos, los usuarios serán libres de darse de baja, enviando a
            palabra <span className=" font-semibold">BAJA al número 335</span>.
          </ParagraphStyled>
          <ParagraphStyled>
            El Prestador no se responsabiliza por aquellas Suscripciones que no
            contengan los datos solicitados o que contengan datos erróneos ni
            por los mensajes de texto que no incluyan las palabras claves
            establecidas para el acceso al Servicio. Tampoco será responsable
            por las solicitudes o envíos que no sean aceptados por la plataforma
            tecnológica del Prestador ni por retrasos que pudieren sufrir las
            visualizaciones de contenido, mensajes de texto o cualquier otro
            envío relacionado con la Suscripción, por cualquier causa no
            imputable al Prestador, incluyendo pero sin limitarse a fallas en la
            conectividad de la red, exceso o saturación del tráfico de la red,
            y/o cualquier característica de los teléfonos móviles que impidan la
            transmisión de dichos envíos o solicitudes.
          </ParagraphStyled>
          <ParagraphStyled>
            El Prestador se reserva el derecho de efectuar sin previo aviso todo
            tipo de modificación en la mecánica de la Suscripción con el solo
            requisito de comunicar cualquier cambio de relevancia en la página
            web y otros medios.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Jurisdicción</Title2Styled>
          <ParagraphStyled>
            Toda relación que en virtud de este Servicio se genere entre los
            Usuarios y el Prestador será regida y concertada en total sujeción a
            las leyes de la República Bolivariana de Venezuela, renunciando los
            Usuarios a cualquier otra ley a cuya aplicación pudiere tener
            derecho.
          </ParagraphStyled>
          <ParagraphStyled>
            Estos Términos y Condiciones se rigen por la ley de la República
            Bolivariana de Venezuela. Para cualquier controversia que pudiera
            derivarse de la prestación de los Servicios o la interpretación y
            aplicación de los Términos y Condiciones, el Prestador y los
            Usuarios aceptan someterse a los tribunales competentes de la
            República Bolivariana de Venezuela con expresa renuncia a cualquier
            otro fuero o jurisdicción que pudiera corresponderles.
          </ParagraphStyled>
        </section>
      </div>
    </main>
  )
}

const TitleStyled = ({ children }) => (
  <h1
    className={
      ' w-full uppercase font-oswaldItalic pointer-events-none cursor-default text-[1.8rem] leading-[2rem] md:text-3xl lg:text-4xl text-Black text-left  '
    }
  >
    {children}
  </h1>
)

const Title2Styled = ({ children }) => (
  <h2
    className={` w-screen md:max-w-full font-oswaldItalic uppercase  text-Black text-xl md:text-lg lg:text-2xl`}
  >
    {children}
  </h2>
)

const ParagraphStyled = ({ children }) => (
  <p
    className={
      poppins.className +
      ' font-normal text-sm md:text-base lg:text-lg text-Black'
    }
  >
    {children}
  </p>
)
