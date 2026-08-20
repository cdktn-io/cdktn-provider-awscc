# `lambdaMicrovmImage` Submodule <a name="`lambdaMicrovmImage` Submodule" id="@cdktn/provider-awscc.lambdaMicrovmImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaMicrovmImage <a name="LambdaMicrovmImage" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image awscc_lambda_microvm_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImage(scope: Construct, id: string, config: LambdaMicrovmImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig">LambdaMicrovmImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig">LambdaMicrovmImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact">putCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations">putCpuConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables">putEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks">putHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCodeArtifact` <a name="putCodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact"></a>

```typescript
public putCodeArtifact(value: LambdaMicrovmImageCodeArtifact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---

##### `putCpuConfigurations` <a name="putCpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations"></a>

```typescript
public putCpuConfigurations(value: IResolvable | LambdaMicrovmImageCpuConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]

---

##### `putEnvironmentVariables` <a name="putEnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables"></a>

```typescript
public putEnvironmentVariables(value: IResolvable | LambdaMicrovmImageEnvironmentVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]

---

##### `putHooks` <a name="putHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks"></a>

```typescript
public putHooks(value: LambdaMicrovmImageHooks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---

##### `putLogging` <a name="putLogging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging"></a>

```typescript
public putLogging(value: LambdaMicrovmImageLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---

##### `putResources` <a name="putResources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources"></a>

```typescript
public putResources(value: IResolvable | LambdaMicrovmImageResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags"></a>

```typescript
public putTags(value: IResolvable | LambdaMicrovmImageTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

lambdaMicrovmImage.LambdaMicrovmImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaMicrovmImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaMicrovmImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaMicrovmImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifact">codeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference">LambdaMicrovmImageCodeArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurations">cpuConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList">LambdaMicrovmImageCpuConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList">LambdaMicrovmImageEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.imageArn">imageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestActiveImageVersion">latestActiveImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestFailedImageVersion">latestFailedImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference">LambdaMicrovmImageLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList">LambdaMicrovmImageResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList">LambdaMicrovmImageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilitiesInput">additionalOsCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArnInput">baseImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersionInput">baseImageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArnInput">buildRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifactInput">codeArtifactInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurationsInput">cpuConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectorsInput">egressNetworkConnectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooksInput">hooksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.loggingInput">loggingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resourcesInput">resourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArn">baseImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersion">baseImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArn">buildRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `codeArtifact`<sup>Required</sup> <a name="codeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifact"></a>

```typescript
public readonly codeArtifact: LambdaMicrovmImageCodeArtifactOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference">LambdaMicrovmImageCodeArtifactOutputReference</a>

---

##### `cpuConfigurations`<sup>Required</sup> <a name="cpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurations"></a>

```typescript
public readonly cpuConfigurations: LambdaMicrovmImageCpuConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList">LambdaMicrovmImageCpuConfigurationsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: LambdaMicrovmImageEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList">LambdaMicrovmImageEnvironmentVariablesList</a>

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooks"></a>

```typescript
public readonly hooks: LambdaMicrovmImageHooksOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.imageArn"></a>

```typescript
public readonly imageArn: string;
```

- *Type:* string

---

##### `latestActiveImageVersion`<sup>Required</sup> <a name="latestActiveImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestActiveImageVersion"></a>

```typescript
public readonly latestActiveImageVersion: string;
```

- *Type:* string

---

##### `latestFailedImageVersion`<sup>Required</sup> <a name="latestFailedImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestFailedImageVersion"></a>

```typescript
public readonly latestFailedImageVersion: string;
```

- *Type:* string

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.logging"></a>

```typescript
public readonly logging: LambdaMicrovmImageLoggingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference">LambdaMicrovmImageLoggingOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resources"></a>

```typescript
public readonly resources: LambdaMicrovmImageResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList">LambdaMicrovmImageResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tags"></a>

```typescript
public readonly tags: LambdaMicrovmImageTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList">LambdaMicrovmImageTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `additionalOsCapabilitiesInput`<sup>Optional</sup> <a name="additionalOsCapabilitiesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilitiesInput"></a>

```typescript
public readonly additionalOsCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `baseImageArnInput`<sup>Optional</sup> <a name="baseImageArnInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArnInput"></a>

```typescript
public readonly baseImageArnInput: string;
```

- *Type:* string

---

##### `baseImageVersionInput`<sup>Optional</sup> <a name="baseImageVersionInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersionInput"></a>

```typescript
public readonly baseImageVersionInput: string;
```

- *Type:* string

---

##### `buildRoleArnInput`<sup>Optional</sup> <a name="buildRoleArnInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArnInput"></a>

```typescript
public readonly buildRoleArnInput: string;
```

- *Type:* string

---

##### `codeArtifactInput`<sup>Optional</sup> <a name="codeArtifactInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifactInput"></a>

```typescript
public readonly codeArtifactInput: IResolvable | LambdaMicrovmImageCodeArtifact;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---

##### `cpuConfigurationsInput`<sup>Optional</sup> <a name="cpuConfigurationsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurationsInput"></a>

```typescript
public readonly cpuConfigurationsInput: IResolvable | LambdaMicrovmImageCpuConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `egressNetworkConnectorsInput`<sup>Optional</sup> <a name="egressNetworkConnectorsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectorsInput"></a>

```typescript
public readonly egressNetworkConnectorsInput: string[];
```

- *Type:* string[]

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: IResolvable | LambdaMicrovmImageEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]

---

##### `hooksInput`<sup>Optional</sup> <a name="hooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooksInput"></a>

```typescript
public readonly hooksInput: IResolvable | LambdaMicrovmImageHooks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.loggingInput"></a>

```typescript
public readonly loggingInput: IResolvable | LambdaMicrovmImageLogging;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | LambdaMicrovmImageResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LambdaMicrovmImageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]

