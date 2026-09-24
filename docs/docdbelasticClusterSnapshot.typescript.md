# `docdbelasticClusterSnapshot` Submodule <a name="`docdbelasticClusterSnapshot` Submodule" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbelasticClusterSnapshot <a name="DocdbelasticClusterSnapshot" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot awscc_docdbelastic_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer"></a>

```typescript
import { docdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

new docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot(scope: Construct, id: string, config: DocdbelasticClusterSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig">DocdbelasticClusterSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig">DocdbelasticClusterSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.putTags"></a>

```typescript
public putTags(value: IResolvable | DocdbelasticClusterSnapshotTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DocdbelasticClusterSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isConstruct"></a>

```typescript
import { docdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformElement"></a>

```typescript
import { docdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformResource"></a>

```typescript
import { docdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport"></a>

```typescript
import { docdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DocdbelasticClusterSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocdbelasticClusterSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocdbelasticClusterSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DocdbelasticClusterSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.adminUserName">adminUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterCreationTime">clusterCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotArn">snapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotCreationTime">snapshotCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList">DocdbelasticClusterSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `adminUserName`<sup>Required</sup> <a name="adminUserName" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.adminUserName"></a>

```typescript
public readonly adminUserName: string;
```

- *Type:* string

---

##### `clusterCreationTime`<sup>Required</sup> <a name="clusterCreationTime" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterCreationTime"></a>

```typescript
public readonly clusterCreationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotArn"></a>

```typescript
public readonly snapshotArn: string;
```

- *Type:* string

---

##### `snapshotCreationTime`<sup>Required</sup> <a name="snapshotCreationTime" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotCreationTime"></a>

```typescript
public readonly snapshotCreationTime: string;
```

- *Type:* string

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tags"></a>

```typescript
public readonly tags: DocdbelasticClusterSnapshotTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList">DocdbelasticClusterSnapshotTagsList</a>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DocdbelasticClusterSnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbelasticClusterSnapshotConfig <a name="DocdbelasticClusterSnapshotConfig" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.Initializer"></a>

```typescript
import { docdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

const docdbelasticClusterSnapshotConfig: docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.clusterArn">clusterArn</a></code> | <code>string</code> | The ARN of the elastic cluster of which to create a snapshot. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | The name of the elastic cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]</code> | An array of key-value pairs to apply to the elastic cluster snapshot. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

The ARN of the elastic cluster of which to create a snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#cluster_arn DocdbelasticClusterSnapshot#cluster_arn}

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The name of the elastic cluster snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#snapshot_name DocdbelasticClusterSnapshot#snapshot_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DocdbelasticClusterSnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]

An array of key-value pairs to apply to the elastic cluster snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#tags DocdbelasticClusterSnapshot#tags}

---

### DocdbelasticClusterSnapshotTags <a name="DocdbelasticClusterSnapshotTags" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags.Initializer"></a>

```typescript
import { docdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

const docdbelasticClusterSnapshotTags: docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#key DocdbelasticClusterSnapshot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/docdbelastic_cluster_snapshot#value DocdbelasticClusterSnapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbelasticClusterSnapshotTagsList <a name="DocdbelasticClusterSnapshotTagsList" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer"></a>

```typescript
import { docdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

new docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.get"></a>

```typescript
public get(index: number): DocdbelasticClusterSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocdbelasticClusterSnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>[]

---


### DocdbelasticClusterSnapshotTagsOutputReference <a name="DocdbelasticClusterSnapshotTagsOutputReference" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer"></a>

```typescript
import { docdbelasticClusterSnapshot } from '@cdktn/provider-awscc'

new docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DocdbelasticClusterSnapshotTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.docdbelasticClusterSnapshot.DocdbelasticClusterSnapshotTags">DocdbelasticClusterSnapshotTags</a>

---



