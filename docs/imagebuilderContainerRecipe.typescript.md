# `imagebuilderContainerRecipe` Submodule <a name="`imagebuilderContainerRecipe` Submodule" id="@cdktn/provider-awscc.imagebuilderContainerRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderContainerRecipe <a name="ImagebuilderContainerRecipe" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe awscc_imagebuilder_container_recipe}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipe(scope: Construct, id: string, config?: ImagebuilderContainerRecipeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig">ImagebuilderContainerRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig">ImagebuilderContainerRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponents">putComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration">putInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository">putTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetComponents">resetComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetContainerType">resetContainerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateData">resetDockerfileTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateUri">resetDockerfileTemplateUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetImageOsVersionOverride">resetImageOsVersionOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetInstanceConfiguration">resetInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetParentImage">resetParentImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetPlatformOverride">resetPlatformOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTargetRepository">resetTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponents` <a name="putComponents" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponents"></a>

```typescript
public putComponents(value: IResolvable | ImagebuilderContainerRecipeComponents[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putComponents.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]

---

##### `putInstanceConfiguration` <a name="putInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration"></a>

```typescript
public putInstanceConfiguration(value: ImagebuilderContainerRecipeInstanceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---

##### `putTargetRepository` <a name="putTargetRepository" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository"></a>

```typescript
public putTargetRepository(value: ImagebuilderContainerRecipeTargetRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.putTargetRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---

##### `resetComponents` <a name="resetComponents" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetComponents"></a>

```typescript
public resetComponents(): void
```

##### `resetContainerType` <a name="resetContainerType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetContainerType"></a>

```typescript
public resetContainerType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDockerfileTemplateData` <a name="resetDockerfileTemplateData" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateData"></a>

```typescript
public resetDockerfileTemplateData(): void
```

##### `resetDockerfileTemplateUri` <a name="resetDockerfileTemplateUri" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetDockerfileTemplateUri"></a>

```typescript
public resetDockerfileTemplateUri(): void
```

##### `resetImageOsVersionOverride` <a name="resetImageOsVersionOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetImageOsVersionOverride"></a>

```typescript
public resetImageOsVersionOverride(): void
```

##### `resetInstanceConfiguration` <a name="resetInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetInstanceConfiguration"></a>

```typescript
public resetInstanceConfiguration(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentImage` <a name="resetParentImage" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetParentImage"></a>

```typescript
public resetParentImage(): void
```

##### `resetPlatformOverride` <a name="resetPlatformOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetPlatformOverride"></a>

```typescript
public resetPlatformOverride(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetRepository` <a name="resetTargetRepository" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetTargetRepository"></a>

```typescript
public resetTargetRepository(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderContainerRecipe resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ImagebuilderContainerRecipe resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderContainerRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderContainerRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderContainerRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList">ImagebuilderContainerRecipeComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfiguration">instanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference">ImagebuilderContainerRecipeInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.latestVersion">latestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference">ImagebuilderContainerRecipeLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepository">targetRepository</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference">ImagebuilderContainerRecipeTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.componentsInput">componentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerTypeInput">containerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateDataInput">dockerfileTemplateDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUriInput">dockerfileTemplateUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.imageOsVersionOverrideInput">imageOsVersionOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfigurationInput">instanceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImageInput">parentImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverrideInput">platformOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepositoryInput">targetRepositoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerType">containerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateData">dockerfileTemplateData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUri">dockerfileTemplateUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.imageOsVersionOverride">imageOsVersionOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImage">parentImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverride">platformOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.components"></a>

```typescript
public readonly components: ImagebuilderContainerRecipeComponentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList">ImagebuilderContainerRecipeComponentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceConfiguration`<sup>Required</sup> <a name="instanceConfiguration" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfiguration"></a>

```typescript
public readonly instanceConfiguration: ImagebuilderContainerRecipeInstanceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference">ImagebuilderContainerRecipeInstanceConfigurationOutputReference</a>

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.latestVersion"></a>

```typescript
public readonly latestVersion: ImagebuilderContainerRecipeLatestVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference">ImagebuilderContainerRecipeLatestVersionOutputReference</a>

---

##### `targetRepository`<sup>Required</sup> <a name="targetRepository" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepository"></a>

```typescript
public readonly targetRepository: ImagebuilderContainerRecipeTargetRepositoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference">ImagebuilderContainerRecipeTargetRepositoryOutputReference</a>

---

##### `componentsInput`<sup>Optional</sup> <a name="componentsInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.componentsInput"></a>

```typescript
public readonly componentsInput: IResolvable | ImagebuilderContainerRecipeComponents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]

---

##### `containerTypeInput`<sup>Optional</sup> <a name="containerTypeInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerTypeInput"></a>

```typescript
public readonly containerTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dockerfileTemplateDataInput`<sup>Optional</sup> <a name="dockerfileTemplateDataInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateDataInput"></a>

```typescript
public readonly dockerfileTemplateDataInput: string;
```

- *Type:* string

---

##### `dockerfileTemplateUriInput`<sup>Optional</sup> <a name="dockerfileTemplateUriInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUriInput"></a>

```typescript
public readonly dockerfileTemplateUriInput: string;
```

- *Type:* string

---

##### `imageOsVersionOverrideInput`<sup>Optional</sup> <a name="imageOsVersionOverrideInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.imageOsVersionOverrideInput"></a>

```typescript
public readonly imageOsVersionOverrideInput: string;
```

- *Type:* string

---

##### `instanceConfigurationInput`<sup>Optional</sup> <a name="instanceConfigurationInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.instanceConfigurationInput"></a>

```typescript
public readonly instanceConfigurationInput: IResolvable | ImagebuilderContainerRecipeInstanceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentImageInput`<sup>Optional</sup> <a name="parentImageInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImageInput"></a>

```typescript
public readonly parentImageInput: string;
```

- *Type:* string

---

##### `platformOverrideInput`<sup>Optional</sup> <a name="platformOverrideInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverrideInput"></a>

```typescript
public readonly platformOverrideInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetRepositoryInput`<sup>Optional</sup> <a name="targetRepositoryInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.targetRepositoryInput"></a>

```typescript
public readonly targetRepositoryInput: IResolvable | ImagebuilderContainerRecipeTargetRepository;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dockerfileTemplateData`<sup>Required</sup> <a name="dockerfileTemplateData" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateData"></a>

```typescript
public readonly dockerfileTemplateData: string;
```

- *Type:* string

---

##### `dockerfileTemplateUri`<sup>Required</sup> <a name="dockerfileTemplateUri" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.dockerfileTemplateUri"></a>

```typescript
public readonly dockerfileTemplateUri: string;
```

- *Type:* string

---

##### `imageOsVersionOverride`<sup>Required</sup> <a name="imageOsVersionOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.imageOsVersionOverride"></a>

```typescript
public readonly imageOsVersionOverride: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.parentImage"></a>

```typescript
public readonly parentImage: string;
```

- *Type:* string

---

##### `platformOverride`<sup>Required</sup> <a name="platformOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.platformOverride"></a>

```typescript
public readonly platformOverride: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipe.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderContainerRecipeComponents <a name="ImagebuilderContainerRecipeComponents" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

const imagebuilderContainerRecipeComponents: imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents.property.componentArn">componentArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]</code> | A group of parameter settings that are used to configure the component for a specific recipe. |

---

##### `componentArn`<sup>Optional</sup> <a name="componentArn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents.property.componentArn"></a>

```typescript
public readonly componentArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#component_arn ImagebuilderContainerRecipe#component_arn}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | ImagebuilderContainerRecipeComponentsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]

A group of parameter settings that are used to configure the component for a specific recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#parameters ImagebuilderContainerRecipe#parameters}

---

### ImagebuilderContainerRecipeComponentsParameters <a name="ImagebuilderContainerRecipeComponentsParameters" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

const imagebuilderContainerRecipeComponentsParameters: imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters.property.name">name</a></code> | <code>string</code> | The name of the component parameter to set. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters.property.value">value</a></code> | <code>string[]</code> | Sets the value for the named component parameter. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the component parameter to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Sets the value for the named component parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#value ImagebuilderContainerRecipe#value}

---

### ImagebuilderContainerRecipeConfig <a name="ImagebuilderContainerRecipeConfig" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

const imagebuilderContainerRecipeConfig: imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.components">components</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]</code> | Components for build and test that are included in the container recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.containerType">containerType</a></code> | <code>string</code> | Specifies the type of container, such as Docker. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.description">description</a></code> | <code>string</code> | The description of the container recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateData">dockerfileTemplateData</a></code> | <code>string</code> | Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateUri">dockerfileTemplateUri</a></code> | <code>string</code> | The S3 URI for the Dockerfile that will be used to build your container image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.imageOsVersionOverride">imageOsVersionOverride</a></code> | <code>string</code> | Specifies the operating system version for the source image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.instanceConfiguration">instanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | A group of options that can be used to configure an instance for building and testing container images. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Identifies which KMS key is used to encrypt the container image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.name">name</a></code> | <code>string</code> | The name of the container recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.parentImage">parentImage</a></code> | <code>string</code> | The source image for the container recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.platformOverride">platformOverride</a></code> | <code>string</code> | Specifies the operating system platform when you use a custom source image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags that are attached to the container recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.targetRepository">targetRepository</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | The destination repository for the container image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.version">version</a></code> | <code>string</code> | The semantic version of the container recipe (<major>.<minor>.<patch>). |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | The working directory to be used during build and test workflows. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.components"></a>

```typescript
public readonly components: IResolvable | ImagebuilderContainerRecipeComponents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]

Components for build and test that are included in the container recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#components ImagebuilderContainerRecipe#components}

---

##### `containerType`<sup>Optional</sup> <a name="containerType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

Specifies the type of container, such as Docker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the container recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}

---

##### `dockerfileTemplateData`<sup>Optional</sup> <a name="dockerfileTemplateData" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateData"></a>

```typescript
public readonly dockerfileTemplateData: string;
```

- *Type:* string

Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside.

The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}

