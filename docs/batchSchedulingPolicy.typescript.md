# `batchSchedulingPolicy` Submodule <a name="`batchSchedulingPolicy` Submodule" id="@cdktn/provider-awscc.batchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchSchedulingPolicy <a name="BatchSchedulingPolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy awscc_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

new batchSchedulingPolicy.BatchSchedulingPolicy(scope: Construct, id: string, config?: BatchSchedulingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy">putFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy">putQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairsharePolicy">resetFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetQuotaSharePolicy">resetQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFairsharePolicy` <a name="putFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy"></a>

```typescript
public putFairsharePolicy(value: BatchSchedulingPolicyFairsharePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---

##### `putQuotaSharePolicy` <a name="putQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy"></a>

```typescript
public putQuotaSharePolicy(value: BatchSchedulingPolicyQuotaSharePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---

##### `resetFairsharePolicy` <a name="resetFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairsharePolicy"></a>

```typescript
public resetFairsharePolicy(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetName"></a>

```typescript
public resetName(): void
```

##### `resetQuotaSharePolicy` <a name="resetQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetQuotaSharePolicy"></a>

```typescript
public resetQuotaSharePolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BatchSchedulingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BatchSchedulingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BatchSchedulingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicy">fairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference">BatchSchedulingPolicyFairsharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicy">quotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference">BatchSchedulingPolicyQuotaSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicyInput">fairsharePolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicyInput">quotaSharePolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fairsharePolicy`<sup>Required</sup> <a name="fairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicy"></a>

```typescript
public readonly fairsharePolicy: BatchSchedulingPolicyFairsharePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference">BatchSchedulingPolicyFairsharePolicyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `quotaSharePolicy`<sup>Required</sup> <a name="quotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicy"></a>

```typescript
public readonly quotaSharePolicy: BatchSchedulingPolicyQuotaSharePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference">BatchSchedulingPolicyQuotaSharePolicyOutputReference</a>

---

##### `fairsharePolicyInput`<sup>Optional</sup> <a name="fairsharePolicyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicyInput"></a>

```typescript
public readonly fairsharePolicyInput: IResolvable | BatchSchedulingPolicyFairsharePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `quotaSharePolicyInput`<sup>Optional</sup> <a name="quotaSharePolicyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicyInput"></a>

```typescript
public readonly quotaSharePolicyInput: IResolvable | BatchSchedulingPolicyQuotaSharePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchSchedulingPolicyConfig <a name="BatchSchedulingPolicyConfig" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

const batchSchedulingPolicyConfig: batchSchedulingPolicy.BatchSchedulingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairsharePolicy">fairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | Fair Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of Scheduling Policy. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.quotaSharePolicy">quotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | Quota Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fairsharePolicy`<sup>Optional</sup> <a name="fairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairsharePolicy"></a>

```typescript
public readonly fairsharePolicy: BatchSchedulingPolicyFairsharePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

Fair Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#fairshare_policy BatchSchedulingPolicy#fairshare_policy}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of Scheduling Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}

---

##### `quotaSharePolicy`<sup>Optional</sup> <a name="quotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.quotaSharePolicy"></a>

```typescript
public readonly quotaSharePolicy: BatchSchedulingPolicyQuotaSharePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

Quota Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#quota_share_policy BatchSchedulingPolicy#quota_share_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}

---

### BatchSchedulingPolicyFairsharePolicy <a name="BatchSchedulingPolicyFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

const batchSchedulingPolicyFairsharePolicy: batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.computeReservation">computeReservation</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDecaySeconds">shareDecaySeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDistribution">shareDistribution</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]</code> | List of Share Attributes. |

---

##### `computeReservation`<sup>Optional</sup> <a name="computeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.computeReservation"></a>

```typescript
public readonly computeReservation: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

##### `shareDecaySeconds`<sup>Optional</sup> <a name="shareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDecaySeconds"></a>

```typescript
public readonly shareDecaySeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

##### `shareDistribution`<sup>Optional</sup> <a name="shareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDistribution"></a>

```typescript
public readonly shareDistribution: IResolvable | BatchSchedulingPolicyFairsharePolicyShareDistribution[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]

List of Share Attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

### BatchSchedulingPolicyFairsharePolicyShareDistribution <a name="BatchSchedulingPolicyFairsharePolicyShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

const batchSchedulingPolicyFairsharePolicyShareDistribution: batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.shareIdentifier">shareIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.weightFactor">weightFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}. |

---

##### `shareIdentifier`<sup>Optional</sup> <a name="shareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.shareIdentifier"></a>

```typescript
public readonly shareIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}.

---

##### `weightFactor`<sup>Optional</sup> <a name="weightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.weightFactor"></a>

```typescript
public readonly weightFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}.

---

### BatchSchedulingPolicyQuotaSharePolicy <a name="BatchSchedulingPolicyQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

const batchSchedulingPolicyQuotaSharePolicy: batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.property.idleResourceAssignmentStrategy">idleResourceAssignmentStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}. |

---

##### `idleResourceAssignmentStrategy`<sup>Optional</sup> <a name="idleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.property.idleResourceAssignmentStrategy"></a>

```typescript
public readonly idleResourceAssignmentStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchSchedulingPolicyFairsharePolicyOutputReference <a name="BatchSchedulingPolicyFairsharePolicyOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

new batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution">putShareDistribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetComputeReservation">resetComputeReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDecaySeconds">resetShareDecaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDistribution">resetShareDistribution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShareDistribution` <a name="putShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution"></a>

```typescript
public putShareDistribution(value: IResolvable | BatchSchedulingPolicyFairsharePolicyShareDistribution[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]

---

##### `resetComputeReservation` <a name="resetComputeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetComputeReservation"></a>

```typescript
public resetComputeReservation(): void
```

##### `resetShareDecaySeconds` <a name="resetShareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDecaySeconds"></a>

```typescript
public resetShareDecaySeconds(): void
```

##### `resetShareDistribution` <a name="resetShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDistribution"></a>

```typescript
public resetShareDistribution(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution">shareDistribution</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList">BatchSchedulingPolicyFairsharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservationInput">computeReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySecondsInput">shareDecaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistributionInput">shareDistributionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation">computeReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds">shareDecaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shareDistribution`<sup>Required</sup> <a name="shareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution"></a>

```typescript
public readonly shareDistribution: BatchSchedulingPolicyFairsharePolicyShareDistributionList;
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList">BatchSchedulingPolicyFairsharePolicyShareDistributionList</a>

---

##### `computeReservationInput`<sup>Optional</sup> <a name="computeReservationInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservationInput"></a>

```typescript
public readonly computeReservationInput: number;
```

- *Type:* number

---

##### `shareDecaySecondsInput`<sup>Optional</sup> <a name="shareDecaySecondsInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySecondsInput"></a>

```typescript
public readonly shareDecaySecondsInput: number;
```

- *Type:* number

---

##### `shareDistributionInput`<sup>Optional</sup> <a name="shareDistributionInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistributionInput"></a>

```typescript
public readonly shareDistributionInput: IResolvable | BatchSchedulingPolicyFairsharePolicyShareDistribution[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]

---

##### `computeReservation`<sup>Required</sup> <a name="computeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation"></a>

```typescript
public readonly computeReservation: number;
```

- *Type:* number

---

##### `shareDecaySeconds`<sup>Required</sup> <a name="shareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds"></a>

```typescript
public readonly shareDecaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchSchedulingPolicyFairsharePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---


### BatchSchedulingPolicyFairsharePolicyShareDistributionList <a name="BatchSchedulingPolicyFairsharePolicyShareDistributionList" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

new batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get"></a>

```typescript
public get(index: number): BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchSchedulingPolicyFairsharePolicyShareDistribution[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]

---


### BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference <a name="BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

new batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetShareIdentifier">resetShareIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetWeightFactor">resetWeightFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetShareIdentifier` <a name="resetShareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetShareIdentifier"></a>

```typescript
public resetShareIdentifier(): void
```

##### `resetWeightFactor` <a name="resetWeightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetWeightFactor"></a>

```typescript
public resetWeightFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifierInput">shareIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactorInput">weightFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier">shareIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor">weightFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shareIdentifierInput`<sup>Optional</sup> <a name="shareIdentifierInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifierInput"></a>

```typescript
public readonly shareIdentifierInput: string;
```

- *Type:* string

---

##### `weightFactorInput`<sup>Optional</sup> <a name="weightFactorInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactorInput"></a>

```typescript
public readonly weightFactorInput: number;
```

- *Type:* number

---

##### `shareIdentifier`<sup>Required</sup> <a name="shareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```typescript
public readonly shareIdentifier: string;
```

- *Type:* string

---

##### `weightFactor`<sup>Required</sup> <a name="weightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```typescript
public readonly weightFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchSchedulingPolicyFairsharePolicyShareDistribution;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>

---


### BatchSchedulingPolicyQuotaSharePolicyOutputReference <a name="BatchSchedulingPolicyQuotaSharePolicyOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer"></a>

```typescript
import { batchSchedulingPolicy } from '@cdktn/provider-awscc'

new batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resetIdleResourceAssignmentStrategy">resetIdleResourceAssignmentStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleResourceAssignmentStrategy` <a name="resetIdleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resetIdleResourceAssignmentStrategy"></a>

```typescript
public resetIdleResourceAssignmentStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategyInput">idleResourceAssignmentStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy">idleResourceAssignmentStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleResourceAssignmentStrategyInput`<sup>Optional</sup> <a name="idleResourceAssignmentStrategyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategyInput"></a>

```typescript
public readonly idleResourceAssignmentStrategyInput: string;
```

- *Type:* string

---

##### `idleResourceAssignmentStrategy`<sup>Required</sup> <a name="idleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy"></a>

```typescript
public readonly idleResourceAssignmentStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchSchedulingPolicyQuotaSharePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---



