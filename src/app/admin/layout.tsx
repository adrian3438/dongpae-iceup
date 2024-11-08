import Container from "components/Container";
import Script from "next/script";
import '/public/css/admin.css'
import ReduxContainer from "components/ReduxContainer";
import { cookies } from "next/headers";
export default function RootLayout({children} : Readonly<{children : React.ReactNode}>) {
    const cookie = cookies()
    const cookieVaule : any = cookie.get('dissid') || '';
    return(
        <>
        <html lang="en">
            <body>
                <ReduxContainer>
                    <Container ssid={cookieVaule?.value}>
                        {children}
                    </Container>
                </ReduxContainer>

                <Script
                src="https://code.jquery.com/jquery-3.7.1.js"
                strategy="beforeInteractive"
                />
                {/* Bootstrap */}
                <Script
                src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
                strategy="beforeInteractive"
                />
                {/* Summernote */}
                <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-bs4.min.js"
                strategy="beforeInteractive"
                />
                <Script src='https://kit.fontawesome.com/b025689c8c.js' strategy="beforeInteractive"></Script>
            </body>
        </html>
        </>
    )
}