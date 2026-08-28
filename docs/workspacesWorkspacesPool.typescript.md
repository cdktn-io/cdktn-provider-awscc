# `workspacesWorkspacesPool` Submodule <a name="`workspacesWorkspacesPool` Submodule" id="@cdktn/provider-awscc.workspacesWorkspacesPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspacesPool <a name="WorkspacesWorkspacesPool" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

new workspacesWorkspacesPool.WorkspacesWorkspacesPool(scope: Construct, id: string, config: WorkspacesWorkspacesPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig">WorkspacesWorkspacesPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig">WorkspacesWorkspacesPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings">putApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings">putTimeoutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetApplicationSettings">resetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetRunningMode">resetRunningMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTimeoutSettings">resetTimeoutSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationSettings` <a name="putApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings"></a>

```typescript
public putApplicationSettings(value: WorkspacesWorkspacesPoolApplicationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---

##### `putCapacity` <a name="putCapacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity"></a>

```typescript
public putCapacity(value: WorkspacesWorkspacesPoolCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags"></a>

```typescript
public putTags(value: IResolvable | WorkspacesWorkspacesPoolTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]

---

##### `putTimeoutSettings` <a name="putTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings"></a>

```typescript
public putTimeoutSettings(value: WorkspacesWorkspacesPoolTimeoutSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---

##### `resetApplicationSettings` <a name="resetApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetApplicationSettings"></a>

```typescript
public resetApplicationSettings(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRunningMode` <a name="resetRunningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetRunningMode"></a>

```typescript
public resetRunningMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeoutSettings` <a name="resetTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTimeoutSettings"></a>

```typescript
public resetTimeoutSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesWorkspacesPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesWorkspacesPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesWorkspacesPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference">WorkspacesWorkspacesPoolApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference">WorkspacesWorkspacesPoolCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolArn">poolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList">WorkspacesWorkspacesPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettings">timeoutSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference">WorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettingsInput">applicationSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleIdInput">bundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacityInput">capacityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolNameInput">poolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningModeInput">runningModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettingsInput">timeoutSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolName">poolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningMode">runningMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationSettings`<sup>Required</sup> <a name="applicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettings"></a>

```typescript
public readonly applicationSettings: WorkspacesWorkspacesPoolApplicationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference">WorkspacesWorkspacesPoolApplicationSettingsOutputReference</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacity"></a>

```typescript
public readonly capacity: WorkspacesWorkspacesPoolCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference">WorkspacesWorkspacesPoolCapacityOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `poolArn`<sup>Required</sup> <a name="poolArn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolArn"></a>

```typescript
public readonly poolArn: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tags"></a>

```typescript
public readonly tags: WorkspacesWorkspacesPoolTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList">WorkspacesWorkspacesPoolTagsList</a>

---

##### `timeoutSettings`<sup>Required</sup> <a name="timeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettings"></a>

```typescript
public readonly timeoutSettings: WorkspacesWorkspacesPoolTimeoutSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference">WorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a>

---

##### `applicationSettingsInput`<sup>Optional</sup> <a name="applicationSettingsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettingsInput"></a>

```typescript
public readonly applicationSettingsInput: IResolvable | WorkspacesWorkspacesPoolApplicationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleIdInput"></a>

```typescript
public readonly bundleIdInput: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacityInput"></a>

```typescript
public readonly capacityInput: IResolvable | WorkspacesWorkspacesPoolCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolNameInput"></a>

```typescript
public readonly poolNameInput: string;
```

- *Type:* string

---

##### `runningModeInput`<sup>Optional</sup> <a name="runningModeInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningModeInput"></a>

```typescript
public readonly runningModeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WorkspacesWorkspacesPoolTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]

---

##### `timeoutSettingsInput`<sup>Optional</sup> <a name="timeoutSettingsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettingsInput"></a>

```typescript
public readonly timeoutSettingsInput: IResolvable | WorkspacesWorkspacesPoolTimeoutSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

---

##### `runningMode`<sup>Required</sup> <a name="runningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningMode"></a>

```typescript
public readonly runningMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspacesPoolApplicationSettings <a name="WorkspacesWorkspacesPoolApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

const workspacesWorkspacesPoolApplicationSettings: workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.settingsGroup">settingsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}. |

---

##### `settingsGroup`<sup>Optional</sup> <a name="settingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.settingsGroup"></a>

```typescript
public readonly settingsGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}.

---

### WorkspacesWorkspacesPoolCapacity <a name="WorkspacesWorkspacesPoolCapacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

const workspacesWorkspacesPoolCapacity: workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.property.desiredUserSessions">desiredUserSessions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}. |

---

##### `desiredUserSessions`<sup>Required</sup> <a name="desiredUserSessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.property.desiredUserSessions"></a>

```typescript
public readonly desiredUserSessions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}.

---

### WorkspacesWorkspacesPoolConfig <a name="WorkspacesWorkspacesPoolConfig" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

const workspacesWorkspacesPoolConfig: workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.bundleId">bundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.poolName">poolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.runningMode">runningMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.timeoutSettings">timeoutSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}.

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.capacity"></a>

```typescript
public readonly capacity: WorkspacesWorkspacesPoolCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}.

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.applicationSettings"></a>

```typescript
public readonly applicationSettings: WorkspacesWorkspacesPoolApplicationSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}.

---

##### `runningMode`<sup>Optional</sup> <a name="runningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.runningMode"></a>

```typescript
public readonly runningMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WorkspacesWorkspacesPoolTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}.

