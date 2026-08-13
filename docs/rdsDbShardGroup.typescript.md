# `rdsDbShardGroup` Submodule <a name="`rdsDbShardGroup` Submodule" id="@cdktn/provider-awscc.rdsDbShardGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbShardGroup <a name="RdsDbShardGroup" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group awscc_rds_db_shard_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer"></a>

```typescript
import { rdsDbShardGroup } from '@cdktn/provider-awscc'

new rdsDbShardGroup.RdsDbShardGroup(scope: Construct, id: string, config: RdsDbShardGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig">RdsDbShardGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig">RdsDbShardGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetComputeRedundancy">resetComputeRedundancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetDbShardGroupIdentifier">resetDbShardGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetMinAcu">resetMinAcu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | RdsDbShardGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>[]

---

##### `resetComputeRedundancy` <a name="resetComputeRedundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetComputeRedundancy"></a>

```typescript
public resetComputeRedundancy(): void
```

##### `resetDbShardGroupIdentifier` <a name="resetDbShardGroupIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetDbShardGroupIdentifier"></a>

```typescript
public resetDbShardGroupIdentifier(): void
```

##### `resetMinAcu` <a name="resetMinAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetMinAcu"></a>

```typescript
public resetMinAcu(): void
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetPubliclyAccessible"></a>

```typescript
public resetPubliclyAccessible(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbShardGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isConstruct"></a>

```typescript
import { rdsDbShardGroup } from '@cdktn/provider-awscc'

rdsDbShardGroup.RdsDbShardGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformElement"></a>

```typescript
import { rdsDbShardGroup } from '@cdktn/provider-awscc'

rdsDbShardGroup.RdsDbShardGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformResource"></a>

```typescript
import { rdsDbShardGroup } from '@cdktn/provider-awscc'

rdsDbShardGroup.RdsDbShardGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport"></a>

```typescript
import { rdsDbShardGroup } from '@cdktn/provider-awscc'

rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RdsDbShardGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDbShardGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDbShardGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbShardGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupResourceId">dbShardGroupResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList">RdsDbShardGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancyInput">computeRedundancyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifierInput">dbShardGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcuInput">maxAcuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcuInput">minAcuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancy">computeRedundancy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifier">dbShardGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcu">maxAcu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcu">minAcu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbShardGroupResourceId`<sup>Required</sup> <a name="dbShardGroupResourceId" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupResourceId"></a>

```typescript
public readonly dbShardGroupResourceId: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tags"></a>

```typescript
public readonly tags: RdsDbShardGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList">RdsDbShardGroupTagsList</a>

---

##### `computeRedundancyInput`<sup>Optional</sup> <a name="computeRedundancyInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancyInput"></a>

```typescript
public readonly computeRedundancyInput: number;
```

- *Type:* number

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifierInput"></a>

```typescript
public readonly dbClusterIdentifierInput: string;
```

- *Type:* string

---

##### `dbShardGroupIdentifierInput`<sup>Optional</sup> <a name="dbShardGroupIdentifierInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifierInput"></a>

```typescript
public readonly dbShardGroupIdentifierInput: string;
```

- *Type:* string

---

##### `maxAcuInput`<sup>Optional</sup> <a name="maxAcuInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcuInput"></a>

```typescript
public readonly maxAcuInput: number;
```

- *Type:* number

---

##### `minAcuInput`<sup>Optional</sup> <a name="minAcuInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcuInput"></a>

```typescript
public readonly minAcuInput: number;
```

- *Type:* number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessibleInput"></a>

```typescript
public readonly publiclyAccessibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RdsDbShardGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>[]

---

##### `computeRedundancy`<sup>Required</sup> <a name="computeRedundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancy"></a>

```typescript
public readonly computeRedundancy: number;
```

- *Type:* number

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

---

##### `dbShardGroupIdentifier`<sup>Required</sup> <a name="dbShardGroupIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifier"></a>

```typescript
public readonly dbShardGroupIdentifier: string;
```

- *Type:* string

---

##### `maxAcu`<sup>Required</sup> <a name="maxAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcu"></a>

```typescript
public readonly maxAcu: number;
```

- *Type:* number

---

##### `minAcu`<sup>Required</sup> <a name="minAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcu"></a>

```typescript
public readonly minAcu: number;
```

- *Type:* number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbShardGroupConfig <a name="RdsDbShardGroupConfig" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.Initializer"></a>

```typescript
import { rdsDbShardGroup } from '@cdktn/provider-awscc'