---

##### `additionalOsCapabilities`<sup>Required</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilities"></a>

```typescript
public readonly additionalOsCapabilities: string[];
```

- *Type:* string[]

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArn"></a>

```typescript
public readonly baseImageArn: string;
```

- *Type:* string

---

##### `baseImageVersion`<sup>Required</sup> <a name="baseImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersion"></a>

```typescript
public readonly baseImageVersion: string;
```

- *Type:* string

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArn"></a>

```typescript
public readonly buildRoleArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectors"></a>

```typescript
public readonly egressNetworkConnectors: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaMicrovmImageCodeArtifact <a name="LambdaMicrovmImageCodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageCodeArtifact: lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}.

---

### LambdaMicrovmImageConfig <a name="LambdaMicrovmImageConfig" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageConfig: lambdaMicrovmImage.LambdaMicrovmImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageArn">baseImageArn</a></code> | <code>string</code> | ARN of the base MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageVersion">baseImageVersion</a></code> | <code>string</code> | Specific version of the base MicroVM image to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.buildRoleArn">buildRoleArn</a></code> | <code>string</code> | ARN of the IAM build role. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.codeArtifact">codeArtifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | Code artifact for the active MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.cpuConfigurations">cpuConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.description">description</a></code> | <code>string</code> | Human-readable description of the MicroVM image and its purpose. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.environmentVariables">environmentVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]</code> | Environment variables to set in the container during the snapshot build. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | Configuration for MicroVM image logging. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.name">name</a></code> | <code>string</code> | Unique name for the MicroVM image within the account. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.resources">resources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]</code> | Key-value pairs to associate with the MicroVM image for organization and management. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalOsCapabilities`<sup>Required</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.additionalOsCapabilities"></a>

```typescript
public readonly additionalOsCapabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}.

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageArn"></a>

```typescript
public readonly baseImageArn: string;
```

- *Type:* string

ARN of the base MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#base_image_arn LambdaMicrovmImage#base_image_arn}

---

##### `baseImageVersion`<sup>Required</sup> <a name="baseImageVersion" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageVersion"></a>

```typescript
public readonly baseImageVersion: string;
```

- *Type:* string

Specific version of the base MicroVM image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#base_image_version LambdaMicrovmImage#base_image_version}

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.buildRoleArn"></a>

```typescript
public readonly buildRoleArn: string;
```

- *Type:* string

ARN of the IAM build role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#build_role_arn LambdaMicrovmImage#build_role_arn}

---

##### `codeArtifact`<sup>Required</sup> <a name="codeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.codeArtifact"></a>

```typescript
public readonly codeArtifact: LambdaMicrovmImageCodeArtifact;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

