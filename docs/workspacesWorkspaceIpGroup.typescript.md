# `workspacesWorkspaceIpGroup` Submodule <a name="`workspacesWorkspaceIpGroup` Submodule" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspaceIpGroup <a name="WorkspacesWorkspaceIpGroup" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspace_ip_group awscc_workspaces_workspace_ip_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

new workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup(scope: Construct, id: string, config: WorkspacesWorkspaceIpGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig">WorkspacesWorkspaceIpGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig">WorkspacesWorkspaceIpGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putUserRules">putUserRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetGroupDesc">resetGroupDesc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetUserRules">resetUserRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | WorkspacesWorkspaceIpGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>[]

---

##### `putUserRules` <a name="putUserRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putUserRules"></a>

```typescript
public putUserRules(value: IResolvable | WorkspacesWorkspaceIpGroupUserRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.putUserRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>[]

---

##### `resetGroupDesc` <a name="resetGroupDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetGroupDesc"></a>

```typescript
public resetGroupDesc(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserRules` <a name="resetUserRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.resetUserRules"></a>

```typescript
public resetUserRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isConstruct"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformElement"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformResource"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesWorkspaceIpGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesWorkspaceIpGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspace_ip_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesWorkspaceIpGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList">WorkspacesWorkspaceIpGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.userRules">userRules</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList">WorkspacesWorkspaceIpGroupUserRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupDescInput">groupDescInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.userRulesInput">userRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupDesc">groupDesc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tags"></a>

```typescript
public readonly tags: WorkspacesWorkspaceIpGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList">WorkspacesWorkspaceIpGroupTagsList</a>

---

##### `userRules`<sup>Required</sup> <a name="userRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.userRules"></a>

```typescript
public readonly userRules: WorkspacesWorkspaceIpGroupUserRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList">WorkspacesWorkspaceIpGroupUserRulesList</a>

---

##### `groupDescInput`<sup>Optional</sup> <a name="groupDescInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupDescInput"></a>

```typescript
public readonly groupDescInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WorkspacesWorkspaceIpGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>[]

---

##### `userRulesInput`<sup>Optional</sup> <a name="userRulesInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.userRulesInput"></a>

```typescript
public readonly userRulesInput: IResolvable | WorkspacesWorkspaceIpGroupUserRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>[]

---

##### `groupDesc`<sup>Required</sup> <a name="groupDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupDesc"></a>

```typescript
public readonly groupDesc: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspaceIpGroupConfig <a name="WorkspacesWorkspaceIpGroupConfig" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.Initializer"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

const workspacesWorkspaceIpGroupConfig: workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.groupName">groupName</a></code> | <code>string</code> | The name of the group. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.groupDesc">groupDesc</a></code> | <code>string</code> | The description of the group. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>[]</code> | The tags for the IP access control group. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.userRules">userRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>[]</code> | The rules for the IP access control group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspace_ip_group#group_name WorkspacesWorkspaceIpGroup#group_name}

---

##### `groupDesc`<sup>Optional</sup> <a name="groupDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.groupDesc"></a>

```typescript
public readonly groupDesc: string;
```

- *Type:* string

The description of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspace_ip_group#group_desc WorkspacesWorkspaceIpGroup#group_desc}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WorkspacesWorkspaceIpGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>[]

The tags for the IP access control group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspace_ip_group#tags WorkspacesWorkspaceIpGroup#tags}

---

##### `userRules`<sup>Optional</sup> <a name="userRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupConfig.property.userRules"></a>

```typescript
public readonly userRules: IResolvable | WorkspacesWorkspaceIpGroupUserRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>[]

The rules for the IP access control group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspace_ip_group#user_rules WorkspacesWorkspaceIpGroup#user_rules}

---

### WorkspacesWorkspaceIpGroupTags <a name="WorkspacesWorkspaceIpGroupTags" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags.Initializer"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

const workspacesWorkspaceIpGroupTags: workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspace_ip_group#key WorkspacesWorkspaceIpGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspace_ip_group#value WorkspacesWorkspaceIpGroup#value}

---

### WorkspacesWorkspaceIpGroupUserRules <a name="WorkspacesWorkspaceIpGroupUserRules" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules.Initializer"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

const workspacesWorkspaceIpGroupUserRules: workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules.property.ipRule">ipRule</a></code> | <code>string</code> | The IP address range, in CIDR notation. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules.property.ruleDesc">ruleDesc</a></code> | <code>string</code> | The description of the rule. |

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules.property.ipRule"></a>

```typescript
public readonly ipRule: string;
```

- *Type:* string

The IP address range, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspace_ip_group#ip_rule WorkspacesWorkspaceIpGroup#ip_rule}

---

##### `ruleDesc`<sup>Optional</sup> <a name="ruleDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules.property.ruleDesc"></a>

```typescript
public readonly ruleDesc: string;
```

- *Type:* string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspaces_workspace_ip_group#rule_desc WorkspacesWorkspaceIpGroup#rule_desc}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspaceIpGroupTagsList <a name="WorkspacesWorkspaceIpGroupTagsList" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

new workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.get"></a>

```typescript
public get(index: number): WorkspacesWorkspaceIpGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesWorkspaceIpGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>[]

---


### WorkspacesWorkspaceIpGroupTagsOutputReference <a name="WorkspacesWorkspaceIpGroupTagsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

new workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesWorkspaceIpGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupTags">WorkspacesWorkspaceIpGroupTags</a>

---


### WorkspacesWorkspaceIpGroupUserRulesList <a name="WorkspacesWorkspaceIpGroupUserRulesList" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

new workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.get"></a>

```typescript
public get(index: number): WorkspacesWorkspaceIpGroupUserRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesWorkspaceIpGroupUserRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>[]

---


### WorkspacesWorkspaceIpGroupUserRulesOutputReference <a name="WorkspacesWorkspaceIpGroupUserRulesOutputReference" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer"></a>

```typescript
import { workspacesWorkspaceIpGroup } from '@cdktn/provider-awscc'

new workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resetIpRule">resetIpRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resetRuleDesc">resetRuleDesc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpRule` <a name="resetIpRule" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resetIpRule"></a>

```typescript
public resetIpRule(): void
```

##### `resetRuleDesc` <a name="resetRuleDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.resetRuleDesc"></a>

```typescript
public resetRuleDesc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRuleInput">ipRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDescInput">ruleDescInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRule">ipRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDesc">ruleDesc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipRuleInput`<sup>Optional</sup> <a name="ipRuleInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRuleInput"></a>

```typescript
public readonly ipRuleInput: string;
```

- *Type:* string

---

##### `ruleDescInput`<sup>Optional</sup> <a name="ruleDescInput" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDescInput"></a>

```typescript
public readonly ruleDescInput: string;
```

- *Type:* string

---

##### `ipRule`<sup>Required</sup> <a name="ipRule" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRule"></a>

```typescript
public readonly ipRule: string;
```

- *Type:* string

---

##### `ruleDesc`<sup>Required</sup> <a name="ruleDesc" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDesc"></a>

```typescript
public readonly ruleDesc: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesWorkspaceIpGroupUserRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesWorkspaceIpGroup.WorkspacesWorkspaceIpGroupUserRules">WorkspacesWorkspaceIpGroupUserRules</a>

---



