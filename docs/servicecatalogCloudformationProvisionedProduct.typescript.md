# `servicecatalogCloudformationProvisionedProduct` Submodule <a name="`servicecatalogCloudformationProvisionedProduct` Submodule" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogCloudformationProvisionedProduct <a name="ServicecatalogCloudformationProvisionedProduct" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct(scope: Construct, id: string, config?: ServicecatalogCloudformationProvisionedProductConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig">ServicecatalogCloudformationProvisionedProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig">ServicecatalogCloudformationProvisionedProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters">putProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences">putProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetNotificationArns">resetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathId">resetPathId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathName">resetPathName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductId">resetProductId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductName">resetProductName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisionedProductName">resetProvisionedProductName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactId">resetProvisioningArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactName">resetProvisioningArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningParameters">resetProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningPreferences">resetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProvisioningParameters` <a name="putProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters"></a>

```typescript
public putProvisioningParameters(value: IResolvable | ServicecatalogCloudformationProvisionedProductProvisioningParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]

---

##### `putProvisioningPreferences` <a name="putProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences"></a>

```typescript
public putProvisioningPreferences(value: ServicecatalogCloudformationProvisionedProductProvisioningPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags"></a>

```typescript
public putTags(value: IResolvable | ServicecatalogCloudformationProvisionedProductTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetNotificationArns` <a name="resetNotificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetNotificationArns"></a>

```typescript
public resetNotificationArns(): void
```

##### `resetPathId` <a name="resetPathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathId"></a>

```typescript
public resetPathId(): void
```

##### `resetPathName` <a name="resetPathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathName"></a>

```typescript
public resetPathName(): void
```

##### `resetProductId` <a name="resetProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductId"></a>

```typescript
public resetProductId(): void
```

##### `resetProductName` <a name="resetProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductName"></a>

```typescript
public resetProductName(): void
```

##### `resetProvisionedProductName` <a name="resetProvisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisionedProductName"></a>

```typescript
public resetProvisionedProductName(): void
```

##### `resetProvisioningArtifactId` <a name="resetProvisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactId"></a>

```typescript
public resetProvisioningArtifactId(): void
```

##### `resetProvisioningArtifactName` <a name="resetProvisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactName"></a>

```typescript
public resetProvisioningArtifactName(): void
```

##### `resetProvisioningParameters` <a name="resetProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningParameters"></a>

```typescript
public resetProvisioningParameters(): void
```

##### `resetProvisioningPreferences` <a name="resetProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningPreferences"></a>

```typescript
public resetProvisioningPreferences(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogCloudformationProvisionedProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogCloudformationProvisionedProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogCloudformationProvisionedProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn">cloudformationStackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.outputs">outputs</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductId">provisionedProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParameters">provisioningParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList">ServicecatalogCloudformationProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences">provisioningPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.recordId">recordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList">ServicecatalogCloudformationProvisionedProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArnsInput">notificationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathIdInput">pathIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathNameInput">pathNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productNameInput">productNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductNameInput">provisionedProductNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactIdInput">provisioningArtifactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactNameInput">provisioningArtifactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParametersInput">provisioningParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferencesInput">provisioningPreferencesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathId">pathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathName">pathName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productName">productName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductName">provisionedProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName">provisioningArtifactName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudformationStackArn`<sup>Required</sup> <a name="cloudformationStackArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn"></a>

```typescript
public readonly cloudformationStackArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.outputs"></a>

```typescript
public readonly outputs: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `provisionedProductId`<sup>Required</sup> <a name="provisionedProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductId"></a>

```typescript
public readonly provisionedProductId: string;
```

- *Type:* string

---

##### `provisioningParameters`<sup>Required</sup> <a name="provisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParameters"></a>

```typescript
public readonly provisioningParameters: ServicecatalogCloudformationProvisionedProductProvisioningParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList">ServicecatalogCloudformationProvisionedProductProvisioningParametersList</a>

---

##### `provisioningPreferences`<sup>Required</sup> <a name="provisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences"></a>

```typescript
public readonly provisioningPreferences: ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a>

---

##### `recordId`<sup>Required</sup> <a name="recordId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.recordId"></a>

```typescript
public readonly recordId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tags"></a>

```typescript
public readonly tags: ServicecatalogCloudformationProvisionedProductTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList">ServicecatalogCloudformationProvisionedProductTagsList</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `notificationArnsInput`<sup>Optional</sup> <a name="notificationArnsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArnsInput"></a>

```typescript
public readonly notificationArnsInput: string[];
```

- *Type:* string[]

---

##### `pathIdInput`<sup>Optional</sup> <a name="pathIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathIdInput"></a>

```typescript
public readonly pathIdInput: string;
```

- *Type:* string

---

##### `pathNameInput`<sup>Optional</sup> <a name="pathNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathNameInput"></a>

```typescript
public readonly pathNameInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `productNameInput`<sup>Optional</sup> <a name="productNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productNameInput"></a>

```typescript
public readonly productNameInput: string;
```

- *Type:* string

---

##### `provisionedProductNameInput`<sup>Optional</sup> <a name="provisionedProductNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductNameInput"></a>

```typescript
public readonly provisionedProductNameInput: string;
```

- *Type:* string

---

##### `provisioningArtifactIdInput`<sup>Optional</sup> <a name="provisioningArtifactIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactIdInput"></a>

```typescript
public readonly provisioningArtifactIdInput: string;
```

- *Type:* string

---

##### `provisioningArtifactNameInput`<sup>Optional</sup> <a name="provisioningArtifactNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactNameInput"></a>

```typescript
public readonly provisioningArtifactNameInput: string;
```

- *Type:* string

---

##### `provisioningParametersInput`<sup>Optional</sup> <a name="provisioningParametersInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParametersInput"></a>

```typescript
public readonly provisioningParametersInput: IResolvable | ServicecatalogCloudformationProvisionedProductProvisioningParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]

