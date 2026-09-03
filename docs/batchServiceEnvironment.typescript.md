# `batchServiceEnvironment` Submodule <a name="`batchServiceEnvironment` Submodule" id="@cdktn/provider-awscc.batchServiceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchServiceEnvironment <a name="BatchServiceEnvironment" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment awscc_batch_service_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer"></a>

```typescript
import { batchServiceEnvironment } from '@cdktn/provider-awscc'

new batchServiceEnvironment.BatchServiceEnvironment(scope: Construct, id: string, config: BatchServiceEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig">BatchServiceEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig">BatchServiceEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.putCapacityLimits">putCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetServiceEnvironmentName">resetServiceEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityLimits` <a name="putCapacityLimits" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.putCapacityLimits"></a>

```typescript
public putCapacityLimits(value: IResolvable | BatchServiceEnvironmentCapacityLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.putCapacityLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits">BatchServiceEnvironmentCapacityLimits</a>[]

---

##### `resetServiceEnvironmentName` <a name="resetServiceEnvironmentName" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetServiceEnvironmentName"></a>

```typescript
public resetServiceEnvironmentName(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BatchServiceEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isConstruct"></a>

```typescript
import { batchServiceEnvironment } from '@cdktn/provider-awscc'

batchServiceEnvironment.BatchServiceEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformElement"></a>

```typescript
import { batchServiceEnvironment } from '@cdktn/provider-awscc'

batchServiceEnvironment.BatchServiceEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformResource"></a>

```typescript
import { batchServiceEnvironment } from '@cdktn/provider-awscc'

batchServiceEnvironment.BatchServiceEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport"></a>

```typescript
import { batchServiceEnvironment } from '@cdktn/provider-awscc'

batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BatchServiceEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BatchServiceEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BatchServiceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BatchServiceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.capacityLimits">capacityLimits</a></code> | <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList">BatchServiceEnvironmentCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentArn">serviceEnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.capacityLimitsInput">capacityLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits">BatchServiceEnvironmentCapacityLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentNameInput">serviceEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentTypeInput">serviceEnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentName">serviceEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentType">serviceEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.capacityLimits"></a>

```typescript
public readonly capacityLimits: BatchServiceEnvironmentCapacityLimitsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList">BatchServiceEnvironmentCapacityLimitsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceEnvironmentArn`<sup>Required</sup> <a name="serviceEnvironmentArn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentArn"></a>

```typescript
public readonly serviceEnvironmentArn: string;
```

- *Type:* string

---

##### `capacityLimitsInput`<sup>Optional</sup> <a name="capacityLimitsInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.capacityLimitsInput"></a>

```typescript
public readonly capacityLimitsInput: IResolvable | BatchServiceEnvironmentCapacityLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits">BatchServiceEnvironmentCapacityLimits</a>[]

---

##### `serviceEnvironmentNameInput`<sup>Optional</sup> <a name="serviceEnvironmentNameInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentNameInput"></a>

```typescript
public readonly serviceEnvironmentNameInput: string;
```

- *Type:* string

---

##### `serviceEnvironmentTypeInput`<sup>Optional</sup> <a name="serviceEnvironmentTypeInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentTypeInput"></a>

```typescript
public readonly serviceEnvironmentTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceEnvironmentName`<sup>Required</sup> <a name="serviceEnvironmentName" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentName"></a>

```typescript
public readonly serviceEnvironmentName: string;
```

- *Type:* string

---

##### `serviceEnvironmentType`<sup>Required</sup> <a name="serviceEnvironmentType" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.serviceEnvironmentType"></a>

```typescript
public readonly serviceEnvironmentType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchServiceEnvironmentCapacityLimits <a name="BatchServiceEnvironmentCapacityLimits" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits.Initializer"></a>

```typescript
import { batchServiceEnvironment } from '@cdktn/provider-awscc'

const batchServiceEnvironmentCapacityLimits: batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits.property.capacityUnit">capacityUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#capacity_unit BatchServiceEnvironment#capacity_unit}. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#max_capacity BatchServiceEnvironment#max_capacity}. |

---

##### `capacityUnit`<sup>Optional</sup> <a name="capacityUnit" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits.property.capacityUnit"></a>

```typescript
public readonly capacityUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#capacity_unit BatchServiceEnvironment#capacity_unit}.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#max_capacity BatchServiceEnvironment#max_capacity}.

---

### BatchServiceEnvironmentConfig <a name="BatchServiceEnvironmentConfig" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.Initializer"></a>

```typescript
import { batchServiceEnvironment } from '@cdktn/provider-awscc'

const batchServiceEnvironmentConfig: batchServiceEnvironment.BatchServiceEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.capacityLimits">capacityLimits</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits">BatchServiceEnvironmentCapacityLimits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#capacity_limits BatchServiceEnvironment#capacity_limits}. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.serviceEnvironmentType">serviceEnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#service_environment_type BatchServiceEnvironment#service_environment_type}. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.serviceEnvironmentName">serviceEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#service_environment_name BatchServiceEnvironment#service_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#state BatchServiceEnvironment#state}. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.capacityLimits"></a>

```typescript
public readonly capacityLimits: IResolvable | BatchServiceEnvironmentCapacityLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits">BatchServiceEnvironmentCapacityLimits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#capacity_limits BatchServiceEnvironment#capacity_limits}.

---

##### `serviceEnvironmentType`<sup>Required</sup> <a name="serviceEnvironmentType" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.serviceEnvironmentType"></a>

```typescript
public readonly serviceEnvironmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#service_environment_type BatchServiceEnvironment#service_environment_type}.

---

##### `serviceEnvironmentName`<sup>Optional</sup> <a name="serviceEnvironmentName" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.serviceEnvironmentName"></a>

```typescript
public readonly serviceEnvironmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#service_environment_name BatchServiceEnvironment#service_environment_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#state BatchServiceEnvironment#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/batch_service_environment#tags BatchServiceEnvironment#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### BatchServiceEnvironmentCapacityLimitsList <a name="BatchServiceEnvironmentCapacityLimitsList" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer"></a>

```typescript
import { batchServiceEnvironment } from '@cdktn/provider-awscc'

new batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.get"></a>

```typescript
public get(index: number): BatchServiceEnvironmentCapacityLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits">BatchServiceEnvironmentCapacityLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchServiceEnvironmentCapacityLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits">BatchServiceEnvironmentCapacityLimits</a>[]

---


### BatchServiceEnvironmentCapacityLimitsOutputReference <a name="BatchServiceEnvironmentCapacityLimitsOutputReference" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer"></a>

```typescript
import { batchServiceEnvironment } from '@cdktn/provider-awscc'

new batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resetCapacityUnit">resetCapacityUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityUnit` <a name="resetCapacityUnit" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resetCapacityUnit"></a>

```typescript
public resetCapacityUnit(): void
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.capacityUnitInput">capacityUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.capacityUnit">capacityUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits">BatchServiceEnvironmentCapacityLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityUnitInput`<sup>Optional</sup> <a name="capacityUnitInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.capacityUnitInput"></a>

```typescript
public readonly capacityUnitInput: string;
```

- *Type:* string

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `capacityUnit`<sup>Required</sup> <a name="capacityUnit" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.capacityUnit"></a>

```typescript
public readonly capacityUnit: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchServiceEnvironmentCapacityLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchServiceEnvironment.BatchServiceEnvironmentCapacityLimits">BatchServiceEnvironmentCapacityLimits</a>

---



