function Article(props: any) {
  const article = props.location.state;

  return (
    <div>
      <p>{article.content}</p>
    </div>
  )
}

export default Article;
