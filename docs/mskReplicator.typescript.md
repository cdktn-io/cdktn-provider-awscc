# `mskReplicator` Submodule <a name="`mskReplicator` Submodule" id="@cdktn/provider-awscc.mskReplicator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskReplicator <a name="MskReplicator" id="@cdktn/provider-awscc.mskReplicator.MskReplicator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator awscc_msk_replicator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicator(scope: Construct, id: string, config: MskReplicatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig">MskReplicatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig">MskReplicatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putKafkaClusters">putKafkaClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putLogDelivery">putLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putReplicationInfoList">putReplicationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetLogDelivery">resetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKafkaClusters` <a name="putKafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putKafkaClusters"></a>

```typescript
public putKafkaClusters(value: IResolvable | MskReplicatorKafkaClusters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putKafkaClusters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>[]

---

##### `putLogDelivery` <a name="putLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putLogDelivery"></a>

```typescript
public putLogDelivery(value: MskReplicatorLogDelivery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---

##### `putReplicationInfoList` <a name="putReplicationInfoList" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putReplicationInfoList"></a>

```typescript
public putReplicationInfoList(value: IResolvable | MskReplicatorReplicationInfoListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putReplicationInfoList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putTags"></a>

```typescript
public putTags(value: IResolvable | MskReplicatorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLogDelivery` <a name="resetLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetLogDelivery"></a>

```typescript
public resetLogDelivery(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MskReplicator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isConstruct"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

mskReplicator.MskReplicator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformElement"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

mskReplicator.MskReplicator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformResource"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

mskReplicator.MskReplicator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

mskReplicator.MskReplicator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MskReplicator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MskReplicator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MskReplicator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MskReplicator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.currentVersion">currentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClusters">kafkaClusters</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList">MskReplicatorKafkaClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoList">replicationInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList">MskReplicatorReplicationInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorArn">replicatorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList">MskReplicatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClustersInput">kafkaClustersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDeliveryInput">logDeliveryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoListInput">replicationInfoListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorNameInput">replicatorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorName">replicatorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.currentVersion"></a>

```typescript
public readonly currentVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kafkaClusters`<sup>Required</sup> <a name="kafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClusters"></a>

```typescript
public readonly kafkaClusters: MskReplicatorKafkaClustersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList">MskReplicatorKafkaClustersList</a>

---

##### `logDelivery`<sup>Required</sup> <a name="logDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDelivery"></a>

```typescript
public readonly logDelivery: MskReplicatorLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryOutputReference</a>

---

##### `replicationInfoList`<sup>Required</sup> <a name="replicationInfoList" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoList"></a>

```typescript
public readonly replicationInfoList: MskReplicatorReplicationInfoListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList">MskReplicatorReplicationInfoListStructList</a>

---

##### `replicatorArn`<sup>Required</sup> <a name="replicatorArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorArn"></a>

```typescript
public readonly replicatorArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tags"></a>

```typescript
public readonly tags: MskReplicatorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList">MskReplicatorTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kafkaClustersInput`<sup>Optional</sup> <a name="kafkaClustersInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClustersInput"></a>

```typescript
public readonly kafkaClustersInput: IResolvable | MskReplicatorKafkaClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>[]

---

##### `logDeliveryInput`<sup>Optional</sup> <a name="logDeliveryInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDeliveryInput"></a>

```typescript
public readonly logDeliveryInput: IResolvable | MskReplicatorLogDelivery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---

##### `replicationInfoListInput`<sup>Optional</sup> <a name="replicationInfoListInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoListInput"></a>

```typescript
public readonly replicationInfoListInput: IResolvable | MskReplicatorReplicationInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>[]

---

##### `replicatorNameInput`<sup>Optional</sup> <a name="replicatorNameInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorNameInput"></a>

```typescript
public readonly replicatorNameInput: string;
```

- *Type:* string

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput"></a>

```typescript
public readonly serviceExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MskReplicatorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorName"></a>

```typescript
public readonly replicatorName: string;
```

- *Type:* string

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskReplicatorConfig <a name="MskReplicatorConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorConfig: mskReplicator.MskReplicatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.kafkaClusters">kafkaClusters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>[]</code> | Specifies a list of Kafka clusters which are targets of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicationInfoList">replicationInfoList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>[]</code> | A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicatorName">replicatorName</a></code> | <code>string</code> | The name of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.description">description</a></code> | <code>string</code> | A summary description of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | Configuration for log delivery for the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `kafkaClusters`<sup>Required</sup> <a name="kafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.kafkaClusters"></a>

```typescript
public readonly kafkaClusters: IResolvable | MskReplicatorKafkaClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>[]

Specifies a list of Kafka clusters which are targets of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#kafka_clusters MskReplicator#kafka_clusters}

---

##### `replicationInfoList`<sup>Required</sup> <a name="replicationInfoList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicationInfoList"></a>

```typescript
public readonly replicationInfoList: IResolvable | MskReplicatorReplicationInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>[]

A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicatorName"></a>

```typescript
public readonly replicatorName: string;
```

- *Type:* string

The name of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A summary description of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#description MskReplicator#description}

---

##### `logDelivery`<sup>Optional</sup> <a name="logDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.logDelivery"></a>

```typescript
public readonly logDelivery: MskReplicatorLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

Configuration for log delivery for the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#log_delivery MskReplicator#log_delivery}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MskReplicatorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#tags MskReplicator#tags}

---

### MskReplicatorKafkaClusters <a name="MskReplicatorKafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorKafkaClusters: mskReplicator.MskReplicatorKafkaClusters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.amazonMskCluster">amazonMskCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a></code> | Details of an Amazon MSK cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a></code> | Details of an Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a></code> | Details of the client authentication used by the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.encryptionInTransit">encryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a></code> | Details of encryption in transit to the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a></code> | Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster. |

---

##### `amazonMskCluster`<sup>Optional</sup> <a name="amazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.amazonMskCluster"></a>

```typescript
public readonly amazonMskCluster: MskReplicatorKafkaClustersAmazonMskCluster;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a>

Details of an Amazon MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#amazon_msk_cluster MskReplicator#amazon_msk_cluster}

---

##### `apacheKafkaCluster`<sup>Optional</sup> <a name="apacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.apacheKafkaCluster"></a>

```typescript
public readonly apacheKafkaCluster: MskReplicatorKafkaClustersApacheKafkaCluster;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a>

Details of an Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#apache_kafka_cluster MskReplicator#apache_kafka_cluster}

---

##### `clientAuthentication`<sup>Optional</sup> <a name="clientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.clientAuthentication"></a>

```typescript
public readonly clientAuthentication: MskReplicatorKafkaClustersClientAuthentication;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a>

Details of the client authentication used by the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#client_authentication MskReplicator#client_authentication}

---

##### `encryptionInTransit`<sup>Optional</sup> <a name="encryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.encryptionInTransit"></a>

```typescript
public readonly encryptionInTransit: MskReplicatorKafkaClustersEncryptionInTransit;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a>

Details of encryption in transit to the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#encryption_in_transit MskReplicator#encryption_in_transit}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: MskReplicatorKafkaClustersVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a>

Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#vpc_config MskReplicator#vpc_config}

---

### MskReplicatorKafkaClustersAmazonMskCluster <a name="MskReplicatorKafkaClustersAmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorKafkaClustersAmazonMskCluster: mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster.property.mskClusterArn">mskClusterArn</a></code> | <code>string</code> | The ARN of an Amazon MSK cluster. |

---

##### `mskClusterArn`<sup>Optional</sup> <a name="mskClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster.property.mskClusterArn"></a>

```typescript
public readonly mskClusterArn: string;
```

- *Type:* string

The ARN of an Amazon MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}

---

### MskReplicatorKafkaClustersApacheKafkaCluster <a name="MskReplicatorKafkaClustersApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorKafkaClustersApacheKafkaCluster: mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.apacheKafkaClusterId">apacheKafkaClusterId</a></code> | <code>string</code> | The ID of the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.bootstrapBrokerString">bootstrapBrokerString</a></code> | <code>string</code> | The bootstrap broker string of the Apache Kafka cluster. |

---

##### `apacheKafkaClusterId`<sup>Optional</sup> <a name="apacheKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.apacheKafkaClusterId"></a>

```typescript
public readonly apacheKafkaClusterId: string;
```

- *Type:* string

The ID of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#apache_kafka_cluster_id MskReplicator#apache_kafka_cluster_id}

---

##### `bootstrapBrokerString`<sup>Optional</sup> <a name="bootstrapBrokerString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.bootstrapBrokerString"></a>

```typescript
public readonly bootstrapBrokerString: string;
```

- *Type:* string

The bootstrap broker string of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#bootstrap_broker_string MskReplicator#bootstrap_broker_string}

---

### MskReplicatorKafkaClustersClientAuthentication <a name="MskReplicatorKafkaClustersClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorKafkaClustersClientAuthentication: mskReplicator.MskReplicatorKafkaClustersClientAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.mtls">mtls</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a></code> | Details for mTLS client authentication. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.saslScram">saslScram</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a></code> | Details for SASL/SCRAM client authentication. |

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.mtls"></a>

```typescript
public readonly mtls: MskReplicatorKafkaClustersClientAuthenticationMtls;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a>

Details for mTLS client authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#mtls MskReplicator#mtls}

---

##### `saslScram`<sup>Optional</sup> <a name="saslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.saslScram"></a>

```typescript
public readonly saslScram: MskReplicatorKafkaClustersClientAuthenticationSaslScram;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

Details for SASL/SCRAM client authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#sasl_scram MskReplicator#sasl_scram}

---

### MskReplicatorKafkaClustersClientAuthenticationMtls <a name="MskReplicatorKafkaClustersClientAuthenticationMtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorKafkaClustersClientAuthenticationMtls: mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls.property.secretArn">secretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#secret_arn MskReplicator#secret_arn}

---

### MskReplicatorKafkaClustersClientAuthenticationSaslScram <a name="MskReplicatorKafkaClustersClientAuthenticationSaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorKafkaClustersClientAuthenticationSaslScram: mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.mechanism">mechanism</a></code> | <code>string</code> | The SASL/SCRAM authentication mechanism. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.secretArn">secretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret. |

---

##### `mechanism`<sup>Optional</sup> <a name="mechanism" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.mechanism"></a>

```typescript
public readonly mechanism: string;
```

- *Type:* string

The SASL/SCRAM authentication mechanism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#mechanism MskReplicator#mechanism}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#secret_arn MskReplicator#secret_arn}

---

### MskReplicatorKafkaClustersEncryptionInTransit <a name="MskReplicatorKafkaClustersEncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorKafkaClustersEncryptionInTransit: mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.encryptionType">encryptionType</a></code> | <code>string</code> | The type of encryption in transit to the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.rootCaCertificate">rootCaCertificate</a></code> | <code>string</code> | The root CA certificate. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

The type of encryption in transit to the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#encryption_type MskReplicator#encryption_type}

---

##### `rootCaCertificate`<sup>Optional</sup> <a name="rootCaCertificate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.rootCaCertificate"></a>

```typescript
public readonly rootCaCertificate: string;
```

- *Type:* string

The root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#root_ca_certificate MskReplicator#root_ca_certificate}

---

### MskReplicatorKafkaClustersVpcConfig <a name="MskReplicatorKafkaClustersVpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorKafkaClustersVpcConfig: mskReplicator.MskReplicatorKafkaClustersVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The list of subnets to connect to in the virtual private cloud (VPC). |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to.

If a security group is not specified, the default security group associated with the VPC is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#security_group_ids MskReplicator#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The list of subnets to connect to in the virtual private cloud (VPC).

AWS creates elastic network interfaces inside these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}

---

### MskReplicatorLogDelivery <a name="MskReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorLogDelivery: mskReplicator.MskReplicatorLogDelivery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery.property.replicatorLogDelivery">replicatorLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | The replicator logs configuration. |

---

##### `replicatorLogDelivery`<sup>Optional</sup> <a name="replicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery.property.replicatorLogDelivery"></a>

```typescript
public readonly replicatorLogDelivery: MskReplicatorLogDeliveryReplicatorLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

The replicator logs configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#replicator_log_delivery MskReplicator#replicator_log_delivery}

---

### MskReplicatorLogDeliveryReplicatorLogDelivery <a name="MskReplicatorLogDeliveryReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorLogDeliveryReplicatorLogDelivery: mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | Details of the CloudWatch Logs destination for replicator logs. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | Details of the Kinesis Data Firehose delivery stream that is the destination for replicator logs. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | Details of the Amazon S3 destination for replicator logs. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

Details of the CloudWatch Logs destination for replicator logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#cloudwatch_logs MskReplicator#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.firehose"></a>

```typescript
public readonly firehose: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

Details of the Kinesis Data Firehose delivery stream that is the destination for replicator logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#firehose MskReplicator#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.s3"></a>

```typescript
public readonly s3: MskReplicatorLogDeliveryReplicatorLogDeliveryS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

Details of the Amazon S3 destination for replicator logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#s3 MskReplicator#s3}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs: mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether log delivery to CloudWatch Logs is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>string</code> | The CloudWatch log group that is the destination for log delivery. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether log delivery to CloudWatch Logs is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

The CloudWatch log group that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#log_group MskReplicator#log_group}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorLogDeliveryReplicatorLogDeliveryFirehose: mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | The Firehose delivery stream that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether log delivery to Firehose is enabled. |

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

The Firehose delivery stream that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#delivery_stream MskReplicator#delivery_stream}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether log delivery to Firehose is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryS3 <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryS3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorLogDeliveryReplicatorLogDeliveryS3: mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.bucket">bucket</a></code> | <code>string</code> | The S3 bucket that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether log delivery to S3 is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.prefix">prefix</a></code> | <code>string</code> | The S3 prefix that is the destination for log delivery. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The S3 bucket that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#bucket MskReplicator#bucket}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether log delivery to S3 is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The S3 prefix that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#prefix MskReplicator#prefix}

---

### MskReplicatorReplicationInfoListConsumerGroupReplication <a name="MskReplicatorReplicationInfoListConsumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorReplicationInfoListConsumerGroupReplication: mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate">consumerGroupsToReplicate</a></code> | <code>string[]</code> | List of regular expression patterns indicating the consumer groups to copy. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupOffsetSyncMode">consumerGroupOffsetSyncMode</a></code> | <code>string</code> | The consumer group offset synchronization mode. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude">consumerGroupsToExclude</a></code> | <code>string[]</code> | List of regular expression patterns indicating the consumer groups that should not be replicated. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups">detectAndCopyNewConsumerGroups</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to periodically check for new consumer groups. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets">synchroniseConsumerGroupOffsets</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster. |

---

##### `consumerGroupsToReplicate`<sup>Required</sup> <a name="consumerGroupsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate"></a>

```typescript
public readonly consumerGroupsToReplicate: string[];
```

- *Type:* string[]

List of regular expression patterns indicating the consumer groups to copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}

---

##### `consumerGroupOffsetSyncMode`<sup>Optional</sup> <a name="consumerGroupOffsetSyncMode" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupOffsetSyncMode"></a>

```typescript
public readonly consumerGroupOffsetSyncMode: string;
```

- *Type:* string

The consumer group offset synchronization mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#consumer_group_offset_sync_mode MskReplicator#consumer_group_offset_sync_mode}

---

##### `consumerGroupsToExclude`<sup>Optional</sup> <a name="consumerGroupsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude"></a>

```typescript
public readonly consumerGroupsToExclude: string[];
```

- *Type:* string[]

List of regular expression patterns indicating the consumer groups that should not be replicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}

---

##### `detectAndCopyNewConsumerGroups`<sup>Optional</sup> <a name="detectAndCopyNewConsumerGroups" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups"></a>

```typescript
public readonly detectAndCopyNewConsumerGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to periodically check for new consumer groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}

---

##### `synchroniseConsumerGroupOffsets`<sup>Optional</sup> <a name="synchroniseConsumerGroupOffsets" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets"></a>

```typescript
public readonly synchroniseConsumerGroupOffsets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}

