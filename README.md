# Download image and put S3 in lambda
* Essa funcção Aws Lambda baixa uma imagem de uma url e envia para um bucket Aws S3.

# Guia de configuração do projeto
* Baixe o [Apex](http://apex.run/), renomeie para apex.exe, coloque em uma pasta e registre a pasta em PATH
* Configure a [AWS Credentials](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html), comando `aws configure`
<br />AWS_ACCESS_KEY_ID com seu respectivo valor
<br />AWS_SECRET_ACCESS_KEY com seu respectivo valor
<br />AWS_REGION com o valor de 'us-east-1'

# Envio de alterações para Aws (dev)
(confira no lambda da console aws se as modificações foram enviadas)
* No terminal do windows executar `apex deploy`

# Teste local
(a resposta esperada é o `ok`, cuidado o teste salva realmente no banco de dados)
* No terminal do windows `apex invoke LambdaDownloadPutS3 < functions/LambdaDownloadPutS3/event.json`