---

##### `provisioningPreferencesInput`<sup>Optional</sup> <a name="provisioningPreferencesInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferencesInput"></a>

```typescript
public readonly provisioningPreferencesInput: IResolvable | ServicecatalogCloudformationProvisionedProductProvisioningPreferences;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ServicecatalogCloudformationProvisionedProductTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

---

##### `pathId`<sup>Required</sup> <a name="pathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathId"></a>

```typescript
public readonly pathId: string;
```

- *Type:* string

---

##### `pathName`<sup>Required</sup> <a name="pathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathName"></a>

```typescript
public readonly pathName: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

---

##### `provisionedProductName`<sup>Required</sup> <a name="provisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductName"></a>

```typescript
public readonly provisionedProductName: string;
```

- *Type:* string

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="provisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId"></a>

```typescript
public readonly provisioningArtifactId: string;
```

- *Type:* string

---

##### `provisioningArtifactName`<sup>Required</sup> <a name="provisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName"></a>

```typescript
public readonly provisioningArtifactName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogCloudformationProvisionedProductConfig <a name="ServicecatalogCloudformationProvisionedProductConfig" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.Initializer"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProvisionedProductConfig: servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathId">pathId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathName">pathName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productId">productId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productName">productName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisionedProductName">provisionedProductName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactName">provisioningArtifactName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningParameters">provisioningParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningPreferences">provisioningPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}.

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}.

---

##### `pathId`<sup>Optional</sup> <a name="pathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathId"></a>

```typescript
public readonly pathId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}.

---

##### `pathName`<sup>Optional</sup> <a name="pathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathName"></a>

```typescript
public readonly pathName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}.

---

##### `productName`<sup>Optional</sup> <a name="productName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}.

---

##### `provisionedProductName`<sup>Optional</sup> <a name="provisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisionedProductName"></a>

```typescript
public readonly provisionedProductName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}.

---

##### `provisioningArtifactId`<sup>Optional</sup> <a name="provisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactId"></a>

```typescript
public readonly provisioningArtifactId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}.

---

##### `provisioningArtifactName`<sup>Optional</sup> <a name="provisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactName"></a>

```typescript
public readonly provisioningArtifactName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}.

---

##### `provisioningParameters`<sup>Optional</sup> <a name="provisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningParameters"></a>