---

### MskReplicatorReplicationInfoListStruct <a name="MskReplicatorReplicationInfoListStruct" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorReplicationInfoListStruct: mskReplicator.MskReplicatorReplicationInfoListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication">consumerGroupReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | Configuration relating to consumer group replication. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType">targetCompressionType</a></code> | <code>string</code> | The type of compression to use writing records to target Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication">topicReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a></code> | Configuration relating to topic replication. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn">sourceKafkaClusterArn</a></code> | <code>string</code> | Amazon Resource Name of the source Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterId">sourceKafkaClusterId</a></code> | <code>string</code> | The ID of the source Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn">targetKafkaClusterArn</a></code> | <code>string</code> | Amazon Resource Name of the target Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterId">targetKafkaClusterId</a></code> | <code>string</code> | The ID of the target Kafka cluster. |

---

##### `consumerGroupReplication`<sup>Required</sup> <a name="consumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication"></a>

```typescript
public readonly consumerGroupReplication: MskReplicatorReplicationInfoListConsumerGroupReplication;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

Configuration relating to consumer group replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#consumer_group_replication MskReplicator#consumer_group_replication}

---

##### `targetCompressionType`<sup>Required</sup> <a name="targetCompressionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType"></a>

```typescript
public readonly targetCompressionType: string;
```

- *Type:* string

The type of compression to use writing records to target Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}

---

##### `topicReplication`<sup>Required</sup> <a name="topicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication"></a>

```typescript
public readonly topicReplication: MskReplicatorReplicationInfoListTopicReplication;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

