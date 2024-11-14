const prisma = require("../models/prismaClient");

exports.createProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: {
        title: req.body.title,
        price: req.body.price,
        discountPercentage: req.body.discountPercentage,
        inventory: parseInt(req.body.inventory, 10),
        active: req.body.active,
        leadTime: req.body.leadTime,
        description: req.body.description,
        image: req.body.image,
        primaryVariantName: req.body.primary_variant_name,
        secondaryVariantName: req.body.secondary_variant_name,
        category: {
          connectOrCreate: {
            where: { name: req.body.category },
            create: { name: req.body.category },
          },
        },
        primaryVariants: {
          create: req.body.primary_variants.map((pv) => ({
            name: pv.name,
            price: pv.price,
            discountPercentage: pv.discountPercentage,
            inventory: pv.inventory,
            active: pv.active,
            secondaryVariants: {
              create: pv.secondary_variants,
            },
          })),
        },
      },
      include: {
        category: true,
        primaryVariants: {
          include: {
            secondaryVariants: true,
          },
        },
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data: {
        title: req.body.title,
        price: req.body.price,
        discountPercentage: req.body.discountPercentage,
        inventory: parseInt(req.body.inventory, 10),
        active: req.body.active,
        leadTime: req.body.leadTime,
        description: req.body.description,
        image: req.body.image,
        primaryVariantName: req.body.primary_variant_name,
        secondaryVariantName: req.body.secondary_variant_name,
        category: {
          connectOrCreate: {
            where: { name: req.body.category },
            create: { name: req.body.category },
          },
        },
        primaryVariants: {
          deleteMany: {},
          create: req.body.primary_variants.map((pv) => ({
            name: pv.name,
            price: pv.price,
            discountPercentage: pv.discountPercentage,
            inventory: pv.inventory,
            active: pv.active,
            secondaryVariants: {
              create: pv.secondary_variants,
            },
          })),
        },
      },
      include: {
        category: true,
        primaryVariants: {
          include: {
            secondaryVariants: true,
          },
        },
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        primaryVariants: {
          include: {
            secondaryVariants: true,
          },
        },
      },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        category: true,
        primaryVariants: {
          include: {
            secondaryVariants: true,
          },
        },
      },
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.getPaginatedProducts = async (req, res, next) => {
  const { page } = req.params;
  const pageSize = 2;
  try {
    const products = await prisma.product.findMany({
      skip: (parseInt(page) - 1) * pageSize,
      take: pageSize,
      include: {
        category: true,
        primaryVariants: {
          include: {
            secondaryVariants: true,
          },
        },
      },
    });
    const totalProducts = await prisma.product.count();
    res.json({
      products,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalProducts / pageSize),
    });
  } catch (error) {
    next(error);
  }
};
