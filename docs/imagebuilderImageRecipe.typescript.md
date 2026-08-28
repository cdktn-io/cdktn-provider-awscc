# `imagebuilderImageRecipe` Submodule <a name="`imagebuilderImageRecipe` Submodule" id="@cdktn/provider-awscc.imagebuilderImageRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImageRecipe <a name="ImagebuilderImageRecipe" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe awscc_imagebuilder_image_recipe}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipe(scope: Construct, id: string, config: ImagebuilderImageRecipeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig">ImagebuilderImageRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig">ImagebuilderImageRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration">putAdditionalInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents">putComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAdditionalInstanceConfiguration">resetAdditionalInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiTags">resetAmiTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiWatermarks">resetAmiWatermarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetComponents">resetComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalInstanceConfiguration` <a name="putAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration"></a>

```typescript
public putAdditionalInstanceConfiguration(value: ImagebuilderImageRecipeAdditionalInstanceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings"></a>

```typescript
public putBlockDeviceMappings(value: IResolvable | ImagebuilderImageRecipeBlockDeviceMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]

---

##### `putComponents` <a name="putComponents" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents"></a>

```typescript
public putComponents(value: IResolvable | ImagebuilderImageRecipeComponents[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]

---

##### `resetAdditionalInstanceConfiguration` <a name="resetAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAdditionalInstanceConfiguration"></a>

```typescript
public resetAdditionalInstanceConfiguration(): void
```

##### `resetAmiTags` <a name="resetAmiTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiTags"></a>

```typescript
public resetAmiTags(): void
```

##### `resetAmiWatermarks` <a name="resetAmiWatermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiWatermarks"></a>

```typescript
public resetAmiWatermarks(): void
```

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMappings"></a>

```typescript
public resetBlockDeviceMappings(): void
```

##### `resetComponents` <a name="resetComponents" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetComponents"></a>

```typescript
public resetComponents(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderImageRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderImageRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderImageRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfiguration">additionalInstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList">ImagebuilderImageRecipeBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList">ImagebuilderImageRecipeComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.latestVersion">latestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference">ImagebuilderImageRecipeLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfigurationInput">additionalInstanceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTagsInput">amiTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarksInput">amiWatermarksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentsInput">componentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput">parentImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTags">amiTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarks">amiWatermarks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage">parentImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalInstanceConfiguration`<sup>Required</sup> <a name="additionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfiguration"></a>

```typescript
public readonly additionalInstanceConfiguration: ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: ImagebuilderImageRecipeBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList">ImagebuilderImageRecipeBlockDeviceMappingsList</a>

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.components"></a>

```typescript
public readonly components: ImagebuilderImageRecipeComponentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList">ImagebuilderImageRecipeComponentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.latestVersion"></a>

```typescript
public readonly latestVersion: ImagebuilderImageRecipeLatestVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference">ImagebuilderImageRecipeLatestVersionOutputReference</a>

---

##### `additionalInstanceConfigurationInput`<sup>Optional</sup> <a name="additionalInstanceConfigurationInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfigurationInput"></a>

```typescript
public readonly additionalInstanceConfigurationInput: IResolvable | ImagebuilderImageRecipeAdditionalInstanceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---

##### `amiTagsInput`<sup>Optional</sup> <a name="amiTagsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTagsInput"></a>

```typescript
public readonly amiTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `amiWatermarksInput`<sup>Optional</sup> <a name="amiWatermarksInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarksInput"></a>

```typescript
public readonly amiWatermarksInput: string[];
```

- *Type:* string[]

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingsInput"></a>

```typescript
public readonly blockDeviceMappingsInput: IResolvable | ImagebuilderImageRecipeBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]

---

##### `componentsInput`<sup>Optional</sup> <a name="componentsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentsInput"></a>

```typescript
public readonly componentsInput: IResolvable | ImagebuilderImageRecipeComponents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentImageInput`<sup>Optional</sup> <a name="parentImageInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput"></a>

```typescript
public readonly parentImageInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `amiTags`<sup>Required</sup> <a name="amiTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTags"></a>

```typescript
public readonly amiTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `amiWatermarks`<sup>Required</sup> <a name="amiWatermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarks"></a>