```typescript
public readonly provisioningParameters: IResolvable | ServicecatalogCloudformationProvisionedProductProvisioningParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}.

---

##### `provisioningPreferences`<sup>Optional</sup> <a name="provisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningPreferences"></a>

```typescript
public readonly provisioningPreferences: ServicecatalogCloudformationProvisionedProductProvisioningPreferences;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ServicecatalogCloudformationProvisionedProductTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}.

---

### ServicecatalogCloudformationProvisionedProductProvisioningParameters <a name="ServicecatalogCloudformationProvisionedProductProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.Initializer"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProvisionedProductProvisioningParameters: servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}.

---

### ServicecatalogCloudformationProvisionedProductProvisioningPreferences <a name="ServicecatalogCloudformationProvisionedProductProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.Initializer"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProvisionedProductProvisioningPreferences: servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetAccounts">stackSetAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureToleranceCount">stackSetFailureToleranceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureTolerancePercentage">stackSetFailureTolerancePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyCount">stackSetMaxConcurrencyCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyPercentage">stackSetMaxConcurrencyPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetOperationType">stackSetOperationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetRegions">stackSetRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}. |

---

##### `stackSetAccounts`<sup>Optional</sup> <a name="stackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetAccounts"></a>

```typescript
public readonly stackSetAccounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}.

---

##### `stackSetFailureToleranceCount`<sup>Optional</sup> <a name="stackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureToleranceCount"></a>

```typescript
public readonly stackSetFailureToleranceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}.

---

##### `stackSetFailureTolerancePercentage`<sup>Optional</sup> <a name="stackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureTolerancePercentage"></a>

```typescript
public readonly stackSetFailureTolerancePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}.

---

##### `stackSetMaxConcurrencyCount`<sup>Optional</sup> <a name="stackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyCount"></a>

```typescript
public readonly stackSetMaxConcurrencyCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}.

---

##### `stackSetMaxConcurrencyPercentage`<sup>Optional</sup> <a name="stackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyPercentage"></a>

```typescript
public readonly stackSetMaxConcurrencyPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}.

---

##### `stackSetOperationType`<sup>Optional</sup> <a name="stackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetOperationType"></a>

```typescript
public readonly stackSetOperationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}.

---

##### `stackSetRegions`<sup>Optional</sup> <a name="stackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetRegions"></a>

```typescript
public readonly stackSetRegions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}.

---

### ServicecatalogCloudformationProvisionedProductTags <a name="ServicecatalogCloudformationProvisionedProductTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.Initializer"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProvisionedProductTags: servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogCloudformationProvisionedProductProvisioningParametersList <a name="ServicecatalogCloudformationProvisionedProductProvisioningParametersList" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get"></a>

```typescript
public get(index: number): ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProvisionedProductProvisioningParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>[]

---


### ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference <a name="ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProvisionedProductProvisioningParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters">ServicecatalogCloudformationProvisionedProductProvisioningParameters</a>

---


### ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference <a name="ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetAccounts">resetStackSetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureToleranceCount">resetStackSetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureTolerancePercentage">resetStackSetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyCount">resetStackSetMaxConcurrencyCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyPercentage">resetStackSetMaxConcurrencyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetOperationType">resetStackSetOperationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetRegions">resetStackSetRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStackSetAccounts` <a name="resetStackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetAccounts"></a>

```typescript
public resetStackSetAccounts(): void
```

##### `resetStackSetFailureToleranceCount` <a name="resetStackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureToleranceCount"></a>

```typescript
public resetStackSetFailureToleranceCount(): void
```

##### `resetStackSetFailureTolerancePercentage` <a name="resetStackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureTolerancePercentage"></a>

```typescript
public resetStackSetFailureTolerancePercentage(): void
```

##### `resetStackSetMaxConcurrencyCount` <a name="resetStackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyCount"></a>

```typescript
public resetStackSetMaxConcurrencyCount(): void
```

##### `resetStackSetMaxConcurrencyPercentage` <a name="resetStackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyPercentage"></a>

```typescript
public resetStackSetMaxConcurrencyPercentage(): void
```

##### `resetStackSetOperationType` <a name="resetStackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetOperationType"></a>

```typescript
public resetStackSetOperationType(): void
```

##### `resetStackSetRegions` <a name="resetStackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetRegions"></a>

