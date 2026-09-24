# `redshiftSnapshotCopyGrant` Submodule <a name="`redshiftSnapshotCopyGrant` Submodule" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftSnapshotCopyGrant <a name="RedshiftSnapshotCopyGrant" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant awscc_redshift_snapshot_copy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer"></a>

```typescript
import { redshiftSnapshotCopyGrant } from '@cdktn/provider-awscc'

new redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant(scope: Construct, id: string, config: RedshiftSnapshotCopyGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig">RedshiftSnapshotCopyGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig">RedshiftSnapshotCopyGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags"></a>

```typescript
public putTags(value: IResolvable | RedshiftSnapshotCopyGrantTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftSnapshotCopyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct"></a>

```typescript
import { redshiftSnapshotCopyGrant } from '@cdktn/provider-awscc'

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement"></a>

```typescript
import { redshiftSnapshotCopyGrant } from '@cdktn/provider-awscc'

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource"></a>

```typescript
import { redshiftSnapshotCopyGrant } from '@cdktn/provider-awscc'

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport"></a>

```typescript
import { redshiftSnapshotCopyGrant } from '@cdktn/provider-awscc'

redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RedshiftSnapshotCopyGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftSnapshotCopyGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftSnapshotCopyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftSnapshotCopyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList">RedshiftSnapshotCopyGrantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantNameInput">snapshotCopyGrantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tags"></a>

```typescript
public readonly tags: RedshiftSnapshotCopyGrantTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList">RedshiftSnapshotCopyGrantTagsList</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotCopyGrantNameInput`<sup>Optional</sup> <a name="snapshotCopyGrantNameInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantNameInput"></a>

```typescript
public readonly snapshotCopyGrantNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RedshiftSnapshotCopyGrantTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="snapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName"></a>

```typescript
public readonly snapshotCopyGrantName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftSnapshotCopyGrantConfig <a name="RedshiftSnapshotCopyGrantConfig" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.Initializer"></a>

```typescript
import { redshiftSnapshotCopyGrant } from '@cdktn/provider-awscc'

const redshiftSnapshotCopyGrantConfig: redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>string</code> | The name of the snapshot copy grant. This name must be unique in the region for the AWS account. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]</code> | A list of tag instances. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="snapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.snapshotCopyGrantName"></a>

```typescript
public readonly snapshotCopyGrantName: string;
```

- *Type:* string

The name of the snapshot copy grant. This name must be unique in the region for the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#snapshot_copy_grant_name RedshiftSnapshotCopyGrant#snapshot_copy_grant_name}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission.

If no key is specified, the default key is used. Marked writeOnly because Create accepts aliases/key-ids but Describe returns the resolved key ARN, which would fail drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#kms_key_id RedshiftSnapshotCopyGrant#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RedshiftSnapshotCopyGrantTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#tags RedshiftSnapshotCopyGrant#tags}

---

### RedshiftSnapshotCopyGrantTags <a name="RedshiftSnapshotCopyGrantTags" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.Initializer"></a>

```typescript
import { redshiftSnapshotCopyGrant } from '@cdktn/provider-awscc'

const redshiftSnapshotCopyGrantTags: redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.key">key</a></code> | <code>string</code> | The key, or name, for the resource tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.value">value</a></code> | <code>string</code> | The value for the resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key, or name, for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#key RedshiftSnapshotCopyGrant#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_snapshot_copy_grant#value RedshiftSnapshotCopyGrant#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftSnapshotCopyGrantTagsList <a name="RedshiftSnapshotCopyGrantTagsList" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer"></a>

```typescript
import { redshiftSnapshotCopyGrant } from '@cdktn/provider-awscc'

new redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get"></a>

```typescript
public get(index: number): RedshiftSnapshotCopyGrantTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftSnapshotCopyGrantTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>[]

---


### RedshiftSnapshotCopyGrantTagsOutputReference <a name="RedshiftSnapshotCopyGrantTagsOutputReference" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer"></a>

```typescript
import { redshiftSnapshotCopyGrant } from '@cdktn/provider-awscc'

new redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftSnapshotCopyGrantTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftSnapshotCopyGrant.RedshiftSnapshotCopyGrantTags">RedshiftSnapshotCopyGrantTags</a>

---



