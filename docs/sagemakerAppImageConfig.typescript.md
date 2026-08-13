# `sagemakerAppImageConfig` Submodule <a name="`sagemakerAppImageConfig` Submodule" id="@cdktn/provider-awscc.sagemakerAppImageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAppImageConfig <a name="SagemakerAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config awscc_sagemaker_app_image_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfig(scope: Construct, id: string, config: SagemakerAppImageConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig">SagemakerAppImageConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig">SagemakerAppImageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putCodeEditorAppImageConfig">putCodeEditorAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putJupyterLabAppImageConfig">putJupyterLabAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putKernelGatewayImageConfig">putKernelGatewayImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.resetCodeEditorAppImageConfig">resetCodeEditorAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.resetJupyterLabAppImageConfig">resetJupyterLabAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.resetKernelGatewayImageConfig">resetKernelGatewayImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCodeEditorAppImageConfig` <a name="putCodeEditorAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putCodeEditorAppImageConfig"></a>

```typescript
public putCodeEditorAppImageConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putCodeEditorAppImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

---

##### `putJupyterLabAppImageConfig` <a name="putJupyterLabAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putJupyterLabAppImageConfig"></a>

```typescript
public putJupyterLabAppImageConfig(value: SagemakerAppImageConfigJupyterLabAppImageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putJupyterLabAppImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig">SagemakerAppImageConfigJupyterLabAppImageConfig</a>

---

##### `putKernelGatewayImageConfig` <a name="putKernelGatewayImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putKernelGatewayImageConfig"></a>

```typescript
public putKernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putKernelGatewayImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerAppImageConfigTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags">SagemakerAppImageConfigTags</a>[]

---

##### `resetCodeEditorAppImageConfig` <a name="resetCodeEditorAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.resetCodeEditorAppImageConfig"></a>

```typescript
public resetCodeEditorAppImageConfig(): void
```

##### `resetJupyterLabAppImageConfig` <a name="resetJupyterLabAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.resetJupyterLabAppImageConfig"></a>

```typescript
public resetJupyterLabAppImageConfig(): void
```

##### `resetKernelGatewayImageConfig` <a name="resetKernelGatewayImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.resetKernelGatewayImageConfig"></a>

```typescript
public resetKernelGatewayImageConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerAppImageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerAppImageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerAppImageConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerAppImageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerAppImageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigArn">appImageConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfig">codeEditorAppImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabAppImageConfig">jupyterLabAppImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference">SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfig">kernelGatewayImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList">SagemakerAppImageConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfigInput">codeEditorAppImageConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabAppImageConfigInput">jupyterLabAppImageConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig">SagemakerAppImageConfigJupyterLabAppImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfigInput">kernelGatewayImageConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags">SagemakerAppImageConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appImageConfigArn`<sup>Required</sup> <a name="appImageConfigArn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigArn"></a>

```typescript
public readonly appImageConfigArn: string;
```

- *Type:* string

---

##### `codeEditorAppImageConfig`<sup>Required</sup> <a name="codeEditorAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfig"></a>

```typescript
public readonly codeEditorAppImageConfig: SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jupyterLabAppImageConfig`<sup>Required</sup> <a name="jupyterLabAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabAppImageConfig"></a>

```typescript
public readonly jupyterLabAppImageConfig: SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference">SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference</a>

---

##### `kernelGatewayImageConfig`<sup>Required</sup> <a name="kernelGatewayImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfig"></a>

```typescript
public readonly kernelGatewayImageConfig: SagemakerAppImageConfigKernelGatewayImageConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tags"></a>

```typescript
public readonly tags: SagemakerAppImageConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList">SagemakerAppImageConfigTagsList</a>

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigNameInput"></a>

```typescript
public readonly appImageConfigNameInput: string;
```

- *Type:* string

---

##### `codeEditorAppImageConfigInput`<sup>Optional</sup> <a name="codeEditorAppImageConfigInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.codeEditorAppImageConfigInput"></a>

```typescript
public readonly codeEditorAppImageConfigInput: IResolvable | SagemakerAppImageConfigCodeEditorAppImageConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

---

##### `jupyterLabAppImageConfigInput`<sup>Optional</sup> <a name="jupyterLabAppImageConfigInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.jupyterLabAppImageConfigInput"></a>

```typescript
public readonly jupyterLabAppImageConfigInput: IResolvable | SagemakerAppImageConfigJupyterLabAppImageConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig">SagemakerAppImageConfigJupyterLabAppImageConfig</a>

---

##### `kernelGatewayImageConfigInput`<sup>Optional</sup> <a name="kernelGatewayImageConfigInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.kernelGatewayImageConfigInput"></a>

```typescript
public readonly kernelGatewayImageConfigInput: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerAppImageConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags">SagemakerAppImageConfigTags</a>[]

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAppImageConfigCodeEditorAppImageConfig <a name="SagemakerAppImageConfigCodeEditorAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigCodeEditorAppImageConfig: sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | The container configuration for a SageMaker image. |

---

##### `containerConfig`<sup>Optional</sup> <a name="containerConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig.property.containerConfig"></a>

```typescript
public readonly containerConfig: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

The container configuration for a SageMaker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}

---

### SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig <a name="SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig: sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | A list of arguments to apply to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | The custom entry point to use on container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]</code> | A list of variables to apply to the custom container. |

---

##### `containerArguments`<sup>Optional</sup> <a name="containerArguments" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

A list of arguments to apply to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}

---

##### `containerEntrypoint`<sup>Optional</sup> <a name="containerEntrypoint" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

The custom entry point to use on container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}

---

##### `containerEnvironmentVariables`<sup>Optional</sup> <a name="containerEnvironmentVariables" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.property.containerEnvironmentVariables"></a>

```typescript
public readonly containerEnvironmentVariables: IResolvable | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]