Code artifact for the active MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#code_artifact LambdaMicrovmImage#code_artifact}

---

##### `cpuConfigurations`<sup>Required</sup> <a name="cpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.cpuConfigurations"></a>

```typescript
public readonly cpuConfigurations: IResolvable | LambdaMicrovmImageCpuConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the MicroVM image and its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#description LambdaMicrovmImage#description}

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.egressNetworkConnectors"></a>

```typescript
public readonly egressNetworkConnectors: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}.

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: IResolvable | LambdaMicrovmImageEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]

Environment variables to set in the container during the snapshot build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#environment_variables LambdaMicrovmImage#environment_variables}

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.hooks"></a>

```typescript
public readonly hooks: LambdaMicrovmImageHooks;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}.

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.logging"></a>

```typescript
public readonly logging: LambdaMicrovmImageLogging;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

Configuration for MicroVM image logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#logging LambdaMicrovmImage#logging}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the MicroVM image within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#name LambdaMicrovmImage#name}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.resources"></a>

```typescript
public readonly resources: IResolvable | LambdaMicrovmImageResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LambdaMicrovmImageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]

Key-value pairs to associate with the MicroVM image for organization and management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#tags LambdaMicrovmImage#tags}

---

### LambdaMicrovmImageCpuConfigurations <a name="LambdaMicrovmImageCpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageCpuConfigurations: lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.property.architecture">architecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}. |

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}.

---

### LambdaMicrovmImageEnvironmentVariables <a name="LambdaMicrovmImageEnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageEnvironmentVariables: lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}.

---

### LambdaMicrovmImageHooks <a name="LambdaMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageHooks: lambdaMicrovmImage.LambdaMicrovmImageHooks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmHooks">microvmHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmImageHooks">microvmImageHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}. |

---

##### `microvmHooks`<sup>Optional</sup> <a name="microvmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmHooks"></a>

```typescript
public readonly microvmHooks: LambdaMicrovmImageHooksMicrovmHooks;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}.

---

##### `microvmImageHooks`<sup>Optional</sup> <a name="microvmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmImageHooks"></a>

```typescript
public readonly microvmImageHooks: LambdaMicrovmImageHooksMicrovmImageHooks;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}.

---

### LambdaMicrovmImageHooksMicrovmHooks <a name="LambdaMicrovmImageHooksMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageHooksMicrovmHooks: lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resume">resume</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resumeTimeoutInSeconds">resumeTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.run">run</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.runTimeoutInSeconds">runTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspend">suspend</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspendTimeoutInSeconds">suspendTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminate">terminate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminateTimeoutInSeconds">terminateTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}. |

---

##### `resume`<sup>Optional</sup> <a name="resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resume"></a>

```typescript
public readonly resume: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}.

---

##### `resumeTimeoutInSeconds`<sup>Optional</sup> <a name="resumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resumeTimeoutInSeconds"></a>

```typescript
public readonly resumeTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}.

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}.

---

##### `runTimeoutInSeconds`<sup>Optional</sup> <a name="runTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.runTimeoutInSeconds"></a>

```typescript
public readonly runTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspend"></a>

```typescript
public readonly suspend: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}.

---

##### `suspendTimeoutInSeconds`<sup>Optional</sup> <a name="suspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspendTimeoutInSeconds"></a>

```typescript
public readonly suspendTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}.

---

##### `terminate`<sup>Optional</sup> <a name="terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminate"></a>

```typescript
public readonly terminate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}.

---

##### `terminateTimeoutInSeconds`<sup>Optional</sup> <a name="terminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminateTimeoutInSeconds"></a>

```typescript
public readonly terminateTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}.

---

### LambdaMicrovmImageHooksMicrovmImageHooks <a name="LambdaMicrovmImageHooksMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageHooksMicrovmImageHooks: lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.ready">ready</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.readyTimeoutInSeconds">readyTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validate">validate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validateTimeoutInSeconds">validateTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}. |

---

##### `ready`<sup>Optional</sup> <a name="ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.ready"></a>

```typescript
public readonly ready: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}.

---

##### `readyTimeoutInSeconds`<sup>Optional</sup> <a name="readyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.readyTimeoutInSeconds"></a>

```typescript
public readonly readyTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}.

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}.

---

##### `validateTimeoutInSeconds`<sup>Optional</sup> <a name="validateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validateTimeoutInSeconds"></a>