Configuration relating to topic replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#topic_replication MskReplicator#topic_replication}

---

##### `sourceKafkaClusterArn`<sup>Optional</sup> <a name="sourceKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn"></a>

```typescript
public readonly sourceKafkaClusterArn: string;
```

- *Type:* string

Amazon Resource Name of the source Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}

---

##### `sourceKafkaClusterId`<sup>Optional</sup> <a name="sourceKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterId"></a>

```typescript
public readonly sourceKafkaClusterId: string;
```

- *Type:* string

The ID of the source Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#source_kafka_cluster_id MskReplicator#source_kafka_cluster_id}

---

##### `targetKafkaClusterArn`<sup>Optional</sup> <a name="targetKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn"></a>

```typescript
public readonly targetKafkaClusterArn: string;
```

- *Type:* string

Amazon Resource Name of the target Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}

---

##### `targetKafkaClusterId`<sup>Optional</sup> <a name="targetKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterId"></a>

```typescript
public readonly targetKafkaClusterId: string;
```

- *Type:* string

The ID of the target Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#target_kafka_cluster_id MskReplicator#target_kafka_cluster_id}

---

### MskReplicatorReplicationInfoListTopicReplication <a name="MskReplicatorReplicationInfoListTopicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorReplicationInfoListTopicReplication: mskReplicator.MskReplicatorReplicationInfoListTopicReplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate">topicsToReplicate</a></code> | <code>string[]</code> | List of regular expression patterns indicating the topics to copy. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics">copyAccessControlListsForTopics</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to periodically configure remote topic ACLs to match their corresponding upstream topics. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations">copyTopicConfigurations</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to periodically configure remote topics to match their corresponding upstream topics. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics">detectAndCopyNewTopics</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to periodically check for new topics and partitions. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.startingPosition">startingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | Configuration for specifying the position in the topics to start replicating from. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicNameConfiguration">topicNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude">topicsToExclude</a></code> | <code>string[]</code> | List of regular expression patterns indicating the topics that should not be replicated. |

