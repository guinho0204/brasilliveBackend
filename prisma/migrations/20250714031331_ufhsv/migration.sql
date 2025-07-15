-- CreateTable
CREATE TABLE `Users` (
    `Uuid_user` VARCHAR(191) NOT NULL,
    `Image_user` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `User` VARCHAR(191) NOT NULL,
    `Numero_celular` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Followers` VARCHAR(191) NOT NULL,
    `Following` VARCHAR(191) NOT NULL,
    `Nivel` VARCHAR(191) NOT NULL,
    `Visualisacoes` VARCHAR(191) NOT NULL,
    `Pcoin_paga_moeda_user` VARCHAR(191) NOT NULL,
    `Data_nascimento` VARCHAR(191) NOT NULL,
    `Sexo` VARCHAR(191) NOT NULL,
    `Idade` VARCHAR(191) NOT NULL,
    `Rcoin_recebe_moeda_user` VARCHAR(191) NOT NULL,
    `Data_create` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Saldo_money` DOUBLE NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,
    `Uid_live` INTEGER NOT NULL AUTO_INCREMENT,

    UNIQUE INDEX `Users_Uid_live_key`(`Uid_live`),
    PRIMARY KEY (`Uuid_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seguidores` (
    `Uuid_seguindo_table` VARCHAR(191) NOT NULL,
    `Id_user_ira_ser_seguido` VARCHAR(191) NOT NULL,
    `Id_user_ira_seguir` VARCHAR(191) NOT NULL,
    `Nome_user_seguido` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `Cor` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Seguidores_Id_user_ira_ser_seguido_Id_user_ira_seguir_key`(`Id_user_ira_ser_seguido`, `Id_user_ira_seguir`),
    PRIMARY KEY (`Uuid_seguindo_table`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Menssagem` (
    `Uuid` VARCHAR(191) NOT NULL,
    `Remetente` VARCHAR(191) NOT NULL,
    `Destinatario` VARCHAR(191) NOT NULL,
    `Menssagem` VARCHAR(191) NOT NULL,
    `Data_Envio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_menssagem` INTEGER NOT NULL AUTO_INCREMENT,
    `Menssagem_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Menssagem_id_menssagem_key`(`id_menssagem`),
    PRIMARY KEY (`Uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Presentes` (
    `Uuid_presente` VARCHAR(191) NOT NULL,
    `Valor` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Presente_imagem` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Uuid_presente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recebe_presentes` (
    `Uuid_Operacao_dar_presente` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Uid_user_recebe` VARCHAR(191) NOT NULL,
    `Uid_user_dando` VARCHAR(191) NOT NULL,
    `Valor` VARCHAR(191) NOT NULL,
    `Vezes` VARCHAR(191) NOT NULL,
    `Imagem_presente` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Uuid_Operacao_dar_presente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lives` (
    `Uuid_live` VARCHAR(191) NOT NULL,
    `Create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Image_live` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,
    `Live_id` VARCHAR(191) NOT NULL,
    `RCoin_recebe_moeda_live` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Pcoin_paga_moeda_live` VARCHAR(191) NOT NULL,
    `uid_user` VARCHAR(191) NOT NULL,
    `VizuLive` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Lives_Live_id_key`(`Live_id`),
    PRIMARY KEY (`Uuid_live`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PagamentoPix` (
    `Uuid_transacao` VARCHAR(191) NOT NULL,
    `Txid` VARCHAR(191) NOT NULL,
    `Revisao` INTEGER NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `Valor` VARCHAR(191) NOT NULL,
    `Chave` VARCHAR(191) NOT NULL,
    `Devedor_cpf` VARCHAR(191) NOT NULL,
    `Devedor_nome` VARCHAR(191) NOT NULL,
    `Loc_id` INTEGER NOT NULL,
    `Loc_location` VARCHAR(191) NOT NULL,
    `Loc_tipocob` VARCHAR(191) NOT NULL,
    `Loc_criacao` VARCHAR(191) NOT NULL,
    `Location` VARCHAR(191) NOT NULL,
    `PixCopiaEcola` VARCHAR(191) NOT NULL,
    `uid_user` VARCHAR(191) NOT NULL,
    `Quantidade_moedas` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PagamentoPix_Txid_key`(`Txid`),
    PRIMARY KEY (`Uuid_transacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PixChaves` (
    `Uuid_chavepix` VARCHAR(191) NOT NULL,
    `Chave` VARCHAR(191) NOT NULL,
    `uid_user` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Uuid_chavepix`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PixSend` (
    `Uuid_pixsend` VARCHAR(191) NOT NULL,
    `Chave` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `Valor` VARCHAR(191) NOT NULL,
    `Horario` VARCHAR(191) NOT NULL,
    `Hash_transacao` VARCHAR(191) NOT NULL,
    `Uid_user` VARCHAR(191) NOT NULL,
    `EndToendId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PixSend_EndToendId_key`(`EndToendId`),
    PRIMARY KEY (`Uuid_pixsend`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chatlive` (
    `Uuid_chatlive` VARCHAR(191) NOT NULL,
    `User` VARCHAR(191) NOT NULL,
    `Id_live` VARCHAR(191) NOT NULL,
    `Id_user` VARCHAR(191) NOT NULL,
    `Menssagem` VARCHAR(191) NOT NULL,
    `Valor_presente` VARCHAR(191) NOT NULL,
    `Vezes` VARCHAR(191) NOT NULL,
    `Icon_presente` VARCHAR(191) NOT NULL,
    `Create_at` VARCHAR(191) NOT NULL,
    `Id_menssagem` INTEGER NOT NULL AUTO_INCREMENT,

    UNIQUE INDEX `Chatlive_Id_menssagem_key`(`Id_menssagem`),
    PRIMARY KEY (`Uuid_chatlive`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VisuLive` (
    `Uid_VisuLive` VARCHAR(191) NOT NULL,
    `User` VARCHAR(191) NOT NULL,
    `Id_live` VARCHAR(191) NOT NULL,
    `Id_user` VARCHAR(191) NOT NULL,
    `AtivoLive` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Uid_VisuLive`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promotion` (
    `Uid_Promotion` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Valor` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,
    `Id_receptor` VARCHAR(191) NOT NULL,
    `Id_Compartilha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Uid_Promotion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