---

##### `dockerfileTemplateUri`<sup>Optional</sup> <a name="dockerfileTemplateUri" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.dockerfileTemplateUri"></a>

```typescript
public readonly dockerfileTemplateUri: string;
```

- *Type:* string

The S3 URI for the Dockerfile that will be used to build your container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}

---

##### `imageOsVersionOverride`<sup>Optional</sup> <a name="imageOsVersionOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.imageOsVersionOverride"></a>

```typescript
public readonly imageOsVersionOverride: string;
```

- *Type:* string

Specifies the operating system version for the source image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#image_os_version_override ImagebuilderContainerRecipe#image_os_version_override}

---

##### `instanceConfiguration`<sup>Optional</sup> <a name="instanceConfiguration" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.instanceConfiguration"></a>

```typescript
public readonly instanceConfiguration: ImagebuilderContainerRecipeInstanceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

A group of options that can be used to configure an instance for building and testing container images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#instance_configuration ImagebuilderContainerRecipe#instance_configuration}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Identifies which KMS key is used to encrypt the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the container recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}

---

##### `parentImage`<sup>Optional</sup> <a name="parentImage" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.parentImage"></a>

```typescript
public readonly parentImage: string;
```

- *Type:* string

The source image for the container recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}

---

##### `platformOverride`<sup>Optional</sup> <a name="platformOverride" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.platformOverride"></a>

```typescript
public readonly platformOverride: string;
```

- *Type:* string

Specifies the operating system platform when you use a custom source image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#platform_override ImagebuilderContainerRecipe#platform_override}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Tags that are attached to the container recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}

---

##### `targetRepository`<sup>Optional</sup> <a name="targetRepository" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.targetRepository"></a>

```typescript
public readonly targetRepository: ImagebuilderContainerRecipeTargetRepository;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