---

##### `topicsToReplicate`<sup>Required</sup> <a name="topicsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate"></a>

```typescript
public readonly topicsToReplicate: string[];
```

- *Type:* string[]

List of regular expression patterns indicating the topics to copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}

---

##### `copyAccessControlListsForTopics`<sup>Optional</sup> <a name="copyAccessControlListsForTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics"></a>

```typescript
public readonly copyAccessControlListsForTopics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}

---

##### `copyTopicConfigurations`<sup>Optional</sup> <a name="copyTopicConfigurations" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations"></a>

```typescript
public readonly copyTopicConfigurations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to periodically configure remote topics to match their corresponding upstream topics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}

---

##### `detectAndCopyNewTopics`<sup>Optional</sup> <a name="detectAndCopyNewTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics"></a>

```typescript
public readonly detectAndCopyNewTopics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to periodically check for new topics and partitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}

---

##### `startingPosition`<sup>Optional</sup> <a name="startingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.startingPosition"></a>

```typescript
public readonly startingPosition: MskReplicatorReplicationInfoListTopicReplicationStartingPosition;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

Configuration for specifying the position in the topics to start replicating from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#starting_position MskReplicator#starting_position}

---

##### `topicNameConfiguration`<sup>Optional</sup> <a name="topicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicNameConfiguration"></a>

```typescript
public readonly topicNameConfiguration: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#topic_name_configuration MskReplicator#topic_name_configuration}

---

##### `topicsToExclude`<sup>Optional</sup> <a name="topicsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude"></a>

```typescript
public readonly topicsToExclude: string[];
```

- *Type:* string[]

List of regular expression patterns indicating the topics that should not be replicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}

---

### MskReplicatorReplicationInfoListTopicReplicationStartingPosition <a name="MskReplicatorReplicationInfoListTopicReplicationStartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorReplicationInfoListTopicReplicationStartingPosition: mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.property.type">type</a></code> | <code>string</code> | The type of replication starting position. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of replication starting position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#type MskReplicator#type}

---

### MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration <a name="MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration: mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.property.type">type</a></code> | <code>string</code> | The type of replicated topic name. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of replicated topic name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#type MskReplicator#type}

---

### MskReplicatorTags <a name="MskReplicatorTags" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

const mskReplicatorTags: mskReplicator.MskReplicatorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#key MskReplicator#key}. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#value MskReplicator#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#key MskReplicator#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#value MskReplicator#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskReplicatorKafkaClustersAmazonMskClusterOutputReference <a name="MskReplicatorKafkaClustersAmazonMskClusterOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resetMskClusterArn">resetMskClusterArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMskClusterArn` <a name="resetMskClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resetMskClusterArn"></a>

```typescript
public resetMskClusterArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArnInput">mskClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArn">mskClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mskClusterArnInput`<sup>Optional</sup> <a name="mskClusterArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArnInput"></a>

```typescript
public readonly mskClusterArnInput: string;
```

- *Type:* string

---

##### `mskClusterArn`<sup>Required</sup> <a name="mskClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArn"></a>

```typescript
public readonly mskClusterArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaClustersAmazonMskCluster;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a>

---


### MskReplicatorKafkaClustersApacheKafkaClusterOutputReference <a name="MskReplicatorKafkaClustersApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetApacheKafkaClusterId">resetApacheKafkaClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetBootstrapBrokerString">resetBootstrapBrokerString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApacheKafkaClusterId` <a name="resetApacheKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetApacheKafkaClusterId"></a>

```typescript
public resetApacheKafkaClusterId(): void
```

##### `resetBootstrapBrokerString` <a name="resetBootstrapBrokerString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetBootstrapBrokerString"></a>

```typescript
public resetBootstrapBrokerString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterIdInput">apacheKafkaClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerStringInput">bootstrapBrokerStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterId">apacheKafkaClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerString">bootstrapBrokerString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apacheKafkaClusterIdInput`<sup>Optional</sup> <a name="apacheKafkaClusterIdInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterIdInput"></a>

```typescript
public readonly apacheKafkaClusterIdInput: string;
```

- *Type:* string

---

##### `bootstrapBrokerStringInput`<sup>Optional</sup> <a name="bootstrapBrokerStringInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerStringInput"></a>