```typescript
public readonly validateTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}.

---

### LambdaMicrovmImageLogging <a name="LambdaMicrovmImageLogging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageLogging: lambdaMicrovmImage.LambdaMicrovmImageLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}. |

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.cloudwatch"></a>

```typescript
public readonly cloudwatch: LambdaMicrovmImageLoggingCloudwatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}.

---

### LambdaMicrovmImageLoggingCloudwatch <a name="LambdaMicrovmImageLoggingCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageLoggingCloudwatch: lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logGroup">logGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logStream">logStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}.

---

##### `logStream`<sup>Optional</sup> <a name="logStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logStream"></a>

```typescript
public readonly logStream: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}.

---

### LambdaMicrovmImageResources <a name="LambdaMicrovmImageResources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageResources: lambdaMicrovmImage.LambdaMicrovmImageResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.property.minimumMemoryInMiB">minimumMemoryInMiB</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}. |

---

##### `minimumMemoryInMiB`<sup>Required</sup> <a name="minimumMemoryInMiB" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.property.minimumMemoryInMiB"></a>

```typescript
public readonly minimumMemoryInMiB: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}.

---

### LambdaMicrovmImageTags <a name="LambdaMicrovmImageTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

const lambdaMicrovmImageTags: lambdaMicrovmImage.LambdaMicrovmImageTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaMicrovmImageCodeArtifactOutputReference <a name="LambdaMicrovmImageCodeArtifactOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageCodeArtifact;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---


### LambdaMicrovmImageCpuConfigurationsList <a name="LambdaMicrovmImageCpuConfigurationsList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get"></a>

```typescript
public get(index: number): LambdaMicrovmImageCpuConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageCpuConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>[]

---


### LambdaMicrovmImageCpuConfigurationsOutputReference <a name="LambdaMicrovmImageCpuConfigurationsOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architectureInput">architectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architectureInput"></a>

```typescript
public readonly architectureInput: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageCpuConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>

---


### LambdaMicrovmImageEnvironmentVariablesList <a name="LambdaMicrovmImageEnvironmentVariablesList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): LambdaMicrovmImageEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>[]

---


### LambdaMicrovmImageEnvironmentVariablesOutputReference <a name="LambdaMicrovmImageEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageEnvironmentVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>

---


### LambdaMicrovmImageHooksMicrovmHooksOutputReference <a name="LambdaMicrovmImageHooksMicrovmHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResume">resetResume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResumeTimeoutInSeconds">resetResumeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRun">resetRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRunTimeoutInSeconds">resetRunTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspend">resetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspendTimeoutInSeconds">resetSuspendTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminate">resetTerminate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminateTimeoutInSeconds">resetTerminateTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResume` <a name="resetResume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResume"></a>

```typescript
public resetResume(): void
```

##### `resetResumeTimeoutInSeconds` <a name="resetResumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResumeTimeoutInSeconds"></a>

```typescript
public resetResumeTimeoutInSeconds(): void
```

##### `resetRun` <a name="resetRun" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRun"></a>

```typescript
public resetRun(): void
```

##### `resetRunTimeoutInSeconds` <a name="resetRunTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRunTimeoutInSeconds"></a>

```typescript
public resetRunTimeoutInSeconds(): void
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspend"></a>

```typescript
public resetSuspend(): void
```

##### `resetSuspendTimeoutInSeconds` <a name="resetSuspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspendTimeoutInSeconds"></a>

```typescript
public resetSuspendTimeoutInSeconds(): void
```

##### `resetTerminate` <a name="resetTerminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminate"></a>

```typescript
public resetTerminate(): void
```

##### `resetTerminateTimeoutInSeconds` <a name="resetTerminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminateTimeoutInSeconds"></a>

```typescript
public resetTerminateTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeInput">resumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSecondsInput">resumeTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runInput">runInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSecondsInput">runTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendInput">suspendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSecondsInput">suspendTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateInput">terminateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSecondsInput">terminateTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume">resume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">resumeTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run">run</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">runTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend">suspend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">suspendTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate">terminate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">terminateTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resumeInput`<sup>Optional</sup> <a name="resumeInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeInput"></a>

```typescript
public readonly resumeInput: string;
```

- *Type:* string

---

##### `resumeTimeoutInSecondsInput`<sup>Optional</sup> <a name="resumeTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSecondsInput"></a>

```typescript
public readonly resumeTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `runInput`<sup>Optional</sup> <a name="runInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runInput"></a>

