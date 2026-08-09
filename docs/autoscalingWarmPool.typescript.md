# `autoscalingWarmPool` Submodule <a name="`autoscalingWarmPool` Submodule" id="@cdktn/provider-awscc.autoscalingWarmPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingWarmPool <a name="AutoscalingWarmPool" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool awscc_autoscaling_warm_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer"></a>

```typescript
import { autoscalingWarmPool } from '@cdktn/provider-awscc'

new autoscalingWarmPool.AutoscalingWarmPool(scope: Construct, id: string, config: AutoscalingWarmPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig">AutoscalingWarmPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig">AutoscalingWarmPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.putInstanceReusePolicy">putInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetInstanceReusePolicy">resetInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMaxGroupPreparedCapacity">resetMaxGroupPreparedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetPoolState">resetPoolState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstanceReusePolicy` <a name="putInstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.putInstanceReusePolicy"></a>

```typescript
public putInstanceReusePolicy(value: AutoscalingWarmPoolInstanceReusePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.putInstanceReusePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

---

##### `resetInstanceReusePolicy` <a name="resetInstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetInstanceReusePolicy"></a>

```typescript
public resetInstanceReusePolicy(): void
```

##### `resetMaxGroupPreparedCapacity` <a name="resetMaxGroupPreparedCapacity" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMaxGroupPreparedCapacity"></a>

```typescript
public resetMaxGroupPreparedCapacity(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetMinSize"></a>

```typescript
public resetMinSize(): void
```

##### `resetPoolState` <a name="resetPoolState" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.resetPoolState"></a>

```typescript
public resetPoolState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingWarmPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isConstruct"></a>

```typescript
import { autoscalingWarmPool } from '@cdktn/provider-awscc'

autoscalingWarmPool.AutoscalingWarmPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformElement"></a>

```typescript
import { autoscalingWarmPool } from '@cdktn/provider-awscc'

autoscalingWarmPool.AutoscalingWarmPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformResource"></a>

```typescript
import { autoscalingWarmPool } from '@cdktn/provider-awscc'

autoscalingWarmPool.AutoscalingWarmPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport"></a>

```typescript
import { autoscalingWarmPool } from '@cdktn/provider-awscc'

autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AutoscalingWarmPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutoscalingWarmPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutoscalingWarmPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingWarmPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicy">instanceReusePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference">AutoscalingWarmPoolInstanceReusePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupNameInput">autoScalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicyInput">instanceReusePolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacityInput">maxGroupPreparedCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolStateInput">poolStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupName">autoScalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacity">maxGroupPreparedCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolState">poolState</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceReusePolicy`<sup>Required</sup> <a name="instanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicy"></a>

```typescript
public readonly instanceReusePolicy: AutoscalingWarmPoolInstanceReusePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference">AutoscalingWarmPoolInstanceReusePolicyOutputReference</a>

---

##### `autoScalingGroupNameInput`<sup>Optional</sup> <a name="autoScalingGroupNameInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupNameInput"></a>

```typescript
public readonly autoScalingGroupNameInput: string;
```

- *Type:* string

---

##### `instanceReusePolicyInput`<sup>Optional</sup> <a name="instanceReusePolicyInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.instanceReusePolicyInput"></a>

```typescript
public readonly instanceReusePolicyInput: IResolvable | AutoscalingWarmPoolInstanceReusePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

---

##### `maxGroupPreparedCapacityInput`<sup>Optional</sup> <a name="maxGroupPreparedCapacityInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacityInput"></a>

```typescript
public readonly maxGroupPreparedCapacityInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `poolStateInput`<sup>Optional</sup> <a name="poolStateInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolStateInput"></a>

```typescript
public readonly poolStateInput: string;
```

- *Type:* string

---

##### `autoScalingGroupName`<sup>Required</sup> <a name="autoScalingGroupName" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.autoScalingGroupName"></a>

```typescript
public readonly autoScalingGroupName: string;
```

- *Type:* string

---

##### `maxGroupPreparedCapacity`<sup>Required</sup> <a name="maxGroupPreparedCapacity" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.maxGroupPreparedCapacity"></a>

```typescript
public readonly maxGroupPreparedCapacity: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `poolState`<sup>Required</sup> <a name="poolState" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.poolState"></a>

```typescript
public readonly poolState: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingWarmPoolConfig <a name="AutoscalingWarmPoolConfig" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.Initializer"></a>

```typescript
import { autoscalingWarmPool } from '@cdktn/provider-awscc'

const autoscalingWarmPoolConfig: autoscalingWarmPool.AutoscalingWarmPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.autoScalingGroupName">autoScalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#auto_scaling_group_name AutoscalingWarmPool#auto_scaling_group_name}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.instanceReusePolicy">instanceReusePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#instance_reuse_policy AutoscalingWarmPool#instance_reuse_policy}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.maxGroupPreparedCapacity">maxGroupPreparedCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#max_group_prepared_capacity AutoscalingWarmPool#max_group_prepared_capacity}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#min_size AutoscalingWarmPool#min_size}. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.poolState">poolState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#pool_state AutoscalingWarmPool#pool_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoScalingGroupName`<sup>Required</sup> <a name="autoScalingGroupName" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.autoScalingGroupName"></a>

```typescript
public readonly autoScalingGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#auto_scaling_group_name AutoscalingWarmPool#auto_scaling_group_name}.

---

##### `instanceReusePolicy`<sup>Optional</sup> <a name="instanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.instanceReusePolicy"></a>

```typescript
public readonly instanceReusePolicy: AutoscalingWarmPoolInstanceReusePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#instance_reuse_policy AutoscalingWarmPool#instance_reuse_policy}.

---

##### `maxGroupPreparedCapacity`<sup>Optional</sup> <a name="maxGroupPreparedCapacity" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.maxGroupPreparedCapacity"></a>

```typescript
public readonly maxGroupPreparedCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#max_group_prepared_capacity AutoscalingWarmPool#max_group_prepared_capacity}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#min_size AutoscalingWarmPool#min_size}.

---

##### `poolState`<sup>Optional</sup> <a name="poolState" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolConfig.property.poolState"></a>

```typescript
public readonly poolState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#pool_state AutoscalingWarmPool#pool_state}.

---

### AutoscalingWarmPoolInstanceReusePolicy <a name="AutoscalingWarmPoolInstanceReusePolicy" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy.Initializer"></a>

```typescript
import { autoscalingWarmPool } from '@cdktn/provider-awscc'

const autoscalingWarmPoolInstanceReusePolicy: autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy.property.reuseOnScaleIn">reuseOnScaleIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#reuse_on_scale_in AutoscalingWarmPool#reuse_on_scale_in}. |

---

##### `reuseOnScaleIn`<sup>Optional</sup> <a name="reuseOnScaleIn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy.property.reuseOnScaleIn"></a>

```typescript
public readonly reuseOnScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_warm_pool#reuse_on_scale_in AutoscalingWarmPool#reuse_on_scale_in}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingWarmPoolInstanceReusePolicyOutputReference <a name="AutoscalingWarmPoolInstanceReusePolicyOutputReference" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer"></a>

```typescript
import { autoscalingWarmPool } from '@cdktn/provider-awscc'

new autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resetReuseOnScaleIn">resetReuseOnScaleIn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReuseOnScaleIn` <a name="resetReuseOnScaleIn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.resetReuseOnScaleIn"></a>

```typescript
public resetReuseOnScaleIn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleInInput">reuseOnScaleInInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleIn">reuseOnScaleIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reuseOnScaleInInput`<sup>Optional</sup> <a name="reuseOnScaleInInput" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleInInput"></a>

```typescript
public readonly reuseOnScaleInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reuseOnScaleIn`<sup>Required</sup> <a name="reuseOnScaleIn" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.reuseOnScaleIn"></a>

```typescript
public readonly reuseOnScaleIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingWarmPoolInstanceReusePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.autoscalingWarmPool.AutoscalingWarmPoolInstanceReusePolicy">AutoscalingWarmPoolInstanceReusePolicy</a>

---