A list of variables to apply to the custom container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}

---

### SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables <a name="SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables: sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#key SagemakerAppImageConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#value SagemakerAppImageConfig#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#key SagemakerAppImageConfig#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#value SagemakerAppImageConfig#value}.

---

### SagemakerAppImageConfigConfig <a name="SagemakerAppImageConfigConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigConfig: sagemakerAppImageConfig.SagemakerAppImageConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.codeEditorAppImageConfig">codeEditorAppImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | The CodeEditorAppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.jupyterLabAppImageConfig">jupyterLabAppImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig">SagemakerAppImageConfigJupyterLabAppImageConfig</a></code> | The JupyterLabAppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.kernelGatewayImageConfig">kernelGatewayImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a></code> | The KernelGatewayImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags">SagemakerAppImageConfigTags</a>[]</code> | A list of tags to apply to the AppImageConfig. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}

---

##### `codeEditorAppImageConfig`<sup>Optional</sup> <a name="codeEditorAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.codeEditorAppImageConfig"></a>

```typescript
public readonly codeEditorAppImageConfig: SagemakerAppImageConfigCodeEditorAppImageConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

The CodeEditorAppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#code_editor_app_image_config SagemakerAppImageConfig#code_editor_app_image_config}

---

##### `jupyterLabAppImageConfig`<sup>Optional</sup> <a name="jupyterLabAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.jupyterLabAppImageConfig"></a>

```typescript
public readonly jupyterLabAppImageConfig: SagemakerAppImageConfigJupyterLabAppImageConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig">SagemakerAppImageConfigJupyterLabAppImageConfig</a>

The JupyterLabAppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#jupyter_lab_app_image_config SagemakerAppImageConfig#jupyter_lab_app_image_config}

---

##### `kernelGatewayImageConfig`<sup>Optional</sup> <a name="kernelGatewayImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.kernelGatewayImageConfig"></a>

```typescript
public readonly kernelGatewayImageConfig: SagemakerAppImageConfigKernelGatewayImageConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

The KernelGatewayImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerAppImageConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags">SagemakerAppImageConfigTags</a>[]

A list of tags to apply to the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}

---

### SagemakerAppImageConfigJupyterLabAppImageConfig <a name="SagemakerAppImageConfigJupyterLabAppImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigJupyterLabAppImageConfig: sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a></code> | The container configuration for a SageMaker image. |

---

##### `containerConfig`<sup>Optional</sup> <a name="containerConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig.property.containerConfig"></a>

```typescript
public readonly containerConfig: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a>

The container configuration for a SageMaker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}

---

### SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig <a name="SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig: sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | A list of arguments to apply to the container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | The custom entry point to use on container. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]</code> | A list of variables to apply to the custom container. |

---

