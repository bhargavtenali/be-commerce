-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discountPercentage" DOUBLE PRECISION NOT NULL,
    "inventory" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "leadTime" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "primaryVariantName" TEXT NOT NULL,
    "secondaryVariantName" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrimaryVariant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discountPercentage" DOUBLE PRECISION NOT NULL,
    "inventory" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "PrimaryVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecondaryVariant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discountPercentage" DOUBLE PRECISION NOT NULL,
    "inventory" INTEGER NOT NULL,
    "primaryVariantId" INTEGER NOT NULL,

    CONSTRAINT "SecondaryVariant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrimaryVariant" ADD CONSTRAINT "PrimaryVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecondaryVariant" ADD CONSTRAINT "SecondaryVariant_primaryVariantId_fkey" FOREIGN KEY ("primaryVariantId") REFERENCES "PrimaryVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