The destination repository for the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#target_repository ImagebuilderContainerRecipe#target_repository}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The semantic version of the container recipe (<major>.<minor>.<patch>).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeConfig.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

The working directory to be used during build and test workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}

---

### ImagebuilderContainerRecipeInstanceConfiguration <a name="ImagebuilderContainerRecipeInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

const imagebuilderContainerRecipeInstanceConfiguration: imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]</code> | Defines the block devices to attach for building an instance from this Image Builder AMI. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.image">image</a></code> | <code>string</code> | The AMI ID to use as the base image for a container build and test instance. |

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IResolvable | ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]

Defines the block devices to attach for building an instance from this Image Builder AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#block_device_mappings ImagebuilderContainerRecipe#block_device_mappings}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The AMI ID to use as the base image for a container build and test instance.

If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#image ImagebuilderContainerRecipe#image}

---

### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

const imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings: imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>string</code> | The device to which these mappings apply. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a></code> | Use to manage Amazon EBS-specific configuration for this mapping. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>string</code> | Use to remove a mapping from the parent image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>string</code> | Use to manage instance ephemeral devices. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

The device to which these mappings apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#device_name ImagebuilderContainerRecipe#device_name}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.ebs"></a>

```typescript
public readonly ebs: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a>

Use to manage Amazon EBS-specific configuration for this mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#ebs ImagebuilderContainerRecipe#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

Use to remove a mapping from the parent image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#no_device ImagebuilderContainerRecipe#no_device}

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Use to manage instance ephemeral devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#virtual_name ImagebuilderContainerRecipe#virtual_name}

---

### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

const imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs: imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use to configure delete on termination of the associated device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use to configure device encryption. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>number</code> | Use to configure device IOPS. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Use to configure the KMS key to use when encrypting the device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>string</code> | The snapshot that defines the device contents. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>number</code> | For GP3 volumes only - The throughput in MiB/s that the volume supports. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>number</code> | Use to override the device's volume size. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>string</code> | Use to override the device's volume type. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use to configure delete on termination of the associated device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use to configure device encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#encrypted ImagebuilderContainerRecipe#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Use to configure device IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#iops ImagebuilderContainerRecipe#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Use to configure the KMS key to use when encrypting the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The snapshot that defines the device contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#snapshot_id ImagebuilderContainerRecipe#snapshot_id}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

For GP3 volumes only - The throughput in MiB/s that the volume supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#throughput ImagebuilderContainerRecipe#throughput}

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Use to override the device's volume size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#volume_size ImagebuilderContainerRecipe#volume_size}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Use to override the device's volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#volume_type ImagebuilderContainerRecipe#volume_type}

---

### ImagebuilderContainerRecipeLatestVersion <a name="ImagebuilderContainerRecipeLatestVersion" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersion.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

const imagebuilderContainerRecipeLatestVersion: imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersion = { ... }
```


