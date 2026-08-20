# `servicecatalogCloudformationProduct` Submodule <a name="`servicecatalogCloudformationProduct` Submodule" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogCloudformationProduct <a name="ServicecatalogCloudformationProduct" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product awscc_servicecatalog_cloudformation_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct(scope: Construct, id: string, config: ServicecatalogCloudformationProductConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig">ServicecatalogCloudformationProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig">ServicecatalogCloudformationProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters">putProvisioningArtifactParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection">putSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDistributor">resetDistributor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProductType">resetProductType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProvisioningArtifactParameters">resetProvisioningArtifactParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetReplaceProvisioningArtifacts">resetReplaceProvisioningArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSourceConnection">resetSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportDescription">resetSupportDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportEmail">resetSupportEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProvisioningArtifactParameters` <a name="putProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters"></a>

```typescript
public putProvisioningArtifactParameters(value: IResolvable | ServicecatalogCloudformationProductProvisioningArtifactParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putProvisioningArtifactParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>[]

---

##### `putSourceConnection` <a name="putSourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection"></a>

```typescript
public putSourceConnection(value: ServicecatalogCloudformationProductSourceConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putSourceConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags"></a>

```typescript
public putTags(value: IResolvable | ServicecatalogCloudformationProductTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>[]

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDistributor` <a name="resetDistributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetDistributor"></a>

```typescript
public resetDistributor(): void
```

##### `resetProductType` <a name="resetProductType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProductType"></a>

```typescript
public resetProductType(): void
```

##### `resetProvisioningArtifactParameters` <a name="resetProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetProvisioningArtifactParameters"></a>

```typescript
public resetProvisioningArtifactParameters(): void
```

##### `resetReplaceProvisioningArtifacts` <a name="resetReplaceProvisioningArtifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetReplaceProvisioningArtifacts"></a>

```typescript
public resetReplaceProvisioningArtifacts(): void
```

##### `resetSourceConnection` <a name="resetSourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSourceConnection"></a>

```typescript
public resetSourceConnection(): void
```

##### `resetSupportDescription` <a name="resetSupportDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportDescription"></a>

```typescript
public resetSupportDescription(): void
```

##### `resetSupportEmail` <a name="resetSupportEmail" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportEmail"></a>

```typescript
public resetSupportEmail(): void
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetSupportUrl"></a>

```typescript
public resetSupportUrl(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicecatalogCloudformationProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogCloudformationProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogCloudformationProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogCloudformationProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cloudformationProductId">cloudformationProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productName">productName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactIds">provisioningArtifactIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactNames">provisioningArtifactNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParameters">provisioningArtifactParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList">ServicecatalogCloudformationProductProvisioningArtifactParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference">ServicecatalogCloudformationProductSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList">ServicecatalogCloudformationProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributorInput">distributorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productTypeInput">productTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParametersInput">provisioningArtifactParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifactsInput">replaceProvisioningArtifactsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnectionInput">sourceConnectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescriptionInput">supportDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmailInput">supportEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrlInput">supportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributor">distributor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productType">productType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts">replaceProvisioningArtifacts</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescription">supportDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmail">supportEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloudformationProductId`<sup>Required</sup> <a name="cloudformationProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.cloudformationProductId"></a>

```typescript
public readonly cloudformationProductId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

---

##### `provisioningArtifactIds`<sup>Required</sup> <a name="provisioningArtifactIds" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactIds"></a>

```typescript
public readonly provisioningArtifactIds: string;
```

- *Type:* string

---

##### `provisioningArtifactNames`<sup>Required</sup> <a name="provisioningArtifactNames" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactNames"></a>

```typescript
public readonly provisioningArtifactNames: string;
```

- *Type:* string

---

##### `provisioningArtifactParameters`<sup>Required</sup> <a name="provisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParameters"></a>

```typescript
public readonly provisioningArtifactParameters: ServicecatalogCloudformationProductProvisioningArtifactParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList">ServicecatalogCloudformationProductProvisioningArtifactParametersList</a>

---

##### `sourceConnection`<sup>Required</sup> <a name="sourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnection"></a>

```typescript
public readonly sourceConnection: ServicecatalogCloudformationProductSourceConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference">ServicecatalogCloudformationProductSourceConnectionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tags"></a>

```typescript
public readonly tags: ServicecatalogCloudformationProductTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList">ServicecatalogCloudformationProductTagsList</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `distributorInput`<sup>Optional</sup> <a name="distributorInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributorInput"></a>

```typescript
public readonly distributorInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `productTypeInput`<sup>Optional</sup> <a name="productTypeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productTypeInput"></a>

```typescript
public readonly productTypeInput: string;
```

- *Type:* string

---

##### `provisioningArtifactParametersInput`<sup>Optional</sup> <a name="provisioningArtifactParametersInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.provisioningArtifactParametersInput"></a>

```typescript
public readonly provisioningArtifactParametersInput: IResolvable | ServicecatalogCloudformationProductProvisioningArtifactParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>[]

---

##### `replaceProvisioningArtifactsInput`<sup>Optional</sup> <a name="replaceProvisioningArtifactsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifactsInput"></a>

```typescript
public readonly replaceProvisioningArtifactsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceConnectionInput`<sup>Optional</sup> <a name="sourceConnectionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.sourceConnectionInput"></a>

```typescript
public readonly sourceConnectionInput: IResolvable | ServicecatalogCloudformationProductSourceConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

---

##### `supportDescriptionInput`<sup>Optional</sup> <a name="supportDescriptionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescriptionInput"></a>

```typescript
public readonly supportDescriptionInput: string;
```

- *Type:* string

---

##### `supportEmailInput`<sup>Optional</sup> <a name="supportEmailInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmailInput"></a>

```typescript
public readonly supportEmailInput: string;
```

- *Type:* string

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrlInput"></a>

```typescript
public readonly supportUrlInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ServicecatalogCloudformationProductTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>[]

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distributor`<sup>Required</sup> <a name="distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.distributor"></a>

```typescript
public readonly distributor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `productType`<sup>Required</sup> <a name="productType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.productType"></a>

```typescript
public readonly productType: string;
```

- *Type:* string

---

##### `replaceProvisioningArtifacts`<sup>Required</sup> <a name="replaceProvisioningArtifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.replaceProvisioningArtifacts"></a>

```typescript
public readonly replaceProvisioningArtifacts: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportDescription`<sup>Required</sup> <a name="supportDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportDescription"></a>

```typescript
public readonly supportDescription: string;
```

- *Type:* string

---

##### `supportEmail`<sup>Required</sup> <a name="supportEmail" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportEmail"></a>

```typescript
public readonly supportEmail: string;
```

- *Type:* string

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProduct.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogCloudformationProductConfig <a name="ServicecatalogCloudformationProductConfig" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProductConfig: servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.name">name</a></code> | <code>string</code> | The name of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.owner">owner</a></code> | <code>string</code> | The owner of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.description">description</a></code> | <code>string</code> | The description of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.distributor">distributor</a></code> | <code>string</code> | The distributor of the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.productType">productType</a></code> | <code>string</code> | The type of product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioningArtifactParameters">provisioningArtifactParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>[]</code> | The configuration of the provisioning artifact (also known as a version). |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.replaceProvisioningArtifacts">replaceProvisioningArtifacts</a></code> | <code>boolean \| cdktn.IResolvable</code> | This property is turned off by default. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | A top level ProductViewDetail response containing details about the product's connection. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportDescription">supportDescription</a></code> | <code>string</code> | The support information about the product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportEmail">supportEmail</a></code> | <code>string</code> | The contact email for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportUrl">supportUrl</a></code> | <code>string</code> | The contact URL for product support. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>[]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The owner of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#owner ServicecatalogCloudformationProduct#owner}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#accept_language ServicecatalogCloudformationProduct#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}

---

##### `distributor`<sup>Optional</sup> <a name="distributor" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.distributor"></a>

```typescript
public readonly distributor: string;
```

- *Type:* string

The distributor of the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#distributor ServicecatalogCloudformationProduct#distributor}

---

##### `productType`<sup>Optional</sup> <a name="productType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.productType"></a>

```typescript
public readonly productType: string;
```

- *Type:* string

The type of product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#product_type ServicecatalogCloudformationProduct#product_type}

---

##### `provisioningArtifactParameters`<sup>Optional</sup> <a name="provisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.provisioningArtifactParameters"></a>

```typescript
public readonly provisioningArtifactParameters: IResolvable | ServicecatalogCloudformationProductProvisioningArtifactParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>[]

The configuration of the provisioning artifact (also known as a version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#provisioning_artifact_parameters ServicecatalogCloudformationProduct#provisioning_artifact_parameters}

---

##### `replaceProvisioningArtifacts`<sup>Optional</sup> <a name="replaceProvisioningArtifacts" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.replaceProvisioningArtifacts"></a>

```typescript
public readonly replaceProvisioningArtifacts: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This property is turned off by default.

If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#replace_provisioning_artifacts ServicecatalogCloudformationProduct#replace_provisioning_artifacts}

---

##### `sourceConnection`<sup>Optional</sup> <a name="sourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.sourceConnection"></a>

```typescript
public readonly sourceConnection: ServicecatalogCloudformationProductSourceConnection;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

A top level ProductViewDetail response containing details about the product's connection.

AWS Service Catalog returns this field for the CreateProduct, UpdateProduct, DescribeProductAsAdmin, and SearchProductAsAdmin APIs. This response contains the same fields as the ConnectionParameters request, with the addition of the LastSync response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#source_connection ServicecatalogCloudformationProduct#source_connection}

---

##### `supportDescription`<sup>Optional</sup> <a name="supportDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportDescription"></a>

```typescript
public readonly supportDescription: string;
```

- *Type:* string

The support information about the product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_description ServicecatalogCloudformationProduct#support_description}

---

##### `supportEmail`<sup>Optional</sup> <a name="supportEmail" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportEmail"></a>

```typescript
public readonly supportEmail: string;
```

- *Type:* string

The contact email for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_email ServicecatalogCloudformationProduct#support_email}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

The contact URL for product support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#support_url ServicecatalogCloudformationProduct#support_url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ServicecatalogCloudformationProductTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#tags ServicecatalogCloudformationProduct#tags}

---

### ServicecatalogCloudformationProductProvisioningArtifactParameters <a name="ServicecatalogCloudformationProductProvisioningArtifactParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProductProvisioningArtifactParameters: servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.description">description</a></code> | <code>string</code> | The description of the provisioning artifact, including how it differs from the previous provisioning artifact. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.disableTemplateValidation">disableTemplateValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.info">info</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | Specify the template source with one of the following options, but not both. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.name">name</a></code> | <code>string</code> | The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.type">type</a></code> | <code>string</code> | The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the provisioning artifact, including how it differs from the previous provisioning artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#description ServicecatalogCloudformationProduct#description}

---

##### `disableTemplateValidation`<sup>Optional</sup> <a name="disableTemplateValidation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.disableTemplateValidation"></a>

```typescript
public readonly disableTemplateValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#disable_template_validation ServicecatalogCloudformationProduct#disable_template_validation}

---

##### `info`<sup>Optional</sup> <a name="info" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.info"></a>

```typescript
public readonly info: ServicecatalogCloudformationProductProvisioningArtifactParametersInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

Specify the template source with one of the following options, but not both.

Keys accepted: [ LoadTemplateFromURL, ImportFromPhysicalId ] The URL of the AWS CloudFormation template in Amazon S3 in JSON format. Specify the URL in JSON format as follows:

"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."

ImportFromPhysicalId: The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. Specify the physical id in JSON format as follows: ImportFromPhysicalId: "arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#info ServicecatalogCloudformationProduct#info}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#name ServicecatalogCloudformationProduct#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}

---

### ServicecatalogCloudformationProductProvisioningArtifactParametersInfo <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersInfo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProductProvisioningArtifactParametersInfo: servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.importFromPhysicalId">importFromPhysicalId</a></code> | <code>string</code> | The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.loadTemplateFromUrl">loadTemplateFromUrl</a></code> | <code>string</code> | The URL of the AWS CloudFormation template in Amazon S3 in JSON format. |

---

##### `importFromPhysicalId`<sup>Optional</sup> <a name="importFromPhysicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.importFromPhysicalId"></a>

```typescript
public readonly importFromPhysicalId: string;
```

- *Type:* string

The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#import_from_physical_id ServicecatalogCloudformationProduct#import_from_physical_id}

---

##### `loadTemplateFromUrl`<sup>Optional</sup> <a name="loadTemplateFromUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo.property.loadTemplateFromUrl"></a>

```typescript
public readonly loadTemplateFromUrl: string;
```

- *Type:* string

The URL of the AWS CloudFormation template in Amazon S3 in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#load_template_from_url ServicecatalogCloudformationProduct#load_template_from_url}

---

### ServicecatalogCloudformationProductSourceConnection <a name="ServicecatalogCloudformationProductSourceConnection" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProductSourceConnection: servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.connectionParameters">connectionParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | The connection details based on the connection Type. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.type">type</a></code> | <code>string</code> | The only supported SourceConnection type is Codestar. |

---

##### `connectionParameters`<sup>Optional</sup> <a name="connectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.connectionParameters"></a>

```typescript
public readonly connectionParameters: ServicecatalogCloudformationProductSourceConnectionConnectionParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

The connection details based on the connection Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#connection_parameters ServicecatalogCloudformationProduct#connection_parameters}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The only supported SourceConnection type is Codestar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#type ServicecatalogCloudformationProduct#type}

---

### ServicecatalogCloudformationProductSourceConnectionConnectionParameters <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProductSourceConnectionConnectionParameters: servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.property.codeStar">codeStar</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#code_star ServicecatalogCloudformationProduct#code_star}. |

---

##### `codeStar`<sup>Optional</sup> <a name="codeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters.property.codeStar"></a>

```typescript
public readonly codeStar: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#code_star ServicecatalogCloudformationProduct#code_star}.

---

### ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar: servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.artifactPath">artifactPath</a></code> | <code>string</code> | The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.branch">branch</a></code> | <code>string</code> | The specific branch where the artifact resides. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.connectionArn">connectionArn</a></code> | <code>string</code> | The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.repository">repository</a></code> | <code>string</code> | The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo.". |

---

##### `artifactPath`<sup>Optional</sup> <a name="artifactPath" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.artifactPath"></a>

```typescript
public readonly artifactPath: string;
```

- *Type:* string

The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#artifact_path ServicecatalogCloudformationProduct#artifact_path}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The specific branch where the artifact resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#branch ServicecatalogCloudformationProduct#branch}

---

##### `connectionArn`<sup>Optional</sup> <a name="connectionArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#connection_arn ServicecatalogCloudformationProduct#connection_arn}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#repository ServicecatalogCloudformationProduct#repository}

---

### ServicecatalogCloudformationProductTags <a name="ServicecatalogCloudformationProductTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

const servicecatalogCloudformationProductTags: servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#key ServicecatalogCloudformationProduct#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicecatalog_cloudformation_product#value ServicecatalogCloudformationProduct#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetImportFromPhysicalId">resetImportFromPhysicalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetLoadTemplateFromUrl">resetLoadTemplateFromUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImportFromPhysicalId` <a name="resetImportFromPhysicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetImportFromPhysicalId"></a>

```typescript
public resetImportFromPhysicalId(): void
```

##### `resetLoadTemplateFromUrl` <a name="resetLoadTemplateFromUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.resetLoadTemplateFromUrl"></a>

```typescript
public resetLoadTemplateFromUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalIdInput">importFromPhysicalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrlInput">loadTemplateFromUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId">importFromPhysicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl">loadTemplateFromUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `importFromPhysicalIdInput`<sup>Optional</sup> <a name="importFromPhysicalIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalIdInput"></a>

```typescript
public readonly importFromPhysicalIdInput: string;
```

- *Type:* string

---

##### `loadTemplateFromUrlInput`<sup>Optional</sup> <a name="loadTemplateFromUrlInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrlInput"></a>

```typescript
public readonly loadTemplateFromUrlInput: string;
```

- *Type:* string

---

##### `importFromPhysicalId`<sup>Required</sup> <a name="importFromPhysicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.importFromPhysicalId"></a>

```typescript
public readonly importFromPhysicalId: string;
```

- *Type:* string

---

##### `loadTemplateFromUrl`<sup>Required</sup> <a name="loadTemplateFromUrl" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.loadTemplateFromUrl"></a>

```typescript
public readonly loadTemplateFromUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProductProvisioningArtifactParametersInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---


### ServicecatalogCloudformationProductProvisioningArtifactParametersList <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersList" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get"></a>

```typescript
public get(index: number): ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProductProvisioningArtifactParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>[]

---


### ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference <a name="ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo">putInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation">resetDisableTemplateValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetInfo">resetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfo` <a name="putInfo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo"></a>

```typescript
public putInfo(value: ServicecatalogCloudformationProductProvisioningArtifactParametersInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.putInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableTemplateValidation` <a name="resetDisableTemplateValidation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetDisableTemplateValidation"></a>

```typescript
public resetDisableTemplateValidation(): void
```

##### `resetInfo` <a name="resetInfo" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetInfo"></a>

```typescript
public resetInfo(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info">info</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput">disableTemplateValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.infoInput">infoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation">disableTemplateValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.info"></a>

```typescript
public readonly info: ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference">ServicecatalogCloudformationProductProvisioningArtifactParametersInfoOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableTemplateValidationInput`<sup>Optional</sup> <a name="disableTemplateValidationInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidationInput"></a>

```typescript
public readonly disableTemplateValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `infoInput`<sup>Optional</sup> <a name="infoInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.infoInput"></a>

```typescript
public readonly infoInput: IResolvable | ServicecatalogCloudformationProductProvisioningArtifactParametersInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersInfo">ServicecatalogCloudformationProductProvisioningArtifactParametersInfo</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableTemplateValidation`<sup>Required</sup> <a name="disableTemplateValidation" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.disableTemplateValidation"></a>

```typescript
public readonly disableTemplateValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProductProvisioningArtifactParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductProvisioningArtifactParameters">ServicecatalogCloudformationProductProvisioningArtifactParameters</a>

---


### ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetArtifactPath">resetArtifactPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetConnectionArn">resetConnectionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetRepository">resetRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactPath` <a name="resetArtifactPath" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetArtifactPath"></a>

```typescript
public resetArtifactPath(): void
```

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetConnectionArn` <a name="resetConnectionArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetConnectionArn"></a>

```typescript
public resetConnectionArn(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.resetRepository"></a>

```typescript
public resetRepository(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPathInput">artifactPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArnInput">connectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath">artifactPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn">connectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactPathInput`<sup>Optional</sup> <a name="artifactPathInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPathInput"></a>

```typescript
public readonly artifactPathInput: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `connectionArnInput`<sup>Optional</sup> <a name="connectionArnInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArnInput"></a>

```typescript
public readonly connectionArnInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.artifactPath"></a>

```typescript
public readonly artifactPath: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.connectionArn"></a>

```typescript
public readonly connectionArn: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---


### ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar">putCodeStar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resetCodeStar">resetCodeStar</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeStar` <a name="putCodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar"></a>

```typescript
public putCodeStar(value: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.putCodeStar.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---

##### `resetCodeStar` <a name="resetCodeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.resetCodeStar"></a>

```typescript
public resetCodeStar(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar">codeStar</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStarInput">codeStarInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeStar`<sup>Required</sup> <a name="codeStar" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStar"></a>

```typescript
public readonly codeStar: ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStarOutputReference</a>

---

##### `codeStarInput`<sup>Optional</sup> <a name="codeStarInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.codeStarInput"></a>

```typescript
public readonly codeStarInput: IResolvable | ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar">ServicecatalogCloudformationProductSourceConnectionConnectionParametersCodeStar</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProductSourceConnectionConnectionParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---


### ServicecatalogCloudformationProductSourceConnectionOutputReference <a name="ServicecatalogCloudformationProductSourceConnectionOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters">putConnectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetConnectionParameters">resetConnectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectionParameters` <a name="putConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters"></a>

```typescript
public putConnectionParameters(value: ServicecatalogCloudformationProductSourceConnectionConnectionParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.putConnectionParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---

##### `resetConnectionParameters` <a name="resetConnectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetConnectionParameters"></a>

```typescript
public resetConnectionParameters(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters">connectionParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParametersInput">connectionParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionParameters`<sup>Required</sup> <a name="connectionParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParameters"></a>

```typescript
public readonly connectionParameters: ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference">ServicecatalogCloudformationProductSourceConnectionConnectionParametersOutputReference</a>

---

##### `connectionParametersInput`<sup>Optional</sup> <a name="connectionParametersInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.connectionParametersInput"></a>

```typescript
public readonly connectionParametersInput: IResolvable | ServicecatalogCloudformationProductSourceConnectionConnectionParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionConnectionParameters">ServicecatalogCloudformationProductSourceConnectionConnectionParameters</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProductSourceConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductSourceConnection">ServicecatalogCloudformationProductSourceConnection</a>

---


### ServicecatalogCloudformationProductTagsList <a name="ServicecatalogCloudformationProductTagsList" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get"></a>

```typescript
public get(index: number): ServicecatalogCloudformationProductTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProductTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>[]

---


### ServicecatalogCloudformationProductTagsOutputReference <a name="ServicecatalogCloudformationProductTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer"></a>

```typescript
import { servicecatalogCloudformationProduct } from '@cdktn/provider-awscc'

new servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicecatalogCloudformationProductTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProduct.ServicecatalogCloudformationProductTags">ServicecatalogCloudformationProductTags</a>

---