const rdsDbShardGroupConfig: rdsDbShardGroup.RdsDbShardGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | The name of the primary DB cluster for the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.maxAcu">maxAcu</a></code> | <code>number</code> | The maximum capacity of the DB shard group in Aurora capacity units (ACUs). |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.computeRedundancy">computeRedundancy</a></code> | <code>number</code> | Specifies whether to create standby standby DB data access shard for the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbShardGroupIdentifier">dbShardGroupIdentifier</a></code> | <code>string</code> | The name of the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.minAcu">minAcu</a></code> | <code>number</code> | The minimum capacity of the DB shard group in Aurora capacity units (ACUs). |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the DB shard group is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>[]</code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

The name of the primary DB cluster for the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#db_cluster_identifier RdsDbShardGroup#db_cluster_identifier}

---

##### `maxAcu`<sup>Required</sup> <a name="maxAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.maxAcu"></a>

```typescript
public readonly maxAcu: number;
```

- *Type:* number

The maximum capacity of the DB shard group in Aurora capacity units (ACUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#max_acu RdsDbShardGroup#max_acu}

---

##### `computeRedundancy`<sup>Optional</sup> <a name="computeRedundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.computeRedundancy"></a>

```typescript
public readonly computeRedundancy: number;
```

- *Type:* number

Specifies whether to create standby standby DB data access shard for the DB shard group.

Valid values are the following:
  +  0 - Creates a DB shard group without a standby DB data access shard. This is the default value.
  +  1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ).
  +  2 - Creates a DB shard group with two standby DB data access shard in two different AZs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#compute_redundancy RdsDbShardGroup#compute_redundancy}

---

##### `dbShardGroupIdentifier`<sup>Optional</sup> <a name="dbShardGroupIdentifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbShardGroupIdentifier"></a>

```typescript
public readonly dbShardGroupIdentifier: string;
```

- *Type:* string

The name of the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#db_shard_group_identifier RdsDbShardGroup#db_shard_group_identifier}

---

##### `minAcu`<sup>Optional</sup> <a name="minAcu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.minAcu"></a>

```typescript
public readonly minAcu: number;
```

- *Type:* number

The minimum capacity of the DB shard group in Aurora capacity units (ACUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#min_acu RdsDbShardGroup#min_acu}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the DB shard group is publicly accessible.

When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.
 When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.
 Default: The default behavior varies depending on whether ``DBSubnetGroupName`` is specified.
 If ``DBSubnetGroupName`` isn't specified, and ``PubliclyAccessible`` isn't specified, the following applies:
  +  If the default VPC in the target Region doesn?t have an internet gateway attached to it, the DB shard group is private.
  +  If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.
  
 If ``DBSubnetGroupName`` is specified, and ``PubliclyAccessible`` isn't specified, the following applies:
  +  If the subnets are part of a VPC that doesn?t have an internet gateway attached to it, the DB shard group is private.
  +  If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#publicly_accessible RdsDbShardGroup#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RdsDbShardGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>[]

An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#tags RdsDbShardGroup#tags}

---

### RdsDbShardGroupTags <a name="RdsDbShardGroupTags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.Initializer"></a>

```typescript
import { rdsDbShardGroup } from '@cdktn/provider-awscc'

const rdsDbShardGroupTags: rdsDbShardGroup.RdsDbShardGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.key">key</a></code> | <code>string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.value">value</a></code> | <code>string</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#key RdsDbShardGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_shard_group#value RdsDbShardGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbShardGroupTagsList <a name="RdsDbShardGroupTagsList" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer"></a>

```typescript
import { rdsDbShardGroup } from '@cdktn/provider-awscc'

new rdsDbShardGroup.RdsDbShardGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.get"></a>

```typescript
public get(index: number): RdsDbShardGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbShardGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>[]

---


### RdsDbShardGroupTagsOutputReference <a name="RdsDbShardGroupTagsOutputReference" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer"></a>

```typescript
import { rdsDbShardGroup } from '@cdktn/provider-awscc'

new rdsDbShardGroup.RdsDbShardGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsDbShardGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>

---