```typescript
public readonly amiWatermarks: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage"></a>

```typescript
public readonly parentImage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageRecipeAdditionalInstanceConfiguration <a name="ImagebuilderImageRecipeAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

const imagebuilderImageRecipeAdditionalInstanceConfiguration: imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.systemsManagerAgent">systemsManagerAgent</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | Contains settings for the SSM agent on your build instance. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.userDataOverride">userDataOverride</a></code> | <code>string</code> | Use this property to provide commands or a command script to run when you launch your build instance. |

---

##### `systemsManagerAgent`<sup>Optional</sup> <a name="systemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.systemsManagerAgent"></a>

```typescript
public readonly systemsManagerAgent: ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

Contains settings for the SSM agent on your build instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}

---

##### `userDataOverride`<sup>Optional</sup> <a name="userDataOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.userDataOverride"></a>

```typescript
public readonly userDataOverride: string;
```

- *Type:* string

Use this property to provide commands or a command script to run when you launch your build instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#user_data_override ImagebuilderImageRecipe#user_data_override}

---

### ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

const imagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent: imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.property.uninstallAfterBuild">uninstallAfterBuild</a></code> | <code>boolean \| cdktn.IResolvable</code> | Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI. |

---

##### `uninstallAfterBuild`<sup>Optional</sup> <a name="uninstallAfterBuild" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.property.uninstallAfterBuild"></a>

```typescript
public readonly uninstallAfterBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI.

If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}

---

### ImagebuilderImageRecipeBlockDeviceMappings <a name="ImagebuilderImageRecipeBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

const imagebuilderImageRecipeBlockDeviceMappings: imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>string</code> | The device to which these mappings apply. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | Use to manage Amazon EBS-specific configuration for this mapping. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>string</code> | Use to remove a mapping from the parent image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>string</code> | Use to manage instance ephemeral devices. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

The device to which these mappings apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#device_name ImagebuilderImageRecipe#device_name}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.ebs"></a>

```typescript
public readonly ebs: ImagebuilderImageRecipeBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

Use to manage Amazon EBS-specific configuration for this mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ebs ImagebuilderImageRecipe#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

Use to remove a mapping from the parent image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#no_device ImagebuilderImageRecipe#no_device}

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Use to manage instance ephemeral devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#virtual_name ImagebuilderImageRecipe#virtual_name}

---

### ImagebuilderImageRecipeBlockDeviceMappingsEbs <a name="ImagebuilderImageRecipeBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

const imagebuilderImageRecipeBlockDeviceMappingsEbs: imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use to configure delete on termination of the associated device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use to configure device encryption. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>number</code> | Use to configure device IOPS. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Use to configure the KMS key to use when encrypting the device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>string</code> | The snapshot that defines the device contents. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>number</code> | For GP3 volumes only - The throughput in MiB/s that the volume supports. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>number</code> | Use to override the device's volume size. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>string</code> | Use to override the device's volume type. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use to configure delete on termination of the associated device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use to configure device encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Use to configure device IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Use to configure the KMS key to use when encrypting the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The snapshot that defines the device contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

For GP3 volumes only - The throughput in MiB/s that the volume supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Use to override the device's volume size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Use to override the device's volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}

---

### ImagebuilderImageRecipeComponents <a name="ImagebuilderImageRecipeComponents" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

const imagebuilderImageRecipeComponents: imagebuilderImageRecipe.ImagebuilderImageRecipeComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.componentArn">componentArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]</code> | A group of parameter settings that are used to configure the component for a specific recipe. |

---

##### `componentArn`<sup>Optional</sup> <a name="componentArn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.componentArn"></a>

```typescript
public readonly componentArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#component_arn ImagebuilderImageRecipe#component_arn}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | ImagebuilderImageRecipeComponentsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]

A group of parameter settings that are used to configure the component for a specific recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#parameters ImagebuilderImageRecipe#parameters}

---

### ImagebuilderImageRecipeComponentsParameters <a name="ImagebuilderImageRecipeComponentsParameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

