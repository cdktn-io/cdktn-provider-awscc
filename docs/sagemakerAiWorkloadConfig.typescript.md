# `sagemakerAiWorkloadConfig` Submodule <a name="`sagemakerAiWorkloadConfig` Submodule" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerAiWorkloadConfig <a name="SagemakerAiWorkloadConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config awscc_sagemaker_ai_workload_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

new sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig(scope: Construct, id: string, config: SagemakerAiWorkloadConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig">SagemakerAiWorkloadConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig">SagemakerAiWorkloadConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs">putAiWorkloadConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig">putDatasetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetAiWorkloadConfigs">resetAiWorkloadConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetDatasetConfig">resetDatasetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAiWorkloadConfigs` <a name="putAiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs"></a>

```typescript
public putAiWorkloadConfigs(value: SagemakerAiWorkloadConfigAiWorkloadConfigs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putAiWorkloadConfigs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---

##### `putDatasetConfig` <a name="putDatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig"></a>

```typescript
public putDatasetConfig(value: SagemakerAiWorkloadConfigDatasetConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putDatasetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerAiWorkloadConfigTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>[]

---

##### `resetAiWorkloadConfigs` <a name="resetAiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetAiWorkloadConfigs"></a>

```typescript
public resetAiWorkloadConfigs(): void
```

##### `resetDatasetConfig` <a name="resetDatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetDatasetConfig"></a>

```typescript
public resetDatasetConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerAiWorkloadConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerAiWorkloadConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerAiWorkloadConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigArn">aiWorkloadConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigs">aiWorkloadConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfig">datasetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference">SagemakerAiWorkloadConfigDatasetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList">SagemakerAiWorkloadConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigNameInput">aiWorkloadConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigsInput">aiWorkloadConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfigInput">datasetConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigName">aiWorkloadConfigName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aiWorkloadConfigArn`<sup>Required</sup> <a name="aiWorkloadConfigArn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigArn"></a>

```typescript
public readonly aiWorkloadConfigArn: string;
```

- *Type:* string

---

##### `aiWorkloadConfigs`<sup>Required</sup> <a name="aiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigs"></a>

```typescript
public readonly aiWorkloadConfigs: SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `datasetConfig`<sup>Required</sup> <a name="datasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfig"></a>

```typescript
public readonly datasetConfig: SagemakerAiWorkloadConfigDatasetConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference">SagemakerAiWorkloadConfigDatasetConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tags"></a>

```typescript
public readonly tags: SagemakerAiWorkloadConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList">SagemakerAiWorkloadConfigTagsList</a>

---

##### `aiWorkloadConfigNameInput`<sup>Optional</sup> <a name="aiWorkloadConfigNameInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigNameInput"></a>

```typescript
public readonly aiWorkloadConfigNameInput: string;
```

- *Type:* string

---

##### `aiWorkloadConfigsInput`<sup>Optional</sup> <a name="aiWorkloadConfigsInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigsInput"></a>

```typescript
public readonly aiWorkloadConfigsInput: IResolvable | SagemakerAiWorkloadConfigAiWorkloadConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---

##### `datasetConfigInput`<sup>Optional</sup> <a name="datasetConfigInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.datasetConfigInput"></a>

```typescript
public readonly datasetConfigInput: IResolvable | SagemakerAiWorkloadConfigDatasetConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerAiWorkloadConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>[]

---

##### `aiWorkloadConfigName`<sup>Required</sup> <a name="aiWorkloadConfigName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.aiWorkloadConfigName"></a>

```typescript
public readonly aiWorkloadConfigName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerAiWorkloadConfigAiWorkloadConfigs <a name="SagemakerAiWorkloadConfigAiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

const sagemakerAiWorkloadConfigAiWorkloadConfigs: sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.property.workloadSpec">workloadSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | The workload specification that defines benchmark parameters. |

---

##### `workloadSpec`<sup>Optional</sup> <a name="workloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs.property.workloadSpec"></a>

```typescript
public readonly workloadSpec: SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

The workload specification that defines benchmark parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#workload_spec SagemakerAiWorkloadConfig#workload_spec}

---

### SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

const sagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec: sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.property.inline">inline</a></code> | <code>string</code> | An inline YAML or JSON string that defines benchmark parameters. |

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.property.inline"></a>

```typescript
public readonly inline: string;
```

- *Type:* string

An inline YAML or JSON string that defines benchmark parameters.

The service validates the document against its own benchmark schema: it must declare a benchmark object whose type member matches the pattern ^(aiperf)$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#inline SagemakerAiWorkloadConfig#inline}

---

### SagemakerAiWorkloadConfigConfig <a name="SagemakerAiWorkloadConfigConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

const sagemakerAiWorkloadConfigConfig: sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigName">aiWorkloadConfigName</a></code> | <code>string</code> | The name of the AI workload configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigs">aiWorkloadConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | The benchmark tool configuration and workload specification. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.datasetConfig">datasetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>[]</code> | The metadata that you apply to the AI workload configuration to help you categorize and organize it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aiWorkloadConfigName`<sup>Required</sup> <a name="aiWorkloadConfigName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigName"></a>

```typescript
public readonly aiWorkloadConfigName: string;
```

- *Type:* string

The name of the AI workload configuration.

The name must be unique within your AWS account in the current AWS Region. Only lowercase letters and digits are accepted: DeleteAIWorkloadConfig lowercases the name before looking it up, so a name containing an uppercase letter produces a configuration that can be created and read but never deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#ai_workload_config_name SagemakerAiWorkloadConfig#ai_workload_config_name}

---

##### `aiWorkloadConfigs`<sup>Optional</sup> <a name="aiWorkloadConfigs" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.aiWorkloadConfigs"></a>

```typescript
public readonly aiWorkloadConfigs: SagemakerAiWorkloadConfigAiWorkloadConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

The benchmark tool configuration and workload specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#ai_workload_configs SagemakerAiWorkloadConfig#ai_workload_configs}

---

##### `datasetConfig`<sup>Optional</sup> <a name="datasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.datasetConfig"></a>

```typescript
public readonly datasetConfig: SagemakerAiWorkloadConfigDatasetConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#dataset_config SagemakerAiWorkloadConfig#dataset_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerAiWorkloadConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>[]

The metadata that you apply to the AI workload configuration to help you categorize and organize it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#tags SagemakerAiWorkloadConfig#tags}

---

### SagemakerAiWorkloadConfigDatasetConfig <a name="SagemakerAiWorkloadConfigDatasetConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

const sagemakerAiWorkloadConfigDatasetConfig: sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.property.inputDataConfig">inputDataConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>[]</code> | An array of input data channel configurations for the workload. |

---

##### `inputDataConfig`<sup>Optional</sup> <a name="inputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig.property.inputDataConfig"></a>

```typescript
public readonly inputDataConfig: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>[]

An array of input data channel configurations for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#input_data_config SagemakerAiWorkloadConfig#input_data_config}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfig <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

const sagemakerAiWorkloadConfigDatasetConfigInputDataConfig: sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.channelName">channelName</a></code> | <code>string</code> | The logical name for the data channel. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | The data source for this channel. |

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The logical name for the data channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#channel_name SagemakerAiWorkloadConfig#channel_name}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig.property.dataSource"></a>

```typescript
public readonly dataSource: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

The data source for this channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#data_source SagemakerAiWorkloadConfig#data_source}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

const sagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource: sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.property.s3DataSource">s3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | The Amazon S3 data source configuration. |

---

##### `s3DataSource`<sup>Optional</sup> <a name="s3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.property.s3DataSource"></a>

```typescript
public readonly s3DataSource: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

The Amazon S3 data source configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#s3_data_source SagemakerAiWorkloadConfig#s3_data_source}

---

### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

const sagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource: sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.property.s3Uri">s3Uri</a></code> | <code>string</code> | The Amazon S3 URI of the data. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

The Amazon S3 URI of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#s3_uri SagemakerAiWorkloadConfig#s3_uri}

---

### SagemakerAiWorkloadConfigTags <a name="SagemakerAiWorkloadConfigTags" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

const sagemakerAiWorkloadConfigTags: sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.key">key</a></code> | <code>string</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#key SagemakerAiWorkloadConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/sagemaker_ai_workload_config#value SagemakerAiWorkloadConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

new sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec">putWorkloadSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resetWorkloadSpec">resetWorkloadSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWorkloadSpec` <a name="putWorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec"></a>

```typescript
public putWorkloadSpec(value: SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.putWorkloadSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---

##### `resetWorkloadSpec` <a name="resetWorkloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resetWorkloadSpec"></a>

```typescript
public resetWorkloadSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec">workloadSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpecInput">workloadSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workloadSpec`<sup>Required</sup> <a name="workloadSpec" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec"></a>

```typescript
public readonly workloadSpec: SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a>

---

##### `workloadSpecInput`<sup>Optional</sup> <a name="workloadSpecInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpecInput"></a>

```typescript
public readonly workloadSpecInput: IResolvable | SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAiWorkloadConfigAiWorkloadConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigs">SagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---


### SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference <a name="SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

new sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resetInline">resetInline</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resetInline"></a>

```typescript
public resetInline(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inlineInput">inlineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline">inline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inlineInput"></a>

```typescript
public readonly inlineInput: string;
```

- *Type:* string

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline"></a>

```typescript
public readonly inline: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">SagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

new sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource">putS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resetS3DataSource">resetS3DataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3DataSource` <a name="putS3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource"></a>

```typescript
public putS3DataSource(value: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---

##### `resetS3DataSource` <a name="resetS3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resetS3DataSource"></a>

```typescript
public resetS3DataSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource">s3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSourceInput">s3DataSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3DataSource`<sup>Required</sup> <a name="s3DataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource"></a>

```typescript
public readonly s3DataSource: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a>

---

##### `s3DataSourceInput`<sup>Optional</sup> <a name="s3DataSourceInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSourceInput"></a>

```typescript
public readonly s3DataSourceInput: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

new sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resetS3Uri"></a>

```typescript
public resetS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

new sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get"></a>

```typescript
public get(index: number): SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>[]

---


### SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

new sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource">putDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSource` <a name="putDataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource"></a>

```typescript
public putDataSource(value: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.putDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---

##### `resetChannelName` <a name="resetChannelName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetChannelName"></a>

```typescript
public resetChannelName(): void
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a>

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>

---


### SagemakerAiWorkloadConfigDatasetConfigOutputReference <a name="SagemakerAiWorkloadConfigDatasetConfigOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

new sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig">putInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resetInputDataConfig">resetInputDataConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputDataConfig` <a name="putInputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig"></a>

```typescript
public putInputDataConfig(value: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.putInputDataConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>[]

---

##### `resetInputDataConfig` <a name="resetInputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.resetInputDataConfig"></a>

```typescript
public resetInputDataConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfigInput">inputDataConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig"></a>

```typescript
public readonly inputDataConfig: SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">SagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a>

---

##### `inputDataConfigInput`<sup>Optional</sup> <a name="inputDataConfigInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfigInput"></a>

```typescript
public readonly inputDataConfigInput: IResolvable | SagemakerAiWorkloadConfigDatasetConfigInputDataConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigInputDataConfig">SagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAiWorkloadConfigDatasetConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigDatasetConfig">SagemakerAiWorkloadConfigDatasetConfig</a>

---


### SagemakerAiWorkloadConfigTagsList <a name="SagemakerAiWorkloadConfigTagsList" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

new sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get"></a>

```typescript
public get(index: number): SagemakerAiWorkloadConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAiWorkloadConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>[]

---


### SagemakerAiWorkloadConfigTagsOutputReference <a name="SagemakerAiWorkloadConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerAiWorkloadConfig } from '@cdktn/provider-awscc'

new sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerAiWorkloadConfigTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerAiWorkloadConfig.SagemakerAiWorkloadConfigTags">SagemakerAiWorkloadConfigTags</a>

---



