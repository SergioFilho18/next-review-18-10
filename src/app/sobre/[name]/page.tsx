type Props = {
    params: {
        name: string;
    }
}

const Page = ({ params }: Props) => {
    return (
        <div>
            Pagina sobre {params.name}
        </div>
    );
}

export default Page;