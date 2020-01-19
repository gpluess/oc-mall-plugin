<?php

namespace OFFLINE\Mall\Classes\Feeds;

use Cms\Classes\Page;
use OFFLINE\Mall\Models\GeneralSettings;
use OFFLINE\Mall\Models\Product as ProductModel;
use RainLab\Translate\Classes\Translator;
use System\Classes\PluginManager;
use Vitalybaev\GoogleMerchant\Feed;
use Vitalybaev\GoogleMerchant\Product;
use Vitalybaev\GoogleMerchant\Product\Availability\Availability;

class GoogleMerchantFeed
{
    public $locale;
    public $productPage;
    public $feed;

    public function __construct(?string $locale)
    {
        $this->locale = $locale;
        $this->enforceLocale();

        $this->productPage = GeneralSettings::get('product_page', 'product');
        $this->feed        = new Feed(
            'Google Merchant Feed',
            url('/'),
            'Feed generated by OFFLINE.Mall'
        );
    }

    public function build()
    {
        if ($this->rainlabTranslateInstalled()) {
            Translator::instance()->setLocale($this->locale);
        }

        $products = ProductModel::published()->with(['brand'])->get();

        foreach ($products as $product) {
            if ($product->inventory_management_method === 'variant') {
                foreach ($product->variants as $item) {
                    $this->addItem($item);
                }
            } else {
                $this->addItem($product);
            }
        }

        return $this->feed->build();
    }


    /**
     * Check if the Translator class of RainLab.Translate is available.
     *
     * @return bool
     */
    protected function rainlabTranslateInstalled(): bool
    {
        return PluginManager::instance()->exists('RainLab.Translate');
    }

    private function addItem($item)
    {
        $entry = new Product();

        $url = Page::url($this->productPage, [
            'slug'    => $item->slug,
            'variant' => $item->variantId,
        ]);

        $description = \Html::strip($item->description ?: $item->description_short);
        $entry->setId($item->prefixedId);
        $entry->setTitle($item->name);
        $entry->setDescription($description);
        $entry->setLink($url);
        $entry->setPrice("{$item->price()->float} {$item->price()->currency->code}");
        $entry->setCondition('new');

        $images = $item->all_images;
        if ($images && $images->count() > 0) {
            $entry->setImage($images->first()->getPath());
            if ($images->count() > 1) {
                $additionalImages = $images->slice(1)->map(function ($q) {
                    return $q->getPath();
                })->implode(',');
                $entry->setAdditionalImage($additionalImages);
            }
        }

        if ($item->isInStock()) {
            $entry->setAvailability(Availability::IN_STOCK);
        } else {
            $entry->setAvailability(Availability::OUT_OF_STOCK);
        }

        $this->handleProductCategory($item, $entry);
        $this->handleIdentifier($item, $entry);

        $this->feed->addProduct($entry);
    }

    /**
     * Sets the default locale if no locale was specified by the user.
     */
    protected function enforceLocale(): void
    {
        if ($this->locale === null && $this->rainlabTranslateInstalled()) {
            $this->locale = Translator::instance()->getDefaultLocale();
        }
    }

    /**
     * Handle Product Category attribute.
     *
     * @param         $item
     * @param Product $entry
     */
    private function handleProductCategory($item, Product $entry): void
    {
        if ($item->inventory_management_method === 'variant') {
            if ($item->product->categories) {
                $category = $item->product->categories()->first();
            }
        } else {
            if ($item->categories) {
                $category = $item->categories()->first();
            }
        }

        $entry->setGoogleCategory($category->google_product_category_id);
    }

    /**
     * Handle Identifier attributes.
     *
     * @param         $item
     * @param Product $entry
     *
     * @throws \Vitalybaev\GoogleMerchant\Exception\InvalidArgumentException
     */
    private function handleIdentifier($item, Product $entry): void
    {
        if ( ! $item->brand && ! $item->gtin && ! $item->mpn) {
            $entry->setIdentifierExists('no');

            return;
        }

        $entry->setIdentifierExists('yes');

        if ($item->brand) {
            $entry->setBrand($item->brand->name);
        } else {
            $entry->setBrand('Unknown');
        }

        if ($item->gtin) {
            $entry->setGtin($item->gtin);
        }

        if ($item->mpn) {
            $entry->setMpn($item->mpn);
        }
    }
}