### ImagebuilderContainerRecipeTargetRepository <a name="ImagebuilderContainerRecipeTargetRepository" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

const imagebuilderContainerRecipeTargetRepository: imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of the container repository where the output container image is stored. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.service">service</a></code> | <code>string</code> | Specifies the service in which this image was registered. |

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of the container repository where the output container image is stored.

This name is prefixed by the repository location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#repository_name ImagebuilderContainerRecipe#repository_name}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Specifies the service in which this image was registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_container_recipe#service ImagebuilderContainerRecipe#service}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderContainerRecipeComponentsList <a name="ImagebuilderContainerRecipeComponentsList" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.get"></a>

```typescript
public get(index: number): ImagebuilderContainerRecipeComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderContainerRecipeComponents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>[]

---


### ImagebuilderContainerRecipeComponentsOutputReference <a name="ImagebuilderContainerRecipeComponentsOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resetComponentArn">resetComponentArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | ImagebuilderContainerRecipeComponentsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]

---

##### `resetComponentArn` <a name="resetComponentArn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resetComponentArn"></a>

```typescript
public resetComponentArn(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList">ImagebuilderContainerRecipeComponentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.componentArnInput">componentArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.componentArn">componentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: ImagebuilderContainerRecipeComponentsParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList">ImagebuilderContainerRecipeComponentsParametersList</a>

---

##### `componentArnInput`<sup>Optional</sup> <a name="componentArnInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.componentArnInput"></a>

```typescript
public readonly componentArnInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | ImagebuilderContainerRecipeComponentsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]

---

##### `componentArn`<sup>Required</sup> <a name="componentArn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.componentArn"></a>

```typescript
public readonly componentArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderContainerRecipeComponents;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponents">ImagebuilderContainerRecipeComponents</a>

---


### ImagebuilderContainerRecipeComponentsParametersList <a name="ImagebuilderContainerRecipeComponentsParametersList" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.get"></a>

```typescript
public get(index: number): ImagebuilderContainerRecipeComponentsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderContainerRecipeComponentsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>[]

---


### ImagebuilderContainerRecipeComponentsParametersOutputReference <a name="ImagebuilderContainerRecipeComponentsParametersOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderContainerRecipeComponentsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeComponentsParameters">ImagebuilderContainerRecipeComponentsParameters</a>

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a>

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]

---


### ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.putEbs"></a>

```typescript
public putEbs(value: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetEbs` <a name="resetEbs" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetEbs"></a>

```typescript
public resetEbs(): void
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```typescript
public resetNoDevice(): void
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```typescript
public resetVirtualName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```typescript
public readonly ebsInput: IResolvable | ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```typescript
public readonly noDeviceInput: string;
```

- *Type:* string

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>

---


### ImagebuilderContainerRecipeInstanceConfigurationOutputReference <a name="ImagebuilderContainerRecipeInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetImage">resetImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMappings"></a>

```typescript
public putBlockDeviceMappings(value: IResolvable | ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]

---

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetBlockDeviceMappings"></a>

```typescript
public resetBlockDeviceMappings(): void
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsList</a>

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMappingsInput"></a>

```typescript
public readonly blockDeviceMappingsInput: IResolvable | ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings">ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderContainerRecipeInstanceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeInstanceConfiguration">ImagebuilderContainerRecipeInstanceConfiguration</a>

---


### ImagebuilderContainerRecipeLatestVersionOutputReference <a name="ImagebuilderContainerRecipeLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.major">major</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.minor">minor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.patch">patch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersion">ImagebuilderContainerRecipeLatestVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.major"></a>

```typescript
public readonly major: string;
```

- *Type:* string

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.minor"></a>

```typescript
public readonly minor: string;
```

- *Type:* string

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.patch"></a>

```typescript
public readonly patch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderContainerRecipeLatestVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeLatestVersion">ImagebuilderContainerRecipeLatestVersion</a>

---


### ImagebuilderContainerRecipeTargetRepositoryOutputReference <a name="ImagebuilderContainerRecipeTargetRepositoryOutputReference" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer"></a>

```typescript
import { imagebuilderContainerRecipe } from '@cdktn/provider-awscc'

new imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resetRepositoryName">resetRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositoryName` <a name="resetRepositoryName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resetRepositoryName"></a>

```typescript
public resetRepositoryName(): void
```

##### `resetService` <a name="resetService" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderContainerRecipeTargetRepository;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderContainerRecipe.ImagebuilderContainerRecipeTargetRepository">ImagebuilderContainerRecipeTargetRepository</a>

---



