# `imagebuilderImage` Submodule <a name="`imagebuilderImage` Submodule" id="@cdktn/provider-awscc.imagebuilderImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImage <a name="ImagebuilderImage" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image awscc_imagebuilder_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImage(scope: Construct, id: string, config?: ImagebuilderImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig">ImagebuilderImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig">ImagebuilderImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putDeletionSettings">putDeletionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putImagePipelineExecutionSettings">putImagePipelineExecutionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putImageScanningConfiguration">putImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration">putImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putWorkflows">putWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetContainerRecipeArn">resetContainerRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetDeletionSettings">resetDeletionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetDistributionConfigurationArn">resetDistributionConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetEnhancedImageMetadataEnabled">resetEnhancedImageMetadataEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetImagePipelineExecutionSettings">resetImagePipelineExecutionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetImageRecipeArn">resetImageRecipeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetImageScanningConfiguration">resetImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetImageTestsConfiguration">resetImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetInfrastructureConfigurationArn">resetInfrastructureConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetWorkflows">resetWorkflows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeletionSettings` <a name="putDeletionSettings" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putDeletionSettings"></a>

```typescript
public putDeletionSettings(value: ImagebuilderImageDeletionSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putDeletionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings">ImagebuilderImageDeletionSettings</a>

---

##### `putImagePipelineExecutionSettings` <a name="putImagePipelineExecutionSettings" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putImagePipelineExecutionSettings"></a>

```typescript
public putImagePipelineExecutionSettings(value: ImagebuilderImageImagePipelineExecutionSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putImagePipelineExecutionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings">ImagebuilderImageImagePipelineExecutionSettings</a>

---

##### `putImageScanningConfiguration` <a name="putImageScanningConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putImageScanningConfiguration"></a>

```typescript
public putImageScanningConfiguration(value: ImagebuilderImageImageScanningConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putImageScanningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

---

##### `putImageTestsConfiguration` <a name="putImageTestsConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration"></a>

```typescript
public putImageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putImageTestsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putLoggingConfiguration"></a>

```typescript
public putLoggingConfiguration(value: ImagebuilderImageLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a>

---

##### `putWorkflows` <a name="putWorkflows" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putWorkflows"></a>

```typescript
public putWorkflows(value: IResolvable | ImagebuilderImageWorkflows[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.putWorkflows.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows">ImagebuilderImageWorkflows</a>[]

---

##### `resetContainerRecipeArn` <a name="resetContainerRecipeArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetContainerRecipeArn"></a>

```typescript
public resetContainerRecipeArn(): void
```

##### `resetDeletionSettings` <a name="resetDeletionSettings" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetDeletionSettings"></a>

```typescript
public resetDeletionSettings(): void
```

##### `resetDistributionConfigurationArn` <a name="resetDistributionConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetDistributionConfigurationArn"></a>

```typescript
public resetDistributionConfigurationArn(): void
```

##### `resetEnhancedImageMetadataEnabled` <a name="resetEnhancedImageMetadataEnabled" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetEnhancedImageMetadataEnabled"></a>

```typescript
public resetEnhancedImageMetadataEnabled(): void
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```

##### `resetImagePipelineExecutionSettings` <a name="resetImagePipelineExecutionSettings" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetImagePipelineExecutionSettings"></a>

```typescript
public resetImagePipelineExecutionSettings(): void
```

##### `resetImageRecipeArn` <a name="resetImageRecipeArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetImageRecipeArn"></a>

```typescript
public resetImageRecipeArn(): void
```

##### `resetImageScanningConfiguration` <a name="resetImageScanningConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetImageScanningConfiguration"></a>

```typescript
public resetImageScanningConfiguration(): void
```

##### `resetImageTestsConfiguration` <a name="resetImageTestsConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetImageTestsConfiguration"></a>

```typescript
public resetImageTestsConfiguration(): void
```

##### `resetInfrastructureConfigurationArn` <a name="resetInfrastructureConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetInfrastructureConfigurationArn"></a>

```typescript
public resetInfrastructureConfigurationArn(): void
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetLoggingConfiguration"></a>

```typescript
public resetLoggingConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWorkflows` <a name="resetWorkflows" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.resetWorkflows"></a>

```typescript
public resetWorkflows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderImage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.isConstruct"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

imagebuilderImage.ImagebuilderImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.isTerraformElement"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

imagebuilderImage.ImagebuilderImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.isTerraformResource"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

imagebuilderImage.ImagebuilderImage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.generateConfigForImport"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

imagebuilderImage.ImagebuilderImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ImagebuilderImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.deletionSettings">deletionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference">ImagebuilderImageDeletionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imagePipelineExecutionSettings">imagePipelineExecutionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference">ImagebuilderImageImagePipelineExecutionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageScanningConfiguration">imageScanningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageTestsConfiguration">imageTestsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference">ImagebuilderImageImageTestsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.latestVersion">latestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference">ImagebuilderImageLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference">ImagebuilderImageLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.workflows">workflows</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList">ImagebuilderImageWorkflowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.containerRecipeArnInput">containerRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.deletionSettingsInput">deletionSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings">ImagebuilderImageDeletionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArnInput">distributionConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabledInput">enhancedImageMetadataEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imagePipelineExecutionSettingsInput">imagePipelineExecutionSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings">ImagebuilderImageImagePipelineExecutionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageRecipeArnInput">imageRecipeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageScanningConfigurationInput">imageScanningConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageTestsConfigurationInput">imageTestsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArnInput">infrastructureConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.workflowsInput">workflowsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows">ImagebuilderImageWorkflows</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.containerRecipeArn">containerRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArn">distributionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabled">enhancedImageMetadataEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageRecipeArn">imageRecipeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArn">infrastructureConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deletionSettings`<sup>Required</sup> <a name="deletionSettings" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.deletionSettings"></a>

```typescript
public readonly deletionSettings: ImagebuilderImageDeletionSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference">ImagebuilderImageDeletionSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imagePipelineExecutionSettings`<sup>Required</sup> <a name="imagePipelineExecutionSettings" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imagePipelineExecutionSettings"></a>

```typescript
public readonly imagePipelineExecutionSettings: ImagebuilderImageImagePipelineExecutionSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference">ImagebuilderImageImagePipelineExecutionSettingsOutputReference</a>

---

##### `imageScanningConfiguration`<sup>Required</sup> <a name="imageScanningConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageScanningConfiguration"></a>

```typescript
public readonly imageScanningConfiguration: ImagebuilderImageImageScanningConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationOutputReference</a>

---

##### `imageTestsConfiguration`<sup>Required</sup> <a name="imageTestsConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageTestsConfiguration"></a>

```typescript
public readonly imageTestsConfiguration: ImagebuilderImageImageTestsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference">ImagebuilderImageImageTestsConfigurationOutputReference</a>

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.latestVersion"></a>

```typescript
public readonly latestVersion: ImagebuilderImageLatestVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference">ImagebuilderImageLatestVersionOutputReference</a>

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: ImagebuilderImageLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference">ImagebuilderImageLoggingConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workflows`<sup>Required</sup> <a name="workflows" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.workflows"></a>

```typescript
public readonly workflows: ImagebuilderImageWorkflowsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList">ImagebuilderImageWorkflowsList</a>

---

##### `containerRecipeArnInput`<sup>Optional</sup> <a name="containerRecipeArnInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.containerRecipeArnInput"></a>

```typescript
public readonly containerRecipeArnInput: string;
```

- *Type:* string

---

##### `deletionSettingsInput`<sup>Optional</sup> <a name="deletionSettingsInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.deletionSettingsInput"></a>

```typescript
public readonly deletionSettingsInput: IResolvable | ImagebuilderImageDeletionSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings">ImagebuilderImageDeletionSettings</a>

---

##### `distributionConfigurationArnInput`<sup>Optional</sup> <a name="distributionConfigurationArnInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArnInput"></a>

```typescript
public readonly distributionConfigurationArnInput: string;
```

- *Type:* string

---

##### `enhancedImageMetadataEnabledInput`<sup>Optional</sup> <a name="enhancedImageMetadataEnabledInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabledInput"></a>

```typescript
public readonly enhancedImageMetadataEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `imagePipelineExecutionSettingsInput`<sup>Optional</sup> <a name="imagePipelineExecutionSettingsInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imagePipelineExecutionSettingsInput"></a>

```typescript
public readonly imagePipelineExecutionSettingsInput: IResolvable | ImagebuilderImageImagePipelineExecutionSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings">ImagebuilderImageImagePipelineExecutionSettings</a>

---

##### `imageRecipeArnInput`<sup>Optional</sup> <a name="imageRecipeArnInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageRecipeArnInput"></a>

```typescript
public readonly imageRecipeArnInput: string;
```

- *Type:* string

---

##### `imageScanningConfigurationInput`<sup>Optional</sup> <a name="imageScanningConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageScanningConfigurationInput"></a>

```typescript
public readonly imageScanningConfigurationInput: IResolvable | ImagebuilderImageImageScanningConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

---

##### `imageTestsConfigurationInput`<sup>Optional</sup> <a name="imageTestsConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageTestsConfigurationInput"></a>

```typescript
public readonly imageTestsConfigurationInput: IResolvable | ImagebuilderImageImageTestsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---

##### `infrastructureConfigurationArnInput`<sup>Optional</sup> <a name="infrastructureConfigurationArnInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArnInput"></a>

```typescript
public readonly infrastructureConfigurationArnInput: string;
```

- *Type:* string

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.loggingConfigurationInput"></a>

```typescript
public readonly loggingConfigurationInput: IResolvable | ImagebuilderImageLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workflowsInput`<sup>Optional</sup> <a name="workflowsInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.workflowsInput"></a>

```typescript
public readonly workflowsInput: IResolvable | ImagebuilderImageWorkflows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows">ImagebuilderImageWorkflows</a>[]

---

##### `containerRecipeArn`<sup>Required</sup> <a name="containerRecipeArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.containerRecipeArn"></a>

```typescript
public readonly containerRecipeArn: string;
```

- *Type:* string

---

##### `distributionConfigurationArn`<sup>Required</sup> <a name="distributionConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.distributionConfigurationArn"></a>

```typescript
public readonly distributionConfigurationArn: string;
```

- *Type:* string

---

##### `enhancedImageMetadataEnabled`<sup>Required</sup> <a name="enhancedImageMetadataEnabled" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.enhancedImageMetadataEnabled"></a>

```typescript
public readonly enhancedImageMetadataEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `imageRecipeArn`<sup>Required</sup> <a name="imageRecipeArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.imageRecipeArn"></a>

```typescript
public readonly imageRecipeArn: string;
```

- *Type:* string

---

##### `infrastructureConfigurationArn`<sup>Required</sup> <a name="infrastructureConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.infrastructureConfigurationArn"></a>

```typescript
public readonly infrastructureConfigurationArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageConfig <a name="ImagebuilderImageConfig" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

const imagebuilderImageConfig: imagebuilderImage.ImagebuilderImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.containerRecipeArn">containerRecipeArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.deletionSettings">deletionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings">ImagebuilderImageDeletionSettings</a></code> | The deletion settings of the image, indicating whether to delete the underlying resources in addition to the image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.distributionConfigurationArn">distributionConfigurationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the distribution configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.enhancedImageMetadataEnabled">enhancedImageMetadataEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Collects additional information about the image being created, including the operating system (OS) version and package list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.executionRole">executionRole</a></code> | <code>string</code> | The execution role name/ARN for the image build, if provided. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.imagePipelineExecutionSettings">imagePipelineExecutionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings">ImagebuilderImageImagePipelineExecutionSettings</a></code> | The image pipeline execution settings of the image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.imageRecipeArn">imageRecipeArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.imageScanningConfiguration">imageScanningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a></code> | Contains settings for vulnerability scans. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.imageTestsConfiguration">imageTestsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | The image tests configuration used when creating this image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.infrastructureConfigurationArn">infrastructureConfigurationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a></code> | The logging configuration settings for the image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags associated with the image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.workflows">workflows</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows">ImagebuilderImageWorkflows</a>[]</code> | Workflows to define the image build process. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `containerRecipeArn`<sup>Optional</sup> <a name="containerRecipeArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.containerRecipeArn"></a>

```typescript
public readonly containerRecipeArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}

---

##### `deletionSettings`<sup>Optional</sup> <a name="deletionSettings" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.deletionSettings"></a>

```typescript
public readonly deletionSettings: ImagebuilderImageDeletionSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings">ImagebuilderImageDeletionSettings</a>

The deletion settings of the image, indicating whether to delete the underlying resources in addition to the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#deletion_settings ImagebuilderImage#deletion_settings}

---

##### `distributionConfigurationArn`<sup>Optional</sup> <a name="distributionConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.distributionConfigurationArn"></a>

```typescript
public readonly distributionConfigurationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the distribution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}

---

##### `enhancedImageMetadataEnabled`<sup>Optional</sup> <a name="enhancedImageMetadataEnabled" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.enhancedImageMetadataEnabled"></a>

```typescript
public readonly enhancedImageMetadataEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Collects additional information about the image being created, including the operating system (OS) version and package list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

The execution role name/ARN for the image build, if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#execution_role ImagebuilderImage#execution_role}

---

##### `imagePipelineExecutionSettings`<sup>Optional</sup> <a name="imagePipelineExecutionSettings" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.imagePipelineExecutionSettings"></a>

```typescript
public readonly imagePipelineExecutionSettings: ImagebuilderImageImagePipelineExecutionSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings">ImagebuilderImageImagePipelineExecutionSettings</a>

The image pipeline execution settings of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#image_pipeline_execution_settings ImagebuilderImage#image_pipeline_execution_settings}

---

##### `imageRecipeArn`<sup>Optional</sup> <a name="imageRecipeArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.imageRecipeArn"></a>

```typescript
public readonly imageRecipeArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}

---

##### `imageScanningConfiguration`<sup>Optional</sup> <a name="imageScanningConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.imageScanningConfiguration"></a>

```typescript
public readonly imageScanningConfiguration: ImagebuilderImageImageScanningConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

Contains settings for vulnerability scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#image_scanning_configuration ImagebuilderImage#image_scanning_configuration}

---

##### `imageTestsConfiguration`<sup>Optional</sup> <a name="imageTestsConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.imageTestsConfiguration"></a>

```typescript
public readonly imageTestsConfiguration: ImagebuilderImageImageTestsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

The image tests configuration used when creating this image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#image_tests_configuration ImagebuilderImage#image_tests_configuration}

---

##### `infrastructureConfigurationArn`<sup>Optional</sup> <a name="infrastructureConfigurationArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.infrastructureConfigurationArn"></a>

```typescript
public readonly infrastructureConfigurationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: ImagebuilderImageLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a>

The logging configuration settings for the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#logging_configuration ImagebuilderImage#logging_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags associated with the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#tags ImagebuilderImage#tags}

---

##### `workflows`<sup>Optional</sup> <a name="workflows" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageConfig.property.workflows"></a>

```typescript
public readonly workflows: IResolvable | ImagebuilderImageWorkflows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows">ImagebuilderImageWorkflows</a>[]

Workflows to define the image build process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#workflows ImagebuilderImage#workflows}

---

### ImagebuilderImageDeletionSettings <a name="ImagebuilderImageDeletionSettings" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

const imagebuilderImageDeletionSettings: imagebuilderImage.ImagebuilderImageDeletionSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings.property.executionRole">executionRole</a></code> | <code>string</code> | The execution role to use for deleting the image, as well as underlying resources. |

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

The execution role to use for deleting the image, as well as underlying resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#execution_role ImagebuilderImage#execution_role}

---

### ImagebuilderImageImagePipelineExecutionSettings <a name="ImagebuilderImageImagePipelineExecutionSettings" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

const imagebuilderImageImagePipelineExecutionSettings: imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings.property.deploymentId">deploymentId</a></code> | <code>string</code> | The deployment ID of the pipeline, used to trigger new image pipeline executions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings.property.onUpdate">onUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to trigger the image pipeline when the pipeline is updated. False by default. |

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

The deployment ID of the pipeline, used to trigger new image pipeline executions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#deployment_id ImagebuilderImage#deployment_id}

---

##### `onUpdate`<sup>Optional</sup> <a name="onUpdate" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings.property.onUpdate"></a>

```typescript
public readonly onUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to trigger the image pipeline when the pipeline is updated. False by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#on_update ImagebuilderImage#on_update}

---

### ImagebuilderImageImageScanningConfiguration <a name="ImagebuilderImageImageScanningConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

const imagebuilderImageImageScanningConfiguration: imagebuilderImage.ImagebuilderImageImageScanningConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.ecrConfiguration">ecrConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a></code> | Contains ECR settings for vulnerability scans. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.imageScanningEnabled">imageScanningEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image. |

---

##### `ecrConfiguration`<sup>Optional</sup> <a name="ecrConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.ecrConfiguration"></a>

```typescript
public readonly ecrConfiguration: ImagebuilderImageImageScanningConfigurationEcrConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

Contains ECR settings for vulnerability scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#ecr_configuration ImagebuilderImage#ecr_configuration}

---

##### `imageScanningEnabled`<sup>Optional</sup> <a name="imageScanningEnabled" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration.property.imageScanningEnabled"></a>

```typescript
public readonly imageScanningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#image_scanning_enabled ImagebuilderImage#image_scanning_enabled}

---

### ImagebuilderImageImageScanningConfigurationEcrConfiguration <a name="ImagebuilderImageImageScanningConfigurationEcrConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

const imagebuilderImageImageScanningConfigurationEcrConfiguration: imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.containerTags">containerTags</a></code> | <code>string[]</code> | Tags for Image Builder to apply the output container image that is scanned. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of the container repository that Amazon Inspector scans to identify findings for your container images. |

---

##### `containerTags`<sup>Optional</sup> <a name="containerTags" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

Tags for Image Builder to apply the output container image that is scanned.

Tags can help you identify and manage your scanned images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#container_tags ImagebuilderImage#container_tags}

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of the container repository that Amazon Inspector scans to identify findings for your container images.

The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#repository_name ImagebuilderImage#repository_name}

---

### ImagebuilderImageImageTestsConfiguration <a name="ImagebuilderImageImageTestsConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

const imagebuilderImageImageTestsConfiguration: imagebuilderImage.ImagebuilderImageImageTestsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.imageTestsEnabled">imageTestsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | ImageTestsEnabled. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | TimeoutMinutes. |

---

##### `imageTestsEnabled`<sup>Optional</sup> <a name="imageTestsEnabled" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.imageTestsEnabled"></a>

```typescript
public readonly imageTestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

ImageTestsEnabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}

---

##### `timeoutMinutes`<sup>Optional</sup> <a name="timeoutMinutes" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

TimeoutMinutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}

---

### ImagebuilderImageLatestVersion <a name="ImagebuilderImageLatestVersion" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersion.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

const imagebuilderImageLatestVersion: imagebuilderImage.ImagebuilderImageLatestVersion = { ... }
```


### ImagebuilderImageLoggingConfiguration <a name="ImagebuilderImageLoggingConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

const imagebuilderImageLoggingConfiguration: imagebuilderImage.ImagebuilderImageLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration.property.logGroupName">logGroupName</a></code> | <code>string</code> | The name of the log group for image build logs. |

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The name of the log group for image build logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#log_group_name ImagebuilderImage#log_group_name}

---

### ImagebuilderImageWorkflows <a name="ImagebuilderImageWorkflows" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

const imagebuilderImageWorkflows: imagebuilderImage.ImagebuilderImageWorkflows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows.property.onFailure">onFailure</a></code> | <code>string</code> | Define execution decision in case of workflow failure. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows.property.parallelGroup">parallelGroup</a></code> | <code>string</code> | The parallel group name. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters">ImagebuilderImageWorkflowsParameters</a>[]</code> | The parameters associated with the workflow. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows.property.workflowArn">workflowArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the workflow. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows.property.onFailure"></a>

```typescript
public readonly onFailure: string;
```

- *Type:* string

Define execution decision in case of workflow failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#on_failure ImagebuilderImage#on_failure}

---

##### `parallelGroup`<sup>Optional</sup> <a name="parallelGroup" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows.property.parallelGroup"></a>

```typescript
public readonly parallelGroup: string;
```

- *Type:* string

The parallel group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#parallel_group ImagebuilderImage#parallel_group}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | ImagebuilderImageWorkflowsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters">ImagebuilderImageWorkflowsParameters</a>[]

The parameters associated with the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#parameters ImagebuilderImage#parameters}

---

##### `workflowArn`<sup>Optional</sup> <a name="workflowArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows.property.workflowArn"></a>

```typescript
public readonly workflowArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#workflow_arn ImagebuilderImage#workflow_arn}

---

### ImagebuilderImageWorkflowsParameters <a name="ImagebuilderImageWorkflowsParameters" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

const imagebuilderImageWorkflowsParameters: imagebuilderImage.ImagebuilderImageWorkflowsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#name ImagebuilderImage#name}. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#value ImagebuilderImage#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#name ImagebuilderImage#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image#value ImagebuilderImage#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageDeletionSettingsOutputReference <a name="ImagebuilderImageDeletionSettingsOutputReference" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings">ImagebuilderImageDeletionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageDeletionSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageDeletionSettings">ImagebuilderImageDeletionSettings</a>

---


### ImagebuilderImageImagePipelineExecutionSettingsOutputReference <a name="ImagebuilderImageImagePipelineExecutionSettingsOutputReference" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.resetOnUpdate">resetOnUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetOnUpdate` <a name="resetOnUpdate" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.resetOnUpdate"></a>

```typescript
public resetOnUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.onUpdateInput">onUpdateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.onUpdate">onUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings">ImagebuilderImageImagePipelineExecutionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `onUpdateInput`<sup>Optional</sup> <a name="onUpdateInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.onUpdateInput"></a>

```typescript
public readonly onUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `onUpdate`<sup>Required</sup> <a name="onUpdate" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.onUpdate"></a>

```typescript
public readonly onUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageImagePipelineExecutionSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImagePipelineExecutionSettings">ImagebuilderImageImagePipelineExecutionSettings</a>

---


### ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference <a name="ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags">resetContainerTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName">resetRepositoryName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerTags` <a name="resetContainerTags" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetContainerTags"></a>

```typescript
public resetContainerTags(): void
```

##### `resetRepositoryName` <a name="resetRepositoryName" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.resetRepositoryName"></a>

```typescript
public resetRepositoryName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput">containerTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags">containerTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerTagsInput`<sup>Optional</sup> <a name="containerTagsInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTagsInput"></a>

```typescript
public readonly containerTagsInput: string[];
```

- *Type:* string[]

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `containerTags`<sup>Required</sup> <a name="containerTags" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.containerTags"></a>

```typescript
public readonly containerTags: string[];
```

- *Type:* string[]

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageImageScanningConfigurationEcrConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

---


### ImagebuilderImageImageScanningConfigurationOutputReference <a name="ImagebuilderImageImageScanningConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.putEcrConfiguration">putEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetEcrConfiguration">resetEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetImageScanningEnabled">resetImageScanningEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEcrConfiguration` <a name="putEcrConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.putEcrConfiguration"></a>

```typescript
public putEcrConfiguration(value: ImagebuilderImageImageScanningConfigurationEcrConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.putEcrConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

---

##### `resetEcrConfiguration` <a name="resetEcrConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetEcrConfiguration"></a>

```typescript
public resetEcrConfiguration(): void
```

##### `resetImageScanningEnabled` <a name="resetImageScanningEnabled" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.resetImageScanningEnabled"></a>

```typescript
public resetImageScanningEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfiguration">ecrConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfigurationInput">ecrConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabledInput">imageScanningEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabled">imageScanningEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ecrConfiguration`<sup>Required</sup> <a name="ecrConfiguration" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfiguration"></a>

```typescript
public readonly ecrConfiguration: ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference">ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference</a>

---

##### `ecrConfigurationInput`<sup>Optional</sup> <a name="ecrConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.ecrConfigurationInput"></a>

```typescript
public readonly ecrConfigurationInput: IResolvable | ImagebuilderImageImageScanningConfigurationEcrConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationEcrConfiguration">ImagebuilderImageImageScanningConfigurationEcrConfiguration</a>

---

##### `imageScanningEnabledInput`<sup>Optional</sup> <a name="imageScanningEnabledInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabledInput"></a>

```typescript
public readonly imageScanningEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageScanningEnabled`<sup>Required</sup> <a name="imageScanningEnabled" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.imageScanningEnabled"></a>

```typescript
public readonly imageScanningEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageImageScanningConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageScanningConfiguration">ImagebuilderImageImageScanningConfiguration</a>

---


### ImagebuilderImageImageTestsConfigurationOutputReference <a name="ImagebuilderImageImageTestsConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetImageTestsEnabled">resetImageTestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetTimeoutMinutes">resetTimeoutMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageTestsEnabled` <a name="resetImageTestsEnabled" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetImageTestsEnabled"></a>

```typescript
public resetImageTestsEnabled(): void
```

##### `resetTimeoutMinutes` <a name="resetTimeoutMinutes" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.resetTimeoutMinutes"></a>

```typescript
public resetTimeoutMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabledInput">imageTestsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutesInput">timeoutMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabled">imageTestsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutes">timeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageTestsEnabledInput`<sup>Optional</sup> <a name="imageTestsEnabledInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabledInput"></a>

```typescript
public readonly imageTestsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutMinutesInput`<sup>Optional</sup> <a name="timeoutMinutesInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutesInput"></a>

```typescript
public readonly timeoutMinutesInput: number;
```

- *Type:* number

---

##### `imageTestsEnabled`<sup>Required</sup> <a name="imageTestsEnabled" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.imageTestsEnabled"></a>

```typescript
public readonly imageTestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutMinutes`<sup>Required</sup> <a name="timeoutMinutes" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.timeoutMinutes"></a>

```typescript
public readonly timeoutMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageImageTestsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageImageTestsConfiguration">ImagebuilderImageImageTestsConfiguration</a>

---


### ImagebuilderImageLatestVersionOutputReference <a name="ImagebuilderImageLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageLatestVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.major">major</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.minor">minor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.patch">patch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersion">ImagebuilderImageLatestVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.major"></a>

```typescript
public readonly major: string;
```

- *Type:* string

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.minor"></a>

```typescript
public readonly minor: string;
```

- *Type:* string

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.patch"></a>

```typescript
public readonly patch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImageLatestVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLatestVersion">ImagebuilderImageLatestVersion</a>

---


### ImagebuilderImageLoggingConfigurationOutputReference <a name="ImagebuilderImageLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.resetLogGroupName"></a>

```typescript
public resetLogGroupName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageLoggingConfiguration">ImagebuilderImageLoggingConfiguration</a>

---


### ImagebuilderImageWorkflowsList <a name="ImagebuilderImageWorkflowsList" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageWorkflowsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.get"></a>

```typescript
public get(index: number): ImagebuilderImageWorkflowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows">ImagebuilderImageWorkflows</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageWorkflows[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows">ImagebuilderImageWorkflows</a>[]

---


### ImagebuilderImageWorkflowsOutputReference <a name="ImagebuilderImageWorkflowsOutputReference" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageWorkflowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resetParallelGroup">resetParallelGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resetWorkflowArn">resetWorkflowArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | ImagebuilderImageWorkflowsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters">ImagebuilderImageWorkflowsParameters</a>[]

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resetOnFailure"></a>

```typescript
public resetOnFailure(): void
```

##### `resetParallelGroup` <a name="resetParallelGroup" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resetParallelGroup"></a>

```typescript
public resetParallelGroup(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetWorkflowArn` <a name="resetWorkflowArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.resetWorkflowArn"></a>

```typescript
public resetWorkflowArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList">ImagebuilderImageWorkflowsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.onFailureInput">onFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.parallelGroupInput">parallelGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters">ImagebuilderImageWorkflowsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.workflowArnInput">workflowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.onFailure">onFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.parallelGroup">parallelGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.workflowArn">workflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows">ImagebuilderImageWorkflows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: ImagebuilderImageWorkflowsParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList">ImagebuilderImageWorkflowsParametersList</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.onFailureInput"></a>

```typescript
public readonly onFailureInput: string;
```

- *Type:* string

---

##### `parallelGroupInput`<sup>Optional</sup> <a name="parallelGroupInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.parallelGroupInput"></a>

```typescript
public readonly parallelGroupInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | ImagebuilderImageWorkflowsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters">ImagebuilderImageWorkflowsParameters</a>[]

---

##### `workflowArnInput`<sup>Optional</sup> <a name="workflowArnInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.workflowArnInput"></a>

```typescript
public readonly workflowArnInput: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: string;
```

- *Type:* string

---

##### `parallelGroup`<sup>Required</sup> <a name="parallelGroup" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.parallelGroup"></a>

```typescript
public readonly parallelGroup: string;
```

- *Type:* string

---

##### `workflowArn`<sup>Required</sup> <a name="workflowArn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.workflowArn"></a>

```typescript
public readonly workflowArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageWorkflows;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflows">ImagebuilderImageWorkflows</a>

---


### ImagebuilderImageWorkflowsParametersList <a name="ImagebuilderImageWorkflowsParametersList" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageWorkflowsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.get"></a>

```typescript
public get(index: number): ImagebuilderImageWorkflowsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters">ImagebuilderImageWorkflowsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageWorkflowsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters">ImagebuilderImageWorkflowsParameters</a>[]

---


### ImagebuilderImageWorkflowsParametersOutputReference <a name="ImagebuilderImageWorkflowsParametersOutputReference" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.Initializer"></a>

```typescript
import { imagebuilderImage } from '@cdktn/provider-awscc'

new imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters">ImagebuilderImageWorkflowsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageWorkflowsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImage.ImagebuilderImageWorkflowsParameters">ImagebuilderImageWorkflowsParameters</a>

---



