# `neptunegraphGraph` Submodule <a name="`neptunegraphGraph` Submodule" id="@cdktn/provider-awscc.neptunegraphGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphGraph <a name="NeptunegraphGraph" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph awscc_neptunegraph_graph}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

new neptunegraphGraph.NeptunegraphGraph(scope: Construct, id: string, config: NeptunegraphGraphConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig">NeptunegraphGraphConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig">NeptunegraphGraphConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask">putImportTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration">putVectorSearchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetGraphName">resetGraphName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetImportTask">resetImportTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity">resetPublicConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration">resetVectorSearchConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImportTask` <a name="putImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask"></a>

```typescript
public putImportTask(value: NeptunegraphGraphImportTask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags"></a>

```typescript
public putTags(value: IResolvable | NeptunegraphGraphTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>[]

---

##### `putVectorSearchConfiguration` <a name="putVectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration"></a>

```typescript
public putVectorSearchConfiguration(value: NeptunegraphGraphVectorSearchConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetGraphName` <a name="resetGraphName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetGraphName"></a>

```typescript
public resetGraphName(): void
```

##### `resetImportTask` <a name="resetImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetImportTask"></a>

```typescript
public resetImportTask(): void
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier"></a>

```typescript
public resetKmsKeyIdentifier(): void
```

##### `resetPublicConnectivity` <a name="resetPublicConnectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity"></a>

```typescript
public resetPublicConnectivity(): void
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount"></a>

```typescript
public resetReplicaCount(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVectorSearchConfiguration` <a name="resetVectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration"></a>

```typescript
public resetVectorSearchConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NeptunegraphGraph resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

neptunegraphGraph.NeptunegraphGraph.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

neptunegraphGraph.NeptunegraphGraph.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

neptunegraphGraph.NeptunegraphGraph.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

neptunegraphGraph.NeptunegraphGraph.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NeptunegraphGraph resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeptunegraphGraph to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeptunegraphGraph that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NeptunegraphGraph to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphArn">graphArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphId">graphId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTask">importTask</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference">NeptunegraphGraphImportTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList">NeptunegraphGraphTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration">vectorSearchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference">NeptunegraphGraphVectorSearchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput">graphNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTaskInput">importTaskInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput">provisionedMemoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput">publicConnectivityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput">replicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput">vectorSearchConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphName">graphName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory">provisionedMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity">publicConnectivity</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `graphArn`<sup>Required</sup> <a name="graphArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphArn"></a>

```typescript
public readonly graphArn: string;
```

- *Type:* string

---

##### `graphId`<sup>Required</sup> <a name="graphId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphId"></a>

```typescript
public readonly graphId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importTask`<sup>Required</sup> <a name="importTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTask"></a>

```typescript
public readonly importTask: NeptunegraphGraphImportTaskOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference">NeptunegraphGraphImportTaskOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tags"></a>

```typescript
public readonly tags: NeptunegraphGraphTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList">NeptunegraphGraphTagsList</a>

---

##### `vectorSearchConfiguration`<sup>Required</sup> <a name="vectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration"></a>

```typescript
public readonly vectorSearchConfiguration: NeptunegraphGraphVectorSearchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference">NeptunegraphGraphVectorSearchConfigurationOutputReference</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `graphNameInput`<sup>Optional</sup> <a name="graphNameInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput"></a>

```typescript
public readonly graphNameInput: string;
```

- *Type:* string

---

##### `importTaskInput`<sup>Optional</sup> <a name="importTaskInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTaskInput"></a>

```typescript
public readonly importTaskInput: IResolvable | NeptunegraphGraphImportTask;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput"></a>

```typescript
public readonly kmsKeyIdentifierInput: string;
```

- *Type:* string

---

##### `provisionedMemoryInput`<sup>Optional</sup> <a name="provisionedMemoryInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput"></a>

```typescript
public readonly provisionedMemoryInput: number;
```

- *Type:* number

---

##### `publicConnectivityInput`<sup>Optional</sup> <a name="publicConnectivityInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput"></a>

```typescript
public readonly publicConnectivityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput"></a>

```typescript
public readonly replicaCountInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NeptunegraphGraphTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>[]

---

##### `vectorSearchConfigurationInput`<sup>Optional</sup> <a name="vectorSearchConfigurationInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput"></a>

```typescript
public readonly vectorSearchConfigurationInput: IResolvable | NeptunegraphGraphVectorSearchConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `graphName`<sup>Required</sup> <a name="graphName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphName"></a>

```typescript
public readonly graphName: string;
```

- *Type:* string

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier"></a>

```typescript
public readonly kmsKeyIdentifier: string;
```

- *Type:* string

---

##### `provisionedMemory`<sup>Required</sup> <a name="provisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory"></a>

```typescript
public readonly provisionedMemory: number;
```

- *Type:* number

---

##### `publicConnectivity`<sup>Required</sup> <a name="publicConnectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity"></a>

```typescript
public readonly publicConnectivity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphGraphConfig <a name="NeptunegraphGraphConfig" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

const neptunegraphGraphConfig: neptunegraphGraph.NeptunegraphGraphConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory">provisionedMemory</a></code> | <code>number</code> | Memory for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Value that indicates whether the Graph has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName">graphName</a></code> | <code>string</code> | Contains a user-supplied name for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.importTask">importTask</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | The details of the import task to use to create the graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>string</code> | The ARN of the KMS key used to encrypt data in the Neptune Analytics graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity">publicConnectivity</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount">replicaCount</a></code> | <code>number</code> | Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>[]</code> | The tags associated with this graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration">vectorSearchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | Vector Search Configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `provisionedMemory`<sup>Required</sup> <a name="provisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory"></a>

```typescript
public readonly provisionedMemory: number;
```

- *Type:* number

Memory for the Graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Value that indicates whether the Graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

_Default_: If not specified, the default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `graphName`<sup>Optional</sup> <a name="graphName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName"></a>

```typescript
public readonly graphName: string;
```

- *Type:* string

Contains a user-supplied name for the Graph.

If you don't specify a name, we generate a unique Graph Name using a combination of Stack Name and a UUID comprising of 4 characters.

_Important_: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `importTask`<sup>Optional</sup> <a name="importTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.importTask"></a>

```typescript
public readonly importTask: NeptunegraphGraphImportTask;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

The details of the import task to use to create the graph.

When specified, the graph is created using CreateGraphUsingImportTask and data is imported from the supplied source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_task NeptunegraphGraph#import_task}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier"></a>

```typescript
public readonly kmsKeyIdentifier: string;
```

- *Type:* string

The ARN of the KMS key used to encrypt data in the Neptune Analytics graph.

If not specified, the graph is encrypted with an AWS managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `publicConnectivity`<sup>Optional</sup> <a name="publicConnectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity"></a>

```typescript
public readonly publicConnectivity: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication.

When the Graph is publicly reachable, its Domain Name System (DNS) endpoint resolves to the public IP address from the internet.

When the Graph isn't publicly reachable, you need to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.

_Default_: If not specified, the default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones.

Replica Count should always be less than or equal to 2.

_Default_: If not specified, the default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NeptunegraphGraphTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>[]

The tags associated with this graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}

---

##### `vectorSearchConfiguration`<sup>Optional</sup> <a name="vectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration"></a>

```typescript
public readonly vectorSearchConfiguration: NeptunegraphGraphVectorSearchConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

Vector Search Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

### NeptunegraphGraphImportTask <a name="NeptunegraphGraphImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

const neptunegraphGraphImportTask: neptunegraphGraph.NeptunegraphGraphImportTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.blankNodeHandling">blankNodeHandling</a></code> | <code>string</code> | The method to handle blank nodes in the dataset. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.failOnError">failOnError</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the task halts when an import error is encountered. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.format">format</a></code> | <code>string</code> | Specifies the format of S3 data to be imported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.importOptions">importOptions</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a></code> | Contains options for controlling the import process. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.maxProvisionedMemory">maxProvisionedMemory</a></code> | <code>number</code> | The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.minProvisionedMemory">minProvisionedMemory</a></code> | <code>number</code> | The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.parquetType">parquetType</a></code> | <code>string</code> | The parquet type of the import task. Required when Format is PARQUET. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role that will allow access to the data that is to be imported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.source">source</a></code> | <code>string</code> | A URL identifying to the location of the data to be imported. |

---

##### `blankNodeHandling`<sup>Optional</sup> <a name="blankNodeHandling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.blankNodeHandling"></a>

```typescript
public readonly blankNodeHandling: string;
```

- *Type:* string

The method to handle blank nodes in the dataset.

Currently, only convertToIri is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is NTRIPLES

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#blank_node_handling NeptunegraphGraph#blank_node_handling}

---

##### `failOnError`<sup>Optional</sup> <a name="failOnError" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.failOnError"></a>

```typescript
public readonly failOnError: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the task halts when an import error is encountered.

If set to false, the task skips the data that caused the error and continues if possible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#fail_on_error NeptunegraphGraph#fail_on_error}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Specifies the format of S3 data to be imported.

Valid values are CSV, which identifies the Gremlin CSV format, OPEN_CYPHER, which identifies the openCypher load format, or NTRIPLES, which identifies the RDF n-triples format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#format NeptunegraphGraph#format}

---

##### `importOptions`<sup>Optional</sup> <a name="importOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.importOptions"></a>

```typescript
public readonly importOptions: NeptunegraphGraphImportTaskImportOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

Contains options for controlling the import process.

For example, if the failOnError key is set to false, the import skips the data that caused the error and continues if possible (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_options NeptunegraphGraph#import_options}

---

##### `maxProvisionedMemory`<sup>Optional</sup> <a name="maxProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.maxProvisionedMemory"></a>

```typescript
public readonly maxProvisionedMemory: number;
```

- *Type:* number

The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.

Default: 1024, or the approved upper limit for your account. If both the minimum and maximum values are specified, the final provisioned-memory will be chosen per the actual size of your imported data. If neither value is specified, 128 m-NCUs are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#max_provisioned_memory NeptunegraphGraph#max_provisioned_memory}

---

##### `minProvisionedMemory`<sup>Optional</sup> <a name="minProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.minProvisionedMemory"></a>

```typescript
public readonly minProvisionedMemory: number;
```

- *Type:* number

The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#min_provisioned_memory NeptunegraphGraph#min_provisioned_memory}

---

##### `parquetType`<sup>Optional</sup> <a name="parquetType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.parquetType"></a>

```typescript
public readonly parquetType: string;
```

- *Type:* string

The parquet type of the import task. Required when Format is PARQUET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#parquet_type NeptunegraphGraph#parquet_type}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role that will allow access to the data that is to be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#role_arn NeptunegraphGraph#role_arn}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

A URL identifying to the location of the data to be imported.

This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#source NeptunegraphGraph#source}

---

### NeptunegraphGraphImportTaskImportOptions <a name="NeptunegraphGraphImportTaskImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

const neptunegraphGraphImportTaskImportOptions: neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.property.neptune">neptune</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | Options for importing data from a Neptune database. |

---

##### `neptune`<sup>Optional</sup> <a name="neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.property.neptune"></a>

```typescript
public readonly neptune: NeptunegraphGraphImportTaskImportOptionsNeptune;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

Options for importing data from a Neptune database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#neptune NeptunegraphGraph#neptune}

---

### NeptunegraphGraphImportTaskImportOptionsNeptune <a name="NeptunegraphGraphImportTaskImportOptionsNeptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

const neptunegraphGraphImportTaskImportOptionsNeptune: neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveDefaultVertexLabels">preserveDefaultVertexLabels</a></code> | <code>boolean \| cdktn.IResolvable</code> | Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveEdgeIds">preserveEdgeIds</a></code> | <code>boolean \| cdktn.IResolvable</code> | Neptune Analytics currently does not support user defined edge ids. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportKmsKeyId">s3ExportKmsKeyId</a></code> | <code>string</code> | The KMS key to use to encrypt data in the S3 bucket where the graph data is exported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportPath">s3ExportPath</a></code> | <code>string</code> | The path to an S3 bucket from which to import data. |

---

##### `preserveDefaultVertexLabels`<sup>Optional</sup> <a name="preserveDefaultVertexLabels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveDefaultVertexLabels"></a>

```typescript
public readonly preserveDefaultVertexLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided.

Neptune assigns default labels when none is explicitly provided. When importing the data into Neptune Analytics, the default vertex labels can be omitted by setting preserveDefaultVertexLabels to false. Note that if the vertex only has default labels, and has no other properties or edges, then the vertex will effectively not get imported into Neptune Analytics when preserveDefaultVertexLabels is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_default_vertex_labels NeptunegraphGraph#preserve_default_vertex_labels}

---

##### `preserveEdgeIds`<sup>Optional</sup> <a name="preserveEdgeIds" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveEdgeIds"></a>

```typescript
public readonly preserveEdgeIds: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Neptune Analytics currently does not support user defined edge ids.

The edge ids are not imported by default. They are imported if preserveEdgeIds is set to true, and ids are stored as properties on the relationships with the property name neptuneEdgeId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_edge_ids NeptunegraphGraph#preserve_edge_ids}

---

##### `s3ExportKmsKeyId`<sup>Optional</sup> <a name="s3ExportKmsKeyId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportKmsKeyId"></a>

```typescript
public readonly s3ExportKmsKeyId: string;
```

- *Type:* string

The KMS key to use to encrypt data in the S3 bucket where the graph data is exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_kms_key_id NeptunegraphGraph#s3_export_kms_key_id}

---

##### `s3ExportPath`<sup>Optional</sup> <a name="s3ExportPath" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportPath"></a>

```typescript
public readonly s3ExportPath: string;
```

- *Type:* string

The path to an S3 bucket from which to import data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_path NeptunegraphGraph#s3_export_path}

---

### NeptunegraphGraphTags <a name="NeptunegraphGraphTags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

const neptunegraphGraphTags: neptunegraphGraph.NeptunegraphGraphTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#key NeptunegraphGraph#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#value NeptunegraphGraph#value}

---

### NeptunegraphGraphVectorSearchConfiguration <a name="NeptunegraphGraphVectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

const neptunegraphGraphVectorSearchConfiguration: neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension">vectorSearchDimension</a></code> | <code>number</code> | The vector search dimension. |

---

##### `vectorSearchDimension`<sup>Optional</sup> <a name="vectorSearchDimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension"></a>

```typescript
public readonly vectorSearchDimension: number;
```

- *Type:* number

The vector search dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_dimension NeptunegraphGraph#vector_search_dimension}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference <a name="NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

new neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveDefaultVertexLabels">resetPreserveDefaultVertexLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveEdgeIds">resetPreserveEdgeIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportKmsKeyId">resetS3ExportKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportPath">resetS3ExportPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveDefaultVertexLabels` <a name="resetPreserveDefaultVertexLabels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveDefaultVertexLabels"></a>

```typescript
public resetPreserveDefaultVertexLabels(): void
```

##### `resetPreserveEdgeIds` <a name="resetPreserveEdgeIds" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveEdgeIds"></a>

```typescript
public resetPreserveEdgeIds(): void
```

##### `resetS3ExportKmsKeyId` <a name="resetS3ExportKmsKeyId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportKmsKeyId"></a>

```typescript
public resetS3ExportKmsKeyId(): void
```

##### `resetS3ExportPath` <a name="resetS3ExportPath" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportPath"></a>

```typescript
public resetS3ExportPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabelsInput">preserveDefaultVertexLabelsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIdsInput">preserveEdgeIdsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyIdInput">s3ExportKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPathInput">s3ExportPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabels">preserveDefaultVertexLabels</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIds">preserveEdgeIds</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyId">s3ExportKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPath">s3ExportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preserveDefaultVertexLabelsInput`<sup>Optional</sup> <a name="preserveDefaultVertexLabelsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabelsInput"></a>

```typescript
public readonly preserveDefaultVertexLabelsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `preserveEdgeIdsInput`<sup>Optional</sup> <a name="preserveEdgeIdsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIdsInput"></a>

```typescript
public readonly preserveEdgeIdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `s3ExportKmsKeyIdInput`<sup>Optional</sup> <a name="s3ExportKmsKeyIdInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyIdInput"></a>

```typescript
public readonly s3ExportKmsKeyIdInput: string;
```

- *Type:* string

---

##### `s3ExportPathInput`<sup>Optional</sup> <a name="s3ExportPathInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPathInput"></a>

```typescript
public readonly s3ExportPathInput: string;
```

- *Type:* string

---

##### `preserveDefaultVertexLabels`<sup>Required</sup> <a name="preserveDefaultVertexLabels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabels"></a>

```typescript
public readonly preserveDefaultVertexLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `preserveEdgeIds`<sup>Required</sup> <a name="preserveEdgeIds" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIds"></a>

```typescript
public readonly preserveEdgeIds: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `s3ExportKmsKeyId`<sup>Required</sup> <a name="s3ExportKmsKeyId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyId"></a>

```typescript
public readonly s3ExportKmsKeyId: string;
```

- *Type:* string

---

##### `s3ExportPath`<sup>Required</sup> <a name="s3ExportPath" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPath"></a>

```typescript
public readonly s3ExportPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptunegraphGraphImportTaskImportOptionsNeptune;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

---


### NeptunegraphGraphImportTaskImportOptionsOutputReference <a name="NeptunegraphGraphImportTaskImportOptionsOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

new neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune">putNeptune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resetNeptune">resetNeptune</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNeptune` <a name="putNeptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune"></a>

```typescript
public putNeptune(value: NeptunegraphGraphImportTaskImportOptionsNeptune): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

---

##### `resetNeptune` <a name="resetNeptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resetNeptune"></a>

```typescript
public resetNeptune(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptune">neptune</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference">NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptuneInput">neptuneInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `neptune`<sup>Required</sup> <a name="neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptune"></a>

```typescript
public readonly neptune: NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference">NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference</a>

---

##### `neptuneInput`<sup>Optional</sup> <a name="neptuneInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptuneInput"></a>

```typescript
public readonly neptuneInput: IResolvable | NeptunegraphGraphImportTaskImportOptionsNeptune;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptunegraphGraphImportTaskImportOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

---


### NeptunegraphGraphImportTaskOutputReference <a name="NeptunegraphGraphImportTaskOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

new neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions">putImportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetBlankNodeHandling">resetBlankNodeHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFailOnError">resetFailOnError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetImportOptions">resetImportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMaxProvisionedMemory">resetMaxProvisionedMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMinProvisionedMemory">resetMinProvisionedMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetParquetType">resetParquetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImportOptions` <a name="putImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions"></a>

```typescript
public putImportOptions(value: NeptunegraphGraphImportTaskImportOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

---

##### `resetBlankNodeHandling` <a name="resetBlankNodeHandling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetBlankNodeHandling"></a>

```typescript
public resetBlankNodeHandling(): void
```

##### `resetFailOnError` <a name="resetFailOnError" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFailOnError"></a>

```typescript
public resetFailOnError(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetImportOptions` <a name="resetImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetImportOptions"></a>

```typescript
public resetImportOptions(): void
```

##### `resetMaxProvisionedMemory` <a name="resetMaxProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMaxProvisionedMemory"></a>

```typescript
public resetMaxProvisionedMemory(): void
```

##### `resetMinProvisionedMemory` <a name="resetMinProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMinProvisionedMemory"></a>

```typescript
public resetMinProvisionedMemory(): void
```

##### `resetParquetType` <a name="resetParquetType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetParquetType"></a>

```typescript
public resetParquetType(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptions">importOptions</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference">NeptunegraphGraphImportTaskImportOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandlingInput">blankNodeHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnErrorInput">failOnErrorInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptionsInput">importOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemoryInput">maxProvisionedMemoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemoryInput">minProvisionedMemoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetTypeInput">parquetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandling">blankNodeHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnError">failOnError</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemory">maxProvisionedMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemory">minProvisionedMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetType">parquetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `importOptions`<sup>Required</sup> <a name="importOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptions"></a>

```typescript
public readonly importOptions: NeptunegraphGraphImportTaskImportOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference">NeptunegraphGraphImportTaskImportOptionsOutputReference</a>

---

##### `blankNodeHandlingInput`<sup>Optional</sup> <a name="blankNodeHandlingInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandlingInput"></a>

```typescript
public readonly blankNodeHandlingInput: string;
```

- *Type:* string

---

##### `failOnErrorInput`<sup>Optional</sup> <a name="failOnErrorInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnErrorInput"></a>

```typescript
public readonly failOnErrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `importOptionsInput`<sup>Optional</sup> <a name="importOptionsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptionsInput"></a>

```typescript
public readonly importOptionsInput: IResolvable | NeptunegraphGraphImportTaskImportOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

---

##### `maxProvisionedMemoryInput`<sup>Optional</sup> <a name="maxProvisionedMemoryInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemoryInput"></a>

```typescript
public readonly maxProvisionedMemoryInput: number;
```

- *Type:* number

---

##### `minProvisionedMemoryInput`<sup>Optional</sup> <a name="minProvisionedMemoryInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemoryInput"></a>

```typescript
public readonly minProvisionedMemoryInput: number;
```

- *Type:* number

---

##### `parquetTypeInput`<sup>Optional</sup> <a name="parquetTypeInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetTypeInput"></a>

```typescript
public readonly parquetTypeInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `blankNodeHandling`<sup>Required</sup> <a name="blankNodeHandling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandling"></a>

```typescript
public readonly blankNodeHandling: string;
```

- *Type:* string

---

##### `failOnError`<sup>Required</sup> <a name="failOnError" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnError"></a>

```typescript
public readonly failOnError: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `maxProvisionedMemory`<sup>Required</sup> <a name="maxProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemory"></a>

```typescript
public readonly maxProvisionedMemory: number;
```

- *Type:* number

---

##### `minProvisionedMemory`<sup>Required</sup> <a name="minProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemory"></a>

```typescript
public readonly minProvisionedMemory: number;
```

- *Type:* number

---

##### `parquetType`<sup>Required</sup> <a name="parquetType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetType"></a>

```typescript
public readonly parquetType: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptunegraphGraphImportTask;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

---


### NeptunegraphGraphTagsList <a name="NeptunegraphGraphTagsList" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

new neptunegraphGraph.NeptunegraphGraphTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get"></a>

```typescript
public get(index: number): NeptunegraphGraphTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptunegraphGraphTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>[]

---


### NeptunegraphGraphTagsOutputReference <a name="NeptunegraphGraphTagsOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

new neptunegraphGraph.NeptunegraphGraphTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptunegraphGraphTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>

---


### NeptunegraphGraphVectorSearchConfigurationOutputReference <a name="NeptunegraphGraphVectorSearchConfigurationOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer"></a>

```typescript
import { neptunegraphGraph } from '@cdktn/provider-awscc'

new neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension">resetVectorSearchDimension</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVectorSearchDimension` <a name="resetVectorSearchDimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension"></a>

```typescript
public resetVectorSearchDimension(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput">vectorSearchDimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension">vectorSearchDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vectorSearchDimensionInput`<sup>Optional</sup> <a name="vectorSearchDimensionInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput"></a>

```typescript
public readonly vectorSearchDimensionInput: number;
```

- *Type:* number

---

##### `vectorSearchDimension`<sup>Required</sup> <a name="vectorSearchDimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension"></a>

```typescript
public readonly vectorSearchDimension: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptunegraphGraphVectorSearchConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

---