##### `containerArguments`<sup>Optional</sup> <a name="containerArguments" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

A list of arguments to apply to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}

---

##### `containerEntrypoint`<sup>Optional</sup> <a name="containerEntrypoint" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

The custom entry point to use on container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}

---

##### `containerEnvironmentVariables`<sup>Optional</sup> <a name="containerEnvironmentVariables" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig.property.containerEnvironmentVariables"></a>

```typescript
public readonly containerEnvironmentVariables: IResolvable | SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]

A list of variables to apply to the custom container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}

---

### SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables <a name="SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables: sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#key SagemakerAppImageConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#value SagemakerAppImageConfig#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#key SagemakerAppImageConfig#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#value SagemakerAppImageConfig#value}.

---

### SagemakerAppImageConfigKernelGatewayImageConfig <a name="SagemakerAppImageConfigKernelGatewayImageConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigKernelGatewayImageConfig: sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | The Amazon Elastic File System (EFS) storage configuration for a SageMaker image. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.kernelSpecs">kernelSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>[]</code> | The specification of the Jupyter kernels in the image. |

---

##### `fileSystemConfig`<sup>Optional</sup> <a name="fileSystemConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.fileSystemConfig"></a>

```typescript
public readonly fileSystemConfig: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}

---

##### `kernelSpecs`<sup>Optional</sup> <a name="kernelSpecs" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig.property.kernelSpecs"></a>

```typescript
public readonly kernelSpecs: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>[]

The specification of the Jupyter kernels in the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#kernel_specs SagemakerAppImageConfig#kernel_specs}

---

### SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig <a name="SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig: sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultGid">defaultGid</a></code> | <code>number</code> | The default POSIX group ID (GID). If not specified, defaults to 100. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultUid">defaultUid</a></code> | <code>number</code> | The default POSIX user ID (UID). If not specified, defaults to 1000. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.mountPath">mountPath</a></code> | <code>string</code> | The path within the image to mount the user's EFS home directory. |

---

##### `defaultGid`<sup>Optional</sup> <a name="defaultGid" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultGid"></a>

```typescript
public readonly defaultGid: number;
```

- *Type:* number

The default POSIX group ID (GID). If not specified, defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}

---

##### `defaultUid`<sup>Optional</sup> <a name="defaultUid" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.defaultUid"></a>

```typescript
public readonly defaultUid: number;
```

- *Type:* number

The default POSIX user ID (UID). If not specified, defaults to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

The path within the image to mount the user's EFS home directory.

The directory should be empty. If not specified, defaults to /home/sagemaker-user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}

---

### SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs <a name="SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs: sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs.property.displayName">displayName</a></code> | <code>string</code> | The display name of the kernel. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs.property.name">name</a></code> | <code>string</code> | The name of the kernel. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the kernel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#display_name SagemakerAppImageConfig#display_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the kernel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#name SagemakerAppImageConfig#name}

---

### SagemakerAppImageConfigTags <a name="SagemakerAppImageConfigTags" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

const sagemakerAppImageConfigTags: sagemakerAppImageConfig.SagemakerAppImageConfigTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#key SagemakerAppImageConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#value SagemakerAppImageConfig#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#key SagemakerAppImageConfig#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_app_image_config#value SagemakerAppImageConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList <a name="SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]

---


### SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference <a name="SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>

---


### SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference <a name="SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.putContainerEnvironmentVariables">putContainerEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerArguments">resetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEntrypoint">resetContainerEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables">resetContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerEnvironmentVariables` <a name="putContainerEnvironmentVariables" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.putContainerEnvironmentVariables"></a>

```typescript
public putContainerEnvironmentVariables(value: IResolvable | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.putContainerEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]

---

##### `resetContainerArguments` <a name="resetContainerArguments" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerArguments"></a>

```typescript
public resetContainerArguments(): void
```

##### `resetContainerEntrypoint` <a name="resetContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEntrypoint"></a>

```typescript
public resetContainerEntrypoint(): void
```

##### `resetContainerEnvironmentVariables` <a name="resetContainerEnvironmentVariables" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables"></a>

```typescript
public resetContainerEnvironmentVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArgumentsInput">containerArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypointInput">containerEntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput">containerEnvironmentVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerEnvironmentVariables`<sup>Required</sup> <a name="containerEnvironmentVariables" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```typescript
public readonly containerEnvironmentVariables: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList</a>

