# `pcaconnectoradTemplateGroupAccessControlEntry` Submodule <a name="`pcaconnectoradTemplateGroupAccessControlEntry` Submodule" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectoradTemplateGroupAccessControlEntry <a name="PcaconnectoradTemplateGroupAccessControlEntry" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer"></a>

```typescript
import { pcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

new pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry(scope: Construct, id: string, config: PcaconnectoradTemplateGroupAccessControlEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig">PcaconnectoradTemplateGroupAccessControlEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig">PcaconnectoradTemplateGroupAccessControlEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights">putAccessRights</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessRights` <a name="putAccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights"></a>

```typescript
public putAccessRights(value: PcaconnectoradTemplateGroupAccessControlEntryAccessRights): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct"></a>

```typescript
import { pcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement"></a>

```typescript
import { pcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource"></a>

```typescript
import { pcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport"></a>

```typescript
import { pcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PcaconnectoradTemplateGroupAccessControlEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PcaconnectoradTemplateGroupAccessControlEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectoradTemplateGroupAccessControlEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRights">accessRights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRightsInput">accessRightsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayNameInput">groupDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifierInput">groupSecurityIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArnInput">templateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName">groupDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier">groupSecurityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArn">templateArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessRights`<sup>Required</sup> <a name="accessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRights"></a>

```typescript
public readonly accessRights: PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accessRightsInput`<sup>Optional</sup> <a name="accessRightsInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRightsInput"></a>

```typescript
public readonly accessRightsInput: IResolvable | PcaconnectoradTemplateGroupAccessControlEntryAccessRights;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---

##### `groupDisplayNameInput`<sup>Optional</sup> <a name="groupDisplayNameInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayNameInput"></a>

```typescript
public readonly groupDisplayNameInput: string;
```

- *Type:* string

---

##### `groupSecurityIdentifierInput`<sup>Optional</sup> <a name="groupSecurityIdentifierInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifierInput"></a>

```typescript
public readonly groupSecurityIdentifierInput: string;
```

- *Type:* string

---

##### `templateArnInput`<sup>Optional</sup> <a name="templateArnInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArnInput"></a>

```typescript
public readonly templateArnInput: string;
```

- *Type:* string

---

##### `groupDisplayName`<sup>Required</sup> <a name="groupDisplayName" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName"></a>

```typescript
public readonly groupDisplayName: string;
```

- *Type:* string

---

##### `groupSecurityIdentifier`<sup>Required</sup> <a name="groupSecurityIdentifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier"></a>

```typescript
public readonly groupSecurityIdentifier: string;
```

- *Type:* string

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArn"></a>

```typescript
public readonly templateArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectoradTemplateGroupAccessControlEntryAccessRights <a name="PcaconnectoradTemplateGroupAccessControlEntryAccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.Initializer"></a>

```typescript
import { pcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

const pcaconnectoradTemplateGroupAccessControlEntryAccessRights: pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.autoEnroll">autoEnroll</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.enroll">enroll</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}. |

---

##### `autoEnroll`<sup>Optional</sup> <a name="autoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.autoEnroll"></a>

```typescript
public readonly autoEnroll: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}.

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.enroll"></a>

```typescript
public readonly enroll: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}.

---

### PcaconnectoradTemplateGroupAccessControlEntryConfig <a name="PcaconnectoradTemplateGroupAccessControlEntryConfig" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.Initializer"></a>

```typescript
import { pcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

const pcaconnectoradTemplateGroupAccessControlEntryConfig: pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.accessRights">accessRights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupDisplayName">groupDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupSecurityIdentifier">groupSecurityIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.templateArn">templateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessRights`<sup>Required</sup> <a name="accessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.accessRights"></a>

```typescript
public readonly accessRights: PcaconnectoradTemplateGroupAccessControlEntryAccessRights;
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}.

---

##### `groupDisplayName`<sup>Required</sup> <a name="groupDisplayName" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupDisplayName"></a>

```typescript
public readonly groupDisplayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}.

---

##### `groupSecurityIdentifier`<sup>Required</sup> <a name="groupSecurityIdentifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupSecurityIdentifier"></a>

```typescript
public readonly groupSecurityIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}.

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.templateArn"></a>

```typescript
public readonly templateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference <a name="PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer"></a>

```typescript
import { pcaconnectoradTemplateGroupAccessControlEntry } from '@cdktn/provider-awscc'

new pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetAutoEnroll">resetAutoEnroll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetEnroll">resetEnroll</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoEnroll` <a name="resetAutoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetAutoEnroll"></a>

```typescript
public resetAutoEnroll(): void
```

##### `resetEnroll` <a name="resetEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetEnroll"></a>

```typescript
public resetEnroll(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnrollInput">autoEnrollInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enrollInput">enrollInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll">autoEnroll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll">enroll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoEnrollInput`<sup>Optional</sup> <a name="autoEnrollInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnrollInput"></a>

```typescript
public readonly autoEnrollInput: string;
```

- *Type:* string

---

##### `enrollInput`<sup>Optional</sup> <a name="enrollInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enrollInput"></a>

```typescript
public readonly enrollInput: string;
```

- *Type:* string

---

##### `autoEnroll`<sup>Required</sup> <a name="autoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll"></a>

```typescript
public readonly autoEnroll: string;
```

- *Type:* string

---

##### `enroll`<sup>Required</sup> <a name="enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll"></a>

```typescript
public readonly enroll: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PcaconnectoradTemplateGroupAccessControlEntryAccessRights;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---