```typescript
public resetStackSetRegions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccountsInput">stackSetAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCountInput">stackSetFailureToleranceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentageInput">stackSetFailureTolerancePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCountInput">stackSetMaxConcurrencyCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentageInput">stackSetMaxConcurrencyPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationTypeInput">stackSetOperationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegionsInput">stackSetRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts">stackSetAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount">stackSetFailureToleranceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage">stackSetFailureTolerancePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount">stackSetMaxConcurrencyCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage">stackSetMaxConcurrencyPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType">stackSetOperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions">stackSetRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stackSetAccountsInput`<sup>Optional</sup> <a name="stackSetAccountsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccountsInput"></a>

```typescript
public readonly stackSetAccountsInput: string[];
```

- *Type:* string[]

---

##### `stackSetFailureToleranceCountInput`<sup>Optional</sup> <a name="stackSetFailureToleranceCountInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCountInput"></a>

```typescript
public readonly stackSetFailureToleranceCountInput: number;
```

- *Type:* number

---

##### `stackSetFailureTolerancePercentageInput`<sup>Optional</sup> <a name="stackSetFailureTolerancePercentageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentageInput"></a>

```typescript
public readonly stackSetFailureTolerancePercentageInput: number;
```

- *Type:* number

---

##### `stackSetMaxConcurrencyCountInput`<sup>Optional</sup> <a name="stackSetMaxConcurrencyCountInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCountInput"></a>

```typescript
public readonly stackSetMaxConcurrencyCountInput: number;
```

- *Type:* number

---

##### `stackSetMaxConcurrencyPercentageInput`<sup>Optional</sup> <a name="stackSetMaxConcurrencyPercentageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentageInput"></a>

```typescript
public readonly stackSetMaxConcurrencyPercentageInput: number;
```

- *Type:* number

---

##### `stackSetOperationTypeInput`<sup>Optional</sup> <a name="stackSetOperationTypeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationTypeInput"></a>

```typescript
public readonly stackSetOperationTypeInput: string;
```

- *Type:* string

---

##### `stackSetRegionsInput`<sup>Optional</sup> <a name="stackSetRegionsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegionsInput"></a>

```typescript
public readonly stackSetRegionsInput: string[];
```

- *Type:* string[]

---

##### `stackSetAccounts`<sup>Required</sup> <a name="stackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts"></a>

```typescript
public readonly stackSetAccounts: string[];
```

- *Type:* string[]

---

##### `stackSetFailureToleranceCount`<sup>Required</sup> <a name="stackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount"></a>

```typescript
public readonly stackSetFailureToleranceCount: number;
```

- *Type:* number

---

##### `stackSetFailureTolerancePercentage`<sup>Required</sup> <a name="stackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage"></a>

```typescript
public readonly stackSetFailureTolerancePercentage: number;
```

- *Type:* number

---

##### `stackSetMaxConcurrencyCount`<sup>Required</sup> <a name="stackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount"></a>

```typescript
public readonly stackSetMaxConcurrencyCount: number;
```

- *Type:* number

---

##### `stackSetMaxConcurrencyPercentage`<sup>Required</sup> <a name="stackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage"></a>

```typescript
public readonly stackSetMaxConcurrencyPercentage: number;
```

- *Type:* number

---

##### `stackSetOperationType`<sup>Required</sup> <a name="stackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType"></a>

```typescript
public readonly stackSetOperationType: string;
```

- *Type:* string

---

##### `stackSetRegions`<sup>Required</sup> <a name="stackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions"></a>

```typescript
public readonly stackSetRegions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProvisionedProductProvisioningPreferences;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---


### ServicecatalogCloudformationProvisionedProductTagsList <a name="ServicecatalogCloudformationProvisionedProductTagsList" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get"></a>

```typescript
public get(index: number): ServicecatalogCloudformationProvisionedProductTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProvisionedProductTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>[]

---


### ServicecatalogCloudformationProvisionedProductTagsOutputReference <a name="ServicecatalogCloudformationProvisionedProductTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer"></a>

```typescript
import { servicecatalogCloudformationProvisionedProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProvisionedProductTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags">ServicecatalogCloudformationProvisionedProductTags</a>

---