const imagebuilderImageRecipeComponentsParameters: imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.name">name</a></code> | <code>string</code> | The name of the component parameter to set. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.value">value</a></code> | <code>string[]</code> | Sets the value for the named component parameter. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the component parameter to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Sets the value for the named component parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#value ImagebuilderImageRecipe#value}

---

### ImagebuilderImageRecipeConfig <a name="ImagebuilderImageRecipeConfig" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

const imagebuilderImageRecipeConfig: imagebuilderImageRecipe.ImagebuilderImageRecipeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name">name</a></code> | <code>string</code> | The name of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage">parentImage</a></code> | <code>string</code> | The parent image of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version">version</a></code> | <code>string</code> | The version of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.additionalInstanceConfiguration">additionalInstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | Specify additional settings and launch scripts for your build instances. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiTags">amiTags</a></code> | <code>{[ key: string ]: string}</code> | The tags to apply to the AMI created by this image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiWatermarks">amiWatermarks</a></code> | <code>string[]</code> | The AMI watermark names to attach to the output AMI from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]</code> | The block device mappings to apply when creating images from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.components">components</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]</code> | The components of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description">description</a></code> | <code>string</code> | The description of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | The working directory to be used during build and test workflows. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}

---

##### `parentImage`<sup>Required</sup> <a name="parentImage" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage"></a>

```typescript
public readonly parentImage: string;
```

- *Type:* string

The parent image of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}

---

##### `additionalInstanceConfiguration`<sup>Optional</sup> <a name="additionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.additionalInstanceConfiguration"></a>

```typescript
public readonly additionalInstanceConfiguration: ImagebuilderImageRecipeAdditionalInstanceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

Specify additional settings and launch scripts for your build instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#additional_instance_configuration ImagebuilderImageRecipe#additional_instance_configuration}

---

##### `amiTags`<sup>Optional</sup> <a name="amiTags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiTags"></a>

```typescript
public readonly amiTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags to apply to the AMI created by this image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ami_tags ImagebuilderImageRecipe#ami_tags}

---

##### `amiWatermarks`<sup>Optional</sup> <a name="amiWatermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiWatermarks"></a>

```typescript
public readonly amiWatermarks: string[];
```

- *Type:* string[]

The AMI watermark names to attach to the output AMI from this recipe.

AMI watermarks are lineage markers that automatically propagate to derivative AMIs when the source AMI is copied or distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#ami_watermarks ImagebuilderImageRecipe#ami_watermarks}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IResolvable | ImagebuilderImageRecipeBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]

The block device mappings to apply when creating images from this recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#block_device_mappings ImagebuilderImageRecipe#block_device_mappings}

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.components"></a>

```typescript
public readonly components: IResolvable | ImagebuilderImageRecipeComponents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]

The components of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#components ImagebuilderImageRecipe#components}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tags of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

The working directory to be used during build and test workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}

---

### ImagebuilderImageRecipeLatestVersion <a name="ImagebuilderImageRecipeLatestVersion" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

const imagebuilderImageRecipeLatestVersion: imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent">putSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetSystemsManagerAgent">resetSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetUserDataOverride">resetUserDataOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSystemsManagerAgent` <a name="putSystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent"></a>

