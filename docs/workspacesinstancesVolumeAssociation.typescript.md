# `workspacesinstancesVolumeAssociation` Submodule <a name="`workspacesinstancesVolumeAssociation` Submodule" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesinstancesVolumeAssociation <a name="WorkspacesinstancesVolumeAssociation" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume_association awscc_workspacesinstances_volume_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer"></a>

```typescript
import { workspacesinstancesVolumeAssociation } from '@cdktn/provider-awscc'

new workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation(scope: Construct, id: string, config: WorkspacesinstancesVolumeAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig">WorkspacesinstancesVolumeAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig">WorkspacesinstancesVolumeAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.resetDisassociateMode">resetDisassociateMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisassociateMode` <a name="resetDisassociateMode" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.resetDisassociateMode"></a>

```typescript
public resetDisassociateMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesinstancesVolumeAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isConstruct"></a>

```typescript
import { workspacesinstancesVolumeAssociation } from '@cdktn/provider-awscc'

workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformElement"></a>

```typescript
import { workspacesinstancesVolumeAssociation } from '@cdktn/provider-awscc'

workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformResource"></a>

```typescript
import { workspacesinstancesVolumeAssociation } from '@cdktn/provider-awscc'

workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport"></a>

```typescript
import { workspacesinstancesVolumeAssociation } from '@cdktn/provider-awscc'

workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspacesinstancesVolumeAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesinstancesVolumeAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesinstancesVolumeAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesinstancesVolumeAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.deviceInput">deviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.disassociateModeInput">disassociateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.workspaceInstanceIdInput">workspaceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.device">device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.disassociateMode">disassociateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.workspaceInstanceId">workspaceInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `deviceInput`<sup>Optional</sup> <a name="deviceInput" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.deviceInput"></a>

```typescript
public readonly deviceInput: string;
```

- *Type:* string

---

##### `disassociateModeInput`<sup>Optional</sup> <a name="disassociateModeInput" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.disassociateModeInput"></a>

```typescript
public readonly disassociateModeInput: string;
```

- *Type:* string

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `workspaceInstanceIdInput`<sup>Optional</sup> <a name="workspaceInstanceIdInput" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.workspaceInstanceIdInput"></a>

```typescript
public readonly workspaceInstanceIdInput: string;
```

- *Type:* string

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

---

##### `disassociateMode`<sup>Required</sup> <a name="disassociateMode" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.disassociateMode"></a>

```typescript
public readonly disassociateMode: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `workspaceInstanceId`<sup>Required</sup> <a name="workspaceInstanceId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.workspaceInstanceId"></a>

```typescript
public readonly workspaceInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesinstancesVolumeAssociationConfig <a name="WorkspacesinstancesVolumeAssociationConfig" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.Initializer"></a>

```typescript
import { workspacesinstancesVolumeAssociation } from '@cdktn/provider-awscc'

const workspacesinstancesVolumeAssociationConfig: workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.device">device</a></code> | <code>string</code> | The device name for the volume attachment. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.volumeId">volumeId</a></code> | <code>string</code> | ID of the volume to attach to the workspace instance. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.workspaceInstanceId">workspaceInstanceId</a></code> | <code>string</code> | ID of the workspace instance to associate with the volume. |
| <code><a href="#@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.disassociateMode">disassociateMode</a></code> | <code>string</code> | Mode to use when disassociating the volume. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `device`<sup>Required</sup> <a name="device" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

The device name for the volume attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume_association#device WorkspacesinstancesVolumeAssociation#device}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

ID of the volume to attach to the workspace instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume_association#volume_id WorkspacesinstancesVolumeAssociation#volume_id}

---

##### `workspaceInstanceId`<sup>Required</sup> <a name="workspaceInstanceId" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.workspaceInstanceId"></a>

```typescript
public readonly workspaceInstanceId: string;
```

- *Type:* string

ID of the workspace instance to associate with the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume_association#workspace_instance_id WorkspacesinstancesVolumeAssociation#workspace_instance_id}

---

##### `disassociateMode`<sup>Optional</sup> <a name="disassociateMode" id="@cdktn/provider-awscc.workspacesinstancesVolumeAssociation.WorkspacesinstancesVolumeAssociationConfig.property.disassociateMode"></a>

```typescript
public readonly disassociateMode: string;
```

- *Type:* string

Mode to use when disassociating the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesinstances_volume_association#disassociate_mode WorkspacesinstancesVolumeAssociation#disassociate_mode}

---