```typescript
public readonly runInput: string;
```

- *Type:* string

---

##### `runTimeoutInSecondsInput`<sup>Optional</sup> <a name="runTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSecondsInput"></a>

```typescript
public readonly runTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendInput"></a>

```typescript
public readonly suspendInput: string;
```

- *Type:* string

---

##### `suspendTimeoutInSecondsInput`<sup>Optional</sup> <a name="suspendTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSecondsInput"></a>

```typescript
public readonly suspendTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `terminateInput`<sup>Optional</sup> <a name="terminateInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateInput"></a>

```typescript
public readonly terminateInput: string;
```

- *Type:* string

---

##### `terminateTimeoutInSecondsInput`<sup>Optional</sup> <a name="terminateTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSecondsInput"></a>

```typescript
public readonly terminateTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `resume`<sup>Required</sup> <a name="resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume"></a>

```typescript
public readonly resume: string;
```

- *Type:* string

---

##### `resumeTimeoutInSeconds`<sup>Required</sup> <a name="resumeTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```typescript
public readonly resumeTimeoutInSeconds: number;
```

- *Type:* number

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

---

##### `runTimeoutInSeconds`<sup>Required</sup> <a name="runTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```typescript
public readonly runTimeoutInSeconds: number;
```

- *Type:* number

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend"></a>

```typescript
public readonly suspend: string;
```

- *Type:* string

---

##### `suspendTimeoutInSeconds`<sup>Required</sup> <a name="suspendTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```typescript
public readonly suspendTimeoutInSeconds: number;
```

- *Type:* number

---

##### `terminate`<sup>Required</sup> <a name="terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate"></a>

```typescript
public readonly terminate: string;
```

- *Type:* string

---

##### `terminateTimeoutInSeconds`<sup>Required</sup> <a name="terminateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```typescript
public readonly terminateTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageHooksMicrovmHooks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---


### LambdaMicrovmImageHooksMicrovmImageHooksOutputReference <a name="LambdaMicrovmImageHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReady">resetReady</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReadyTimeoutInSeconds">resetReadyTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidate">resetValidate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidateTimeoutInSeconds">resetValidateTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReady` <a name="resetReady" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReady"></a>

```typescript
public resetReady(): void
```

##### `resetReadyTimeoutInSeconds` <a name="resetReadyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReadyTimeoutInSeconds"></a>

```typescript
public resetReadyTimeoutInSeconds(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidate"></a>

```typescript
public resetValidate(): void
```

##### `resetValidateTimeoutInSeconds` <a name="resetValidateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidateTimeoutInSeconds"></a>

```typescript
public resetValidateTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyInput">readyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSecondsInput">readyTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateInput">validateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSecondsInput">validateTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready">ready</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">readyTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate">validate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">validateTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readyInput`<sup>Optional</sup> <a name="readyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyInput"></a>

```typescript
public readonly readyInput: string;
```

- *Type:* string

---

##### `readyTimeoutInSecondsInput`<sup>Optional</sup> <a name="readyTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSecondsInput"></a>

```typescript
public readonly readyTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateInput"></a>

```typescript
public readonly validateInput: string;
```

- *Type:* string

---

##### `validateTimeoutInSecondsInput`<sup>Optional</sup> <a name="validateTimeoutInSecondsInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSecondsInput"></a>

```typescript
public readonly validateTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready"></a>

```typescript
public readonly ready: string;
```

- *Type:* string

---

##### `readyTimeoutInSeconds`<sup>Required</sup> <a name="readyTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```typescript
public readonly readyTimeoutInSeconds: number;
```

- *Type:* number

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

---

##### `validateTimeoutInSeconds`<sup>Required</sup> <a name="validateTimeoutInSeconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```typescript
public readonly validateTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageHooksMicrovmImageHooks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---


### LambdaMicrovmImageHooksOutputReference <a name="LambdaMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks">putMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks">putMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmHooks">resetMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmImageHooks">resetMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMicrovmHooks` <a name="putMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks"></a>

```typescript
public putMicrovmHooks(value: LambdaMicrovmImageHooksMicrovmHooks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---

##### `putMicrovmImageHooks` <a name="putMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks"></a>

```typescript
public putMicrovmImageHooks(value: LambdaMicrovmImageHooksMicrovmImageHooks): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---