---

##### `timeoutSettings`<sup>Optional</sup> <a name="timeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.timeoutSettings"></a>

```typescript
public readonly timeoutSettings: WorkspacesWorkspacesPoolTimeoutSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}.

---

### WorkspacesWorkspacesPoolTags <a name="WorkspacesWorkspacesPoolTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

const workspacesWorkspacesPoolTags: workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}.

---

### WorkspacesWorkspacesPoolTimeoutSettings <a name="WorkspacesWorkspacesPoolTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

const workspacesWorkspacesPoolTimeoutSettings: workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}. |

---

##### `disconnectTimeoutInSeconds`<sup>Optional</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds"></a>

```typescript
public readonly disconnectTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}.

---

##### `idleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds"></a>

```typescript
public readonly idleDisconnectTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}.

---

##### `maxUserDurationInSeconds`<sup>Optional</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds"></a>

```typescript
public readonly maxUserDurationInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspacesPoolApplicationSettingsOutputReference <a name="WorkspacesWorkspacesPoolApplicationSettingsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

new workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup">resetSettingsGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSettingsGroup` <a name="resetSettingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup"></a>

```typescript
public resetSettingsGroup(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput">settingsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup">settingsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settingsGroupInput`<sup>Optional</sup> <a name="settingsGroupInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```typescript
public readonly settingsGroupInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `settingsGroup`<sup>Required</sup> <a name="settingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup"></a>

```typescript
public readonly settingsGroup: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesWorkspacesPoolApplicationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---


### WorkspacesWorkspacesPoolCapacityOutputReference <a name="WorkspacesWorkspacesPoolCapacityOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

new workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput">desiredUserSessionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions">desiredUserSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredUserSessionsInput`<sup>Optional</sup> <a name="desiredUserSessionsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput"></a>

```typescript
public readonly desiredUserSessionsInput: number;
```

- *Type:* number

---

##### `desiredUserSessions`<sup>Required</sup> <a name="desiredUserSessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions"></a>

```typescript
public readonly desiredUserSessions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesWorkspacesPoolCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---


### WorkspacesWorkspacesPoolTagsList <a name="WorkspacesWorkspacesPoolTagsList" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

new workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get"></a>

```typescript
public get(index: number): WorkspacesWorkspacesPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesWorkspacesPoolTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]

---


### WorkspacesWorkspacesPoolTagsOutputReference <a name="WorkspacesWorkspacesPoolTagsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

new workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesWorkspacesPoolTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>

---


### WorkspacesWorkspacesPoolTimeoutSettingsOutputReference <a name="WorkspacesWorkspacesPoolTimeoutSettingsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer"></a>

```typescript
import { workspacesWorkspacesPool } from '@cdktn/provider-awscc'

new workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds">resetDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds">resetIdleDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds">resetMaxUserDurationInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisconnectTimeoutInSeconds` <a name="resetDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds"></a>

```typescript
public resetDisconnectTimeoutInSeconds(): void
```

##### `resetIdleDisconnectTimeoutInSeconds` <a name="resetIdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds"></a>

```typescript
public resetIdleDisconnectTimeoutInSeconds(): void
```

##### `resetMaxUserDurationInSeconds` <a name="resetMaxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds"></a>

```typescript
public resetMaxUserDurationInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput">disconnectTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput">idleDisconnectTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput">maxUserDurationInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="disconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput"></a>

```typescript
public readonly disconnectTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `idleDisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput"></a>

```typescript
public readonly idleDisconnectTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `maxUserDurationInSecondsInput`<sup>Optional</sup> <a name="maxUserDurationInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput"></a>

```typescript
public readonly maxUserDurationInSecondsInput: number;
```

- *Type:* number

---

##### `disconnectTimeoutInSeconds`<sup>Required</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds"></a>

```typescript
public readonly disconnectTimeoutInSeconds: number;
```

- *Type:* number

---

##### `idleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds"></a>

```typescript
public readonly idleDisconnectTimeoutInSeconds: number;
```

- *Type:* number

---

##### `maxUserDurationInSeconds`<sup>Required</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds"></a>

```typescript
public readonly maxUserDurationInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesWorkspacesPoolTimeoutSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---