---

##### `containerArgumentsInput`<sup>Optional</sup> <a name="containerArgumentsInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArgumentsInput"></a>

```typescript
public readonly containerArgumentsInput: string[];
```

- *Type:* string[]

---

##### `containerEntrypointInput`<sup>Optional</sup> <a name="containerEntrypointInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypointInput"></a>

```typescript
public readonly containerEntrypointInput: string[];
```

- *Type:* string[]

---

##### `containerEnvironmentVariablesInput`<sup>Optional</sup> <a name="containerEnvironmentVariablesInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput"></a>

```typescript
public readonly containerEnvironmentVariablesInput: IResolvable | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]

---

##### `containerArguments`<sup>Required</sup> <a name="containerArguments" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

---

##### `containerEntrypoint`<sup>Required</sup> <a name="containerEntrypoint" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---


### SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference <a name="SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putContainerConfig">putContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resetContainerConfig">resetContainerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerConfig` <a name="putContainerConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putContainerConfig"></a>

```typescript
public putContainerConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.putContainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---

##### `resetContainerConfig` <a name="resetContainerConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resetContainerConfig"></a>

```typescript
public resetContainerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfigInput">containerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerConfig`<sup>Required</sup> <a name="containerConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig"></a>

```typescript
public readonly containerConfig: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a>

---

##### `containerConfigInput`<sup>Optional</sup> <a name="containerConfigInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfigInput"></a>

```typescript
public readonly containerConfigInput: IResolvable | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigCodeEditorAppImageConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigCodeEditorAppImageConfig">SagemakerAppImageConfigCodeEditorAppImageConfig</a>

---


### SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList <a name="SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]

---


### SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference <a name="SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>

---


### SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference <a name="SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.putContainerEnvironmentVariables">putContainerEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resetContainerArguments">resetContainerArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resetContainerEntrypoint">resetContainerEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables">resetContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerEnvironmentVariables` <a name="putContainerEnvironmentVariables" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.putContainerEnvironmentVariables"></a>

```typescript
public putContainerEnvironmentVariables(value: IResolvable | SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.putContainerEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]

---

##### `resetContainerArguments` <a name="resetContainerArguments" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resetContainerArguments"></a>

```typescript
public resetContainerArguments(): void
```

##### `resetContainerEntrypoint` <a name="resetContainerEntrypoint" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resetContainerEntrypoint"></a>

```typescript
public resetContainerEntrypoint(): void
```

##### `resetContainerEnvironmentVariables` <a name="resetContainerEnvironmentVariables" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resetContainerEnvironmentVariables"></a>

```typescript
public resetContainerEnvironmentVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">containerEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerArgumentsInput">containerArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEntrypointInput">containerEntrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput">containerEnvironmentVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerArguments">containerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEntrypoint">containerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerEnvironmentVariables`<sup>Required</sup> <a name="containerEnvironmentVariables" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```typescript
public readonly containerEnvironmentVariables: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList</a>

---

##### `containerArgumentsInput`<sup>Optional</sup> <a name="containerArgumentsInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerArgumentsInput"></a>

```typescript
public readonly containerArgumentsInput: string[];
```

- *Type:* string[]

---

##### `containerEntrypointInput`<sup>Optional</sup> <a name="containerEntrypointInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEntrypointInput"></a>

```typescript
public readonly containerEntrypointInput: string[];
```

- *Type:* string[]

---

##### `containerEnvironmentVariablesInput`<sup>Optional</sup> <a name="containerEnvironmentVariablesInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariablesInput"></a>

```typescript
public readonly containerEnvironmentVariablesInput: IResolvable | SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>[]

---

##### `containerArguments`<sup>Required</sup> <a name="containerArguments" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```typescript
public readonly containerArguments: string[];
```

- *Type:* string[]

---

##### `containerEntrypoint`<sup>Required</sup> <a name="containerEntrypoint" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```typescript
public readonly containerEntrypoint: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a>

---


### SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference <a name="SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.putContainerConfig">putContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resetContainerConfig">resetContainerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerConfig` <a name="putContainerConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.putContainerConfig"></a>

```typescript
public putContainerConfig(value: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.putContainerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a>

---

##### `resetContainerConfig` <a name="resetContainerConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resetContainerConfig"></a>

```typescript
public resetContainerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.containerConfig">containerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.containerConfigInput">containerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig">SagemakerAppImageConfigJupyterLabAppImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerConfig`<sup>Required</sup> <a name="containerConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.containerConfig"></a>