```typescript
public putSystemsManagerAgent(value: ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---

##### `resetSystemsManagerAgent` <a name="resetSystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetSystemsManagerAgent"></a>

```typescript
public resetSystemsManagerAgent(): void
```

##### `resetUserDataOverride` <a name="resetUserDataOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetUserDataOverride"></a>

```typescript
public resetUserDataOverride(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgent">systemsManagerAgent</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgentInput">systemsManagerAgentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverrideInput">userDataOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverride">userDataOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `systemsManagerAgent`<sup>Required</sup> <a name="systemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgent"></a>

```typescript
public readonly systemsManagerAgent: ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference</a>

---

##### `systemsManagerAgentInput`<sup>Optional</sup> <a name="systemsManagerAgentInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgentInput"></a>

```typescript
public readonly systemsManagerAgentInput: IResolvable | ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---

##### `userDataOverrideInput`<sup>Optional</sup> <a name="userDataOverrideInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverrideInput"></a>

```typescript
public readonly userDataOverrideInput: string;
```

- *Type:* string

---

##### `userDataOverride`<sup>Required</sup> <a name="userDataOverride" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverride"></a>

```typescript
public readonly userDataOverride: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageRecipeAdditionalInstanceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---


### ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resetUninstallAfterBuild">resetUninstallAfterBuild</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUninstallAfterBuild` <a name="resetUninstallAfterBuild" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resetUninstallAfterBuild"></a>

```typescript
public resetUninstallAfterBuild(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput">uninstallAfterBuildInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuild">uninstallAfterBuild</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uninstallAfterBuildInput`<sup>Optional</sup> <a name="uninstallAfterBuildInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput"></a>

```typescript
public readonly uninstallAfterBuildInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `uninstallAfterBuild`<sup>Required</sup> <a name="uninstallAfterBuild" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuild"></a>

```typescript
public readonly uninstallAfterBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---


### ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageRecipeBlockDeviceMappingsEbs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---


### ImagebuilderImageRecipeBlockDeviceMappingsList <a name="ImagebuilderImageRecipeBlockDeviceMappingsList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): ImagebuilderImageRecipeBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageRecipeBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>[]

---


### ImagebuilderImageRecipeBlockDeviceMappingsOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs"></a>

```typescript
public putEbs(value: ImagebuilderImageRecipeBlockDeviceMappingsEbs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetEbs` <a name="resetEbs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetEbs"></a>

```typescript
public resetEbs(): void
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```typescript
public resetNoDevice(): void
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```typescript
public resetVirtualName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```typescript
public readonly ebsInput: IResolvable | ImagebuilderImageRecipeBlockDeviceMappingsEbs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```typescript
public readonly noDeviceInput: string;
```

- *Type:* string

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageRecipeBlockDeviceMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>

---


### ImagebuilderImageRecipeComponentsList <a name="ImagebuilderImageRecipeComponentsList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get"></a>

```typescript
public get(index: number): ImagebuilderImageRecipeComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageRecipeComponents[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>[]

---


### ImagebuilderImageRecipeComponentsOutputReference <a name="ImagebuilderImageRecipeComponentsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetComponentArn">resetComponentArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | ImagebuilderImageRecipeComponentsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]

---

##### `resetComponentArn` <a name="resetComponentArn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetComponentArn"></a>

```typescript
public resetComponentArn(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList">ImagebuilderImageRecipeComponentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArnInput">componentArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArn">componentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: ImagebuilderImageRecipeComponentsParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList">ImagebuilderImageRecipeComponentsParametersList</a>

---

##### `componentArnInput`<sup>Optional</sup> <a name="componentArnInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArnInput"></a>

```typescript
public readonly componentArnInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | ImagebuilderImageRecipeComponentsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]

---

##### `componentArn`<sup>Required</sup> <a name="componentArn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArn"></a>

```typescript
public readonly componentArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageRecipeComponents;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>

---


### ImagebuilderImageRecipeComponentsParametersList <a name="ImagebuilderImageRecipeComponentsParametersList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get"></a>

```typescript
public get(index: number): ImagebuilderImageRecipeComponentsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageRecipeComponentsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>[]

---


### ImagebuilderImageRecipeComponentsParametersOutputReference <a name="ImagebuilderImageRecipeComponentsParametersOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderImageRecipeComponentsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>

---


### ImagebuilderImageRecipeLatestVersionOutputReference <a name="ImagebuilderImageRecipeLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer"></a>

```typescript
import { imagebuilderImageRecipe } from '@cdktn/provider-awscc'

new imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.major">major</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.minor">minor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.patch">patch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion">ImagebuilderImageRecipeLatestVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.major"></a>

```typescript
public readonly major: string;
```

- *Type:* string

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.minor"></a>

```typescript
public readonly minor: string;
```

- *Type:* string

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.patch"></a>

```typescript
public readonly patch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImagebuilderImageRecipeLatestVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion">ImagebuilderImageRecipeLatestVersion</a>

---