```typescript
public readonly bootstrapBrokerStringInput: string;
```

- *Type:* string

---

##### `apacheKafkaClusterId`<sup>Required</sup> <a name="apacheKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterId"></a>

```typescript
public readonly apacheKafkaClusterId: string;
```

- *Type:* string

---

##### `bootstrapBrokerString`<sup>Required</sup> <a name="bootstrapBrokerString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerString"></a>

```typescript
public readonly bootstrapBrokerString: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaClustersApacheKafkaCluster;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a>

---


### MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference <a name="MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaClustersClientAuthenticationMtls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a>

---


### MskReplicatorKafkaClustersClientAuthenticationOutputReference <a name="MskReplicatorKafkaClustersClientAuthenticationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putMtls">putMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putSaslScram">putSaslScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetMtls">resetMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetSaslScram">resetSaslScram</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMtls` <a name="putMtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putMtls"></a>

```typescript
public putMtls(value: MskReplicatorKafkaClustersClientAuthenticationMtls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putMtls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a>

---

##### `putSaslScram` <a name="putSaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putSaslScram"></a>

```typescript
public putSaslScram(value: MskReplicatorKafkaClustersClientAuthenticationSaslScram): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putSaslScram.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

---

##### `resetMtls` <a name="resetMtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetMtls"></a>

```typescript
public resetMtls(): void
```

##### `resetSaslScram` <a name="resetSaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetSaslScram"></a>

```typescript
public resetSaslScram(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtls">mtls</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference">MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScram">saslScram</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference">MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtlsInput">mtlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScramInput">saslScramInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtls"></a>

```typescript
public readonly mtls: MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference">MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference</a>

---

##### `saslScram`<sup>Required</sup> <a name="saslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScram"></a>

```typescript
public readonly saslScram: MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference">MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference</a>

---

##### `mtlsInput`<sup>Optional</sup> <a name="mtlsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtlsInput"></a>

```typescript
public readonly mtlsInput: IResolvable | MskReplicatorKafkaClustersClientAuthenticationMtls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a>

---

##### `saslScramInput`<sup>Optional</sup> <a name="saslScramInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScramInput"></a>

```typescript
public readonly saslScramInput: IResolvable | MskReplicatorKafkaClustersClientAuthenticationSaslScram;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaClustersClientAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a>

---


### MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference <a name="MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetMechanism">resetMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMechanism` <a name="resetMechanism" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetMechanism"></a>

```typescript
public resetMechanism(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanismInput">mechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanism">mechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mechanismInput`<sup>Optional</sup> <a name="mechanismInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanismInput"></a>

```typescript
public readonly mechanismInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `mechanism`<sup>Required</sup> <a name="mechanism" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanism"></a>

```typescript
public readonly mechanism: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaClustersClientAuthenticationSaslScram;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

---


### MskReplicatorKafkaClustersEncryptionInTransitOutputReference <a name="MskReplicatorKafkaClustersEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetRootCaCertificate">resetRootCaCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetRootCaCertificate` <a name="resetRootCaCertificate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetRootCaCertificate"></a>

```typescript
public resetRootCaCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificateInput">rootCaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificate">rootCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `rootCaCertificateInput`<sup>Optional</sup> <a name="rootCaCertificateInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificateInput"></a>

```typescript
public readonly rootCaCertificateInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `rootCaCertificate`<sup>Required</sup> <a name="rootCaCertificate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificate"></a>

```typescript
public readonly rootCaCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaClustersEncryptionInTransit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a>

---


### MskReplicatorKafkaClustersList <a name="MskReplicatorKafkaClustersList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorKafkaClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.get"></a>

```typescript
public get(index: number): MskReplicatorKafkaClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaClusters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>[]

---


### MskReplicatorKafkaClustersOutputReference <a name="MskReplicatorKafkaClustersOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorKafkaClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putAmazonMskCluster">putAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putApacheKafkaCluster">putApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putClientAuthentication">putClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putEncryptionInTransit">putEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetAmazonMskCluster">resetAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetApacheKafkaCluster">resetApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetClientAuthentication">resetClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetEncryptionInTransit">resetEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonMskCluster` <a name="putAmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putAmazonMskCluster"></a>