```typescript
public readonly containerConfig: SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference</a>

---

##### `containerConfigInput`<sup>Optional</sup> <a name="containerConfigInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.containerConfigInput"></a>

```typescript
public readonly containerConfigInput: IResolvable | SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">SagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigJupyterLabAppImageConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigJupyterLabAppImageConfig">SagemakerAppImageConfigJupyterLabAppImageConfig</a>

---


### SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference <a name="SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultGid">resetDefaultGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultUid">resetDefaultUid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGid` <a name="resetDefaultGid" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultGid"></a>

```typescript
public resetDefaultGid(): void
```

##### `resetDefaultUid` <a name="resetDefaultUid" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetDefaultUid"></a>

```typescript
public resetDefaultUid(): void
```

##### `resetMountPath` <a name="resetMountPath" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGidInput">defaultGidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUidInput">defaultUidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid">defaultGid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid">defaultUid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultGidInput`<sup>Optional</sup> <a name="defaultGidInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGidInput"></a>

```typescript
public readonly defaultGidInput: number;
```

- *Type:* number

---

##### `defaultUidInput`<sup>Optional</sup> <a name="defaultUidInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUidInput"></a>

```typescript
public readonly defaultUidInput: number;
```

- *Type:* number

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `defaultGid`<sup>Required</sup> <a name="defaultGid" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid"></a>

```typescript
public readonly defaultGid: number;
```

- *Type:* number

---

##### `defaultUid`<sup>Required</sup> <a name="defaultUid" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid"></a>

```typescript
public readonly defaultUid: number;
```

- *Type:* number

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---


### SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList <a name="SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get"></a>

```typescript
public get(index: number): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>[]

---


### SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference <a name="SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>

---


### SagemakerAppImageConfigKernelGatewayImageConfigOutputReference <a name="SagemakerAppImageConfigKernelGatewayImageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putFileSystemConfig">putFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putKernelSpecs">putKernelSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resetFileSystemConfig">resetFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resetKernelSpecs">resetKernelSpecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileSystemConfig` <a name="putFileSystemConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putFileSystemConfig"></a>

```typescript
public putFileSystemConfig(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---

##### `putKernelSpecs` <a name="putKernelSpecs" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putKernelSpecs"></a>

```typescript
public putKernelSpecs(value: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.putKernelSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>[]

---

##### `resetFileSystemConfig` <a name="resetFileSystemConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resetFileSystemConfig"></a>

```typescript
public resetFileSystemConfig(): void
```

##### `resetKernelSpecs` <a name="resetKernelSpecs" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resetKernelSpecs"></a>

```typescript
public resetKernelSpecs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig">fileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecs">kernelSpecs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfigInput">fileSystemConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecsInput">kernelSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemConfig`<sup>Required</sup> <a name="fileSystemConfig" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig"></a>

```typescript
public readonly fileSystemConfig: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a>

---

##### `kernelSpecs`<sup>Required</sup> <a name="kernelSpecs" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecs"></a>

```typescript
public readonly kernelSpecs: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList</a>

---

##### `fileSystemConfigInput`<sup>Optional</sup> <a name="fileSystemConfigInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfigInput"></a>

```typescript
public readonly fileSystemConfigInput: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---

##### `kernelSpecsInput`<sup>Optional</sup> <a name="kernelSpecsInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecsInput"></a>

```typescript
public readonly kernelSpecsInput: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigKernelGatewayImageConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigKernelGatewayImageConfig">SagemakerAppImageConfigKernelGatewayImageConfig</a>

---


### SagemakerAppImageConfigTagsList <a name="SagemakerAppImageConfigTagsList" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.get"></a>

```typescript
public get(index: number): SagemakerAppImageConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags">SagemakerAppImageConfigTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags">SagemakerAppImageConfigTags</a>[]

---


### SagemakerAppImageConfigTagsOutputReference <a name="SagemakerAppImageConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerAppImageConfig } from '@cdktn/provider-awscc'

new sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags">SagemakerAppImageConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAppImageConfigTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAppImageConfig.SagemakerAppImageConfigTags">SagemakerAppImageConfigTags</a>

---