##### `resetMicrovmHooks` <a name="resetMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmHooks"></a>

```typescript
public resetMicrovmHooks(): void
```

##### `resetMicrovmImageHooks` <a name="resetMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmImageHooks"></a>

```typescript
public resetMicrovmImageHooks(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooks">microvmHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference">LambdaMicrovmImageHooksMicrovmHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooks">microvmImageHooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooksInput">microvmHooksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooksInput">microvmImageHooksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `microvmHooks`<sup>Required</sup> <a name="microvmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooks"></a>

```typescript
public readonly microvmHooks: LambdaMicrovmImageHooksMicrovmHooksOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference">LambdaMicrovmImageHooksMicrovmHooksOutputReference</a>

---

##### `microvmImageHooks`<sup>Required</sup> <a name="microvmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooks"></a>

```typescript
public readonly microvmImageHooks: LambdaMicrovmImageHooksMicrovmImageHooksOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a>

---

##### `microvmHooksInput`<sup>Optional</sup> <a name="microvmHooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooksInput"></a>

```typescript
public readonly microvmHooksInput: IResolvable | LambdaMicrovmImageHooksMicrovmHooks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---

##### `microvmImageHooksInput`<sup>Optional</sup> <a name="microvmImageHooksInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooksInput"></a>

```typescript
public readonly microvmImageHooksInput: IResolvable | LambdaMicrovmImageHooksMicrovmImageHooks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageHooks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---


### LambdaMicrovmImageLoggingCloudwatchOutputReference <a name="LambdaMicrovmImageLoggingCloudwatchOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogStream">resetLogStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```

##### `resetLogStream` <a name="resetLogStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogStream"></a>

```typescript
public resetLogStream(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStreamInput">logStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream">logStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `logStreamInput`<sup>Optional</sup> <a name="logStreamInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStreamInput"></a>

```typescript
public readonly logStreamInput: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `logStream`<sup>Required</sup> <a name="logStream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream"></a>

```typescript
public readonly logStream: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageLoggingCloudwatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---


### LambdaMicrovmImageLoggingOutputReference <a name="LambdaMicrovmImageLoggingOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch">putCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetCloudwatch">resetCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatch` <a name="putCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch"></a>

```typescript
public putCloudwatch(value: LambdaMicrovmImageLoggingCloudwatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---

##### `resetCloudwatch` <a name="resetCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetCloudwatch"></a>

```typescript
public resetCloudwatch(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference">LambdaMicrovmImageLoggingCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatchInput">cloudwatchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatch"></a>

```typescript
public readonly cloudwatch: LambdaMicrovmImageLoggingCloudwatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference">LambdaMicrovmImageLoggingCloudwatchOutputReference</a>

---

##### `cloudwatchInput`<sup>Optional</sup> <a name="cloudwatchInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatchInput"></a>

```typescript
public readonly cloudwatchInput: IResolvable | LambdaMicrovmImageLoggingCloudwatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageLogging;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---


### LambdaMicrovmImageResourcesList <a name="LambdaMicrovmImageResourcesList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get"></a>

```typescript
public get(index: number): LambdaMicrovmImageResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>[]

---


### LambdaMicrovmImageResourcesOutputReference <a name="LambdaMicrovmImageResourcesOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiBInput">minimumMemoryInMiBInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB">minimumMemoryInMiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumMemoryInMiBInput`<sup>Optional</sup> <a name="minimumMemoryInMiBInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiBInput"></a>

```typescript
public readonly minimumMemoryInMiBInput: number;
```

- *Type:* number

---

##### `minimumMemoryInMiB`<sup>Required</sup> <a name="minimumMemoryInMiB" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB"></a>

```typescript
public readonly minimumMemoryInMiB: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>

---


### LambdaMicrovmImageTagsList <a name="LambdaMicrovmImageTagsList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get"></a>

```typescript
public get(index: number): LambdaMicrovmImageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>[]

---


### LambdaMicrovmImageTagsOutputReference <a name="LambdaMicrovmImageTagsOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer"></a>

```typescript
import { lambdaMicrovmImage } from '@cdktn/provider-awscc'

new lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaMicrovmImageTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>

---