```typescript
public putAmazonMskCluster(value: MskReplicatorKafkaClustersAmazonMskCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putAmazonMskCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a>

---

##### `putApacheKafkaCluster` <a name="putApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putApacheKafkaCluster"></a>

```typescript
public putApacheKafkaCluster(value: MskReplicatorKafkaClustersApacheKafkaCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a>

---

##### `putClientAuthentication` <a name="putClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putClientAuthentication"></a>

```typescript
public putClientAuthentication(value: MskReplicatorKafkaClustersClientAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a>

---

##### `putEncryptionInTransit` <a name="putEncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putEncryptionInTransit"></a>

```typescript
public putEncryptionInTransit(value: MskReplicatorKafkaClustersEncryptionInTransit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putVpcConfig"></a>

```typescript
public putVpcConfig(value: MskReplicatorKafkaClustersVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a>

---

##### `resetAmazonMskCluster` <a name="resetAmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetAmazonMskCluster"></a>

```typescript
public resetAmazonMskCluster(): void
```

##### `resetApacheKafkaCluster` <a name="resetApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetApacheKafkaCluster"></a>

```typescript
public resetApacheKafkaCluster(): void
```

##### `resetClientAuthentication` <a name="resetClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetClientAuthentication"></a>

```typescript
public resetClientAuthentication(): void
```

##### `resetEncryptionInTransit` <a name="resetEncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetEncryptionInTransit"></a>

```typescript
public resetEncryptionInTransit(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskCluster">amazonMskCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference">MskReplicatorKafkaClustersAmazonMskClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference">MskReplicatorKafkaClustersApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference">MskReplicatorKafkaClustersClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransit">encryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference">MskReplicatorKafkaClustersEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference">MskReplicatorKafkaClustersVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskClusterInput">amazonMskClusterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaClusterInput">apacheKafkaClusterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthenticationInput">clientAuthenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransitInput">encryptionInTransitInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonMskCluster`<sup>Required</sup> <a name="amazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskCluster"></a>

```typescript
public readonly amazonMskCluster: MskReplicatorKafkaClustersAmazonMskClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference">MskReplicatorKafkaClustersAmazonMskClusterOutputReference</a>

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaCluster"></a>

```typescript
public readonly apacheKafkaCluster: MskReplicatorKafkaClustersApacheKafkaClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference">MskReplicatorKafkaClustersApacheKafkaClusterOutputReference</a>

---

##### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthentication"></a>

```typescript
public readonly clientAuthentication: MskReplicatorKafkaClustersClientAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference">MskReplicatorKafkaClustersClientAuthenticationOutputReference</a>

---

##### `encryptionInTransit`<sup>Required</sup> <a name="encryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransit"></a>

```typescript
public readonly encryptionInTransit: MskReplicatorKafkaClustersEncryptionInTransitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference">MskReplicatorKafkaClustersEncryptionInTransitOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: MskReplicatorKafkaClustersVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference">MskReplicatorKafkaClustersVpcConfigOutputReference</a>

---

##### `amazonMskClusterInput`<sup>Optional</sup> <a name="amazonMskClusterInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskClusterInput"></a>

```typescript
public readonly amazonMskClusterInput: IResolvable | MskReplicatorKafkaClustersAmazonMskCluster;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a>

---

##### `apacheKafkaClusterInput`<sup>Optional</sup> <a name="apacheKafkaClusterInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaClusterInput"></a>

```typescript
public readonly apacheKafkaClusterInput: IResolvable | MskReplicatorKafkaClustersApacheKafkaCluster;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a>

---

##### `clientAuthenticationInput`<sup>Optional</sup> <a name="clientAuthenticationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthenticationInput"></a>

```typescript
public readonly clientAuthenticationInput: IResolvable | MskReplicatorKafkaClustersClientAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a>

---

##### `encryptionInTransitInput`<sup>Optional</sup> <a name="encryptionInTransitInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransitInput"></a>

```typescript
public readonly encryptionInTransitInput: IResolvable | MskReplicatorKafkaClustersEncryptionInTransit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | MskReplicatorKafkaClustersVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaClusters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters">MskReplicatorKafkaClusters</a>

---


### MskReplicatorKafkaClustersVpcConfigOutputReference <a name="MskReplicatorKafkaClustersVpcConfigOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorKafkaClustersVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a>

---


### MskReplicatorLogDeliveryOutputReference <a name="MskReplicatorLogDeliveryOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery">putReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resetReplicatorLogDelivery">resetReplicatorLogDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReplicatorLogDelivery` <a name="putReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery"></a>

```typescript
public putReplicatorLogDelivery(value: MskReplicatorLogDeliveryReplicatorLogDelivery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---

##### `resetReplicatorLogDelivery` <a name="resetReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resetReplicatorLogDelivery"></a>

```typescript
public resetReplicatorLogDelivery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery">replicatorLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDeliveryInput">replicatorLogDeliveryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicatorLogDelivery`<sup>Required</sup> <a name="replicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery"></a>

```typescript
public readonly replicatorLogDelivery: MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a>

---

##### `replicatorLogDeliveryInput`<sup>Optional</sup> <a name="replicatorLogDeliveryInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDeliveryInput"></a>

```typescript
public readonly replicatorLogDeliveryInput: IResolvable | MskReplicatorLogDeliveryReplicatorLogDelivery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorLogDelivery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```typescript
public resetDeliveryStream(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```typescript
public readonly deliveryStreamInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose"></a>

```typescript
public putFirehose(value: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3"></a>

```typescript
public putS3(value: MskReplicatorLogDeliveryReplicatorLogDeliveryS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetFirehose"></a>

```typescript
public resetFirehose(): void
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehoseInput">firehoseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose"></a>

```typescript
public readonly firehose: MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3"></a>

```typescript
public readonly s3: MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: IResolvable | MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehoseInput"></a>

```typescript
public readonly firehoseInput: IResolvable | MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | MskReplicatorLogDeliveryReplicatorLogDeliveryS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorLogDeliveryReplicatorLogDelivery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorLogDeliveryReplicatorLogDeliveryS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---


### MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference <a name="MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupOffsetSyncMode">resetConsumerGroupOffsetSyncMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude">resetConsumerGroupsToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups">resetDetectAndCopyNewConsumerGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets">resetSynchroniseConsumerGroupOffsets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerGroupOffsetSyncMode` <a name="resetConsumerGroupOffsetSyncMode" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupOffsetSyncMode"></a>

```typescript
public resetConsumerGroupOffsetSyncMode(): void
```

##### `resetConsumerGroupsToExclude` <a name="resetConsumerGroupsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude"></a>

```typescript
public resetConsumerGroupsToExclude(): void
```

##### `resetDetectAndCopyNewConsumerGroups` <a name="resetDetectAndCopyNewConsumerGroups" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups"></a>

```typescript
public resetDetectAndCopyNewConsumerGroups(): void
```

##### `resetSynchroniseConsumerGroupOffsets` <a name="resetSynchroniseConsumerGroupOffsets" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets"></a>

```typescript
public resetSynchroniseConsumerGroupOffsets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncModeInput">consumerGroupOffsetSyncModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput">consumerGroupsToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput">consumerGroupsToReplicateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput">detectAndCopyNewConsumerGroupsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput">synchroniseConsumerGroupOffsetsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncMode">consumerGroupOffsetSyncMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude">consumerGroupsToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate">consumerGroupsToReplicate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups">detectAndCopyNewConsumerGroups</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets">synchroniseConsumerGroupOffsets</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerGroupOffsetSyncModeInput`<sup>Optional</sup> <a name="consumerGroupOffsetSyncModeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncModeInput"></a>

```typescript
public readonly consumerGroupOffsetSyncModeInput: string;
```

- *Type:* string

---

##### `consumerGroupsToExcludeInput`<sup>Optional</sup> <a name="consumerGroupsToExcludeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput"></a>

```typescript
public readonly consumerGroupsToExcludeInput: string[];
```

- *Type:* string[]

---

##### `consumerGroupsToReplicateInput`<sup>Optional</sup> <a name="consumerGroupsToReplicateInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput"></a>

```typescript
public readonly consumerGroupsToReplicateInput: string[];
```

- *Type:* string[]

---

##### `detectAndCopyNewConsumerGroupsInput`<sup>Optional</sup> <a name="detectAndCopyNewConsumerGroupsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput"></a>

```typescript
public readonly detectAndCopyNewConsumerGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `synchroniseConsumerGroupOffsetsInput`<sup>Optional</sup> <a name="synchroniseConsumerGroupOffsetsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput"></a>

```typescript
public readonly synchroniseConsumerGroupOffsetsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `consumerGroupOffsetSyncMode`<sup>Required</sup> <a name="consumerGroupOffsetSyncMode" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncMode"></a>

```typescript
public readonly consumerGroupOffsetSyncMode: string;
```

- *Type:* string

---

##### `consumerGroupsToExclude`<sup>Required</sup> <a name="consumerGroupsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude"></a>

```typescript
public readonly consumerGroupsToExclude: string[];
```

- *Type:* string[]

---

##### `consumerGroupsToReplicate`<sup>Required</sup> <a name="consumerGroupsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate"></a>

```typescript
public readonly consumerGroupsToReplicate: string[];
```

- *Type:* string[]

---

##### `detectAndCopyNewConsumerGroups`<sup>Required</sup> <a name="detectAndCopyNewConsumerGroups" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups"></a>

```typescript
public readonly detectAndCopyNewConsumerGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `synchroniseConsumerGroupOffsets`<sup>Required</sup> <a name="synchroniseConsumerGroupOffsets" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets"></a>

```typescript
public readonly synchroniseConsumerGroupOffsets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorReplicationInfoListConsumerGroupReplication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

---


### MskReplicatorReplicationInfoListStructList <a name="MskReplicatorReplicationInfoListStructList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorReplicationInfoListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.get"></a>

```typescript
public get(index: number): MskReplicatorReplicationInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorReplicationInfoListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>[]

---


### MskReplicatorReplicationInfoListStructOutputReference <a name="MskReplicatorReplicationInfoListStructOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorReplicationInfoListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication">putConsumerGroupReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication">putTopicReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterArn">resetSourceKafkaClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterId">resetSourceKafkaClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterArn">resetTargetKafkaClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterId">resetTargetKafkaClusterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumerGroupReplication` <a name="putConsumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication"></a>

```typescript
public putConsumerGroupReplication(value: MskReplicatorReplicationInfoListConsumerGroupReplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

---

##### `putTopicReplication` <a name="putTopicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication"></a>

```typescript
public putTopicReplication(value: MskReplicatorReplicationInfoListTopicReplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

---

##### `resetSourceKafkaClusterArn` <a name="resetSourceKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterArn"></a>

```typescript
public resetSourceKafkaClusterArn(): void
```

##### `resetSourceKafkaClusterId` <a name="resetSourceKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterId"></a>

```typescript
public resetSourceKafkaClusterId(): void
```

##### `resetTargetKafkaClusterArn` <a name="resetTargetKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterArn"></a>

```typescript
public resetTargetKafkaClusterArn(): void
```

##### `resetTargetKafkaClusterId` <a name="resetTargetKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterId"></a>

```typescript
public resetTargetKafkaClusterId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication">consumerGroupReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference">MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication">topicReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference">MskReplicatorReplicationInfoListTopicReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput">consumerGroupReplicationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput">sourceKafkaClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterIdInput">sourceKafkaClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput">targetCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput">targetKafkaClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterIdInput">targetKafkaClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput">topicReplicationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn">sourceKafkaClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterId">sourceKafkaClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType">targetCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn">targetKafkaClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterId">targetKafkaClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerGroupReplication`<sup>Required</sup> <a name="consumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication"></a>

```typescript
public readonly consumerGroupReplication: MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference">MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference</a>

---

##### `topicReplication`<sup>Required</sup> <a name="topicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication"></a>

```typescript
public readonly topicReplication: MskReplicatorReplicationInfoListTopicReplicationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference">MskReplicatorReplicationInfoListTopicReplicationOutputReference</a>

---

##### `consumerGroupReplicationInput`<sup>Optional</sup> <a name="consumerGroupReplicationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput"></a>

```typescript
public readonly consumerGroupReplicationInput: IResolvable | MskReplicatorReplicationInfoListConsumerGroupReplication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

---

##### `sourceKafkaClusterArnInput`<sup>Optional</sup> <a name="sourceKafkaClusterArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput"></a>

```typescript
public readonly sourceKafkaClusterArnInput: string;
```

- *Type:* string

---

##### `sourceKafkaClusterIdInput`<sup>Optional</sup> <a name="sourceKafkaClusterIdInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterIdInput"></a>

```typescript
public readonly sourceKafkaClusterIdInput: string;
```

- *Type:* string

---

##### `targetCompressionTypeInput`<sup>Optional</sup> <a name="targetCompressionTypeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput"></a>

```typescript
public readonly targetCompressionTypeInput: string;
```

- *Type:* string

---

##### `targetKafkaClusterArnInput`<sup>Optional</sup> <a name="targetKafkaClusterArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput"></a>

```typescript
public readonly targetKafkaClusterArnInput: string;
```

- *Type:* string

---

##### `targetKafkaClusterIdInput`<sup>Optional</sup> <a name="targetKafkaClusterIdInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterIdInput"></a>

```typescript
public readonly targetKafkaClusterIdInput: string;
```

- *Type:* string

---

##### `topicReplicationInput`<sup>Optional</sup> <a name="topicReplicationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput"></a>

```typescript
public readonly topicReplicationInput: IResolvable | MskReplicatorReplicationInfoListTopicReplication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

---

##### `sourceKafkaClusterArn`<sup>Required</sup> <a name="sourceKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn"></a>

```typescript
public readonly sourceKafkaClusterArn: string;
```

- *Type:* string

---

##### `sourceKafkaClusterId`<sup>Required</sup> <a name="sourceKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterId"></a>

```typescript
public readonly sourceKafkaClusterId: string;
```

- *Type:* string

---

##### `targetCompressionType`<sup>Required</sup> <a name="targetCompressionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType"></a>

```typescript
public readonly targetCompressionType: string;
```

- *Type:* string

---

##### `targetKafkaClusterArn`<sup>Required</sup> <a name="targetKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn"></a>

```typescript
public readonly targetKafkaClusterArn: string;
```

- *Type:* string

---

##### `targetKafkaClusterId`<sup>Required</sup> <a name="targetKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterId"></a>

```typescript
public readonly targetKafkaClusterId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorReplicationInfoListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

---


### MskReplicatorReplicationInfoListTopicReplicationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition">putStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration">putTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics">resetCopyAccessControlListsForTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations">resetCopyTopicConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics">resetDetectAndCopyNewTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetStartingPosition">resetStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicNameConfiguration">resetTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude">resetTopicsToExclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartingPosition` <a name="putStartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition"></a>

```typescript
public putStartingPosition(value: MskReplicatorReplicationInfoListTopicReplicationStartingPosition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---

##### `putTopicNameConfiguration` <a name="putTopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration"></a>

```typescript
public putTopicNameConfiguration(value: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---

##### `resetCopyAccessControlListsForTopics` <a name="resetCopyAccessControlListsForTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics"></a>

```typescript
public resetCopyAccessControlListsForTopics(): void
```

##### `resetCopyTopicConfigurations` <a name="resetCopyTopicConfigurations" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations"></a>

```typescript
public resetCopyTopicConfigurations(): void
```

##### `resetDetectAndCopyNewTopics` <a name="resetDetectAndCopyNewTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics"></a>

```typescript
public resetDetectAndCopyNewTopics(): void
```

##### `resetStartingPosition` <a name="resetStartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetStartingPosition"></a>

```typescript
public resetStartingPosition(): void
```

##### `resetTopicNameConfiguration` <a name="resetTopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicNameConfiguration"></a>

```typescript
public resetTopicNameConfiguration(): void
```

##### `resetTopicsToExclude` <a name="resetTopicsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude"></a>

```typescript
public resetTopicsToExclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition">startingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration">topicNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput">copyAccessControlListsForTopicsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput">copyTopicConfigurationsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput">detectAndCopyNewTopicsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPositionInput">startingPositionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfigurationInput">topicNameConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput">topicsToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput">topicsToReplicateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics">copyAccessControlListsForTopics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations">copyTopicConfigurations</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics">detectAndCopyNewTopics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude">topicsToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate">topicsToReplicate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startingPosition`<sup>Required</sup> <a name="startingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition"></a>

```typescript
public readonly startingPosition: MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a>

---

##### `topicNameConfiguration`<sup>Required</sup> <a name="topicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration"></a>

```typescript
public readonly topicNameConfiguration: MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a>

---

##### `copyAccessControlListsForTopicsInput`<sup>Optional</sup> <a name="copyAccessControlListsForTopicsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput"></a>

```typescript
public readonly copyAccessControlListsForTopicsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `copyTopicConfigurationsInput`<sup>Optional</sup> <a name="copyTopicConfigurationsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput"></a>

```typescript
public readonly copyTopicConfigurationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectAndCopyNewTopicsInput`<sup>Optional</sup> <a name="detectAndCopyNewTopicsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput"></a>

```typescript
public readonly detectAndCopyNewTopicsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `startingPositionInput`<sup>Optional</sup> <a name="startingPositionInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPositionInput"></a>

```typescript
public readonly startingPositionInput: IResolvable | MskReplicatorReplicationInfoListTopicReplicationStartingPosition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---

##### `topicNameConfigurationInput`<sup>Optional</sup> <a name="topicNameConfigurationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfigurationInput"></a>

```typescript
public readonly topicNameConfigurationInput: IResolvable | MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---

##### `topicsToExcludeInput`<sup>Optional</sup> <a name="topicsToExcludeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput"></a>

```typescript
public readonly topicsToExcludeInput: string[];
```

- *Type:* string[]

---

##### `topicsToReplicateInput`<sup>Optional</sup> <a name="topicsToReplicateInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput"></a>

```typescript
public readonly topicsToReplicateInput: string[];
```

- *Type:* string[]

---

##### `copyAccessControlListsForTopics`<sup>Required</sup> <a name="copyAccessControlListsForTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics"></a>

```typescript
public readonly copyAccessControlListsForTopics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `copyTopicConfigurations`<sup>Required</sup> <a name="copyTopicConfigurations" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations"></a>

```typescript
public readonly copyTopicConfigurations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectAndCopyNewTopics`<sup>Required</sup> <a name="detectAndCopyNewTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics"></a>

```typescript
public readonly detectAndCopyNewTopics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `topicsToExclude`<sup>Required</sup> <a name="topicsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude"></a>

```typescript
public readonly topicsToExclude: string[];
```

- *Type:* string[]

---

##### `topicsToReplicate`<sup>Required</sup> <a name="topicsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate"></a>

```typescript
public readonly topicsToReplicate: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorReplicationInfoListTopicReplication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

---


### MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorReplicationInfoListTopicReplicationStartingPosition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---


### MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---


### MskReplicatorTagsList <a name="MskReplicatorTagsList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.get"></a>

```typescript
public get(index: number): MskReplicatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>[]

---


### MskReplicatorTagsOutputReference <a name="MskReplicatorTagsOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer"></a>

```typescript
import { mskReplicator } from '@cdktn/provider-awscc'

new mskReplicator.MskReplicatorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskReplicatorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags">MskReplicatorTags</a>

---



