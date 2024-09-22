-- CreateTable
CREATE TABLE "templates" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT[],
    "plan" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "videoUrl" TEXT,
    "url" TEXT,

    CONSTRAINT "templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "template_slides" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,

    CONSTRAINT "template_slides_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "template_slides" ADD CONSTRAINT "template_slides_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;
