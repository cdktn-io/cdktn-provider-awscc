# `ssmincidentsReplicationSet` Submodule <a name="`ssmincidentsReplicationSet` Submodule" id="@cdktn/provider-awscc.ssmincidentsReplicationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsReplicationSet <a name="SsmincidentsReplicationSet" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set awscc_ssmincidents_replication_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

new ssmincidentsReplicationSet.SsmincidentsReplicationSet(scope: Construct, id: string, config: SsmincidentsReplicationSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig">SsmincidentsReplicationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig">SsmincidentsReplicationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegions">putRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetDeletionProtected">resetDeletionProtected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRegions` <a name="putRegions" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegions"></a>

```typescript
public putRegions(value: IResolvable | SsmincidentsReplicationSetRegions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTags"></a>

```typescript
public putTags(value: IResolvable | SsmincidentsReplicationSetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags">SsmincidentsReplicationSetTags</a>[]

---

##### `resetDeletionProtected` <a name="resetDeletionProtected" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetDeletionProtected"></a>

```typescript
public resetDeletionProtected(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmincidentsReplicationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmincidentsReplicationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmincidentsReplicationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regions">regions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList">SsmincidentsReplicationSetRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList">SsmincidentsReplicationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtectedInput">deletionProtectedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regionsInput">regionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags">SsmincidentsReplicationSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtected">deletionProtected</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regions"></a>

```typescript
public readonly regions: SsmincidentsReplicationSetRegionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList">SsmincidentsReplicationSetRegionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tags"></a>

```typescript
public readonly tags: SsmincidentsReplicationSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList">SsmincidentsReplicationSetTagsList</a>

---

##### `deletionProtectedInput`<sup>Optional</sup> <a name="deletionProtectedInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtectedInput"></a>

```typescript
public readonly deletionProtectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regionsInput"></a>

```typescript
public readonly regionsInput: IResolvable | SsmincidentsReplicationSetRegions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SsmincidentsReplicationSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags">SsmincidentsReplicationSetTags</a>[]

---

##### `deletionProtected`<sup>Required</sup> <a name="deletionProtected" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtected"></a>

```typescript
public readonly deletionProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsReplicationSetConfig <a name="SsmincidentsReplicationSetConfig" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.Initializer"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

const ssmincidentsReplicationSetConfig: ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.regions">regions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]</code> | The ReplicationSet configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.deletionProtected">deletionProtected</a></code> | <code>boolean \| cdktn.IResolvable</code> | Configures the ReplicationSet deletion protection. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags">SsmincidentsReplicationSetTags</a>[]</code> | The tags to apply to the replication set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.regions"></a>

```typescript
public readonly regions: IResolvable | SsmincidentsReplicationSetRegions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]

The ReplicationSet configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#regions SsmincidentsReplicationSet#regions}

---

##### `deletionProtected`<sup>Optional</sup> <a name="deletionProtected" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.deletionProtected"></a>

```typescript
public readonly deletionProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Configures the ReplicationSet deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#deletion_protected SsmincidentsReplicationSet#deletion_protected}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SsmincidentsReplicationSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags">SsmincidentsReplicationSetTags</a>[]

The tags to apply to the replication set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#tags SsmincidentsReplicationSet#tags}

---

### SsmincidentsReplicationSetRegions <a name="SsmincidentsReplicationSetRegions" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.Initializer"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

const ssmincidentsReplicationSetRegions: ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.regionConfiguration">regionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration">SsmincidentsReplicationSetRegionsRegionConfiguration</a></code> | The ReplicationSet regional configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.regionName">regionName</a></code> | <code>string</code> | The AWS region name. |

---

##### `regionConfiguration`<sup>Optional</sup> <a name="regionConfiguration" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.regionConfiguration"></a>

```typescript
public readonly regionConfiguration: SsmincidentsReplicationSetRegionsRegionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration">SsmincidentsReplicationSetRegionsRegionConfiguration</a>

The ReplicationSet regional configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#region_configuration SsmincidentsReplicationSet#region_configuration}

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

The AWS region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#region_name SsmincidentsReplicationSet#region_name}

---

### SsmincidentsReplicationSetRegionsRegionConfiguration <a name="SsmincidentsReplicationSetRegionsRegionConfiguration" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration.Initializer"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

const ssmincidentsReplicationSetRegionsRegionConfiguration: ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration.property.sseKmsKeyId">sseKmsKeyId</a></code> | <code>string</code> | The AWS Key Management Service key ID or Key Alias to use to encrypt your replication set. |

---

##### `sseKmsKeyId`<sup>Optional</sup> <a name="sseKmsKeyId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration.property.sseKmsKeyId"></a>

```typescript
public readonly sseKmsKeyId: string;
```

- *Type:* string

The AWS Key Management Service key ID or Key Alias to use to encrypt your replication set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#sse_kms_key_id SsmincidentsReplicationSet#sse_kms_key_id}

---

### SsmincidentsReplicationSetTags <a name="SsmincidentsReplicationSetTags" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags.Initializer"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

const ssmincidentsReplicationSetTags: ssmincidentsReplicationSet.SsmincidentsReplicationSetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#key SsmincidentsReplicationSet#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#value SsmincidentsReplicationSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#key SsmincidentsReplicationSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssmincidents_replication_set#value SsmincidentsReplicationSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsReplicationSetRegionsList <a name="SsmincidentsReplicationSetRegionsList" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

new ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.get"></a>

```typescript
public get(index: number): SsmincidentsReplicationSetRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsReplicationSetRegions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]

---


### SsmincidentsReplicationSetRegionsOutputReference <a name="SsmincidentsReplicationSetRegionsOutputReference" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

new ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.putRegionConfiguration">putRegionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resetRegionConfiguration">resetRegionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resetRegionName">resetRegionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionConfiguration` <a name="putRegionConfiguration" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.putRegionConfiguration"></a>

```typescript
public putRegionConfiguration(value: SsmincidentsReplicationSetRegionsRegionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.putRegionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration">SsmincidentsReplicationSetRegionsRegionConfiguration</a>

---

##### `resetRegionConfiguration` <a name="resetRegionConfiguration" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resetRegionConfiguration"></a>

```typescript
public resetRegionConfiguration(): void
```

##### `resetRegionName` <a name="resetRegionName" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resetRegionName"></a>

```typescript
public resetRegionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionConfiguration">regionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference">SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionConfigurationInput">regionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration">SsmincidentsReplicationSetRegionsRegionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionConfiguration`<sup>Required</sup> <a name="regionConfiguration" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionConfiguration"></a>

```typescript
public readonly regionConfiguration: SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference">SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference</a>

---

##### `regionConfigurationInput`<sup>Optional</sup> <a name="regionConfigurationInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionConfigurationInput"></a>

```typescript
public readonly regionConfigurationInput: IResolvable | SsmincidentsReplicationSetRegionsRegionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration">SsmincidentsReplicationSetRegionsRegionConfiguration</a>

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionNameInput"></a>

```typescript
public readonly regionNameInput: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsReplicationSetRegions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>

---


### SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference <a name="SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

new ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resetSseKmsKeyId">resetSseKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSseKmsKeyId` <a name="resetSseKmsKeyId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.resetSseKmsKeyId"></a>

```typescript
public resetSseKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyIdInput">sseKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyId">sseKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration">SsmincidentsReplicationSetRegionsRegionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sseKmsKeyIdInput`<sup>Optional</sup> <a name="sseKmsKeyIdInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyIdInput"></a>

```typescript
public readonly sseKmsKeyIdInput: string;
```

- *Type:* string

---

##### `sseKmsKeyId`<sup>Required</sup> <a name="sseKmsKeyId" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.sseKmsKeyId"></a>

```typescript
public readonly sseKmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsReplicationSetRegionsRegionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsRegionConfiguration">SsmincidentsReplicationSetRegionsRegionConfiguration</a>

---


### SsmincidentsReplicationSetTagsList <a name="SsmincidentsReplicationSetTagsList" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

new ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.get"></a>

```typescript
public get(index: number): SsmincidentsReplicationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags">SsmincidentsReplicationSetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsReplicationSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags">SsmincidentsReplicationSetTags</a>[]

---


### SsmincidentsReplicationSetTagsOutputReference <a name="SsmincidentsReplicationSetTagsOutputReference" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer"></a>

```typescript
import { ssmincidentsReplicationSet } from '@cdktn/provider-awscc'

new ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags">SsmincidentsReplicationSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmincidentsReplicationSetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmincidentsReplicationSet.SsmincidentsReplicationSetTags">SsmincidentsReplicationSetTags</a>

---



