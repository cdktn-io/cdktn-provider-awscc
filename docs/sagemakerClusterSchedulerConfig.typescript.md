# `sagemakerClusterSchedulerConfig` Submodule <a name="`sagemakerClusterSchedulerConfig` Submodule" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerClusterSchedulerConfig <a name="SagemakerClusterSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config awscc_sagemaker_cluster_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

new sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig(scope: Construct, id: string, config: SagemakerClusterSchedulerConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig">SagemakerClusterSchedulerConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig">SagemakerClusterSchedulerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig">putSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedulerConfig` <a name="putSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig"></a>

```typescript
public putSchedulerConfig(value: SagemakerClusterSchedulerConfigSchedulerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerClusterSchedulerConfigTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerClusterSchedulerConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerClusterSchedulerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerClusterSchedulerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn">clusterSchedulerConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId">clusterSchedulerConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion">clusterSchedulerConfigVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfig">schedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference">SagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList">SagemakerClusterSchedulerConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfigInput">schedulerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusterSchedulerConfigArn`<sup>Required</sup> <a name="clusterSchedulerConfigArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn"></a>

```typescript
public readonly clusterSchedulerConfigArn: string;
```

- *Type:* string

---

##### `clusterSchedulerConfigId`<sup>Required</sup> <a name="clusterSchedulerConfigId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId"></a>

```typescript
public readonly clusterSchedulerConfigId: string;
```

- *Type:* string

---

##### `clusterSchedulerConfigVersion`<sup>Required</sup> <a name="clusterSchedulerConfigVersion" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion"></a>

```typescript
public readonly clusterSchedulerConfigVersion: number;
```

- *Type:* number

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schedulerConfig`<sup>Required</sup> <a name="schedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfig"></a>

```typescript
public readonly schedulerConfig: SagemakerClusterSchedulerConfigSchedulerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference">SagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tags"></a>

```typescript
public readonly tags: SagemakerClusterSchedulerConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList">SagemakerClusterSchedulerConfigTagsList</a>

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schedulerConfigInput`<sup>Optional</sup> <a name="schedulerConfigInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfigInput"></a>

```typescript
public readonly schedulerConfigInput: IResolvable | SagemakerClusterSchedulerConfigSchedulerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerClusterSchedulerConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerClusterSchedulerConfigConfig <a name="SagemakerClusterSchedulerConfigConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.Initializer"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

const sagemakerClusterSchedulerConfigConfig: sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.clusterArn">clusterArn</a></code> | <code>string</code> | ARN of the cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.name">name</a></code> | <code>string</code> | Name for the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.schedulerConfig">schedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | Cluster policy configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.description">description</a></code> | <code>string</code> | Description of the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]</code> | Tags of the cluster policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

ARN of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#cluster_arn SagemakerClusterSchedulerConfig#cluster_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `schedulerConfig`<sup>Required</sup> <a name="schedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.schedulerConfig"></a>

```typescript
public readonly schedulerConfig: SagemakerClusterSchedulerConfigSchedulerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

Cluster policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#scheduler_config SagemakerClusterSchedulerConfig#scheduler_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#description SagemakerClusterSchedulerConfig#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerClusterSchedulerConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]

Tags of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#tags SagemakerClusterSchedulerConfig#tags}

---

### SagemakerClusterSchedulerConfigSchedulerConfig <a name="SagemakerClusterSchedulerConfigSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.Initializer"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

const sagemakerClusterSchedulerConfigSchedulerConfig: sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.fairShare">fairShare</a></code> | <code>string</code> | When enabled, entities borrow idle compute based on assigned FairShareWeight. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.idleResourceSharing">idleResourceSharing</a></code> | <code>string</code> | Configuration for sharing idle compute resources across entities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.priorityClasses">priorityClasses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]</code> | List of priority class configurations. |

---

##### `fairShare`<sup>Optional</sup> <a name="fairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.fairShare"></a>

```typescript
public readonly fairShare: string;
```

- *Type:* string

When enabled, entities borrow idle compute based on assigned FairShareWeight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#fair_share SagemakerClusterSchedulerConfig#fair_share}

---

##### `idleResourceSharing`<sup>Optional</sup> <a name="idleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.idleResourceSharing"></a>

```typescript
public readonly idleResourceSharing: string;
```

- *Type:* string

Configuration for sharing idle compute resources across entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#idle_resource_sharing SagemakerClusterSchedulerConfig#idle_resource_sharing}

---

##### `priorityClasses`<sup>Optional</sup> <a name="priorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.priorityClasses"></a>

```typescript
public readonly priorityClasses: IResolvable | SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]

List of priority class configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#priority_classes SagemakerClusterSchedulerConfig#priority_classes}

---

### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.Initializer"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

const sagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses: sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.name">name</a></code> | <code>string</code> | Name of the priority class. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.weight">weight</a></code> | <code>number</code> | Weight of the priority class. Range 0-100, default 0. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the priority class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Weight of the priority class. Range 0-100, default 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#weight SagemakerClusterSchedulerConfig#weight}

---

### SagemakerClusterSchedulerConfigTags <a name="SagemakerClusterSchedulerConfigTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.Initializer"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

const sagemakerClusterSchedulerConfigTags: sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerClusterSchedulerConfigSchedulerConfigOutputReference <a name="SagemakerClusterSchedulerConfigSchedulerConfigOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

new sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses">putPriorityClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetFairShare">resetFairShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetIdleResourceSharing">resetIdleResourceSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetPriorityClasses">resetPriorityClasses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPriorityClasses` <a name="putPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses"></a>

```typescript
public putPriorityClasses(value: IResolvable | SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]

---

##### `resetFairShare` <a name="resetFairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetFairShare"></a>

```typescript
public resetFairShare(): void
```

##### `resetIdleResourceSharing` <a name="resetIdleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetIdleResourceSharing"></a>

```typescript
public resetIdleResourceSharing(): void
```

##### `resetPriorityClasses` <a name="resetPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetPriorityClasses"></a>

```typescript
public resetPriorityClasses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses">priorityClasses</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShareInput">fairShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharingInput">idleResourceSharingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClassesInput">priorityClassesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare">fairShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing">idleResourceSharing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `priorityClasses`<sup>Required</sup> <a name="priorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses"></a>

```typescript
public readonly priorityClasses: SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a>

---

##### `fairShareInput`<sup>Optional</sup> <a name="fairShareInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShareInput"></a>

```typescript
public readonly fairShareInput: string;
```

- *Type:* string

---

##### `idleResourceSharingInput`<sup>Optional</sup> <a name="idleResourceSharingInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharingInput"></a>

```typescript
public readonly idleResourceSharingInput: string;
```

- *Type:* string

---

##### `priorityClassesInput`<sup>Optional</sup> <a name="priorityClassesInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClassesInput"></a>

```typescript
public readonly priorityClassesInput: IResolvable | SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]

---

##### `fairShare`<sup>Required</sup> <a name="fairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare"></a>

```typescript
public readonly fairShare: string;
```

- *Type:* string

---

##### `idleResourceSharing`<sup>Required</sup> <a name="idleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing"></a>

```typescript
public readonly idleResourceSharing: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerClusterSchedulerConfigSchedulerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---


### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

new sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get"></a>

```typescript
public get(index: number): SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]

---


### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

new sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>

---


### SagemakerClusterSchedulerConfigTagsList <a name="SagemakerClusterSchedulerConfigTagsList" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

new sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get"></a>

```typescript
public get(index: number): SagemakerClusterSchedulerConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerClusterSchedulerConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]

---


### SagemakerClusterSchedulerConfigTagsOutputReference <a name="SagemakerClusterSchedulerConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerClusterSchedulerConfig } from '@cdktn/provider-awscc'

new sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerClusterSchedulerConfigTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>

---



