# `workspacesinstancesWorkspaceInstance` Submodule <a name="`workspacesinstancesWorkspaceInstance` Submodule" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesinstancesWorkspaceInstance <a name="WorkspacesinstancesWorkspaceInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance awscc_workspacesinstances_workspace_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance(scope: Construct, id: string, config?: WorkspacesinstancesWorkspaceInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig">WorkspacesinstancesWorkspaceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig">WorkspacesinstancesWorkspaceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance">putManagedInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetManagedInstance">resetManagedInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManagedInstance` <a name="putManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance"></a>

```typescript
public putManagedInstance(value: WorkspacesinstancesWorkspaceInstanceManagedInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putManagedInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putTags"></a>

```typescript
public putTags(value: IResolvable | WorkspacesinstancesWorkspaceInstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>[]

---

##### `resetManagedInstance` <a name="resetManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetManagedInstance"></a>

```typescript
public resetManagedInstance(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesinstancesWorkspaceInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isConstruct"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformElement"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformResource"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspacesinstancesWorkspaceInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesinstancesWorkspaceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesinstancesWorkspaceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesinstancesWorkspaceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.ec2ManagedInstance">ec2ManagedInstance</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstance">managedInstance</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisionState">provisionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList">WorkspacesinstancesWorkspaceInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.workspaceInstanceId">workspaceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstanceInput">managedInstanceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ec2ManagedInstance`<sup>Required</sup> <a name="ec2ManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.ec2ManagedInstance"></a>

```typescript
public readonly ec2ManagedInstance: WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstance`<sup>Required</sup> <a name="managedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstance"></a>

```typescript
public readonly managedInstance: WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference</a>

---

##### `provisionState`<sup>Required</sup> <a name="provisionState" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.provisionState"></a>

```typescript
public readonly provisionState: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tags"></a>

```typescript
public readonly tags: WorkspacesinstancesWorkspaceInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList">WorkspacesinstancesWorkspaceInstanceTagsList</a>

---

##### `workspaceInstanceId`<sup>Required</sup> <a name="workspaceInstanceId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.workspaceInstanceId"></a>

```typescript
public readonly workspaceInstanceId: string;
```

- *Type:* string

---

##### `managedInstanceInput`<sup>Optional</sup> <a name="managedInstanceInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.managedInstanceInput"></a>

```typescript
public readonly managedInstanceInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstance;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesinstancesWorkspaceInstanceConfig <a name="WorkspacesinstancesWorkspaceInstanceConfig" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceConfig: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.managedInstance">managedInstance</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#managed_instance WorkspacesinstancesWorkspaceInstance#managed_instance}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `managedInstance`<sup>Optional</sup> <a name="managedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.managedInstance"></a>

```typescript
public readonly managedInstance: WorkspacesinstancesWorkspaceInstanceManagedInstance;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#managed_instance WorkspacesinstancesWorkspaceInstance#managed_instance}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WorkspacesinstancesWorkspaceInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}.

---

### WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance <a name="WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceEc2ManagedInstance: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance = { ... }
```


### WorkspacesinstancesWorkspaceInstanceManagedInstance <a name="WorkspacesinstancesWorkspaceInstanceManagedInstance" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstance: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#block_device_mappings WorkspacesinstancesWorkspaceInstance#block_device_mappings}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_specification WorkspacesinstancesWorkspaceInstance#capacity_reservation_specification}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#cpu_options WorkspacesinstancesWorkspaceInstance#cpu_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#credit_specification WorkspacesinstancesWorkspaceInstance#credit_specification}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.disableApiStop">disableApiStop</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#disable_api_stop WorkspacesinstancesWorkspaceInstance#disable_api_stop}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#ebs_optimized WorkspacesinstancesWorkspaceInstance#ebs_optimized}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enablePrimaryIpv6">enablePrimaryIpv6</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enable_primary_ipv_6 WorkspacesinstancesWorkspaceInstance#enable_primary_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enclave_options WorkspacesinstancesWorkspaceInstance#enclave_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#hibernation_options WorkspacesinstancesWorkspaceInstance#hibernation_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#iam_instance_profile WorkspacesinstancesWorkspaceInstance#iam_instance_profile}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#image_id WorkspacesinstancesWorkspaceInstance#image_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#instance_type WorkspacesinstancesWorkspaceInstance#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#ipv_6_address_count WorkspacesinstancesWorkspaceInstance#ipv_6_address_count}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#key_name WorkspacesinstancesWorkspaceInstance#key_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.licenseSpecifications">licenseSpecifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#license_specifications WorkspacesinstancesWorkspaceInstance#license_specifications}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#maintenance_options WorkspacesinstancesWorkspaceInstance#maintenance_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#metadata_options WorkspacesinstancesWorkspaceInstance#metadata_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.monitoring">monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#monitoring WorkspacesinstancesWorkspaceInstance#monitoring}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkInterfaces">networkInterfaces</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#network_interfaces WorkspacesinstancesWorkspaceInstance#network_interfaces}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkPerformanceOptions">networkPerformanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#network_performance_options WorkspacesinstancesWorkspaceInstance#network_performance_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#placement WorkspacesinstancesWorkspaceInstance#placement}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#private_dns_name_options WorkspacesinstancesWorkspaceInstance#private_dns_name_options}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.tagSpecifications">tagSpecifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tag_specifications WorkspacesinstancesWorkspaceInstance#tag_specifications}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#user_data WorkspacesinstancesWorkspaceInstance#user_data}. |

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#block_device_mappings WorkspacesinstancesWorkspaceInstance#block_device_mappings}.

---

##### `capacityReservationSpecification`<sup>Optional</sup> <a name="capacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_specification WorkspacesinstancesWorkspaceInstance#capacity_reservation_specification}.

---

##### `cpuOptions`<sup>Optional</sup> <a name="cpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#cpu_options WorkspacesinstancesWorkspaceInstance#cpu_options}.

---

##### `creditSpecification`<sup>Optional</sup> <a name="creditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#credit_specification WorkspacesinstancesWorkspaceInstance#credit_specification}.

---

##### `disableApiStop`<sup>Optional</sup> <a name="disableApiStop" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.disableApiStop"></a>

```typescript
public readonly disableApiStop: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#disable_api_stop WorkspacesinstancesWorkspaceInstance#disable_api_stop}.

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#ebs_optimized WorkspacesinstancesWorkspaceInstance#ebs_optimized}.

---

##### `enablePrimaryIpv6`<sup>Optional</sup> <a name="enablePrimaryIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enablePrimaryIpv6"></a>

```typescript
public readonly enablePrimaryIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enable_primary_ipv_6 WorkspacesinstancesWorkspaceInstance#enable_primary_ipv_6}.

---

##### `enclaveOptions`<sup>Optional</sup> <a name="enclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enclave_options WorkspacesinstancesWorkspaceInstance#enclave_options}.

---

##### `hibernationOptions`<sup>Optional</sup> <a name="hibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.hibernationOptions"></a>

```typescript
public readonly hibernationOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#hibernation_options WorkspacesinstancesWorkspaceInstance#hibernation_options}.

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#iam_instance_profile WorkspacesinstancesWorkspaceInstance#iam_instance_profile}.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#image_id WorkspacesinstancesWorkspaceInstance#image_id}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#instance_type WorkspacesinstancesWorkspaceInstance#instance_type}.

---

##### `ipv6AddressCount`<sup>Optional</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#ipv_6_address_count WorkspacesinstancesWorkspaceInstance#ipv_6_address_count}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#key_name WorkspacesinstancesWorkspaceInstance#key_name}.

---

##### `licenseSpecifications`<sup>Optional</sup> <a name="licenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#license_specifications WorkspacesinstancesWorkspaceInstance#license_specifications}.

---

##### `maintenanceOptions`<sup>Optional</sup> <a name="maintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.maintenanceOptions"></a>

```typescript
public readonly maintenanceOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#maintenance_options WorkspacesinstancesWorkspaceInstance#maintenance_options}.

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#metadata_options WorkspacesinstancesWorkspaceInstance#metadata_options}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.monitoring"></a>

```typescript
public readonly monitoring: WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#monitoring WorkspacesinstancesWorkspaceInstance#monitoring}.

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#network_interfaces WorkspacesinstancesWorkspaceInstance#network_interfaces}.

---

##### `networkPerformanceOptions`<sup>Optional</sup> <a name="networkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.networkPerformanceOptions"></a>

```typescript
public readonly networkPerformanceOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#network_performance_options WorkspacesinstancesWorkspaceInstance#network_performance_options}.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.placement"></a>

```typescript
public readonly placement: WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#placement WorkspacesinstancesWorkspaceInstance#placement}.

---

##### `privateDnsNameOptions`<sup>Optional</sup> <a name="privateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.privateDnsNameOptions"></a>

```typescript
public readonly privateDnsNameOptions: WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#private_dns_name_options WorkspacesinstancesWorkspaceInstance#private_dns_name_options}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}.

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tag_specifications WorkspacesinstancesWorkspaceInstance#tag_specifications}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#user_data WorkspacesinstancesWorkspaceInstance#user_data}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#device_name WorkspacesinstancesWorkspaceInstance#device_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#ebs WorkspacesinstancesWorkspaceInstance#ebs}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#no_device WorkspacesinstancesWorkspaceInstance#no_device}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#virtual_name WorkspacesinstancesWorkspaceInstance#virtual_name}. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#device_name WorkspacesinstancesWorkspaceInstance#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.ebs"></a>

```typescript
public readonly ebs: WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#ebs WorkspacesinstancesWorkspaceInstance#ebs}.

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#no_device WorkspacesinstancesWorkspaceInstance#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#virtual_name WorkspacesinstancesWorkspaceInstance#virtual_name}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#encrypted WorkspacesinstancesWorkspaceInstance#encrypted}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#iops WorkspacesinstancesWorkspaceInstance#iops}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#kms_key_id WorkspacesinstancesWorkspaceInstance#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#throughput WorkspacesinstancesWorkspaceInstance#throughput}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#volume_size WorkspacesinstancesWorkspaceInstance#volume_size}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#volume_type WorkspacesinstancesWorkspaceInstance#volume_type}. |

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#encrypted WorkspacesinstancesWorkspaceInstance#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#iops WorkspacesinstancesWorkspaceInstance#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#kms_key_id WorkspacesinstancesWorkspaceInstance#kms_key_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#throughput WorkspacesinstancesWorkspaceInstance#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#volume_size WorkspacesinstancesWorkspaceInstance#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#volume_type WorkspacesinstancesWorkspaceInstance#volume_type}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_preference WorkspacesinstancesWorkspaceInstance#capacity_reservation_preference}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_target WorkspacesinstancesWorkspaceInstance#capacity_reservation_target}. |

---

##### `capacityReservationPreference`<sup>Optional</sup> <a name="capacityReservationPreference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_preference WorkspacesinstancesWorkspaceInstance#capacity_reservation_preference}.

---

##### `capacityReservationTarget`<sup>Optional</sup> <a name="capacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_target WorkspacesinstancesWorkspaceInstance#capacity_reservation_target}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_id WorkspacesinstancesWorkspaceInstance#capacity_reservation_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_resource_group_arn WorkspacesinstancesWorkspaceInstance#capacity_reservation_resource_group_arn}. |

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_id WorkspacesinstancesWorkspaceInstance#capacity_reservation_id}.

---

##### `capacityReservationResourceGroupArn`<sup>Optional</sup> <a name="capacityReservationResourceGroupArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```typescript
public readonly capacityReservationResourceGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#capacity_reservation_resource_group_arn WorkspacesinstancesWorkspaceInstance#capacity_reservation_resource_group_arn}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.coreCount">coreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#core_count WorkspacesinstancesWorkspaceInstance#core_count}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#threads_per_core WorkspacesinstancesWorkspaceInstance#threads_per_core}. |

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#core_count WorkspacesinstancesWorkspaceInstance#core_count}.

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#threads_per_core WorkspacesinstancesWorkspaceInstance#threads_per_core}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#cpu_credits WorkspacesinstancesWorkspaceInstance#cpu_credits}. |

---

##### `cpuCredits`<sup>Optional</sup> <a name="cpuCredits" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#cpu_credits WorkspacesinstancesWorkspaceInstance#cpu_credits}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.property.configured">configured</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#configured WorkspacesinstancesWorkspaceInstance#configured}. |

---

##### `configured`<sup>Optional</sup> <a name="configured" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions.property.configured"></a>

```typescript
public readonly configured: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#configured WorkspacesinstancesWorkspaceInstance#configured}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#arn WorkspacesinstancesWorkspaceInstance#arn}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#name WorkspacesinstancesWorkspaceInstance#name}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#arn WorkspacesinstancesWorkspaceInstance#arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#name WorkspacesinstancesWorkspaceInstance#name}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#license_configuration_arn WorkspacesinstancesWorkspaceInstance#license_configuration_arn}. |

---

##### `licenseConfigurationArn`<sup>Optional</sup> <a name="licenseConfigurationArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications.property.licenseConfigurationArn"></a>

```typescript
public readonly licenseConfigurationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#license_configuration_arn WorkspacesinstancesWorkspaceInstance#license_configuration_arn}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.property.autoRecovery">autoRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#auto_recovery WorkspacesinstancesWorkspaceInstance#auto_recovery}. |

---

##### `autoRecovery`<sup>Optional</sup> <a name="autoRecovery" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions.property.autoRecovery"></a>

```typescript
public readonly autoRecovery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#auto_recovery WorkspacesinstancesWorkspaceInstance#auto_recovery}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_endpoint WorkspacesinstancesWorkspaceInstance#http_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_protocol_ipv_6 WorkspacesinstancesWorkspaceInstance#http_protocol_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_put_response_hop_limit WorkspacesinstancesWorkspaceInstance#http_put_response_hop_limit}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_tokens WorkspacesinstancesWorkspaceInstance#http_tokens}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#instance_metadata_tags WorkspacesinstancesWorkspaceInstance#instance_metadata_tags}. |

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_endpoint WorkspacesinstancesWorkspaceInstance#http_endpoint}.

---

##### `httpProtocolIpv6`<sup>Optional</sup> <a name="httpProtocolIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpProtocolIpv6"></a>

```typescript
public readonly httpProtocolIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_protocol_ipv_6 WorkspacesinstancesWorkspaceInstance#http_protocol_ipv_6}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_put_response_hop_limit WorkspacesinstancesWorkspaceInstance#http_put_response_hop_limit}.

---

##### `httpTokens`<sup>Optional</sup> <a name="httpTokens" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#http_tokens WorkspacesinstancesWorkspaceInstance#http_tokens}.

---

##### `instanceMetadataTags`<sup>Optional</sup> <a name="instanceMetadataTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#instance_metadata_tags WorkspacesinstancesWorkspaceInstance#instance_metadata_tags}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceMonitoring: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enabled WorkspacesinstancesWorkspaceInstance#enabled}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#description WorkspacesinstancesWorkspaceInstance#description}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#device_index WorkspacesinstancesWorkspaceInstance#device_index}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.groups">groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#groups WorkspacesinstancesWorkspaceInstance#groups}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#description WorkspacesinstancesWorkspaceInstance#description}.

---

##### `deviceIndex`<sup>Optional</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#device_index WorkspacesinstancesWorkspaceInstance#device_index}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#groups WorkspacesinstancesWorkspaceInstance#groups}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#subnet_id WorkspacesinstancesWorkspaceInstance#subnet_id}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.property.bandwidthWeighting">bandwidthWeighting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#bandwidth_weighting WorkspacesinstancesWorkspaceInstance#bandwidth_weighting}. |

---

##### `bandwidthWeighting`<sup>Optional</sup> <a name="bandwidthWeighting" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions.property.bandwidthWeighting"></a>

```typescript
public readonly bandwidthWeighting: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#bandwidth_weighting WorkspacesinstancesWorkspaceInstance#bandwidth_weighting}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstancePlacement: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#availability_zone WorkspacesinstancesWorkspaceInstance#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#group_id WorkspacesinstancesWorkspaceInstance#group_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#group_name WorkspacesinstancesWorkspaceInstance#group_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.partitionNumber">partitionNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#partition_number WorkspacesinstancesWorkspaceInstance#partition_number}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.tenancy">tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tenancy WorkspacesinstancesWorkspaceInstance#tenancy}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#availability_zone WorkspacesinstancesWorkspaceInstance#availability_zone}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#group_id WorkspacesinstancesWorkspaceInstance#group_id}.

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#group_name WorkspacesinstancesWorkspaceInstance#group_name}.

---

##### `partitionNumber`<sup>Optional</sup> <a name="partitionNumber" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.partitionNumber"></a>

```typescript
public readonly partitionNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#partition_number WorkspacesinstancesWorkspaceInstance#partition_number}.

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tenancy WorkspacesinstancesWorkspaceInstance#tenancy}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_aaaa_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_a_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.hostnameType">hostnameType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#hostname_type WorkspacesinstancesWorkspaceInstance#hostname_type}. |

---

##### `enableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecord: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_aaaa_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_aaaa_record}.

---

##### `enableResourceNameDnsARecord`<sup>Optional</sup> <a name="enableResourceNameDnsARecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```typescript
public readonly enableResourceNameDnsARecord: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#enable_resource_name_dns_a_record WorkspacesinstancesWorkspaceInstance#enable_resource_name_dns_a_record}.

---

##### `hostnameType`<sup>Optional</sup> <a name="hostnameType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions.property.hostnameType"></a>

```typescript
public readonly hostnameType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#hostname_type WorkspacesinstancesWorkspaceInstance#hostname_type}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#resource_type WorkspacesinstancesWorkspaceInstance#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}. |

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#resource_type WorkspacesinstancesWorkspaceInstance#resource_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications.property.tags"></a>

```typescript
public readonly tags: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#tags WorkspacesinstancesWorkspaceInstance#tags}.

---

### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}.

---

### WorkspacesinstancesWorkspaceInstanceTags <a name="WorkspacesinstancesWorkspaceInstanceTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

const workspacesinstancesWorkspaceInstanceTags: workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#key WorkspacesinstancesWorkspaceInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesinstances_workspace_instance#value WorkspacesinstancesWorkspaceInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference <a name="WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance">WorkspacesinstancesWorkspaceInstanceEc2ManagedInstance</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>[]

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs"></a>

```typescript
public putEbs(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetEbs` <a name="resetEbs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetEbs"></a>

```typescript
public resetEbs(): void
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```typescript
public resetNoDevice(): void
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```typescript
public resetVirtualName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```typescript
public readonly ebsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```typescript
public readonly noDeviceInput: string;
```

- *Type:* string

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">resetCapacityReservationResourceGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```typescript
public resetCapacityReservationId(): void
```

##### `resetCapacityReservationResourceGroupArn` <a name="resetCapacityReservationResourceGroupArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```typescript
public resetCapacityReservationResourceGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">capacityReservationResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `capacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="capacityReservationResourceGroupArnInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```typescript
public readonly capacityReservationResourceGroupArnInput: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `capacityReservationResourceGroupArn`<sup>Required</sup> <a name="capacityReservationResourceGroupArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```typescript
public readonly capacityReservationResourceGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">putCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">resetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">resetCapacityReservationTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityReservationTarget` <a name="putCapacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```typescript
public putCapacityReservationTarget(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `resetCapacityReservationPreference` <a name="resetCapacityReservationPreference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```typescript
public resetCapacityReservationPreference(): void
```

##### `resetCapacityReservationTarget` <a name="resetCapacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```typescript
public resetCapacityReservationTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">capacityReservationPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">capacityReservationTargetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `capacityReservationPreferenceInput`<sup>Optional</sup> <a name="capacityReservationPreferenceInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```typescript
public readonly capacityReservationPreferenceInput: string;
```

- *Type:* string

---

##### `capacityReservationTargetInput`<sup>Optional</sup> <a name="capacityReservationTargetInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```typescript
public readonly capacityReservationTargetInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetCoreCount">resetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoreCount` <a name="resetCoreCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetCoreCount"></a>

```typescript
public resetCoreCount(): void
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.resetThreadsPerCore"></a>

```typescript
public resetThreadsPerCore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCountInput">coreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCount">coreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCountInput"></a>

```typescript
public readonly coreCountInput: number;
```

- *Type:* number

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```typescript
public readonly threadsPerCoreInput: number;
```

- *Type:* number

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resetCpuCredits">resetCpuCredits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCredits` <a name="resetCpuCredits" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.resetCpuCredits"></a>

```typescript
public resetCpuCredits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCreditsInput">cpuCreditsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCreditsInput`<sup>Optional</sup> <a name="cpuCreditsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```typescript
public readonly cpuCreditsInput: string;
```

- *Type:* string

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resetConfigured">resetConfigured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigured` <a name="resetConfigured" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.resetConfigured"></a>

```typescript
public resetConfigured(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configuredInput">configuredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuredInput`<sup>Optional</sup> <a name="configuredInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configuredInput"></a>

```typescript
public readonly configuredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.configured"></a>

```typescript
public readonly configured: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get"></a>

```typescript
public get(index: number): WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>[]

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn">resetLicenseConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLicenseConfigurationArn` <a name="resetLicenseConfigurationArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.resetLicenseConfigurationArn"></a>

```typescript
public resetLicenseConfigurationArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput">licenseConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseConfigurationArnInput`<sup>Optional</sup> <a name="licenseConfigurationArnInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArnInput"></a>

```typescript
public readonly licenseConfigurationArnInput: string;
```

- *Type:* string

---

##### `licenseConfigurationArn`<sup>Required</sup> <a name="licenseConfigurationArn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```typescript
public readonly licenseConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resetAutoRecovery">resetAutoRecovery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRecovery` <a name="resetAutoRecovery" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```typescript
public resetAutoRecovery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput">autoRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecovery">autoRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRecoveryInput`<sup>Optional</sup> <a name="autoRecoveryInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```typescript
public readonly autoRecoveryInput: string;
```

- *Type:* string

---

##### `autoRecovery`<sup>Required</sup> <a name="autoRecovery" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```typescript
public readonly autoRecovery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6">resetHttpProtocolIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpTokens">resetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetInstanceMetadataTags">resetInstanceMetadataTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```typescript
public resetHttpEndpoint(): void
```

##### `resetHttpProtocolIpv6` <a name="resetHttpProtocolIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```typescript
public resetHttpProtocolIpv6(): void
```

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```typescript
public resetHttpPutResponseHopLimit(): void
```

##### `resetHttpTokens` <a name="resetHttpTokens" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```typescript
public resetHttpTokens(): void
```

##### `resetInstanceMetadataTags` <a name="resetInstanceMetadataTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```typescript
public resetInstanceMetadataTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input">httpProtocolIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput">instanceMetadataTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```typescript
public readonly httpEndpointInput: string;
```

- *Type:* string

---

##### `httpProtocolIpv6Input`<sup>Optional</sup> <a name="httpProtocolIpv6Input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```typescript
public readonly httpProtocolIpv6Input: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```typescript
public readonly httpPutResponseHopLimitInput: number;
```

- *Type:* number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```typescript
public readonly httpTokensInput: string;
```

- *Type:* string

---

##### `instanceMetadataTagsInput`<sup>Optional</sup> <a name="instanceMetadataTagsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```typescript
public readonly instanceMetadataTagsInput: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpProtocolIpv6`<sup>Required</sup> <a name="httpProtocolIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```typescript
public readonly httpProtocolIpv6: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get"></a>

```typescript
public get(index: number): WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>[]

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDeviceIndex">resetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceIndex` <a name="resetDeviceIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```typescript
public resetDeviceIndex(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndexInput">deviceIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```typescript
public readonly deviceIndexInput: number;
```

- *Type:* number

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resetBandwidthWeighting">resetBandwidthWeighting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBandwidthWeighting` <a name="resetBandwidthWeighting" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.resetBandwidthWeighting"></a>

```typescript
public resetBandwidthWeighting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeightingInput">bandwidthWeightingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting">bandwidthWeighting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthWeightingInput`<sup>Optional</sup> <a name="bandwidthWeightingInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeightingInput"></a>

```typescript
public readonly bandwidthWeightingInput: string;
```

- *Type:* string

---

##### `bandwidthWeighting`<sup>Required</sup> <a name="bandwidthWeighting" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting"></a>

```typescript
public readonly bandwidthWeighting: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCapacityReservationSpecification">putCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCpuOptions">putCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCreditSpecification">putCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putEnclaveOptions">putEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putHibernationOptions">putHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putIamInstanceProfile">putIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putLicenseSpecifications">putLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMaintenanceOptions">putMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMonitoring">putMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkPerformanceOptions">putNetworkPerformanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions">putPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putTagSpecifications">putTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCapacityReservationSpecification">resetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCpuOptions">resetCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCreditSpecification">resetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetDisableApiStop">resetDisableApiStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnablePrimaryIpv6">resetEnablePrimaryIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnclaveOptions">resetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetHibernationOptions">resetHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIpv6AddressCount">resetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetLicenseSpecifications">resetLicenseSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMaintenanceOptions">resetMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkPerformanceOptions">resetNetworkPerformanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPrivateDnsNameOptions">resetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetTagSpecifications">resetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putBlockDeviceMappings"></a>

```typescript
public putBlockDeviceMappings(value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>[]

---

##### `putCapacityReservationSpecification` <a name="putCapacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCapacityReservationSpecification"></a>

```typescript
public putCapacityReservationSpecification(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

---

##### `putCpuOptions` <a name="putCpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCpuOptions"></a>

```typescript
public putCpuOptions(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCpuOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

---

##### `putCreditSpecification` <a name="putCreditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCreditSpecification"></a>

```typescript
public putCreditSpecification(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

---

##### `putEnclaveOptions` <a name="putEnclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putEnclaveOptions"></a>

```typescript
public putEnclaveOptions(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

---

##### `putHibernationOptions` <a name="putHibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putHibernationOptions"></a>

```typescript
public putHibernationOptions(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putHibernationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

---

##### `putIamInstanceProfile` <a name="putIamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putIamInstanceProfile"></a>

```typescript
public putIamInstanceProfile(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putIamInstanceProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

---

##### `putLicenseSpecifications` <a name="putLicenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putLicenseSpecifications"></a>

```typescript
public putLicenseSpecifications(value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putLicenseSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>[]

---

##### `putMaintenanceOptions` <a name="putMaintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMaintenanceOptions"></a>

```typescript
public putMaintenanceOptions(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMaintenanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

---

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions"></a>

```typescript
public putMetadataOptions(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

---

##### `putMonitoring` <a name="putMonitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMonitoring"></a>

```typescript
public putMonitoring(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

---

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkInterfaces"></a>

```typescript
public putNetworkInterfaces(value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>[]

---

##### `putNetworkPerformanceOptions` <a name="putNetworkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkPerformanceOptions"></a>

```typescript
public putNetworkPerformanceOptions(value: WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putNetworkPerformanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

---

##### `putPlacement` <a name="putPlacement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement"></a>

```typescript
public putPlacement(value: WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

---

##### `putPrivateDnsNameOptions` <a name="putPrivateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions"></a>

```typescript
public putPrivateDnsNameOptions(value: WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

---

##### `putTagSpecifications` <a name="putTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putTagSpecifications"></a>

```typescript
public putTagSpecifications(value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.putTagSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>[]

---

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetBlockDeviceMappings"></a>

```typescript
public resetBlockDeviceMappings(): void
```

##### `resetCapacityReservationSpecification` <a name="resetCapacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCapacityReservationSpecification"></a>

```typescript
public resetCapacityReservationSpecification(): void
```

##### `resetCpuOptions` <a name="resetCpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCpuOptions"></a>

```typescript
public resetCpuOptions(): void
```

##### `resetCreditSpecification` <a name="resetCreditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetCreditSpecification"></a>

```typescript
public resetCreditSpecification(): void
```

##### `resetDisableApiStop` <a name="resetDisableApiStop" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetDisableApiStop"></a>

```typescript
public resetDisableApiStop(): void
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEbsOptimized"></a>

```typescript
public resetEbsOptimized(): void
```

##### `resetEnablePrimaryIpv6` <a name="resetEnablePrimaryIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnablePrimaryIpv6"></a>

```typescript
public resetEnablePrimaryIpv6(): void
```

##### `resetEnclaveOptions` <a name="resetEnclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetEnclaveOptions"></a>

```typescript
public resetEnclaveOptions(): void
```

##### `resetHibernationOptions` <a name="resetHibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetHibernationOptions"></a>

```typescript
public resetHibernationOptions(): void
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIamInstanceProfile"></a>

```typescript
public resetIamInstanceProfile(): void
```

##### `resetImageId` <a name="resetImageId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetIpv6AddressCount` <a name="resetIpv6AddressCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetIpv6AddressCount"></a>

```typescript
public resetIpv6AddressCount(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetLicenseSpecifications` <a name="resetLicenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetLicenseSpecifications"></a>

```typescript
public resetLicenseSpecifications(): void
```

##### `resetMaintenanceOptions` <a name="resetMaintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMaintenanceOptions"></a>

```typescript
public resetMaintenanceOptions(): void
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMetadataOptions"></a>

```typescript
public resetMetadataOptions(): void
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetMonitoring"></a>

```typescript
public resetMonitoring(): void
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkInterfaces"></a>

```typescript
public resetNetworkInterfaces(): void
```

##### `resetNetworkPerformanceOptions` <a name="resetNetworkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetNetworkPerformanceOptions"></a>

```typescript
public resetNetworkPerformanceOptions(): void
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPlacement"></a>

```typescript
public resetPlacement(): void
```

##### `resetPrivateDnsNameOptions` <a name="resetPrivateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetPrivateDnsNameOptions"></a>

```typescript
public resetPrivateDnsNameOptions(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTagSpecifications` <a name="resetTagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetTagSpecifications"></a>

```typescript
public resetTagSpecifications(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.resetUserData"></a>

```typescript
public resetUserData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecifications">licenseSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoring">monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptions">networkPerformanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecificationInput">capacityReservationSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptionsInput">cpuOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecificationInput">creditSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStopInput">disableApiStopInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6Input">enablePrimaryIpv6Input</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptionsInput">enclaveOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptionsInput">hibernationOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCountInput">ipv6AddressCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecificationsInput">licenseSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptionsInput">maintenanceOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoringInput">monitoringInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptionsInput">networkPerformanceOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placementInput">placementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptionsInput">privateDnsNameOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecificationsInput">tagSpecificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStop">disableApiStop</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6">enablePrimaryIpv6</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappingsList</a>

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecificationOutputReference</a>

---

##### `cpuOptions`<sup>Required</sup> <a name="cpuOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptionsOutputReference</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecificationOutputReference</a>

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptionsOutputReference</a>

---

##### `hibernationOptions`<sup>Required</sup> <a name="hibernationOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptions"></a>

```typescript
public readonly hibernationOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptionsOutputReference</a>

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfileOutputReference</a>

---

##### `licenseSpecifications`<sup>Required</sup> <a name="licenseSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecificationsList</a>

---

##### `maintenanceOptions`<sup>Required</sup> <a name="maintenanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptions"></a>

```typescript
public readonly maintenanceOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptionsOutputReference</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptionsOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoring"></a>

```typescript
public readonly monitoring: WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoringOutputReference</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfacesList</a>

---

##### `networkPerformanceOptions`<sup>Required</sup> <a name="networkPerformanceOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptions"></a>

```typescript
public readonly networkPerformanceOptions: WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptionsOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placement"></a>

```typescript
public readonly placement: WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference</a>

---

##### `privateDnsNameOptions`<sup>Required</sup> <a name="privateDnsNameOptions" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptions"></a>

```typescript
public readonly privateDnsNameOptions: WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference</a>

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList</a>

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.blockDeviceMappingsInput"></a>

```typescript
public readonly blockDeviceMappingsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings">WorkspacesinstancesWorkspaceInstanceManagedInstanceBlockDeviceMappings</a>[]

---

##### `capacityReservationSpecificationInput`<sup>Optional</sup> <a name="capacityReservationSpecificationInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.capacityReservationSpecificationInput"></a>

```typescript
public readonly capacityReservationSpecificationInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCapacityReservationSpecification</a>

---

##### `cpuOptionsInput`<sup>Optional</sup> <a name="cpuOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.cpuOptionsInput"></a>

```typescript
public readonly cpuOptionsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceCpuOptions</a>

---

##### `creditSpecificationInput`<sup>Optional</sup> <a name="creditSpecificationInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.creditSpecificationInput"></a>

```typescript
public readonly creditSpecificationInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification">WorkspacesinstancesWorkspaceInstanceManagedInstanceCreditSpecification</a>

---

##### `disableApiStopInput`<sup>Optional</sup> <a name="disableApiStopInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStopInput"></a>

```typescript
public readonly disableApiStopInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimizedInput"></a>

```typescript
public readonly ebsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePrimaryIpv6Input`<sup>Optional</sup> <a name="enablePrimaryIpv6Input" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6Input"></a>

```typescript
public readonly enablePrimaryIpv6Input: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enclaveOptionsInput`<sup>Optional</sup> <a name="enclaveOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enclaveOptionsInput"></a>

```typescript
public readonly enclaveOptionsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceEnclaveOptions</a>

---

##### `hibernationOptionsInput`<sup>Optional</sup> <a name="hibernationOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.hibernationOptionsInput"></a>

```typescript
public readonly hibernationOptionsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceHibernationOptions</a>

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile">WorkspacesinstancesWorkspaceInstanceManagedInstanceIamInstanceProfile</a>

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `ipv6AddressCountInput`<sup>Optional</sup> <a name="ipv6AddressCountInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCountInput"></a>

```typescript
public readonly ipv6AddressCountInput: number;
```

- *Type:* number

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `licenseSpecificationsInput`<sup>Optional</sup> <a name="licenseSpecificationsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.licenseSpecificationsInput"></a>

```typescript
public readonly licenseSpecificationsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceLicenseSpecifications</a>[]

---

##### `maintenanceOptionsInput`<sup>Optional</sup> <a name="maintenanceOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.maintenanceOptionsInput"></a>

```typescript
public readonly maintenanceOptionsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMaintenanceOptions</a>

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.metadataOptionsInput"></a>

```typescript
public readonly metadataOptionsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceMetadataOptions</a>

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.monitoringInput"></a>

```typescript
public readonly monitoringInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring">WorkspacesinstancesWorkspaceInstanceManagedInstanceMonitoring</a>

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkInterfacesInput"></a>

```typescript
public readonly networkInterfacesInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkInterfaces</a>[]

---

##### `networkPerformanceOptionsInput`<sup>Optional</sup> <a name="networkPerformanceOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.networkPerformanceOptionsInput"></a>

```typescript
public readonly networkPerformanceOptionsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions">WorkspacesinstancesWorkspaceInstanceManagedInstanceNetworkPerformanceOptions</a>

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.placementInput"></a>

```typescript
public readonly placementInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

---

##### `privateDnsNameOptionsInput`<sup>Optional</sup> <a name="privateDnsNameOptionsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.privateDnsNameOptionsInput"></a>

```typescript
public readonly privateDnsNameOptionsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagSpecificationsInput`<sup>Optional</sup> <a name="tagSpecificationsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.tagSpecificationsInput"></a>

```typescript
public readonly tagSpecificationsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>[]

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `disableApiStop`<sup>Required</sup> <a name="disableApiStop" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.disableApiStop"></a>

```typescript
public readonly disableApiStop: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePrimaryIpv6`<sup>Required</sup> <a name="enablePrimaryIpv6" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.enablePrimaryIpv6"></a>

```typescript
public readonly enablePrimaryIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstance;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstance">WorkspacesinstancesWorkspaceInstanceManagedInstance</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetPartitionNumber">resetPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetTenancy">resetTenancy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetPartitionNumber` <a name="resetPartitionNumber" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetPartitionNumber"></a>

```typescript
public resetPartitionNumber(): void
```

##### `resetTenancy` <a name="resetTenancy" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.resetTenancy"></a>

```typescript
public resetTenancy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumberInput">partitionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancyInput">tenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumber">partitionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `partitionNumberInput`<sup>Optional</sup> <a name="partitionNumberInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumberInput"></a>

```typescript
public readonly partitionNumberInput: number;
```

- *Type:* number

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancyInput"></a>

```typescript
public readonly tenancyInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `partitionNumber`<sup>Required</sup> <a name="partitionNumber" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.partitionNumber"></a>

```typescript
public readonly partitionNumber: number;
```

- *Type:* number

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement">WorkspacesinstancesWorkspaceInstanceManagedInstancePlacement</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">resetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">resetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetHostnameType">resetHostnameType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableResourceNameDnsAaaaRecord` <a name="resetEnableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```typescript
public resetEnableResourceNameDnsAaaaRecord(): void
```

##### `resetEnableResourceNameDnsARecord` <a name="resetEnableResourceNameDnsARecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```typescript
public resetEnableResourceNameDnsARecord(): void
```

##### `resetHostnameType` <a name="resetHostnameType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```typescript
public resetHostnameType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">enableResourceNameDnsAaaaRecordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">enableResourceNameDnsARecordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">hostnameTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameType">hostnameType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsAaaaRecordInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="enableResourceNameDnsARecordInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```typescript
public readonly enableResourceNameDnsARecordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hostnameTypeInput`<sup>Optional</sup> <a name="hostnameTypeInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```typescript
public readonly hostnameTypeInput: string;
```

- *Type:* string

---

##### `enableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecord: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableResourceNameDnsARecord`<sup>Required</sup> <a name="enableResourceNameDnsARecord" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```typescript
public readonly enableResourceNameDnsARecord: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hostnameType`<sup>Required</sup> <a name="hostnameType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```typescript
public readonly hostnameType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions">WorkspacesinstancesWorkspaceInstanceManagedInstancePrivateDnsNameOptions</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get"></a>

```typescript
public get(index: number): WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>[]

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>[]

---

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList</a>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecifications</a>

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get"></a>

```typescript
public get(index: number): WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>[]

---


### WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags">WorkspacesinstancesWorkspaceInstanceManagedInstanceTagSpecificationsTags</a>

---


### WorkspacesinstancesWorkspaceInstanceTagsList <a name="WorkspacesinstancesWorkspaceInstanceTagsList" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.get"></a>

```typescript
public get(index: number): WorkspacesinstancesWorkspaceInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>[]

---


### WorkspacesinstancesWorkspaceInstanceTagsOutputReference <a name="WorkspacesinstancesWorkspaceInstanceTagsOutputReference" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer"></a>

```typescript
import { workspacesinstancesWorkspaceInstance } from '@cdktn/provider-awscc'

new workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesinstancesWorkspaceInstanceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesinstancesWorkspaceInstance.WorkspacesinstancesWorkspaceInstanceTags">WorkspacesinstancesWorkspaceInstanceTags</a>

---



