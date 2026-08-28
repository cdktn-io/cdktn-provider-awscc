# `elasticacheServerlessCacheSnapshot` Submodule <a name="`elasticacheServerlessCacheSnapshot` Submodule" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheServerlessCacheSnapshot <a name="ElasticacheServerlessCacheSnapshot" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot awscc_elasticache_serverless_cache_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

new elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot(scope: Construct, id: string, config: ElasticacheServerlessCacheSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig">ElasticacheServerlessCacheSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig">ElasticacheServerlessCacheSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.putTags"></a>

```typescript
public putTags(value: IResolvable | ElasticacheServerlessCacheSnapshotTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isConstruct"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformElement"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformResource"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ElasticacheServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheServerlessCacheSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheServerlessCacheSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheServerlessCacheSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.bytesUsedForCache">bytesUsedForCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheConfiguration">serverlessCacheConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference">ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList">ElasticacheServerlessCacheSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheNameInput">serverlessCacheNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotNameInput">serverlessCacheSnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheName">serverlessCacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotName">serverlessCacheSnapshotName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bytesUsedForCache`<sup>Required</sup> <a name="bytesUsedForCache" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.bytesUsedForCache"></a>

```typescript
public readonly bytesUsedForCache: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serverlessCacheConfiguration`<sup>Required</sup> <a name="serverlessCacheConfiguration" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheConfiguration"></a>

```typescript
public readonly serverlessCacheConfiguration: ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference">ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference</a>

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tags"></a>

```typescript
public readonly tags: ElasticacheServerlessCacheSnapshotTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList">ElasticacheServerlessCacheSnapshotTagsList</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `serverlessCacheNameInput`<sup>Optional</sup> <a name="serverlessCacheNameInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheNameInput"></a>

```typescript
public readonly serverlessCacheNameInput: string;
```

- *Type:* string

---

##### `serverlessCacheSnapshotNameInput`<sup>Optional</sup> <a name="serverlessCacheSnapshotNameInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotNameInput"></a>

```typescript
public readonly serverlessCacheSnapshotNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ElasticacheServerlessCacheSnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `serverlessCacheName`<sup>Required</sup> <a name="serverlessCacheName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheName"></a>

```typescript
public readonly serverlessCacheName: string;
```

- *Type:* string

---

##### `serverlessCacheSnapshotName`<sup>Required</sup> <a name="serverlessCacheSnapshotName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotName"></a>

```typescript
public readonly serverlessCacheSnapshotName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheServerlessCacheSnapshotConfig <a name="ElasticacheServerlessCacheSnapshotConfig" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.Initializer"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

const elasticacheServerlessCacheSnapshotConfig: elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheName">serverlessCacheName</a></code> | <code>string</code> | The name of an existing serverless cache. The snapshot is created from this cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheSnapshotName">serverlessCacheSnapshotName</a></code> | <code>string</code> | The name of the serverless cache snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]</code> | A list of tags to be added to the serverless cache snapshot resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `serverlessCacheName`<sup>Required</sup> <a name="serverlessCacheName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheName"></a>

```typescript
public readonly serverlessCacheName: string;
```

- *Type:* string

The name of an existing serverless cache. The snapshot is created from this cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#serverless_cache_name ElasticacheServerlessCacheSnapshot#serverless_cache_name}

---

##### `serverlessCacheSnapshotName`<sup>Required</sup> <a name="serverlessCacheSnapshotName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheSnapshotName"></a>

```typescript
public readonly serverlessCacheSnapshotName: string;
```

- *Type:* string

The name of the serverless cache snapshot.

Must be unique for the customer account. This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#serverless_cache_snapshot_name ElasticacheServerlessCacheSnapshot#serverless_cache_snapshot_name}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the snapshot.

Provide the key ARN: the resource returns the key ARN on read, so supplying a bare key ID or alias for this createOnly property may be reported as drift by CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#kms_key_id ElasticacheServerlessCacheSnapshot#kms_key_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ElasticacheServerlessCacheSnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]

A list of tags to be added to the serverless cache snapshot resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#tags ElasticacheServerlessCacheSnapshot#tags}

---

### ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration <a name="ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration.Initializer"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

const elasticacheServerlessCacheSnapshotServerlessCacheConfiguration: elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration = { ... }
```


### ElasticacheServerlessCacheSnapshotTags <a name="ElasticacheServerlessCacheSnapshotTags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.Initializer"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

const elasticacheServerlessCacheSnapshotTags: elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.key">key</a></code> | <code>string</code> | The key for the tag. May not be null. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.value">value</a></code> | <code>string</code> | The tag's value. May be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for the tag. May not be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#key ElasticacheServerlessCacheSnapshot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value. May be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#value ElasticacheServerlessCacheSnapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference <a name="ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

new elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.majorEngineVersion">majorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.serverlessCacheName">serverlessCacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration">ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.majorEngineVersion"></a>

```typescript
public readonly majorEngineVersion: string;
```

- *Type:* string

---

##### `serverlessCacheName`<sup>Required</sup> <a name="serverlessCacheName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.serverlessCacheName"></a>

```typescript
public readonly serverlessCacheName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration">ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration</a>

---


### ElasticacheServerlessCacheSnapshotTagsList <a name="ElasticacheServerlessCacheSnapshotTagsList" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

new elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.get"></a>

```typescript
public get(index: number): ElasticacheServerlessCacheSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheServerlessCacheSnapshotTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]

---


### ElasticacheServerlessCacheSnapshotTagsOutputReference <a name="ElasticacheServerlessCacheSnapshotTagsOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer"></a>

```typescript
import { elasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

new elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticacheServerlessCacheSnapshotTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>

---



