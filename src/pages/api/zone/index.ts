export async function getServerSideProps() {
    const zones = await prisma.zone.findMany()

    return {
        props: {
            data: zones
        }
    }
}